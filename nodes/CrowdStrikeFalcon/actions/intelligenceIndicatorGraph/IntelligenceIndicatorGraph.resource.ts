import type { INodeProperties } from 'n8n-workflow';

export const intelligenceIndicatorGraphOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['intelligenceIndicatorGraph'],
			},
		},
		options: [
			{ name: 'Lookup Indicators', value: 'lookupIndicators', description: 'Look up intelligence data for multiple indicators', action: 'Lookup indicators' },
			{ name: 'Search Indicators', value: 'searchIndicators', description: 'Search indicators based on FQL filter or request body', action: 'Search indicators' },
		],
		default: 'searchIndicators',
	},
];

export const intelligenceIndicatorGraphFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['intelligenceIndicatorGraph'],
				operation: ['lookupIndicators', 'searchIndicators'],
			},
		},
		default: '',
		required: true,
		description: 'JSON body payload containing lookup or query request criteria',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['intelligenceIndicatorGraph'],
				operation: ['searchIndicators'],
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
			maxValue: 5000,
		},
		displayOptions: {
			show: {
				resource: ['intelligenceIndicatorGraph'],
				operation: ['searchIndicators'],
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
				resource: ['intelligenceIndicatorGraph'],
				operation: ['searchIndicators'],
			},
		},
		default: '',
		description: 'Pagination token or offset',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['intelligenceIndicatorGraph'],
				operation: ['searchIndicators'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
