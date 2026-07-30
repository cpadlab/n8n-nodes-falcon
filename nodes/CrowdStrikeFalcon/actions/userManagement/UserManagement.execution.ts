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
 * Handles the 'aggregateUsersV1' operation.
 */
async function handleAggregateUsersV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get host aggregates as specified via json in request body. */
	return await fc.userManagement.aggregateUsersV1(parseJsonParam(c, i));
}

/**
 * Handles the 'combinedUserRolesV1' operation.
 */
async function handleCombinedUserRolesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get User Grant(s). */
	const userUuid = getStringParam(c, i, 'userUuid', '');
	const cid = getStringParam(c, i, 'cid', '');
	const directOnly = c.getNodeParameter('directOnly', i, false) as boolean;
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.userManagement.combinedUserRolesV1(userUuid, cid || undefined, directOnly || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'combinedUserRolesV2' operation.
 */
async function handleCombinedUserRolesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get User Grant(s). */
	const userUuid = getStringParam(c, i, 'userUuid', '');
	const cid = getStringParam(c, i, 'cid', '');
	const directOnly = c.getNodeParameter('directOnly', i, false) as boolean;
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.userManagement.combinedUserRolesV2(userUuid, cid || undefined, directOnly || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'createUser' operation.
 */
async function handleCreateUser(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create a new user (Legacy). */
	return await fc.userManagement.createUser(parseJsonParam(c, i));
}

/**
 * Handles the 'createUserV1' operation.
 */
async function handleCreateUserV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create a new user V1. */
	const validateOnly = c.getNodeParameter('validateOnly', i, false) as boolean;
	return await fc.userManagement.createUserV1(parseJsonParam(c, i), validateOnly || undefined);
}

/**
 * Handles the 'deleteUser' operation.
 */
async function handleDeleteUser(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a user permanently (Legacy). */
	const userUuid = getStringParam(c, i, 'userUuid', '');
	return await fc.userManagement.deleteUser(userUuid);
}

/**
 * Handles the 'deleteUserV1' operation.
 */
async function handleDeleteUserV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a user permanently V1. */
	const userUuid = getStringParam(c, i, 'userUuid', '');
	return await fc.userManagement.deleteUserV1(userUuid);
}

/**
 * Handles the 'entitiesRolesGETV2' operation.
 */
async function handleEntitiesRolesGETV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get info about a role V2. */
	const cid = getStringParam(c, i, 'cid', '');
	return await fc.userManagement.entitiesRolesGETV2(parseJsonParam(c, i), cid || undefined);
}

/**
 * Handles the 'entitiesRolesV1' operation.
 */
async function handleEntitiesRolesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get info about a role V1. */
	const cid = getStringParam(c, i, 'cid', '');
	return await fc.userManagement.entitiesRolesV1(parseArrayParam(c, i, 'ids'), cid || undefined);
}

/**
 * Handles the 'getAvailableRoleIds' operation.
 */
async function handleGetAvailableRoleIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Show role IDs for all roles available in your customer account. */
	return await fc.userManagement.getAvailableRoleIds();
}

/**
 * Handles the 'getRoles' operation.
 */
async function handleGetRoles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get info about a role. */
	return await fc.userManagement.getRoles(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getUserRoleIds' operation.
 */
async function handleGetUserRoleIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Show role IDs of roles assigned to a user. */
	const userUuid = getStringParam(c, i, 'userUuid', '');
	return await fc.userManagement.getUserRoleIds(userUuid);
}

/**
 * Handles the 'grantUserRoleIds' operation.
 */
async function handleGrantUserRoleIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Assign one or more roles to a user. */
	const userUuid = getStringParam(c, i, 'userUuid', '');
	return await fc.userManagement.grantUserRoleIds(userUuid, parseJsonParam(c, i));
}

/**
 * Handles the 'queriesRolesV1' operation.
 */
async function handleQueriesRolesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Show role IDs for all roles available in your customer account. */
	const cid = getStringParam(c, i, 'cid', '');
	const userUuid = getStringParam(c, i, 'userUuid', '');
	const action = getStringParam(c, i, 'action', '');
	return await fc.userManagement.queriesRolesV1(cid || undefined, userUuid || undefined, action || undefined);
}

/**
 * Handles the 'queryUserV1' operation.
 */
async function handleQueryUserV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* List user IDs for all users in your customer account. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.userManagement.queryUserV1(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'retrieveEmailsByCID' operation.
 */
async function handleRetrieveEmailsByCID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* List the usernames for all users in your customer account. */
	return await fc.userManagement.retrieveEmailsByCID();
}

/**
 * Handles the 'retrieveUser' operation.
 */
async function handleRetrieveUser(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get info about a user. */
	return await fc.userManagement.retrieveUser(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'retrieveUserUUID' operation.
 */
async function handleRetrieveUserUUID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a user's ID by providing a username. */
	return await fc.userManagement.retrieveUserUUID(parseArrayParam(c, i, 'uid'));
}

/**
 * Handles the 'retrieveUserUUIDsByCID' operation.
 */
async function handleRetrieveUserUUIDsByCID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* List user IDs for all users in your customer account. */
	return await fc.userManagement.retrieveUserUUIDsByCID();
}

/**
 * Handles the 'retrieveUsersGETV1' operation.
 */
async function handleRetrieveUsersGETV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get info about users including their name, UID and CID. */
	return await fc.userManagement.retrieveUsersGETV1(parseJsonParam(c, i));
}

/**
 * Handles the 'revokeUserRoleIds' operation.
 */
async function handleRevokeUserRoleIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Revoke one or more roles from a user. */
	const userUuid = getStringParam(c, i, 'userUuid', '');
	return await fc.userManagement.revokeUserRoleIds(userUuid, parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'updateUser' operation.
 */
async function handleUpdateUser(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Modify an existing user's first or last name (Legacy). */
	const userUuid = getStringParam(c, i, 'userUuid', '');
	return await fc.userManagement.updateUser(userUuid, parseJsonParam(c, i));
}

/**
 * Handles the 'updateUserV1' operation.
 */
async function handleUpdateUserV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Modify an existing user's first or last name. */
	const userUuid = getStringParam(c, i, 'userUuid', '');
	return await fc.userManagement.updateUserV1(userUuid, parseJsonParam(c, i));
}

/**
 * Handles the 'userActionV1' operation.
 */
async function handleUserActionV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Apply actions to one or more User. */
	return await fc.userManagement.userActionV1(parseJsonParam(c, i));
}

/**
 * Handles the 'userRolesActionV1' operation.
 */
async function handleUserRolesActionV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Grant or Revoke one or more role(s) to a user against a CID. */
	return await fc.userManagement.userRolesActionV1(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon User Management operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeUserManagement(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateUsersV1': return await handleAggregateUsersV1(this, index, falconClient);
		case 'combinedUserRolesV1': return await handleCombinedUserRolesV1(this, index, falconClient);
		case 'combinedUserRolesV2': return await handleCombinedUserRolesV2(this, index, falconClient);
		case 'createUser': return await handleCreateUser(this, index, falconClient);
		case 'createUserV1': return await handleCreateUserV1(this, index, falconClient);
		case 'deleteUser': return await handleDeleteUser(this, index, falconClient);
		case 'deleteUserV1': return await handleDeleteUserV1(this, index, falconClient);
		case 'entitiesRolesGETV2': return await handleEntitiesRolesGETV2(this, index, falconClient);
		case 'entitiesRolesV1': return await handleEntitiesRolesV1(this, index, falconClient);
		case 'getAvailableRoleIds': return await handleGetAvailableRoleIds(this, index, falconClient);
		case 'getRoles': return await handleGetRoles(this, index, falconClient);
		case 'getUserRoleIds': return await handleGetUserRoleIds(this, index, falconClient);
		case 'grantUserRoleIds': return await handleGrantUserRoleIds(this, index, falconClient);
		case 'queriesRolesV1': return await handleQueriesRolesV1(this, index, falconClient);
		case 'queryUserV1': return await handleQueryUserV1(this, index, falconClient);
		case 'retrieveEmailsByCID': return await handleRetrieveEmailsByCID(this, index, falconClient);
		case 'retrieveUser': return await handleRetrieveUser(this, index, falconClient);
		case 'retrieveUserUUID': return await handleRetrieveUserUUID(this, index, falconClient);
		case 'retrieveUserUUIDsByCID': return await handleRetrieveUserUUIDsByCID(this, index, falconClient);
		case 'retrieveUsersGETV1': return await handleRetrieveUsersGETV1(this, index, falconClient);
		case 'revokeUserRoleIds': return await handleRevokeUserRoleIds(this, index, falconClient);
		case 'updateUser': return await handleUpdateUser(this, index, falconClient);
		case 'updateUserV1': return await handleUpdateUserV1(this, index, falconClient);
		case 'userActionV1': return await handleUserActionV1(this, index, falconClient);
		case 'userRolesActionV1': return await handleUserRolesActionV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for User Management.`);
	}
}
