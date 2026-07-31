import type { INodeProperties } from 'n8n-workflow';

import { createOperationField, createStandardPaginationFields } from '../common';

export const downloadsApiOperations: INodeProperties[] = [
	createOperationField('downloadsApi', [

			{ name: 'Download File (Deprecated)', value: 'downloadFile', description: 'Gets pre-signed URL for the file (deprecated)', action: 'Download file' },
			{ name: 'Enumerate File (Deprecated)', value: 'enumerateFile', description: 'Enumerates list of files available for CID (deprecated)', action: 'Enumerate file' },
			{ name: 'Fetch Files Download Info (Deprecated)', value: 'fetchFilesDownloadInfo', description: 'Get files info and pre-signed download URLs (deprecated)', action: 'Fetch files download info' },
			{ name: 'Fetch Files Download Info V2', value: 'fetchFilesDownloadInfoV2', description: 'Get cloud security tools info and pre-signed download URLs', action: 'Fetch files download info v2' },
		
	], 'fetchFilesDownloadInfoV2'),
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
	...createStandardPaginationFields('downloadsApi', ['fetchFilesDownloadInfo', 'fetchFilesDownloadInfoV2']),
];
