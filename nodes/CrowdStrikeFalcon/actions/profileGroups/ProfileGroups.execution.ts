import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'createGroupV1Mixin0' operation.
 */
async function handleCreateGroupV1Mixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new profile group. */
	return await fc.profileGroups.createGroupV1Mixin0(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteGroupsV1' operation.
 */
async function handleDeleteGroupsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes profile groups by IDs. */
	return await fc.profileGroups.deleteGroupsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getGroupUsersV1' operation.
 */
async function handleGetGroupUsersV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns information about a group's users in a profile group. */
	return await fc.profileGroups.getGroupUsersV1(parseJsonParam(c, i));
}

/**
 * Handles the 'getGroupsV1Mixin0' operation.
 */
async function handleGetGroupsV1Mixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns profile groups with details by IDs. */
	return await fc.profileGroups.getGroupsV1Mixin0(parseJsonParam(c, i));
}

/**
 * Handles the 'getUserGroupsV1' operation.
 */
async function handleGetUserGroupsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns information about a user's groups in a profile group. */
	return await fc.profileGroups.getUserGroupsV1(parseJsonParam(c, i));
}

/**
 * Handles the 'groupActionsV1Mixin0' operation.
 */
async function handleGroupActionsV1Mixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Perform actions on profile groups (add/remove roles, user groups, FGA objects). */
	const actionName = getStringParam(c, i, 'actionNameGroup', 'add_roles');
	return await fc.profileGroups.groupActionsV1Mixin0(actionName as any, parseJsonParam(c, i));
}

/**
 * Handles the 'groupUsersActionsV1Mixin0' operation.
 */
async function handleGroupUsersActionsV1Mixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Add or remove users from profile groups. */
	const actionName = getStringParam(c, i, 'actionNameUser', 'add_users');
	return await fc.profileGroups.groupUsersActionsV1Mixin0(actionName as any, parseJsonParam(c, i));
}

/**
 * Handles the 'queryGroupsV1Mixin0' operation.
 */
async function handleQueryGroupsV1Mixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns a list of profile group IDs available to the actor. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.profileGroups.queryGroupsV1Mixin0(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'updateGroupV1Mixin0' operation.
 */
async function handleUpdateGroupV1Mixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates an existing profile group's metadata. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.profileGroups.updateGroupV1Mixin0(id, parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Profile Groups operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeProfileGroups(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createGroupV1Mixin0': return await handleCreateGroupV1Mixin0(this, index, falconClient);
		case 'deleteGroupsV1': return await handleDeleteGroupsV1(this, index, falconClient);
		case 'getGroupUsersV1': return await handleGetGroupUsersV1(this, index, falconClient);
		case 'getGroupsV1Mixin0': return await handleGetGroupsV1Mixin0(this, index, falconClient);
		case 'getUserGroupsV1': return await handleGetUserGroupsV1(this, index, falconClient);
		case 'groupActionsV1Mixin0': return await handleGroupActionsV1Mixin0(this, index, falconClient);
		case 'groupUsersActionsV1Mixin0': return await handleGroupUsersActionsV1Mixin0(this, index, falconClient);
		case 'queryGroupsV1Mixin0': return await handleQueryGroupsV1Mixin0(this, index, falconClient);
		case 'updateGroupV1Mixin0': return await handleUpdateGroupV1Mixin0(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Profile Groups.`);
	}
}
