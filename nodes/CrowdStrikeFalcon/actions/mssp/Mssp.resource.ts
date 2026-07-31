import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const msspOperations: INodeProperties[] = [
	createOperationField('mssp', [

			{ name: 'Add CID Group Members', value: 'addCIDGroupMembers', description: 'Add new CID group member', action: 'Add CID group members' },
			{ name: 'Add Role', value: 'addRole', description: 'Create link between user group and CID group with roles', action: 'Add role' },
			{ name: 'Add User Group Members', value: 'addUserGroupMembers', description: 'Add new user group member', action: 'Add user group members' },
			{ name: 'Create CID Groups', value: 'createCIDGroups', description: 'Create new CID groups', action: 'Create CID groups' },
			{ name: 'Create User Groups', value: 'createUserGroups', description: 'Create new user groups', action: 'Create user groups' },
			{ name: 'Delete CID Group Members', value: 'deleteCIDGroupMembers', description: 'Delete CID group members (Deprecated)', action: 'Delete CID group members' },
			{ name: 'Delete CID Group Members V2', value: 'deleteCIDGroupMembersV2', description: 'Delete CID group members V2', action: 'Delete CID group members V2' },
			{ name: 'Delete CID Groups', value: 'deleteCIDGroups', description: 'Delete CID groups by ID', action: 'Delete CID groups' },
			{ name: 'Delete User Group Members', value: 'deleteUserGroupMembers', description: 'Delete user group members entry', action: 'Delete user group members' },
			{ name: 'Delete User Groups', value: 'deleteUserGroups', description: 'Delete user groups by ID', action: 'Delete user groups' },
			{ name: 'Deleted Roles', value: 'deletedRoles', description: 'Delete links or additional roles between user groups and CID groups', action: 'Deleted roles' },
			{ name: 'Get CID Group by ID', value: 'getCIDGroupById', description: 'Get CID groups by ID (Deprecated)', action: 'Get CID group by ID' },
			{ name: 'Get CID Group by ID V2', value: 'getCIDGroupByIdV2', description: 'Get CID Groups by ID V2', action: 'Get CID group by ID V2' },
			{ name: 'Get CID Group Members By', value: 'getCIDGroupMembersBy', description: 'Get CID group members by CID group ID (Deprecated)', action: 'Get CID group members by' },
			{ name: 'Get CID Group Members By V2', value: 'getCIDGroupMembersByV2', description: 'Get CID group members by CID Group ID V2', action: 'Get CID group members by V2' },
			{ name: 'Get Children', value: 'getChildren', description: 'Get link to child customer by child CID(s)', action: 'Get children' },
			{ name: 'Get Children V2', value: 'getChildrenV2', description: 'Get link to child customer by child CID(s) V2', action: 'Get children V2' },
			{ name: 'Get Roles by ID', value: 'getRolesByID', description: 'Get link between user group and CID group by ID', action: 'Get roles by ID' },
			{ name: 'Get User Group Members by ID', value: 'getUserGroupMembersByID', description: 'Get user group members by user group ID (Deprecated)', action: 'Get user group members by ID' },
			{ name: 'Get User Group Members by ID V2', value: 'getUserGroupMembersByIDV2', description: 'Get user group members by user group ID V2', action: 'Get user group members by ID V2' },
			{ name: 'Get User Groups by ID', value: 'getUserGroupsByID', description: 'Get user groups by ID (Deprecated)', action: 'Get user groups by ID' },
			{ name: 'Get User Groups by ID V2', value: 'getUserGroupsByIDV2', description: 'Get user groups by ID V2', action: 'Get user groups by ID V2' },
			{ name: 'Query CID Group Members', value: 'queryCIDGroupMembers', description: 'Query a CID groups members by associated CID', action: 'Query CID group members' },
			{ name: 'Query CID Groups', value: 'queryCIDGroups', description: 'Query CID groups', action: 'Query CID groups' },
			{ name: 'Query Children', value: 'queryChildren', description: 'Query for customers linked as children', action: 'Query children' },
			{ name: 'Query Roles', value: 'queryRoles', description: 'Query links between user groups and CID groups', action: 'Query roles' },
			{ name: 'Query User Group Members', value: 'queryUserGroupMembers', description: 'Query user group member by user UUID', action: 'Query user group members' },
			{ name: 'Query User Groups', value: 'queryUserGroups', description: 'Query user groups', action: 'Query user groups' },
			{ name: 'Update CID Groups', value: 'updateCIDGroups', description: 'Update existing CID groups', action: 'Update CID groups' },
			{ name: 'Update User Groups', value: 'updateUserGroups', description: 'Update existing user group(s)', action: 'Update user groups' },
		
	], 'queryCIDGroups'),
];

export const msspFields: INodeProperties[] = [
	createIdsField('mssp', ['deleteCIDGroups',
					'deleteUserGroups',
					'getCIDGroupById',
					'getCIDGroupByIdV2',
					'getCIDGroupMembersBy',
					'getCIDGroupMembersByV2',
					'getChildren',
					'getRolesByID',
					'getUserGroupMembersByID',
					'getUserGroupMembersByIDV2',
					'getUserGroupsByID',
					'getUserGroupsByIDV2',]),
	{
		displayName: 'CID',
		name: 'cid',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mssp'],
				operation: ['queryCIDGroupMembers'],
			},
		},
		default: '',
		required: true,
		description: 'Customer ID (CID)',
	},
	{
		displayName: 'User UUID',
		name: 'userUuid',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mssp'],
				operation: ['queryUserGroupMembers'],
			},
		},
		default: '',
		required: true,
		description: 'User UUID string',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mssp'],
				operation: ['queryCIDGroups', 'queryUserGroups'],
			},
		},
		default: '',
		description: 'Filter by name',
	},
	{
		displayName: 'User Group ID',
		name: 'userGroupId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mssp'],
				operation: ['queryRoles'],
			},
		},
		default: '',
		description: 'User Group ID filter',
	},
	{
		displayName: 'CID Group ID',
		name: 'cidGroupId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mssp'],
				operation: ['queryRoles'],
			},
		},
		default: '',
		description: 'CID Group ID filter',
	},
	{
		displayName: 'Role ID',
		name: 'roleId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mssp'],
				operation: ['queryRoles'],
			},
		},
		default: '',
		description: 'Role ID filter',
	},
	createBodyJsonField('mssp', ['addCIDGroupMembers',
					'addRole',
					'addUserGroupMembers',
					'createCIDGroups',
					'createUserGroups',
					'deleteCIDGroupMembers',
					'deleteCIDGroupMembersV2',
					'deleteUserGroupMembers',
					'deletedRoles',
					'getChildrenV2',
					'updateCIDGroups',
					'updateUserGroups',]),
	...createStandardPaginationFields('mssp', ['queryChildren']),
];
