import type { INodeProperties } from 'n8n-workflow';

export const networkScanScanRunsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['networkScanScanRuns'],
			},
		},
		options: [
			{ name: 'Aggregate Scan Runs', value: 'aggregateScanRuns', description: 'Returns scan-runs aggregations', action: 'Aggregate scan runs' },
			{ name: 'Create Scan Runs', value: 'createScanRuns', description: 'Create scan-runs using provided specifications', action: 'Create scan runs' },
			{ name: 'Get Scan Runs', value: 'getScanRuns', description: 'Get scan-runs by their IDs', action: 'Get scan runs' },
			{ name: 'Query Scan Runs', value: 'queryScanRuns', description: 'Get scan-runs IDs by filter', action: 'Query scan runs' },
			{ name: 'Update Scan Runs', value: 'updateScanRuns', description: 'Update scan-runs using provided specifications', action: 'Update scan runs' },
		],
		default: 'queryScanRuns',
	},
];

export const networkScanScanRunsFields: INodeProperties[] = [
	{
		displayName: 'Scan Run IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanScanRuns'],
				operation: ['getScanRuns'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Scan Run IDs',
	},
	{
		displayName: 'X-CS-USERUUID',
		name: 'xCSUSERUUID',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanScanRuns'],
				operation: [
					'aggregateScanRuns',
					'createScanRuns',
					'getScanRuns',
					'queryScanRuns',
					'updateScanRuns',
				],
			},
		},
		default: '',
		description: 'User UUID header override',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['networkScanScanRuns'],
				operation: ['aggregateScanRuns', 'createScanRuns', 'updateScanRuns'],
			},
		},
		default: '',
		required: true,
		description: 'JSON array request payload',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanScanRuns'],
				operation: ['queryScanRuns'],
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
				resource: ['networkScanScanRuns'],
				operation: ['queryScanRuns'],
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
				resource: ['networkScanScanRuns'],
				operation: ['queryScanRuns'],
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
				resource: ['networkScanScanRuns'],
				operation: ['queryScanRuns'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
