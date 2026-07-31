import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const quickScanProOperations: INodeProperties[] = [
	createOperationField('quickScanPro', [

			{ name: 'Delete File', value: 'deleteFile', description: 'Deletes file by its SHA256 identifier', action: 'Delete file' },
			{ name: 'Delete Scan Result', value: 'deleteScanResult', description: 'Deletes result of QuickScan Pro scan', action: 'Delete scan result' },
			{ name: 'Get Scan Result', value: 'getScanResult', description: 'Gets result of QuickScan Pro scan', action: 'Get scan result' },
			{ name: 'Launch Scan', value: 'launchScan', description: 'Starts scanning a file uploaded through QuickScan Pro', action: 'Launch scan' },
			{ name: 'Query Scan Results', value: 'queryScanResults', description: 'FQL query specifying filter parameters', action: 'Query scan results' },
			{ name: 'Upload File QuickScan Pro', value: 'uploadFileQuickScanPro', description: 'Uploads a file to be further analyzed with QuickScan Pro', action: 'Upload file QuickScan Pro' },
		
	], 'queryScanResults'),
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
	createBodyJsonField('quickScanPro', ['launchScan']),
	...createStandardPaginationFields('quickScanPro', ['queryScanResults']),
];
