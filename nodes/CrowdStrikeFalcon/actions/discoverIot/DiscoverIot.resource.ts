import type { INodeProperties } from 'n8n-workflow';

export const discoverIotOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['discoverIot'],
			},
		},
		options: [
			{ name: 'Get IoT Hosts', value: 'getIotHosts', description: 'Get details on IoT assets by providing IDs', action: 'Get IoT hosts' },
			{ name: 'Query IoT Hosts', value: 'queryIotHosts', description: 'Search for IoT assets returning matching IDs', action: 'Query IoT hosts' },
			{ name: 'Query IoT Hosts V2', value: 'queryIotHostsV2', description: 'Search for IoT assets returning matching IDs V2', action: 'Query IoT hosts v2' },
		],
		default: 'queryIotHosts',
	},
];

export const discoverIotFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['discoverIot'],
				operation: ['getIotHosts'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IoT asset IDs',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['discoverIot'],
				operation: ['queryIotHosts', 'queryIotHostsV2'],
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
				resource: ['discoverIot'],
				operation: ['queryIotHosts', 'queryIotHostsV2'],
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
				resource: ['discoverIot'],
				operation: ['queryIotHosts'],
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
				resource: ['discoverIot'],
				operation: ['queryIotHosts', 'queryIotHostsV2'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
