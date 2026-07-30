import type { INodeProperties } from 'n8n-workflow';

export const serverlessExportsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['serverlessExports'],
			},
		},
		options: [
			{ name: 'Download Export File', value: 'downloadExportFileMixin0', description: 'Download an export file', action: 'Download export file' },
			{ name: 'Launch Export Job', value: 'launchExportJobMixin0', description: 'Launch export job of Lambda Security resource', action: 'Launch export job' },
			{ name: 'Query Export Jobs', value: 'queryExportJobsMixin0', description: 'Query export jobs entities', action: 'Query export jobs' },
			{ name: 'Read Export Jobs', value: 'readExportJobsMixin0', description: 'Read export jobs entities', action: 'Read export jobs' },
		],
		default: 'queryExportJobsMixin0',
	},
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
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['serverlessExports'],
				operation: ['readExportJobsMixin0'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of export job IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['serverlessExports'],
				operation: ['launchExportJobMixin0'],
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
				resource: ['serverlessExports'],
				operation: ['queryExportJobsMixin0'],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
];
