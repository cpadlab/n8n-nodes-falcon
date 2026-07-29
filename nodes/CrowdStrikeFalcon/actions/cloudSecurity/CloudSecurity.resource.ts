import type { INodeProperties } from 'n8n-workflow';

export const cloudSecurityOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cloudSecurity'],
			},
		},
		options: [
			{ name: 'Combined Cloud Risks', value: 'combinedCloudRisks', description: 'Gets cloud risks with full details based on filters and sort criteria', action: 'Get combined cloud risks' },
			{ name: 'Create Cloud Group', value: 'createCloudGroupExternal', description: 'Create a Cloud Group', action: 'Create cloud group' },
			{ name: 'Delete Cloud Groups', value: 'deleteCloudGroupsExternal', description: 'Delete Cloud Groups in batch', action: 'Delete cloud groups' },
			{ name: 'List Cloud Group IDs', value: 'listCloudGroupIDsExternal', description: 'Query Cloud Groups and returns IDs', action: 'List cloud group IDs' },
			{ name: 'List Cloud Groups by ID', value: 'listCloudGroupsByIDExternal', description: 'List Cloud Groups By ID', action: 'List cloud groups by ID' },
			{ name: 'List Cloud Groups', value: 'listCloudGroupsExternal', description: 'Query Cloud Groups and returns entities', action: 'List cloud groups' },
			{ name: 'Update Cloud Group', value: 'updateCloudGroupExternal', description: 'Update Cloud Group', action: 'Update cloud group' },
		],
		default: 'combinedCloudRisks',
	},
];

export const cloudSecurityFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                   IDs                                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Group IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudSecurity'],
				operation: ['deleteCloudGroupsExternal', 'listCloudGroupsByIDExternal'],
			},
		},
		default: '',
		description: 'Comma-separated list of Cloud Group IDs',
	},

	/* -------------------------------------------------------------------------- */
	/*                                Body JSON                                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['cloudSecurity'],
				operation: ['createCloudGroupExternal', 'updateCloudGroupExternal'],
			},
		},
		default: '',
		required: true,
		description: 'JSON body payload for Cloud Group operation',
	},

	/* -------------------------------------------------------------------------- */
	/*                            Pagination & Filters                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudSecurity'],
				operation: ['combinedCloudRisks', 'listCloudGroupIDsExternal', 'listCloudGroupsExternal'],
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
				resource: ['cloudSecurity'],
				operation: ['combinedCloudRisks', 'listCloudGroupIDsExternal', 'listCloudGroupsExternal'],
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
				resource: ['cloudSecurity'],
				operation: ['combinedCloudRisks', 'listCloudGroupIDsExternal', 'listCloudGroupsExternal'],
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
				resource: ['cloudSecurity'],
				operation: ['combinedCloudRisks', 'listCloudGroupIDsExternal', 'listCloudGroupsExternal'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
