import type { INodeProperties } from 'n8n-workflow';

export const deviceContentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['deviceContent'],
			},
		},
		options: [
			{ name: 'Entities States V1', value: 'entitiesStatesV1', description: 'Retrieve host content state for IDs', action: 'Entities states v1' },
			{ name: 'Queries States V1', value: 'queriesStatesV1', description: 'Query for the content state of the host', action: 'Queries states v1' },
		],
		default: 'queriesStatesV1',
	},
];

export const deviceContentFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['deviceContent'],
				operation: ['entitiesStatesV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of host IDs (1 to 100)',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['deviceContent'],
				operation: ['queriesStatesV1'],
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
				resource: ['deviceContent'],
				operation: ['queriesStatesV1'],
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
				resource: ['deviceContent'],
				operation: ['queriesStatesV1'],
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
				resource: ['deviceContent'],
				operation: ['queriesStatesV1'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
