import type { INodeProperties } from 'n8n-workflow';

export const scheduledReportsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['scheduledReports'],
			},
		},
		options: [
			{ name: 'Execute', value: 'execute', description: 'Launch scheduled report executions for report IDs', action: 'Execute' },
			{ name: 'Query', value: 'query', description: 'Find all report IDs matching query with filter', action: 'Query' },
			{ name: 'Query By ID', value: 'queryById', description: 'Retrieve scheduled reports for provided report IDs', action: 'Query by ID' },
		],
		default: 'query',
	},
];

export const scheduledReportsFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['scheduledReports'],
				operation: ['queryById'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of report IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['scheduledReports'],
				operation: ['execute'],
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
				resource: ['scheduledReports'],
				operation: ['query'],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['scheduledReports'],
				operation: ['query'],
			},
		},
		default: '',
		description: 'Search string',
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
				resource: ['scheduledReports'],
				operation: ['query'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['scheduledReports'],
				operation: ['query'],
			},
		},
		default: '',
		description: 'Starting offset string for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['scheduledReports'],
				operation: ['query'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
