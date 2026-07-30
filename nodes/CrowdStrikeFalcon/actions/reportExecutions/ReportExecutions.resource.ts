import type { INodeProperties } from 'n8n-workflow';

export const reportExecutionsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['reportExecutions'],
			},
		},
		options: [
			{ name: 'Report Executions Download Get', value: 'reportExecutionsDownloadGet', description: 'Get report entity download', action: 'Report executions download get' },
			{ name: 'Report Executions Get', value: 'reportExecutionsGet', description: 'Retrieve report details for provided report IDs', action: 'Report executions get' },
			{ name: 'Report Executions Query', value: 'reportExecutionsQuery', description: 'Find all report execution IDs matching query with filter', action: 'Report executions query' },
			{ name: 'Report Executions Retry', value: 'reportExecutionsRetry', description: 'Retry report executions', action: 'Report executions retry' },
		],
		default: 'reportExecutionsQuery',
	},
];

export const reportExecutionsFields: INodeProperties[] = [
	{
		displayName: 'Report Execution ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['reportExecutions'],
				operation: ['reportExecutionsDownloadGet'],
			},
		},
		default: '',
		required: true,
		description: 'Report execution ID',
	},
	{
		displayName: 'Report Execution IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['reportExecutions'],
				operation: ['reportExecutionsGet'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of report execution IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['reportExecutions'],
				operation: ['reportExecutionsRetry'],
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
				resource: ['reportExecutions'],
				operation: ['reportExecutionsQuery'],
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
				resource: ['reportExecutions'],
				operation: ['reportExecutionsQuery'],
			},
		},
		default: '',
		description: 'Search query string',
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
				resource: ['reportExecutions'],
				operation: ['reportExecutionsQuery'],
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
				resource: ['reportExecutions'],
				operation: ['reportExecutionsQuery'],
			},
		},
		default: '',
		description: 'Starting index for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['reportExecutions'],
				operation: ['reportExecutionsQuery'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
