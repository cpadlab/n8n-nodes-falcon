import type { INodeProperties } from 'n8n-workflow';

export const quickScanOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['quickScan'],
			},
		},
		options: [
			{ name: 'Get Scans', value: 'getScans', description: 'Check status of volume scan', action: 'Get scans' },
			{ name: 'Get Scans Aggregates', value: 'getScansAggregates', description: 'Get scans aggregations as specified via JSON in request body', action: 'Get scans aggregates' },
			{ name: 'Query Submissions', value: 'querySubmissionsMixin0', description: 'Find IDs for submitted scans by providing FQL filter', action: 'Query submissions' },
			{ name: 'Scan Samples', value: 'scanSamples', description: 'Submit a volume of files for ML scanning', action: 'Scan samples' },
		],
		default: 'querySubmissionsMixin0',
	},
];

export const quickScanFields: INodeProperties[] = [
	{
		displayName: 'Scan IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['quickScan'],
				operation: ['getScans'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Scan IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['quickScan'],
				operation: ['getScansAggregates', 'scanSamples'],
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
				resource: ['quickScan'],
				operation: ['querySubmissionsMixin0'],
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
				resource: ['quickScan'],
				operation: ['querySubmissionsMixin0'],
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
				resource: ['quickScan'],
				operation: ['querySubmissionsMixin0'],
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
				resource: ['quickScan'],
				operation: ['querySubmissionsMixin0'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
