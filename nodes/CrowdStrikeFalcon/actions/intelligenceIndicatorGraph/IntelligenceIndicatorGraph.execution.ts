import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function parseJsonParam(context: IExecuteFunctions, index: number, paramName = 'bodyJson'): any {
	const rawJson = context.getNodeParameter(paramName, index, '') as string;
	if (!rawJson) return {};
	try {
		return typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
	} catch (e) {
		throw new Error(`Invalid JSON in ${paramName}: ${(e as Error).message}`);
	}
}

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/** Handles lookupIndicators */
async function handleLookupIndicators(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Look up intelligence data for multiple indicators. */
	return await fc.intelligenceIndicatorGraph.lookupIndicators(parseJsonParam(c, i));
}

/** Handles searchIndicators */
async function handleSearchIndicators(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search indicators based on FQL filter or request body. */
	const body = parseJsonParam(c, i);
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.intelligenceIndicatorGraph.searchIndicators(body, sort || undefined, filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Intelligence Indicator Graph operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeIntelligenceIndicatorGraph(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'lookupIndicators': return await handleLookupIndicators(this, index, falconClient);
		case 'searchIndicators': return await handleSearchIndicators(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Intelligence Indicator Graph.`);
	}
}
