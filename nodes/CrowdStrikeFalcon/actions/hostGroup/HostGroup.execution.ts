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

/** Handles createHostGroups */
async function handleCreateHostGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Host Groups by specifying details about the group to create. */
	return await fc.hostGroup.createHostGroups(parseJsonParam(c, i));
}

/** Handles deleteHostGroups */
async function handleDeleteHostGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a set of Host Groups by specifying their IDs. */
	return await fc.hostGroup.deleteHostGroups(parseArrayParam(c, i, 'ids'));
}

/** Handles getHostGroups */
async function handleGetHostGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve a set of Host Groups by specifying their IDs. */
	return await fc.hostGroup.getHostGroups(parseArrayParam(c, i, 'ids'));
}

/** Handles performGroupAction */
async function handlePerformGroupAction(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Perform specified action on specified Host Groups. */
	const actionName = getStringParam(c, i, 'actionName', '') as any;
	const disableHostnameCheck = c.getNodeParameter('disableHostnameCheck', i, false) as boolean;
	const body = parseJsonParam(c, i);
	return await fc.hostGroup.performGroupAction(actionName, body, disableHostnameCheck);
}

/** Handles queryCombinedGroupMembers */
async function handleQueryCombinedGroupMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for members of a Host Group returning host details. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.hostGroup.queryCombinedGroupMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles queryCombinedHostGroups */
async function handleQueryCombinedHostGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Host Groups returning matching Host Groups. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.hostGroup.queryCombinedHostGroups(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles queryGroupMembers */
async function handleQueryGroupMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for members of a Host Group returning Agent IDs. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.hostGroup.queryGroupMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles queryHostGroups */
async function handleQueryHostGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Host Groups returning Host Group IDs. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.hostGroup.queryHostGroups(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles updateHostGroups */
async function handleUpdateHostGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Host Groups by specifying ID and details. */
	return await fc.hostGroup.updateHostGroups(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Host Group operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeHostGroup(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createHostGroups': return await handleCreateHostGroups(this, index, falconClient);
		case 'deleteHostGroups': return await handleDeleteHostGroups(this, index, falconClient);
		case 'getHostGroups': return await handleGetHostGroups(this, index, falconClient);
		case 'performGroupAction': return await handlePerformGroupAction(this, index, falconClient);
		case 'queryCombinedGroupMembers': return await handleQueryCombinedGroupMembers(this, index, falconClient);
		case 'queryCombinedHostGroups': return await handleQueryCombinedHostGroups(this, index, falconClient);
		case 'queryGroupMembers': return await handleQueryGroupMembers(this, index, falconClient);
		case 'queryHostGroups': return await handleQueryHostGroups(this, index, falconClient);
		case 'updateHostGroups': return await handleUpdateHostGroups(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Host Group.`);
	}
}
