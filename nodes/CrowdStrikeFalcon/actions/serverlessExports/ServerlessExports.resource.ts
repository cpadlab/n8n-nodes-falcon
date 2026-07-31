import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createFilterField, createIdsField, createOperationField } from '../common';

export const serverlessExportsOperations: INodeProperties[] = [
	createOperationField('serverlessExports', [

			{ name: 'Download Export File', value: 'downloadExportFileMixin0', description: 'Download an export file', action: 'Download export file' },
			{ name: 'Launch Export Job', value: 'launchExportJobMixin0', description: 'Launch export job of Lambda Security resource', action: 'Launch export job' },
			{ name: 'Query Export Jobs', value: 'queryExportJobsMixin0', description: 'Query export jobs entities', action: 'Query export jobs' },
			{ name: 'Read Export Jobs', value: 'readExportJobsMixin0', description: 'Read export jobs entities', action: 'Read export jobs' },
		
	], 'queryExportJobsMixin0'),
];

export const serverlessExportsFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['serverlessExports'],
				operation: ['downloadExportFileMixin0'],
			},
		},
		default: '',
		required: true,
		description: 'Export job ID',
	},
	createIdsField('serverlessExports', ['readExportJobsMixin0']),
	createBodyJsonField('serverlessExports', ['launchExportJobMixin0']),
	createFilterField('serverlessExports', ['queryExportJobsMixin0']),
];
