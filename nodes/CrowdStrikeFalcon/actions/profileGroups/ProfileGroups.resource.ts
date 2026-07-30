import type { INodeProperties } from 'n8n-workflow';

export const profileGroupsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['profileGroups'],
			},
		},
		options: [
			{ name: 'Create Group V1', value: 'createGroupV1Mixin0', description: 'Creates a new profile group', action: 'Create group V1' },
			{ name: 'Delete Groups V1', value: 'deleteGroupsV1', description: 'Deletes profile groups by IDs', action: 'Delete groups V1' },
			{ name: 'Get Group Users V1', value: 'getGroupUsersV1', description: 'Returns information about a group\'s users in a profile group', action: 'Get group users V1' },
			{ name: 'Get Groups V1', value: 'getGroupsV1Mixin0', description: 'Returns profile groups with details by IDs', action: 'Get groups V1' },
			{ name: 'Get User Groups V1', value: 'getUserGroupsV1', description: 'Returns information about a user\'s groups in a profile group', action: 'Get user groups V1' },
			{ name: 'Group Actions V1', value: 'groupActionsV1Mixin0', description: 'Perform actions on profile groups (roles, user groups, FGA objects)', action: 'Group actions V1' },
			{ name: 'Group Users Actions V1', value: 'groupUsersActionsV1Mixin0', description: 'Add or remove users from profile groups', action: 'Group users actions V1' },
			{ name: 'Query Groups V1', value: 'queryGroupsV1Mixin0', description: 'Returns list of profile group IDs available to actor', action: 'Query groups V1' },
			{ name: 'Update Group V1', value: 'updateGroupV1Mixin0', description: 'Updates existing profile group metadata', action: 'Update group V1' },
		],
		default: 'queryGroupsV1Mixin0',
	},
];

export const profileGroupsFields: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['profileGroups'],
				operation: ['updateGroupV1Mixin0'],
			},
		},
		default: '',
		required: true,
		description: 'Profile Group ID',
	},
	{
		displayName: 'Group IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['profileGroups'],
				operation: ['deleteGroupsV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Profile Group IDs',
	},
	{
		displayName: 'Group Action Name',
		name: 'actionNameGroup',
		type: 'options',
		options: [
			{ name: 'Add Roles', value: 'add_roles' },
			{ name: 'Remove Roles', value: 'remove_roles' },
			{ name: 'Add User Groups', value: 'add_user_groups' },
			{ name: 'Remove User Groups', value: 'remove_user_groups' },
			{ name: 'Add FGA Objects', value: 'add_fga_objects' },
			{ name: 'Remove FGA Objects', value: 'remove_fga_objects' },
		],
		displayOptions: {
			show: {
				resource: ['profileGroups'],
				operation: ['groupActionsV1Mixin0'],
			},
		},
		default: 'add_roles',
		required: true,
		description: 'Action to perform on profile groups',
	},
	{
		displayName: 'Group User Action Name',
		name: 'actionNameUser',
		type: 'options',
		options: [
			{ name: 'Add Users', value: 'add_users' },
			{ name: 'Remove Users', value: 'remove_users' },
		],
		displayOptions: {
			show: {
				resource: ['profileGroups'],
				operation: ['groupUsersActionsV1Mixin0'],
			},
		},
		default: 'add_users',
		required: true,
		description: 'User action to perform on profile groups',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['profileGroups'],
				operation: [
					'createGroupV1Mixin0',
					'getGroupUsersV1',
					'getGroupsV1Mixin0',
					'getUserGroupsV1',
					'groupActionsV1Mixin0',
					'groupUsersActionsV1Mixin0',
					'updateGroupV1Mixin0',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['profileGroups'],
				operation: ['queryGroupsV1Mixin0'],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		displayOptions: {
			show: {
				resource: ['profileGroups'],
				operation: ['queryGroupsV1Mixin0'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		typeOptions: {
			minValue: 0,
		},
		displayOptions: {
			show: {
				resource: ['profileGroups'],
				operation: ['queryGroupsV1Mixin0'],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['profileGroups'],
				operation: ['queryGroupsV1Mixin0'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
