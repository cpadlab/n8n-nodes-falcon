import type { INodeProperties } from 'n8n-workflow';

export const fieldSchemaOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['fieldSchema'],
			},
		},
		options: [
			{ name: 'Fetch Field Schema by ID', value: 'fdrschemaEntitiesFieldGet', description: 'Fetch field schema by ID', action: 'Fetch field schema by ID' },
			{ name: 'Get Field Query IDs', value: 'fdrschemaQueriesFieldGet', description: 'Get list of field IDs given a particular query', action: 'Get field query IDs' },
		],
		default: 'fdrschemaQueriesFieldGet',
	},
];

export const fieldSchemaFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['fieldSchema'],
				operation: ['fdrschemaEntitiesFieldGet'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of field schema IDs',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['fieldSchema'],
				operation: ['fdrschemaQueriesFieldGet'],
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
				resource: ['fieldSchema'],
				operation: ['fdrschemaQueriesFieldGet'],
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
				resource: ['fieldSchema'],
				operation: ['fdrschemaQueriesFieldGet'],
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
				resource: ['fieldSchema'],
				operation: ['fdrschemaQueriesFieldGet'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
