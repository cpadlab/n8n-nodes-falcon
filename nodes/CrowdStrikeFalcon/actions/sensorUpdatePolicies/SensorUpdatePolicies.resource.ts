import type { INodeProperties } from 'n8n-workflow';

export const sensorUpdatePoliciesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sensorUpdatePolicies'],
			},
		},
		options: [
			{ name: 'Create Sensor Update Policies', value: 'createSensorUpdatePolicies', description: 'Create Sensor Update Policies', action: 'Create sensor update policies' },
			{ name: 'Create Sensor Update Policies V2', value: 'createSensorUpdatePoliciesV2', description: 'Create Sensor Update Policies with uninstall protection', action: 'Create sensor update policies V2' },
			{ name: 'Delete Sensor Update Policies', value: 'deleteSensorUpdatePolicies', description: 'Delete Sensor Update Policies by IDs', action: 'Delete sensor update policies' },
			{ name: 'Get Sensor Update Policies', value: 'getSensorUpdatePolicies', description: 'Retrieve Sensor Update Policies by IDs', action: 'Get sensor update policies' },
			{ name: 'Get Sensor Update Policies V2', value: 'getSensorUpdatePoliciesV2', description: 'Retrieve Sensor Update Policies with uninstall protection by IDs', action: 'Get sensor update policies V2' },
			{ name: 'Perform Sensor Update Policies Action', value: 'performSensorUpdatePoliciesAction', description: 'Perform action on Sensor Update Policies', action: 'Perform sensor update policies action' },
			{ name: 'Query Combined Sensor Update Builds', value: 'queryCombinedSensorUpdateBuilds', description: 'Retrieve available builds for policies', action: 'Query combined sensor update builds' },
			{ name: 'Query Combined Sensor Update Kernels', value: 'queryCombinedSensorUpdateKernels', description: 'Retrieve kernel compatibility info', action: 'Query combined sensor update kernels' },
			{ name: 'Query Combined Sensor Update Policies', value: 'queryCombinedSensorUpdatePolicies', description: 'Search policies returning full entities', action: 'Query combined sensor update policies' },
			{ name: 'Query Combined Sensor Update Policies V2', value: 'queryCombinedSensorUpdatePoliciesV2', description: 'Search policies with uninstall protection returning full entities', action: 'Query combined sensor update policies V2' },
			{ name: 'Query Combined Sensor Update Policy Members', value: 'queryCombinedSensorUpdatePolicyMembers', description: 'Search members of a policy returning host details', action: 'Query combined sensor update policy members' },
			{ name: 'Query Sensor Update Kernels Distinct', value: 'querySensorUpdateKernelsDistinct', description: 'Retrieve distinct kernel compatibility info', action: 'Query sensor update kernels distinct' },
			{ name: 'Query Sensor Update Policies', value: 'querySensorUpdatePolicies', description: 'Search policy IDs matching criteria', action: 'Query sensor update policies' },
			{ name: 'Query Sensor Update Policy Members', value: 'querySensorUpdatePolicyMembers', description: 'Search member Agent IDs of a policy', action: 'Query sensor update policy members' },
			{ name: 'Reveal Uninstall Token', value: 'revealUninstallToken', description: 'Reveals an uninstall token for a specific device', action: 'Reveal uninstall token' },
			{ name: 'Set Sensor Update Policies Precedence', value: 'setSensorUpdatePoliciesPrecedence', description: 'Sets precedence of Sensor Update Policies', action: 'Set sensor update policies precedence' },
			{ name: 'Update Sensor Update Policies', value: 'updateSensorUpdatePolicies', description: 'Update Sensor Update Policies', action: 'Update sensor update policies' },
			{ name: 'Update Sensor Update Policies V2', value: 'updateSensorUpdatePoliciesV2', description: 'Update Sensor Update Policies with uninstall protection', action: 'Update sensor update policies V2' },
		],
		default: 'querySensorUpdatePolicies',
	},
];

export const sensorUpdatePoliciesFields: INodeProperties[] = [
	{
		displayName: 'Policy ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sensorUpdatePolicies'],
				operation: ['queryCombinedSensorUpdatePolicyMembers', 'querySensorUpdatePolicyMembers'],
			},
		},
		default: '',
		description: 'Sensor update policy ID string',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sensorUpdatePolicies'],
				operation: [
					'deleteSensorUpdatePolicies',
					'getSensorUpdatePolicies',
					'getSensorUpdatePoliciesV2',
				],
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
				resource: ['sensorUpdatePolicies'],
				operation: ['performSensorUpdatePoliciesAction'],
			},
		},
		default: 'enable',
		required: true,
		description: 'Action name to perform',
	},
	{
		displayName: 'Platform',
		name: 'platform',
		type: 'options',
		options: [
			{ name: 'Windows', value: 'windows' },
			{ name: 'Mac', value: 'mac' },
			{ name: 'Linux', value: 'linux' },
			{ name: 'Linux ARM64', value: 'linuxarm64' },
			{ name: 'ZLinux', value: 'zlinux' },
		],
		displayOptions: {
			show: {
				resource: ['sensorUpdatePolicies'],
				operation: ['queryCombinedSensorUpdateBuilds'],
			},
		},
		default: 'windows',
		description: 'Target operating system platform',
	},
	{
		displayName: 'Distinct Field',
		name: 'distinctField',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sensorUpdatePolicies'],
				operation: ['querySensorUpdateKernelsDistinct'],
			},
		},
		default: '',
		required: true,
		description: 'Distinct field string for kernel query',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['sensorUpdatePolicies'],
				operation: [
					'createSensorUpdatePolicies',
					'createSensorUpdatePoliciesV2',
					'performSensorUpdatePoliciesAction',
					'revealUninstallToken',
					'setSensorUpdatePoliciesPrecedence',
					'updateSensorUpdatePolicies',
					'updateSensorUpdatePoliciesV2',
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
				resource: ['sensorUpdatePolicies'],
				operation: [
					'queryCombinedSensorUpdateKernels',
					'queryCombinedSensorUpdatePolicies',
					'queryCombinedSensorUpdatePoliciesV2',
					'queryCombinedSensorUpdatePolicyMembers',
					'querySensorUpdateKernelsDistinct',
					'querySensorUpdatePolicies',
					'querySensorUpdatePolicyMembers',
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
				resource: ['sensorUpdatePolicies'],
				operation: [
					'queryCombinedSensorUpdateKernels',
					'queryCombinedSensorUpdatePolicies',
					'queryCombinedSensorUpdatePoliciesV2',
					'queryCombinedSensorUpdatePolicyMembers',
					'querySensorUpdateKernelsDistinct',
					'querySensorUpdatePolicies',
					'querySensorUpdatePolicyMembers',
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
				resource: ['sensorUpdatePolicies'],
				operation: [
					'queryCombinedSensorUpdateKernels',
					'queryCombinedSensorUpdatePolicies',
					'queryCombinedSensorUpdatePoliciesV2',
					'queryCombinedSensorUpdatePolicyMembers',
					'querySensorUpdateKernelsDistinct',
					'querySensorUpdatePolicies',
					'querySensorUpdatePolicyMembers',
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
				resource: ['sensorUpdatePolicies'],
				operation: [
					'queryCombinedSensorUpdatePolicies',
					'queryCombinedSensorUpdatePoliciesV2',
					'queryCombinedSensorUpdatePolicyMembers',
					'querySensorUpdatePolicies',
					'querySensorUpdatePolicyMembers',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
