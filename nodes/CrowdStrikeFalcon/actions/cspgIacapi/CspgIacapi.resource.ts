import type { INodeProperties } from 'n8n-workflow';

export const cspgIacapiOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cspgIacapi'],
			},
		},
		options: [
			{ name: 'Combined Detections', value: 'combinedDetections', description: 'Search IaC Detections using FQL query', action: 'Combined detections' },
			{ name: 'Get Credentials', value: 'getCredentialsMixin0', description: 'Gets the registry credentials', action: 'Get credentials' },
		],
		default: 'combinedDetections',
	},
];

export const cspgIacapiFields: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cspgIacapi'],
				operation: ['combinedDetections'],
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
				resource: ['cspgIacapi'],
				operation: ['combinedDetections'],
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
				resource: ['cspgIacapi'],
				operation: ['combinedDetections'],
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
				resource: ['cspgIacapi'],
				operation: ['combinedDetections'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
