import type { INodeProperties } from 'n8n-workflow';

export const driftIndicatorsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['driftIndicators'],
			},
		},
		options: [
			{ name: 'Get Drift Indicators Values by Date', value: 'getDriftIndicatorsValuesByDate', description: 'Returns the count of Drift Indicators by date', action: 'Get drift indicators values by date' },
			{ name: 'Read Drift Indicator Entities', value: 'readDriftIndicatorEntities', description: 'Retrieve Drift Indicator entities identified by IDs', action: 'Read drift indicator entities' },
			{ name: 'Read Drift Indicators Count', value: 'readDriftIndicatorsCount', description: 'Returns total count of Drift indicators over time period', action: 'Read drift indicators count' },
			{ name: 'Search and Read Drift Indicator Entities', value: 'searchAndReadDriftIndicatorEntities', description: 'Retrieve Drift Indicators by search criteria', action: 'Search and read drift indicator entities' },
			{ name: 'Search Drift Indicators', value: 'searchDriftIndicators', description: 'Retrieve all drift indicators matching query', action: 'Search drift indicators' },
		],
		default: 'searchDriftIndicators',
	},
];

export const driftIndicatorsFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['driftIndicators'],
				operation: ['readDriftIndicatorEntities'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of drift indicator IDs',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['driftIndicators'],
				operation: [
					'getDriftIndicatorsValuesByDate',
					'readDriftIndicatorsCount',
					'searchAndReadDriftIndicatorEntities',
					'searchDriftIndicators',
				],
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
				resource: ['driftIndicators'],
				operation: ['getDriftIndicatorsValuesByDate', 'searchAndReadDriftIndicatorEntities', 'searchDriftIndicators'],
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
				resource: ['driftIndicators'],
				operation: ['searchAndReadDriftIndicatorEntities', 'searchDriftIndicators'],
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
				resource: ['driftIndicators'],
				operation: ['searchAndReadDriftIndicatorEntities', 'searchDriftIndicators'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
