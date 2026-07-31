import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const quickScanOperations: INodeProperties[] = [
	createOperationField('quickScan', [

			{ name: 'Get Scans', value: 'getScans', description: 'Check status of volume scan', action: 'Get scans' },
			{ name: 'Get Scans Aggregates', value: 'getScansAggregates', description: 'Get scans aggregations as specified via JSON in request body', action: 'Get scans aggregates' },
			{ name: 'Query Submissions', value: 'querySubmissionsMixin0', description: 'Find IDs for submitted scans by providing FQL filter', action: 'Query submissions' },
			{ name: 'Scan Samples', value: 'scanSamples', description: 'Submit a volume of files for ML scanning', action: 'Scan samples' },
		
	], 'querySubmissionsMixin0'),
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
	createBodyJsonField('quickScan', ['getScansAggregates', 'scanSamples']),
	...createStandardPaginationFields('quickScan', ['querySubmissionsMixin0']),
];
