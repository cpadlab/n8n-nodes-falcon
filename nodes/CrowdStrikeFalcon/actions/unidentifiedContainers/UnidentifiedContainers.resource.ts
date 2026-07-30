import type { INodeProperties } from 'n8n-workflow';

export const unidentifiedContainersOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['unidentifiedContainers'],
			},
		},
		options: [
			{ name: 'Count', value: 'count', description: 'Returns total count of Unidentified Containers over a time period', action: 'Count' },
			{ name: 'Count By Date Range', value: 'countByDateRange', description: 'Returns count of Unidentified Containers over last 7 days', action: 'Count by date range' },
			{ name: 'Search', value: 'search', description: 'Search Unidentified Containers by provided search criteria', action: 'Search' },
		],
		default: 'search',
	},
];

export const unidentifiedContainersFields: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['unidentifiedContainers'],
				operation: ['count', 'countByDateRange', 'search'],
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
				resource: ['unidentifiedContainers'],
				operation: ['search'],
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
				resource: ['unidentifiedContainers'],
				operation: ['search'],
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
				resource: ['unidentifiedContainers'],
				operation: ['search'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
