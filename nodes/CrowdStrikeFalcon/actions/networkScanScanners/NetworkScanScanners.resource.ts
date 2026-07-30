import type { INodeProperties } from 'n8n-workflow';

export const networkScanScannersOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['networkScanScanners'],
			},
		},
		options: [
			{ name: 'Aggregate Scanners', value: 'aggregateScanners', description: 'Returns scanners aggregations', action: 'Aggregate scanners' },
			{ name: 'Get Scanners', value: 'getScanners', description: 'Get scanners by their IDs', action: 'Get scanners' },
			{ name: 'Query Scanners', value: 'queryScanners', description: 'Get scanners IDs by filter', action: 'Query scanners' },
			{ name: 'Update Scanners', value: 'updateScanners', description: 'Update scanners using provided specifications', action: 'Update scanners' },
		],
		default: 'queryScanners',
	},
];

export const networkScanScannersFields: INodeProperties[] = [
	{
		displayName: 'Scanner IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanScanners'],
				operation: ['getScanners'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Scanner IDs',
	},
	{
		displayName: 'X-CS-USERUUID',
		name: 'xCSUSERUUID',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanScanners'],
				operation: ['aggregateScanners', 'getScanners', 'queryScanners', 'updateScanners'],
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
				resource: ['networkScanScanners'],
				operation: ['aggregateScanners', 'updateScanners'],
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
				resource: ['networkScanScanners'],
				operation: ['queryScanners'],
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
				resource: ['networkScanScanners'],
				operation: ['queryScanners'],
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
				resource: ['networkScanScanners'],
				operation: ['queryScanners'],
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
				resource: ['networkScanScanners'],
				operation: ['queryScanners'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
