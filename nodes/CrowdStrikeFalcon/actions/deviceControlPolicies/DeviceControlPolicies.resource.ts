import type { INodeProperties } from 'n8n-workflow';

export const deviceControlPoliciesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['deviceControlPolicies'],
			},
		},
		options: [
			{ name: 'Create Policies (Deprecated)', value: 'createDeviceControlPolicies', description: 'Create Device Control Policies (deprecated)', action: 'Create device control policies' },
			{ name: 'Delete Policies', value: 'deleteDeviceControlPolicies', description: 'Delete Device Control Policies by IDs', action: 'Delete device control policies' },
			{ name: 'Get Default Policy (Deprecated)', value: 'getDefaultDeviceControlPolicies', description: 'Retrieve Default Device Control Policy configuration (deprecated)', action: 'Get default device control policies' },
			{ name: 'Get Policies by IDs (Deprecated)', value: 'getDeviceControlPolicies', description: 'Retrieve Device Control Policies by IDs (deprecated)', action: 'Get device control policies' },
			{ name: 'Perform Action on Policies', value: 'performDeviceControlPoliciesAction', description: 'Perform action on Device Control Policies', action: 'Perform device control policies action' },
			{ name: 'Query Combined Policies', value: 'queryCombinedDeviceControlPolicies', description: 'Search for Device Control Policies matching filter', action: 'Query combined device control policies' },
			{ name: 'Query Combined Policy Members', value: 'queryCombinedDeviceControlPolicyMembers', description: 'Search for members of a Device Control Policy', action: 'Query combined device control policy members' },
			{ name: 'Query Policy IDs', value: 'queryDeviceControlPolicies', description: 'Search for Device Control Policy IDs', action: 'Query device control policies' },
			{ name: 'Query Policy Member IDs', value: 'queryDeviceControlPolicyMembers', description: 'Search for member Agent IDs of a policy', action: 'Query device control policy members' },
			{ name: 'Set Policies Precedence', value: 'setDeviceControlPoliciesPrecedence', description: 'Sets precedence of Device Control Policies', action: 'Set device control policies precedence' },
			{ name: 'Update Default Policy (Deprecated)', value: 'updateDefaultDeviceControlPolicies', description: 'Update Default Device Control Policy configuration (deprecated)', action: 'Update default device control policies' },
			{ name: 'Update Policies (Deprecated)', value: 'updateDeviceControlPolicies', description: 'Update Device Control Policies (deprecated)', action: 'Update device control policies' },
		],
		default: 'queryCombinedDeviceControlPolicies',
	},
];

export const deviceControlPoliciesFields: INodeProperties[] = [
	{
		displayName: 'Policy ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['deviceControlPolicies'],
				operation: ['queryCombinedDeviceControlPolicyMembers', 'queryDeviceControlPolicyMembers'],
			},
		},
		default: '',
		description: 'Device Control Policy ID',
	},
	{
		displayName: 'Policy IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['deviceControlPolicies'],
				operation: ['deleteDeviceControlPolicies', 'getDeviceControlPolicies'],
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
				resource: ['deviceControlPolicies'],
				operation: ['performDeviceControlPoliciesAction'],
			},
		},
		options: [
			{ name: 'Add Host Group', value: 'add-host-group' },
			{ name: 'Add Rule Group', value: 'add-rule-group' },
			{ name: 'Disable', value: 'disable' },
			{ name: 'Enable', value: 'enable' },
			{ name: 'Remove Host Group', value: 'remove-host-group' },
			{ name: 'Remove Rule Group', value: 'remove-rule-group' },
		],
		default: 'enable',
		required: true,
		description: 'Action to perform',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['deviceControlPolicies'],
				operation: [
					'createDeviceControlPolicies',
					'performDeviceControlPoliciesAction',
					'setDeviceControlPoliciesPrecedence',
					'updateDefaultDeviceControlPolicies',
					'updateDeviceControlPolicies',
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
				resource: ['deviceControlPolicies'],
				operation: [
					'queryCombinedDeviceControlPolicies',
					'queryCombinedDeviceControlPolicyMembers',
					'queryDeviceControlPolicies',
					'queryDeviceControlPolicyMembers',
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
				resource: ['deviceControlPolicies'],
				operation: [
					'queryCombinedDeviceControlPolicies',
					'queryCombinedDeviceControlPolicyMembers',
					'queryDeviceControlPolicies',
					'queryDeviceControlPolicyMembers',
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
				resource: ['deviceControlPolicies'],
				operation: [
					'queryCombinedDeviceControlPolicies',
					'queryCombinedDeviceControlPolicyMembers',
					'queryDeviceControlPolicies',
					'queryDeviceControlPolicyMembers',
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
				resource: ['deviceControlPolicies'],
				operation: [
					'queryCombinedDeviceControlPolicies',
					'queryCombinedDeviceControlPolicyMembers',
					'queryDeviceControlPolicies',
					'queryDeviceControlPolicyMembers',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
