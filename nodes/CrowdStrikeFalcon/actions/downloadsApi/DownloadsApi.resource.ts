import type { INodeProperties } from 'n8n-workflow';

export const downloadsApiOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['downloadsApi'],
			},
		},
		options: [
			{ name: 'Download File (Deprecated)', value: 'downloadFile', description: 'Gets pre-signed URL for the file (deprecated)', action: 'Download file' },
			{ name: 'Enumerate File (Deprecated)', value: 'enumerateFile', description: 'Enumerates list of files available for CID (deprecated)', action: 'Enumerate file' },
			{ name: 'Fetch Files Download Info (Deprecated)', value: 'fetchFilesDownloadInfo', description: 'Get files info and pre-signed download URLs (deprecated)', action: 'Fetch files download info' },
			{ name: 'Fetch Files Download Info V2', value: 'fetchFilesDownloadInfoV2', description: 'Get cloud security tools info and pre-signed download URLs', action: 'Fetch files download info v2' },
		],
		default: 'fetchFilesDownloadInfoV2',
	},
];

export const downloadsApiFields: INodeProperties[] = [
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['downloadsApi'],
				operation: ['downloadFile', 'enumerateFile'],
			},
		},
		default: '',
		required: true,
		description: 'Name of the file',
	},
	{
		displayName: 'File Version',
		name: 'fileVersion',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['downloadsApi'],
				operation: ['downloadFile', 'enumerateFile'],
			},
		},
		default: '',
		required: true,
		description: 'Version of the file',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['downloadsApi'],
				operation: ['fetchFilesDownloadInfo', 'fetchFilesDownloadInfoV2'],
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
				resource: ['downloadsApi'],
				operation: ['fetchFilesDownloadInfoV2'],
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
				resource: ['downloadsApi'],
				operation: ['fetchFilesDownloadInfoV2'],
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
				resource: ['downloadsApi'],
				operation: ['fetchFilesDownloadInfo', 'fetchFilesDownloadInfoV2'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
