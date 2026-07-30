import type { INodeProperties } from 'n8n-workflow';

export const quickScanProOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['quickScanPro'],
			},
		},
		options: [
			{ name: 'Delete File', value: 'deleteFile', description: 'Deletes file by its SHA256 identifier', action: 'Delete file' },
			{ name: 'Delete Scan Result', value: 'deleteScanResult', description: 'Deletes result of QuickScan Pro scan', action: 'Delete scan result' },
			{ name: 'Get Scan Result', value: 'getScanResult', description: 'Gets result of QuickScan Pro scan', action: 'Get scan result' },
			{ name: 'Launch Scan', value: 'launchScan', description: 'Starts scanning a file uploaded through QuickScan Pro', action: 'Launch scan' },
			{ name: 'Query Scan Results', value: 'queryScanResults', description: 'FQL query specifying filter parameters', action: 'Query scan results' },
			{ name: 'Upload File QuickScan Pro', value: 'uploadFileQuickScanPro', description: 'Uploads a file to be further analyzed with QuickScan Pro', action: 'Upload file QuickScan Pro' },
		],
		default: 'queryScanResults',
	},
];

export const quickScanProFields: INodeProperties[] = [
	{
		displayName: 'IDs / SHA256s',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['quickScanPro'],
				operation: ['deleteFile', 'deleteScanResult', 'getScanResult'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs or SHA256 hashes',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['quickScanPro'],
				operation: ['launchScan'],
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
				resource: ['quickScanPro'],
				operation: ['queryScanResults'],
			},
		},
		default: '',
		required: true,
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
				resource: ['quickScanPro'],
				operation: ['queryScanResults'],
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
				resource: ['quickScanPro'],
				operation: ['queryScanResults'],
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
				resource: ['quickScanPro'],
				operation: ['queryScanResults'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
