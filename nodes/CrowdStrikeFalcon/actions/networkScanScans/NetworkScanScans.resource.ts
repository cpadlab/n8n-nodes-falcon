import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const networkScanScansOperations: INodeProperties[] = [
	createOperationField('networkScanScans', [

			{ name: 'Aggregate Scans', value: 'aggregateScansMixin0', description: 'Returns scans aggregations', action: 'Aggregate scans' },
			{ name: 'Create Scans', value: 'createScans', description: 'Create scans using provided specifications', action: 'Create scans' },
			{ name: 'Delete Scans', value: 'deleteScans', description: 'Delete scans by their IDs', action: 'Delete scans' },
			{ name: 'Get Scans', value: 'getScans', description: 'Get scans by their IDs', action: 'Get scans' },
			{ name: 'Query Scans', value: 'queryScansMixin0', description: 'Get scans IDs by filter', action: 'Query scans' },
			{ name: 'Update Scans', value: 'updateScans', description: 'Update scans using provided specifications', action: 'Update scans' },
		
	], 'queryScansMixin0'),
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
	createBodyJsonField('networkScanScans', ['aggregateScansMixin0', 'createScans', 'updateScans']),
	...createStandardPaginationFields('networkScanScans', ['queryScansMixin0']),
];
