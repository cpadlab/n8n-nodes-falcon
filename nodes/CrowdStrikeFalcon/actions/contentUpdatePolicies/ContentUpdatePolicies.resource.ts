import type { INodeProperties } from 'n8n-workflow';

export const contentUpdatePoliciesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contentUpdatePolicies'],
			},
		},
		options: [
			{ name: 'Create Policies', value: 'createContentUpdatePolicies', description: 'Create Content Update Policies', action: 'Create content update policies' },
			{ name: 'Delete Policies', value: 'deleteContentUpdatePolicies', description: 'Delete Content Update Policies by IDs', action: 'Delete content update policies' },
			{ name: 'Get Policies by IDs', value: 'getContentUpdatePolicies', description: 'Retrieve Content Update Policies by IDs', action: 'Get content update policies' },
			{ name: 'Perform Action on Policies', value: 'performContentUpdatePoliciesAction', description: 'Perform specified action on Content Update Policies', action: 'Perform action on content update policies' },
			{ name: 'Query Combined Policies', value: 'queryCombinedContentUpdatePolicies', description: 'Search for Content Update Policies with FQL filter', action: 'Query combined content update policies' },
			{ name: 'Query Combined Policy Members', value: 'queryCombinedContentUpdatePolicyMembers', description: 'Search for members of a Content Update Policy', action: 'Query combined content update policy members' },
			{ name: 'Query Policy IDs', value: 'queryContentUpdatePolicies', description: 'Search for Content Update Policy IDs', action: 'Query content update policy IDs' },
			{ name: 'Query Policy Member IDs', value: 'queryContentUpdatePolicyMembers', description: 'Search for member Agent IDs of a policy', action: 'Query content update policy member IDs' },
			{ name: 'Query Pinnable Content Versions', value: 'queryPinnableContentVersions', description: 'Search for content versions available for pinning', action: 'Query pinnable content versions' },
			{ name: 'Set Policies Precedence', value: 'setContentUpdatePoliciesPrecedence', description: 'Sets precedence of Content Update Policies', action: 'Set content update policies precedence' },
			{ name: 'Update Policies', value: 'updateContentUpdatePolicies', description: 'Update Content Update Policies', action: 'Update content update policies' },
		],
		default: 'queryCombinedContentUpdatePolicies',
	},
];

export const contentUpdatePoliciesFields: INodeProperties[] = [
	{
		displayName: 'Policy ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contentUpdatePolicies'],
				operation: ['queryCombinedContentUpdatePolicyMembers', 'queryContentUpdatePolicyMembers'],
			},
		},
		default: '',
		description: 'Content Update Policy ID',
	},
	{
		displayName: 'Policy IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contentUpdatePolicies'],
				operation: ['deleteContentUpdatePolicies', 'getContentUpdatePolicies'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of policy IDs',
	},
	{
		displayName: 'Action Name',
		name: 'actionName',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['contentUpdatePolicies'],
				operation: ['performContentUpdatePoliciesAction'],
			},
		},
		options: [
			{ name: 'Add Host Group', value: 'add-host-group' },
			{ name: 'Disable', value: 'disable' },
			{ name: 'Enable', value: 'enable' },
			{ name: 'Override Allow', value: 'override-allow' },
			{ name: 'Override Pause', value: 'override-pause' },
			{ name: 'Override Revert', value: 'override-revert' },
			{ name: 'Remove Host Group', value: 'remove-host-group' },
			{ name: 'Remove Pinned Content Version', value: 'remove-pinned-content-version' },
			{ name: 'Set Pinned Content Version', value: 'set-pinned-content-version' },
		],
		default: 'enable',
		required: true,
		description: 'Action to perform',
	},
	{
		displayName: 'Category',
		name: 'category',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['contentUpdatePolicies'],
				operation: ['queryPinnableContentVersions'],
			},
		},
		options: [
			{ name: 'Rapid Response AL/BL Listing', value: 'rapid_response_al_bl_listing' },
			{ name: 'Sensor Operations', value: 'sensor_operations' },
			{ name: 'System Critical', value: 'system_critical' },
			{ name: 'Vulnerability Management', value: 'vulnerability_management' },
		],
		default: 'sensor_operations',
		required: true,
		description: 'Category for pinnable content versions',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['contentUpdatePolicies'],
				operation: [
					'createContentUpdatePolicies',
					'performContentUpdatePoliciesAction',
					'setContentUpdatePoliciesPrecedence',
					'updateContentUpdatePolicies',
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
				resource: ['contentUpdatePolicies'],
				operation: [
					'queryCombinedContentUpdatePolicies',
					'queryCombinedContentUpdatePolicyMembers',
					'queryContentUpdatePolicies',
					'queryContentUpdatePolicyMembers',
				],
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
				resource: ['contentUpdatePolicies'],
				operation: [
					'queryCombinedContentUpdatePolicies',
					'queryCombinedContentUpdatePolicyMembers',
					'queryContentUpdatePolicies',
					'queryContentUpdatePolicyMembers',
				],
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
				resource: ['contentUpdatePolicies'],
				operation: [
					'queryCombinedContentUpdatePolicies',
					'queryCombinedContentUpdatePolicyMembers',
					'queryContentUpdatePolicies',
					'queryContentUpdatePolicyMembers',
				],
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
				resource: ['contentUpdatePolicies'],
				operation: [
					'queryCombinedContentUpdatePolicies',
					'queryCombinedContentUpdatePolicyMembers',
					'queryContentUpdatePolicies',
					'queryContentUpdatePolicyMembers',
					'queryPinnableContentVersions',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
