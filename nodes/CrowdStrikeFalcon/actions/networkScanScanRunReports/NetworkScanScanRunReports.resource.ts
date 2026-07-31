import type { INodeProperties } from 'n8n-workflow';

import { createOperationField } from '../common';

export const networkScanScanRunReportsOperations: INodeProperties[] = [
	createOperationField('networkScanScanRunReports', [

			{ name: 'Get Scan Run Reports', value: 'getScanRunReports', description: 'Downloads scan run report in CSV format', action: 'Get scan run reports' },
		
	], 'getScanRunReports'),
];

export const networkScanScanRunReportsFields: INodeProperties[] = [
	{
		displayName: 'Scan Run ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanScanRunReports'],
				operation: ['getScanRunReports'],
			},
		},
		default: '',
		required: true,
		description: 'Unique scan run ID',
	},
	{
		displayName: 'X-CS-USERUUID',
		name: 'xCSUSERUUID',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanScanRunReports'],
				operation: ['getScanRunReports'],
			},
		},
		default: '',
		description: 'User UUID header override',
	},
];
