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
 * Handles the 'getAggregateDetects' operation.
 */
async function handleGetAggregateDetects(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets aggregate detects (deprecated). */
	const body = parseJsonParam(c, i);
	const bodyArray = Array.isArray(body) ? body : [body];
	return await fc.detects.getAggregateDetects(bodyArray);
}

/**
 * Handles the 'getDetectSummaries' operation.
 */
async function handleGetDetectSummaries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets detect summaries (deprecated). */
	return await fc.detects.getDetectSummaries(parseJsonParam(c, i));
}

/**
 * Handles the 'queryDetects' operation.
 */
async function handleQueryDetects(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries detects (deprecated). */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.detects.queryDetects(offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'updateDetectsByIdsV2' operation.
 */
async function handleUpdateDetectsByIdsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates detects by IDs (deprecated). */
	return await fc.detects.updateDetectsByIdsV2(parseJsonParam(c, i));
}

/** Main execution handler for Detects operations. */
export async function executeDetects(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getAggregateDetects': return await handleGetAggregateDetects(this, index, falconClient);
		case 'getDetectSummaries': return await handleGetDetectSummaries(this, index, falconClient);
		case 'queryDetects': return await handleQueryDetects(this, index, falconClient);
		case 'updateDetectsByIdsV2': return await handleUpdateDetectsByIdsV2(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Detects.`);
	}
}
