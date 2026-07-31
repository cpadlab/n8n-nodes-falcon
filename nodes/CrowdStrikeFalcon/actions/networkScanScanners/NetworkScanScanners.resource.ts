import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const networkScanScannersOperations: INodeProperties[] = [
	createOperationField('networkScanScanners', [

			{ name: 'Aggregate Scanners', value: 'aggregateScanners', description: 'Returns scanners aggregations', action: 'Aggregate scanners' },
			{ name: 'Get Scanners', value: 'getScanners', description: 'Get scanners by their IDs', action: 'Get scanners' },
			{ name: 'Query Scanners', value: 'queryScanners', description: 'Get scanners IDs by filter', action: 'Query scanners' },
			{ name: 'Update Scanners', value: 'updateScanners', description: 'Update scanners using provided specifications', action: 'Update scanners' },
		
	], 'queryScanners'),
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
	createBodyJsonField('networkScanScanners', ['aggregateScanners', 'updateScanners']),
	...createStandardPaginationFields('networkScanScanners', ['queryScanners']),
];
