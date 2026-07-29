import type { INodeProperties } from 'n8n-workflow';

export const cloudSnapshotsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cloudSnapshots'],
			},
		},
		options: [
			{ name: 'Create Deployment Entity', value: 'createDeploymentEntity', description: 'Launch a snapshot scan for a given cloud asset', action: 'Create deployment entity' },
			{ name: 'Get Credentials', value: 'getCredentialsMixin0Mixin60', description: 'Gets registry credentials', action: 'Get credentials' },
			{ name: 'Get Scan Report', value: 'getScanReport', description: 'Retrieve the scan report for an instance', action: 'Get scan report' },
			{ name: 'Read Deployments Combined', value: 'readDeploymentsCombined', description: 'Retrieve snapshot jobs matching search criteria', action: 'Read deployments combined' },
			{ name: 'Read Deployments Entities', value: 'readDeploymentsEntities', description: 'Retrieve snapshot jobs identified by provided IDs', action: 'Read deployments entities' },
			{ name: 'Register Cloud Account', value: 'register', description: 'Register customer cloud account for snapshot scanning', action: 'Register cloud account' },
		],
		default: 'readDeploymentsCombined',
	},
];

export const cloudSnapshotsFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudSnapshots'],
				operation: ['getScanReport', 'readDeploymentsEntities'],
			},
		},
		default: '',
		description: 'Comma-separated list of deployment or report IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['cloudSnapshots'],
				operation: ['createDeploymentEntity', 'register'],
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
				resource: ['cloudSnapshots'],
				operation: ['readDeploymentsCombined'],
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
				resource: ['cloudSnapshots'],
				operation: ['readDeploymentsCombined'],
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
				resource: ['cloudSnapshots'],
				operation: ['readDeploymentsCombined'],
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
				resource: ['cloudSnapshots'],
				operation: ['readDeploymentsCombined'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
