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

/**
 * Handles the 'getEventsBody' operation.
 */
async function handleGetEventsBody(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get event body for the provided event ID. */
	const id = getStringParam(c, i, 'id', '');
	const authorization = getStringParam(c, i, 'authorization', '');
	return await fc.tailoredIntelligence.getEventsBody(id, authorization || undefined);
}

/**
 * Handles the 'getEventsEntities' operation.
 */
async function handleGetEventsEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get events entities for specified ids. */
	const authorization = getStringParam(c, i, 'authorization', '');
	return await fc.tailoredIntelligence.getEventsEntities(parseJsonParam(c, i), authorization || undefined);
}

/**
 * Handles the 'getRulesEntities' operation.
 */
async function handleGetRulesEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get rules entities for specified ids. */
	const authorization = getStringParam(c, i, 'authorization', '');
	return await fc.tailoredIntelligence.getRulesEntities(parseJsonParam(c, i), authorization || undefined);
}

/**
 * Handles the 'queryEvents' operation.
 */
async function handleQueryEvents(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get events ids that match the provided filter criteria. */
	const authorization = getStringParam(c, i, 'authorization', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.tailoredIntelligence.queryEvents(authorization || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'queryRules' operation.
 */
async function handleQueryRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get rules ids that match the provided filter criteria. */
	const authorization = getStringParam(c, i, 'authorization', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.tailoredIntelligence.queryRules(authorization || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Tailored Intelligence operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeTailoredIntelligence(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getEventsBody': return await handleGetEventsBody(this, index, falconClient);
		case 'getEventsEntities': return await handleGetEventsEntities(this, index, falconClient);
		case 'getRulesEntities': return await handleGetRulesEntities(this, index, falconClient);
		case 'queryEvents': return await handleQueryEvents(this, index, falconClient);
		case 'queryRules': return await handleQueryRules(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Tailored Intelligence.`);
	}
}
