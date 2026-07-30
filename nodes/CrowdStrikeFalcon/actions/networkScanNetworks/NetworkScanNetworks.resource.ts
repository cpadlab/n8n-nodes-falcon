import type { INodeProperties } from 'n8n-workflow';

export const networkScanNetworksOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['networkScanNetworks'],
			},
		},
		options: [
			{ name: 'Aggregate Networks', value: 'aggregateNetworks', description: 'Returns networks aggregations', action: 'Aggregate networks' },
			{ name: 'Create Networks', value: 'createNetworks', description: 'Create networks using provided specifications', action: 'Create networks' },
			{ name: 'Delete Networks', value: 'deleteNetworks', description: 'Delete networks by their IDs', action: 'Delete networks' },
			{ name: 'Get Networks', value: 'getNetworks', description: 'Get networks by their IDs', action: 'Get networks' },
			{ name: 'Query Networks', value: 'queryNetworks', description: 'Get networks IDs by filter', action: 'Query networks' },
			{ name: 'Update Networks', value: 'updateNetworks', description: 'Update networks using provided specifications', action: 'Update networks' },
		],
		default: 'queryNetworks',
	},
];

export const networkScanNetworksFields: INodeProperties[] = [
	{
		displayName: 'Network IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanNetworks'],
				operation: ['deleteNetworks', 'getNetworks'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Network IDs',
	},
	{
		displayName: 'X-CS-USERUUID',
		name: 'xCSUSERUUID',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanNetworks'],
				operation: [
					'aggregateNetworks',
					'createNetworks',
					'deleteNetworks',
					'getNetworks',
					'queryNetworks',
					'updateNetworks',
				],
			},
		},
		default: '',
		description: 'User UUID header override',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['networkScanNetworks'],
				operation: ['aggregateNetworks', 'createNetworks', 'updateNetworks'],
			},
		},
		default: '',
		required: true,
		description: 'JSON array request payload',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanNetworks'],
				operation: ['queryNetworks'],
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
				resource: ['networkScanNetworks'],
				operation: ['queryNetworks'],
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
				resource: ['networkScanNetworks'],
				operation: ['queryNetworks'],
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
				resource: ['networkScanNetworks'],
				operation: ['queryNetworks'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
