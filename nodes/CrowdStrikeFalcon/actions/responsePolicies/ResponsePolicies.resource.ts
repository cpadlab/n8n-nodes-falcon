import type { INodeProperties } from 'n8n-workflow';

export const responsePoliciesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['responsePolicies'],
			},
		},
		options: [
			{ name: 'Create RT Response Policies', value: 'createRTResponsePolicies', description: 'Create Response Policies by specifying details about policy to create', action: 'Create RT response policies' },
			{ name: 'Delete RT Response Policies', value: 'deleteRTResponsePolicies', description: 'Delete a set of Response Policies by specifying their IDs', action: 'Delete RT response policies' },
			{ name: 'Get RT Response Policies', value: 'getRTResponsePolicies', description: 'Retrieve a set of Response Policies by specifying their IDs', action: 'Get RT response policies' },
			{ name: 'Perform RT Response Policies Action', value: 'performRTResponsePoliciesAction', description: 'Perform specified action on Response Policies', action: 'Perform RT response policies action' },
			{ name: 'Query Combined RT Response Policies', value: 'queryCombinedRTResponsePolicies', description: 'Search for Response Policies in environment matching filter criteria', action: 'Query combined RT response policies' },
			{ name: 'Query Combined RT Response Policy Members', value: 'queryCombinedRTResponsePolicyMembers', description: 'Search for members of a Response policy returning host details', action: 'Query combined RT response policy members' },
			{ name: 'Query RT Response Policies', value: 'queryRTResponsePolicies', description: 'Search for Response Policies returning IDs matching filter criteria', action: 'Query RT response policies' },
			{ name: 'Query RT Response Policy Members', value: 'queryRTResponsePolicyMembers', description: 'Search for members of a Response policy returning Agent IDs', action: 'Query RT response policy members' },
			{ name: 'Set RT Response Policies Precedence', value: 'setRTResponsePoliciesPrecedence', description: 'Sets precedence of Response Policies based on order of IDs', action: 'Set RT response policies precedence' },
			{ name: 'Update RT Response Policies', value: 'updateRTResponsePolicies', description: 'Update Response Policies by specifying ID and details to update', action: 'Update RT response policies' },
		],
		default: 'queryRTResponsePolicies',
	},
];

export const responsePoliciesFields: INodeProperties[] = [
	{
		displayName: 'Policy ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['responsePolicies'],
				operation: ['queryCombinedRTResponsePolicyMembers', 'queryRTResponsePolicyMembers'],
			},
		},
		default: '',
		description: 'Response Policy ID',
	},
	{
		displayName: 'Policy IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['responsePolicies'],
				operation: ['deleteRTResponsePolicies', 'getRTResponsePolicies'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Response Policy IDs',
	},
	{
		displayName: 'Action Name',
		name: 'actionName',
		type: 'options',
		options: [
			{ name: 'Add Host Group', value: 'add-host-group' },
			{ name: 'Add Rule Group', value: 'add-rule-group' },
			{ name: 'Disable', value: 'disable' },
			{ name: 'Enable', value: 'enable' },
			{ name: 'Remove Host Group', value: 'remove-host-group' },
			{ name: 'Remove Rule Group', value: 'remove-rule-group' },
		],
		displayOptions: {
			show: {
				resource: ['responsePolicies'],
				operation: ['performRTResponsePoliciesAction'],
			},
		},
		default: 'enable',
		required: true,
		description: 'Action to perform on response policy',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['responsePolicies'],
				operation: [
					'createRTResponsePolicies',
					'performRTResponsePoliciesAction',
					'setRTResponsePoliciesPrecedence',
					'updateRTResponsePolicies',
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
				resource: ['responsePolicies'],
				operation: [
					'queryCombinedRTResponsePolicies',
					'queryCombinedRTResponsePolicyMembers',
					'queryRTResponsePolicies',
					'queryRTResponsePolicyMembers',
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
				resource: ['responsePolicies'],
				operation: [
					'queryCombinedRTResponsePolicies',
					'queryCombinedRTResponsePolicyMembers',
					'queryRTResponsePolicies',
					'queryRTResponsePolicyMembers',
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
				resource: ['responsePolicies'],
				operation: [
					'queryCombinedRTResponsePolicies',
					'queryCombinedRTResponsePolicyMembers',
					'queryRTResponsePolicies',
					'queryRTResponsePolicyMembers',
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
				resource: ['responsePolicies'],
				operation: [
					'queryCombinedRTResponsePolicies',
					'queryCombinedRTResponsePolicyMembers',
					'queryRTResponsePolicies',
					'queryRTResponsePolicyMembers',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
