import type { INodeProperties } from 'n8n-workflow';

export const eventSchemaOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['eventSchema'],
			},
		},
		options: [
			{ name: 'Fetch Combined Schema', value: 'fdrschemaCombinedEventGet', description: 'Fetch combined event schema', action: 'Fetch combined schema' },
			{ name: 'Fetch Event Schema by ID', value: 'fdrschemaEntitiesEventGet', description: 'Fetch event schema by ID', action: 'Fetch event schema by ID' },
			{ name: 'Get Event Query IDs', value: 'fdrschemaQueriesEventGet', description: 'Get list of event IDs given a particular query', action: 'Get event query IDs' },
		],
		default: 'fdrschemaCombinedEventGet',
	},
];

export const eventSchemaFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['eventSchema'],
				operation: ['fdrschemaEntitiesEventGet'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of event schema IDs',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['eventSchema'],
				operation: ['fdrschemaQueriesEventGet'],
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
				resource: ['eventSchema'],
				operation: ['fdrschemaQueriesEventGet'],
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
				resource: ['eventSchema'],
				operation: ['fdrschemaQueriesEventGet'],
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
				resource: ['eventSchema'],
				operation: ['fdrschemaQueriesEventGet'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
