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
 * Handles the 'aggregateAlerts' operation.
 * Retrieves aggregate values for EPP alerts based on provided filter criteria.
 */
async function handleAggregateAlerts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const body = parseJsonParam(c, i);
	return await fc.falconCompleteDashboard.aggregateAlerts(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateAllowList' operation.
 * Retrieves aggregate values for allowlist tickets based on matched filter criteria.
 */
async function handleAggregateAllowList(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const body = parseJsonParam(c, i);
	return await fc.falconCompleteDashboard.aggregateAllowList(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateBlockList' operation.
 * Retrieves aggregate values for blocklist tickets based on matched filter criteria.
 */
async function handleAggregateBlockList(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const body = parseJsonParam(c, i);
	return await fc.falconCompleteDashboard.aggregateBlockList(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateDeviceCountCollection' operation.
 * Retrieves aggregate host and device count metrics based on matched filter criteria.
 */
async function handleAggregateDeviceCountCollection(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const body = parseJsonParam(c, i);
	return await fc.falconCompleteDashboard.aggregateDeviceCountCollection(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateEscalations' operation.
 * Retrieves aggregate values for escalation tickets based on matched filter criteria.
 */
async function handleAggregateEscalations(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const body = parseJsonParam(c, i);
	return await fc.falconCompleteDashboard.aggregateEscalations(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregatePreventionPolicy' operation.
 * Retrieves aggregate values for prevention policies based on matched filter criteria.
 */
async function handleAggregatePreventionPolicy(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const body = parseJsonParam(c, i);
	return await fc.falconCompleteDashboard.aggregatePreventionPolicy(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateRemediations' operation.
 * Retrieves aggregate values for remediation tickets based on matched filter criteria.
 */
async function handleAggregateRemediations(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const body = parseJsonParam(c, i);
	return await fc.falconCompleteDashboard.aggregateRemediations(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateSensorUpdatePolicy' operation.
 * Retrieves aggregate values for sensor update policies.
 */
async function handleAggregateSensorUpdatePolicy(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const body = parseJsonParam(c, i);
	return await fc.falconCompleteDashboard.aggregateSensorUpdatePolicy(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateSupportIssues' operation.
 * Retrieves aggregate values for support issue tickets based on matched filter criteria.
 */
async function handleAggregateSupportIssues(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const body = parseJsonParam(c, i);
	return await fc.falconCompleteDashboard.aggregateSupportIssues(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateTotalDeviceCounts' operation.
 * Retrieves aggregate total count of hosts and devices based on matched filter criteria.
 */
async function handleAggregateTotalDeviceCounts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const body = parseJsonParam(c, i);
	return await fc.falconCompleteDashboard.aggregateTotalDeviceCounts(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'getDeviceCountCollectionQueriesByFilter' operation.
 * Retrieves device count collection IDs matching filter criteria with scrolling.
 */
async function handleGetDeviceCountCollectionQueriesByFilter(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.falconCompleteDashboard.getDeviceCountCollectionQueriesByFilter(limit || undefined, sort || undefined, filter || undefined, offset || undefined);
}

/**
 * Handles the 'queryAlertIdsByFilter' operation.
 * Retrieves EPP alert IDs matching filter criteria with scrolling enabled.
 */
async function handleQueryAlertIdsByFilter(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.falconCompleteDashboard.queryAlertIdsByFilter(limit || undefined, sort || undefined, filter || undefined, offset || undefined);
}

/**
 * Handles the 'queryAlertIdsByFilterV2' operation.
 * Retrieves EPP, IDP, and NGSIEM alert IDs matching filter criteria with scrolling enabled V2.
 */
async function handleQueryAlertIdsByFilterV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.falconCompleteDashboard.queryAlertIdsByFilterV2(limit || undefined, sort || undefined, filter || undefined, offset || undefined);
}

/**
 * Handles the 'queryAllowListFilter' operation.
 * Retrieves allowlist tickets matching filter criteria with scrolling enabled.
 */
async function handleQueryAllowListFilter(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.falconCompleteDashboard.queryAllowListFilter(limit || undefined, sort || undefined, filter || undefined, offset || undefined);
}

/**
 * Handles the 'queryBlockListFilter' operation.
 * Retrieves blocklist tickets matching filter criteria with scrolling enabled.
 */
async function handleQueryBlockListFilter(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.falconCompleteDashboard.queryBlockListFilter(limit || undefined, sort || undefined, filter || undefined, offset || undefined);
}

/**
 * Handles the 'queryEscalationsFilter' operation.
 * Retrieves escalation tickets matching filter criteria with scrolling enabled.
 */
async function handleQueryEscalationsFilter(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.falconCompleteDashboard.queryEscalationsFilter(limit || undefined, sort || undefined, filter || undefined, offset || undefined);
}

/**
 * Handles the 'queryRemediationsFilter' operation.
 * Retrieves remediation tickets matching filter criteria with scrolling enabled.
 */
async function handleQueryRemediationsFilter(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.falconCompleteDashboard.queryRemediationsFilter(limit || undefined, sort || undefined, filter || undefined, offset || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Complete Dashboard operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeFalconCompleteDashboard(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateAlerts': return await handleAggregateAlerts(this, index, falconClient);
		case 'aggregateAllowList': return await handleAggregateAllowList(this, index, falconClient);
		case 'aggregateBlockList': return await handleAggregateBlockList(this, index, falconClient);
		case 'aggregateDeviceCountCollection': return await handleAggregateDeviceCountCollection(this, index, falconClient);
		case 'aggregateEscalations': return await handleAggregateEscalations(this, index, falconClient);
		case 'aggregatePreventionPolicy': return await handleAggregatePreventionPolicy(this, index, falconClient);
		case 'aggregateRemediations': return await handleAggregateRemediations(this, index, falconClient);
		case 'aggregateSensorUpdatePolicy': return await handleAggregateSensorUpdatePolicy(this, index, falconClient);
		case 'aggregateSupportIssues': return await handleAggregateSupportIssues(this, index, falconClient);
		case 'aggregateTotalDeviceCounts': return await handleAggregateTotalDeviceCounts(this, index, falconClient);
		case 'getDeviceCountCollectionQueriesByFilter': return await handleGetDeviceCountCollectionQueriesByFilter(this, index, falconClient);
		case 'queryAlertIdsByFilter': return await handleQueryAlertIdsByFilter(this, index, falconClient);
		case 'queryAlertIdsByFilterV2': return await handleQueryAlertIdsByFilterV2(this, index, falconClient);
		case 'queryAllowListFilter': return await handleQueryAllowListFilter(this, index, falconClient);
		case 'queryBlockListFilter': return await handleQueryBlockListFilter(this, index, falconClient);
		case 'queryEscalationsFilter': return await handleQueryEscalationsFilter(this, index, falconClient);
		case 'queryRemediationsFilter': return await handleQueryRemediationsFilter(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Falcon Complete Dashboard.`);
	}
}
