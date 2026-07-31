import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'addCIDGroupMembers' operation.
 */
async function handleAddCIDGroupMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Add new CID group member. */
	return await fc.mssp.addCIDGroupMembers(parseJsonParam(c, i));
}

/**
 * Handles the 'addRole' operation.
 */
async function handleAddRole(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create link between user group and CID group with roles. */
	return await fc.mssp.addRole(parseJsonParam(c, i));
}

/**
 * Handles the 'addUserGroupMembers' operation.
 */
async function handleAddUserGroupMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Add new user group member. */
	return await fc.mssp.addUserGroupMembers(parseJsonParam(c, i));
}

/**
 * Handles the 'createCIDGroups' operation.
 */
async function handleCreateCIDGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create new CID groups. */
	return await fc.mssp.createCIDGroups(parseJsonParam(c, i));
}

/**
 * Handles the 'createUserGroups' operation.
 */
async function handleCreateUserGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create new user groups. */
	return await fc.mssp.createUserGroups(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteCIDGroupMembers' operation.
 */
async function handleDeleteCIDGroupMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete CID group members (Deprecated). */
	return await fc.mssp.deleteCIDGroupMembers(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteCIDGroupMembersV2' operation.
 */
async function handleDeleteCIDGroupMembersV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete CID group members V2. */
	return await fc.mssp.deleteCIDGroupMembersV2(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteCIDGroups' operation.
 */
async function handleDeleteCIDGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete CID groups by ID. */
	return await fc.mssp.deleteCIDGroups(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'deleteUserGroupMembers' operation.
 */
async function handleDeleteUserGroupMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete user group members entry. */
	return await fc.mssp.deleteUserGroupMembers(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteUserGroups' operation.
 */
async function handleDeleteUserGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete user groups by ID. */
	return await fc.mssp.deleteUserGroups(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'deletedRoles' operation.
 */
async function handleDeletedRoles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete links or additional roles between user groups and CID groups. */
	return await fc.mssp.deletedRoles(parseJsonParam(c, i));
}

/**
 * Handles the 'getCIDGroupById' operation.
 */
async function handleGetCIDGroupById(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get CID groups by ID (Deprecated). */
	return await fc.mssp.getCIDGroupById(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getCIDGroupByIdV2' operation.
 */
async function handleGetCIDGroupByIdV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get CID Groups by ID V2. */
	return await fc.mssp.getCIDGroupByIdV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getCIDGroupMembersBy' operation.
 */
async function handleGetCIDGroupMembersBy(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get CID group members by CID group ID (Deprecated). */
	return await fc.mssp.getCIDGroupMembersBy(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getCIDGroupMembersByV2' operation.
 */
async function handleGetCIDGroupMembersByV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get CID group members by CID Group ID V2. */
	return await fc.mssp.getCIDGroupMembersByV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getChildren' operation.
 */
async function handleGetChildren(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get link to child customer by child CID(s). */
	return await fc.mssp.getChildren(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getChildrenV2' operation.
 */
async function handleGetChildrenV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get link to child customer by child CID(s) V2. */
	return await fc.mssp.getChildrenV2(parseJsonParam(c, i));
}

/**
 * Handles the 'getRolesByID' operation.
 */
async function handleGetRolesByID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get link between user group and CID group by ID. */
	return await fc.mssp.getRolesByID(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getUserGroupMembersByID' operation.
 */
async function handleGetUserGroupMembersByID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get user group members by user group ID (Deprecated). */
	return await fc.mssp.getUserGroupMembersByID(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getUserGroupMembersByIDV2' operation.
 */
async function handleGetUserGroupMembersByIDV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get user group members by user group ID V2. */
	return await fc.mssp.getUserGroupMembersByIDV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getUserGroupsByID' operation.
 */
async function handleGetUserGroupsByID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get user groups by ID (Deprecated). */
	return await fc.mssp.getUserGroupsByID(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getUserGroupsByIDV2' operation.
 */
async function handleGetUserGroupsByIDV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get user groups by ID V2. */
	return await fc.mssp.getUserGroupsByIDV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'queryCIDGroupMembers' operation.
 */
async function handleQueryCIDGroupMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query a CID groups members by associated CID. */
	const cid = getStringParam(c, i, 'cid', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.mssp.queryCIDGroupMembers(cid, sort as any || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryCIDGroups' operation.
 */
async function handleQueryCIDGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query CID groups. */
	const name = getStringParam(c, i, 'name', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.mssp.queryCIDGroups(name || undefined, sort as any || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryChildren' operation.
 */
async function handleQueryChildren(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query for customers linked as children. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.mssp.queryChildren(filter || undefined, sort as any || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryRoles' operation.
 */
async function handleQueryRoles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query links between user groups and CID groups. */
	const userGroupId = getStringParam(c, i, 'userGroupId', '');
	const cidGroupId = getStringParam(c, i, 'cidGroupId', '');
	const roleId = getStringParam(c, i, 'roleId', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.mssp.queryRoles(userGroupId || undefined, cidGroupId || undefined, roleId || undefined, sort as any || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryUserGroupMembers' operation.
 */
async function handleQueryUserGroupMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query user group member by user UUID. */
	const userUuid = getStringParam(c, i, 'userUuid', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.mssp.queryUserGroupMembers(userUuid, sort as any || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryUserGroups' operation.
 */
async function handleQueryUserGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query user groups. */
	const name = getStringParam(c, i, 'name', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.mssp.queryUserGroups(name || undefined, sort as any || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'updateCIDGroups' operation.
 */
async function handleUpdateCIDGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update existing CID groups. */
	return await fc.mssp.updateCIDGroups(parseJsonParam(c, i));
}

/**
 * Handles the 'updateUserGroups' operation.
 */
async function handleUpdateUserGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update existing user group(s). */
	return await fc.mssp.updateUserGroups(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon MSSP operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeMssp(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'addCIDGroupMembers': return await handleAddCIDGroupMembers(this, index, falconClient);
		case 'addRole': return await handleAddRole(this, index, falconClient);
		case 'addUserGroupMembers': return await handleAddUserGroupMembers(this, index, falconClient);
		case 'createCIDGroups': return await handleCreateCIDGroups(this, index, falconClient);
		case 'createUserGroups': return await handleCreateUserGroups(this, index, falconClient);
		case 'deleteCIDGroupMembers': return await handleDeleteCIDGroupMembers(this, index, falconClient);
		case 'deleteCIDGroupMembersV2': return await handleDeleteCIDGroupMembersV2(this, index, falconClient);
		case 'deleteCIDGroups': return await handleDeleteCIDGroups(this, index, falconClient);
		case 'deleteUserGroupMembers': return await handleDeleteUserGroupMembers(this, index, falconClient);
		case 'deleteUserGroups': return await handleDeleteUserGroups(this, index, falconClient);
		case 'deletedRoles': return await handleDeletedRoles(this, index, falconClient);
		case 'getCIDGroupById': return await handleGetCIDGroupById(this, index, falconClient);
		case 'getCIDGroupByIdV2': return await handleGetCIDGroupByIdV2(this, index, falconClient);
		case 'getCIDGroupMembersBy': return await handleGetCIDGroupMembersBy(this, index, falconClient);
		case 'getCIDGroupMembersByV2': return await handleGetCIDGroupMembersByV2(this, index, falconClient);
		case 'getChildren': return await handleGetChildren(this, index, falconClient);
		case 'getChildrenV2': return await handleGetChildrenV2(this, index, falconClient);
		case 'getRolesByID': return await handleGetRolesByID(this, index, falconClient);
		case 'getUserGroupMembersByID': return await handleGetUserGroupMembersByID(this, index, falconClient);
		case 'getUserGroupMembersByIDV2': return await handleGetUserGroupMembersByIDV2(this, index, falconClient);
		case 'getUserGroupsByID': return await handleGetUserGroupsByID(this, index, falconClient);
		case 'getUserGroupsByIDV2': return await handleGetUserGroupsByIDV2(this, index, falconClient);
		case 'queryCIDGroupMembers': return await handleQueryCIDGroupMembers(this, index, falconClient);
		case 'queryCIDGroups': return await handleQueryCIDGroups(this, index, falconClient);
		case 'queryChildren': return await handleQueryChildren(this, index, falconClient);
		case 'queryRoles': return await handleQueryRoles(this, index, falconClient);
		case 'queryUserGroupMembers': return await handleQueryUserGroupMembers(this, index, falconClient);
		case 'queryUserGroups': return await handleQueryUserGroups(this, index, falconClient);
		case 'updateCIDGroups': return await handleUpdateCIDGroups(this, index, falconClient);
		case 'updateUserGroups': return await handleUpdateUserGroups(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for MSSP.`);
	}
}
