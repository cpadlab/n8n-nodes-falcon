import type { INodeProperties } from 'n8n-workflow';

export const networkScanScansOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['networkScanScans'],
			},
		},
		options: [
			{ name: 'Aggregate Scans', value: 'aggregateScansMixin0', description: 'Returns scans aggregations', action: 'Aggregate scans' },
			{ name: 'Create Scans', value: 'createScans', description: 'Create scans using provided specifications', action: 'Create scans' },
			{ name: 'Delete Scans', value: 'deleteScans', description: 'Delete scans by their IDs', action: 'Delete scans' },
			{ name: 'Get Scans', value: 'getScans', description: 'Get scans by their IDs', action: 'Get scans' },
			{ name: 'Query Scans', value: 'queryScansMixin0', description: 'Get scans IDs by filter', action: 'Query scans' },
			{ name: 'Update Scans', value: 'updateScans', description: 'Update scans using provided specifications', action: 'Update scans' },
		],
		default: 'queryScansMixin0',
	},
];

export const networkScanScansFields: INodeProperties[] = [
	{
		displayName: 'Scan IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanScans'],
				operation: ['deleteScans', 'getScans'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Scan IDs',
	},
	{
		displayName: 'X-CS-USERUUID',
		name: 'xCSUSERUUID',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanScans'],
				operation: [
					'aggregateScansMixin0',
					'createScans',
					'deleteScans',
					'getScans',
					'queryScansMixin0',
					'updateScans',
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
				resource: ['networkScanScans'],
				operation: ['aggregateScansMixin0', 'createScans', 'updateScans'],
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
				resource: ['networkScanScans'],
				operation: ['queryScansMixin0'],
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
				resource: ['networkScanScans'],
				operation: ['queryScansMixin0'],
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
				resource: ['networkScanScans'],
				operation: ['queryScansMixin0'],
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
				resource: ['networkScanScans'],
				operation: ['queryScansMixin0'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
