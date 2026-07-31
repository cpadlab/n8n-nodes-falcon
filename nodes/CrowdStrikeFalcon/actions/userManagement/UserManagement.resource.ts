import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const userManagementOperations: INodeProperties[] = [
	createOperationField('userManagement', [

			{ name: 'Aggregate Users V1', value: 'aggregateUsersV1', description: 'Get user aggregates as specified in body', action: 'Aggregate users V1' },
			{ name: 'Combined User Roles V1', value: 'combinedUserRolesV1', description: 'Get user grant(s) between user and customer V1', action: 'Combined user roles V1' },
			{ name: 'Combined User Roles V2', value: 'combinedUserRolesV2', description: 'Get user grant(s) between user and customer V2', action: 'Combined user roles V2' },
			{ name: 'Create User', value: 'createUser', description: 'Create a new user (Legacy)', action: 'Create user' },
			{ name: 'Create User V1', value: 'createUserV1', description: 'Create a new user V1', action: 'Create user V1' },
			{ name: 'Delete User', value: 'deleteUser', description: 'Delete a user permanently (Legacy)', action: 'Delete user' },
			{ name: 'Delete User V1', value: 'deleteUserV1', description: 'Delete a user permanently V1', action: 'Delete user V1' },
			{ name: 'Entities Roles GET V2', value: 'entitiesRolesGETV2', description: 'Get info about a role V2', action: 'Entities roles GET V2' },
			{ name: 'Entities Roles V1', value: 'entitiesRolesV1', description: 'Get info about a role V1', action: 'Entities roles V1' },
			{ name: 'Get Available Role IDs', value: 'getAvailableRoleIds', description: 'Show role IDs available in customer account', action: 'Get available role IDs' },
			{ name: 'Get Roles', value: 'getRoles', description: 'Get info about a role (Legacy)', action: 'Get roles' },
			{ name: 'Get User Role IDs', value: 'getUserRoleIds', description: 'Show role IDs assigned to a user', action: 'Get user role IDs' },
			{ name: 'Grant User Role IDs', value: 'grantUserRoleIds', description: 'Assign roles to a user', action: 'Grant user role IDs' },
			{ name: 'Queries Roles V1', value: 'queriesRolesV1', description: 'Show role IDs for all roles available in customer account V1', action: 'Queries roles V1' },
			{ name: 'Query User V1', value: 'queryUserV1', description: 'List user IDs for all users in customer account', action: 'Query user V1' },
			{ name: 'Retrieve Emails By CID', value: 'retrieveEmailsByCID', description: 'List usernames for all users in customer account', action: 'Retrieve emails by CID' },
			{ name: 'Retrieve User', value: 'retrieveUser', description: 'Get info about a user (Legacy)', action: 'Retrieve user' },
			{ name: 'Retrieve User UUID', value: 'retrieveUserUUID', description: 'Get user ID by username', action: 'Retrieve user UUID' },
			{ name: 'Retrieve User UUIDs By CID', value: 'retrieveUserUUIDsByCID', description: 'List user IDs for all users in customer account (Legacy)', action: 'Retrieve user UUIDs by CID' },
			{ name: 'Retrieve Users GET V1', value: 'retrieveUsersGETV1', description: 'Get info about users by UUIDs', action: 'Retrieve users GET V1' },
			{ name: 'Revoke User Role IDs', value: 'revokeUserRoleIds', description: 'Revoke roles from a user', action: 'Revoke user role IDs' },
			{ name: 'Update User', value: 'updateUser', description: 'Modify existing user name (Legacy)', action: 'Update user' },
			{ name: 'Update User V1', value: 'updateUserV1', description: 'Modify existing user name V1', action: 'Update user V1' },
			{ name: 'User Action V1', value: 'userActionV1', description: 'Apply actions (reset_2fa, reset_password) to users', action: 'User action V1' },
			{ name: 'User Roles Action V1', value: 'userRolesActionV1', description: 'Grant or revoke roles for a user against CID', action: 'User roles action V1' },
		
	], 'queryUserV1'),
];

export const userManagementFields: INodeProperties[] = [
	{
		displayName: 'User UUID',
		name: 'userUuid',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['userManagement'],
				operation: [
					'combinedUserRolesV1',
					'combinedUserRolesV2',
					'deleteUser',
					'deleteUserV1',
					'getUserRoleIds',
					'grantUserRoleIds',
					'queriesRolesV1',
					'revokeUserRoleIds',
					'updateUser',
					'updateUserV1',
				],
			},
		},
		default: '',
		required: true,
		description: 'User UUID string',
	},
	{
		displayName: 'CID',
		name: 'cid',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['userManagement'],
				operation: ['combinedUserRolesV1', 'combinedUserRolesV2', 'entitiesRolesGETV2', 'entitiesRolesV1', 'queriesRolesV1'],
			},
		},
		default: '',
		description: 'Customer ID string',
	},
	{
		displayName: 'Direct Only',
		name: 'directOnly',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['userManagement'],
				operation: ['combinedUserRolesV1', 'combinedUserRolesV2'],
			},
		},
		default: false,
		description: 'Whether to list direct grants only',
	},
	{
		displayName: 'Validate Only',
		name: 'validateOnly',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['userManagement'],
				operation: ['createUserV1'],
			},
		},
		default: false,
		description: 'Whether to perform validation without creating',
	},
	createIdsField('userManagement', ['entitiesRolesV1', 'getRoles', 'retrieveUser', 'revokeUserRoleIds']),
	{
		displayName: 'UIDs',
		name: 'uid',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['userManagement'],
				operation: ['retrieveUserUUID'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of usernames / emails',
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['userManagement'],
				operation: ['queriesRolesV1'],
			},
		},
		default: '',
		description: 'Action string for roles query',
	},
	createBodyJsonField('userManagement', ['aggregateUsersV1',
					'createUser',
					'createUserV1',
					'entitiesRolesGETV2',
					'grantUserRoleIds',
					'retrieveUsersGETV1',
					'updateUser',
					'updateUserV1',
					'userActionV1',
					'userRolesActionV1',]),
	...createStandardPaginationFields('userManagement', ['combinedUserRolesV1', 'combinedUserRolesV2', 'queryUserV1']),
];
