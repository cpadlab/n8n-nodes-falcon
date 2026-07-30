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

function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
	const str = (context.getNodeParameter(paramName, index, '') as string) || '';
	return str.split(',').map((id) => id.trim()).filter(Boolean);
}

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/**
 * Handles the 'combinedDevicesByFilter' operation.
 */
async function handleCombinedDevicesByFilter(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for hosts returning full device records. */
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.hosts.combinedDevicesByFilter(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'combinedHiddenDevicesByFilter' operation.
 */
async function handleCombinedHiddenDevicesByFilter(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for hidden hosts returning full device records. */
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.hosts.combinedHiddenDevicesByFilter(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'devicesActionsDeleteV1' operation.
 */
async function handleDevicesActionsDeleteV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Permanently delete hosts from the system. */
	return await fc.hosts.devicesActionsDeleteV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesPerformAction' operation.
 */
async function handleEntitiesPerformAction(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Performs specified action on provided group IDs. */
	const actionName = getStringParam(c, i, 'actionNameEntities', '') as any;
	const body = parseJsonParam(c, i);
	const disableHostnameCheck = c.getNodeParameter('disableHostnameCheck', i, false) as boolean;
	return await fc.hosts.entitiesPerformAction(parseArrayParam(c, i, 'ids'), actionName, body, disableHostnameCheck);
}

/**
 * Handles the 'getDeviceDetailsV2' operation.
 */
async function handleGetDeviceDetailsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get details on one or more hosts by host IDs. */
	return await fc.hosts.getDeviceDetailsV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getOnlineStateV1' operation.
 */
async function handleGetOnlineStateV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get online status for one or more hosts by unique ID. */
	return await fc.hosts.getOnlineStateV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'performActionV2' operation.
 */
async function handlePerformActionV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Take various actions on hosts. */
	const actionName = getStringParam(c, i, 'actionName', '');
	const body = parseJsonParam(c, i);
	return await fc.hosts.performActionV2(actionName, body);
}

/**
 * Handles the 'postDeviceDetailsV2' operation.
 */
async function handlePostDeviceDetailsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get details on one or more hosts by host IDs in POST body. */
	return await fc.hosts.postDeviceDetailsV2(parseJsonParam(c, i));
}

/**
 * Handles the 'queryDeviceLoginHistory' operation.
 */
async function handleQueryDeviceLoginHistory(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve details about recent login sessions for devices. */
	return await fc.hosts.queryDeviceLoginHistory(parseJsonParam(c, i));
}

/**
 * Handles the 'queryDeviceLoginHistoryV2' operation.
 */
async function handleQueryDeviceLoginHistoryV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve interactive login sessions powered by Host Timeline. */
	const body = parseJsonParam(c, i);
	const limit = c.getNodeParameter('limit', i, 10) as number;
	return await fc.hosts.queryDeviceLoginHistoryV2(body, limit || undefined);
}

/**
 * Handles the 'queryDevicesByFilter' operation.
 */
async function handleQueryDevicesByFilter(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for hosts in your environment by FQL filter. */
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? Number.parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.hosts.queryDevicesByFilter(offset, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'queryDevicesByFilterScroll' operation.
 */
async function handleQueryDevicesByFilterScroll(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for hosts with continuous scroll pagination. */
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.hosts.queryDevicesByFilterScroll(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'queryGetNetworkAddressHistoryV1' operation.
 */
async function handleQueryGetNetworkAddressHistoryV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve history of IP and MAC addresses of devices. */
	return await fc.hosts.queryGetNetworkAddressHistoryV1(parseJsonParam(c, i));
}

/**
 * Handles the 'queryHiddenDevices' operation.
 */
async function handleQueryHiddenDevices(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve hidden hosts matching filter criteria. */
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? Number.parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.hosts.queryHiddenDevices(offset, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'updateDeviceTags' operation.
 */
async function handleUpdateDeviceTags(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Append or remove Falcon Grouping Tags on hosts. */
	return await fc.hosts.updateDeviceTags(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Hosts operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeHosts(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'combinedDevicesByFilter': return await handleCombinedDevicesByFilter(this, index, falconClient);
		case 'combinedHiddenDevicesByFilter': return await handleCombinedHiddenDevicesByFilter(this, index, falconClient);
		case 'devicesActionsDeleteV1': return await handleDevicesActionsDeleteV1(this, index, falconClient);
		case 'entitiesPerformAction': return await handleEntitiesPerformAction(this, index, falconClient);
		case 'getDeviceDetailsV2': return await handleGetDeviceDetailsV2(this, index, falconClient);
		case 'getOnlineStateV1': return await handleGetOnlineStateV1(this, index, falconClient);
		case 'performActionV2': return await handlePerformActionV2(this, index, falconClient);
		case 'postDeviceDetailsV2': return await handlePostDeviceDetailsV2(this, index, falconClient);
		case 'queryDeviceLoginHistory': return await handleQueryDeviceLoginHistory(this, index, falconClient);
		case 'queryDeviceLoginHistoryV2': return await handleQueryDeviceLoginHistoryV2(this, index, falconClient);
		case 'queryDevicesByFilter': return await handleQueryDevicesByFilter(this, index, falconClient);
		case 'queryDevicesByFilterScroll': return await handleQueryDevicesByFilterScroll(this, index, falconClient);
		case 'queryGetNetworkAddressHistoryV1': return await handleQueryGetNetworkAddressHistoryV1(this, index, falconClient);
		case 'queryHiddenDevices': return await handleQueryHiddenDevices(this, index, falconClient);
		case 'updateDeviceTags': return await handleUpdateDeviceTags(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Hosts.`);
	}
}
