import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const networkScanScanRunsOperations: INodeProperties[] = [
	createOperationField('networkScanScanRuns', [

			{ name: 'Aggregate Scan Runs', value: 'aggregateScanRuns', description: 'Returns scan-runs aggregations', action: 'Aggregate scan runs' },
			{ name: 'Create Scan Runs', value: 'createScanRuns', description: 'Create scan-runs using provided specifications', action: 'Create scan runs' },
			{ name: 'Get Scan Runs', value: 'getScanRuns', description: 'Get scan-runs by their IDs', action: 'Get scan runs' },
			{ name: 'Query Scan Runs', value: 'queryScanRuns', description: 'Get scan-runs IDs by filter', action: 'Query scan runs' },
			{ name: 'Update Scan Runs', value: 'updateScanRuns', description: 'Update scan-runs using provided specifications', action: 'Update scan runs' },
		
	], 'queryScanRuns'),
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
	createBodyJsonField('networkScanScanRuns', ['aggregateScanRuns', 'createScanRuns', 'updateScanRuns']),
	...createStandardPaginationFields('networkScanScanRuns', ['queryScanRuns']),
];
