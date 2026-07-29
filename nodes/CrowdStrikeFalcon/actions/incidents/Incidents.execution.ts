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

/** Handles crowdScore */
async function handleCrowdScore(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query environment wide CrowdScore and return entity data. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.incidents.crowdScore(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles getBehaviors */
async function handleGetBehaviors(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get details on behaviors by providing behavior IDs in body. */
	return await fc.incidents.getBehaviors(parseJsonParam(c, i));
}

/** Handles getIncidents */
async function handleGetIncidents(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get details on incidents by providing incident IDs in body. */
	return await fc.incidents.getIncidents(parseJsonParam(c, i));
}

/** Handles performIncidentAction */
async function handlePerformIncidentAction(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Perform actions on one or more incidents. */
	const body = parseJsonParam(c, i);
	const updateDetects = c.getNodeParameter('updateDetects', i, false) as boolean;
	const overwriteDetects = c.getNodeParameter('overwriteDetects', i, false) as boolean;
	return await fc.incidents.performIncidentAction(body, updateDetects, overwriteDetects);
}

/** Handles queryBehaviors */
async function handleQueryBehaviors(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for behaviors by providing filter, sort, and paging. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.incidents.queryBehaviors(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles queryIncidents */
async function handleQueryIncidents(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for incidents by providing filter, sort, and paging. */
	const sort = getStringParam(c, i, 'sort', '') as any;
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.incidents.queryIncidents(sort || undefined, filter || undefined, offset || undefined, limit || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Incidents operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeIncidents(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'crowdScore': return await handleCrowdScore(this, index, falconClient);
		case 'getBehaviors': return await handleGetBehaviors(this, index, falconClient);
		case 'getIncidents': return await handleGetIncidents(this, index, falconClient);
		case 'performIncidentAction': return await handlePerformIncidentAction(this, index, falconClient);
		case 'queryBehaviors': return await handleQueryBehaviors(this, index, falconClient);
		case 'queryIncidents': return await handleQueryIncidents(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Incidents.`);
	}
}
