import type { INodeProperties } from 'n8n-workflow';

export const detectsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['detects'],
			},
		},
		options: [
			{ name: 'Get Aggregate Detects (Deprecated)', value: 'getAggregateDetects', description: 'Get aggregate detects (deprecated)', action: 'Get aggregate detects' },
			{ name: 'Get Detect Summaries (Deprecated)', value: 'getDetectSummaries', description: 'Get detect summaries by IDs (deprecated)', action: 'Get detect summaries' },
			{ name: 'Query Detects (Deprecated)', value: 'queryDetects', description: 'Query detects matching filter criteria (deprecated)', action: 'Query detects' },
			{ name: 'Update Detects by IDs V2 (Deprecated)', value: 'updateDetectsByIdsV2', description: 'Update detects by IDs (deprecated)', action: 'Update detects by ids v2' },
		],
		default: 'queryDetects',
	},
];

export const detectsFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['detects'],
				operation: ['getAggregateDetects', 'getDetectSummaries', 'updateDetectsByIdsV2'],
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
				resource: ['detects'],
				operation: ['queryDetects'],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
	{
		displayName: 'Search Query (q)',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['detects'],
				operation: ['queryDetects'],
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
				resource: ['detects'],
				operation: ['queryDetects'],
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
				resource: ['detects'],
				operation: ['queryDetects'],
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
				resource: ['detects'],
				operation: ['queryDetects'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
