import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const releaseNotesOperations: INodeProperties[] = [
	createOperationField('releaseNotes', [

			{ name: 'Combined Release Notes V1', value: 'combinedReleaseNotesV1', description: 'Queries for release-notes resources and returns details', action: 'Combined release notes V1' },
			{ name: 'Get Entity IDs by Query POST', value: 'getEntityIDsByQueryPOST', description: 'Returns release notes for IDs in request', action: 'Get entity IDs by query POST' },
			{ name: 'Get Entity IDs by Query POST V2', value: 'getEntityIDsByQueryPOSTV2', description: 'Returns release notes for IDs with EA and GA dates in ISO 8601 format', action: 'Get entity IDs by query POST V2' },
			{ name: 'Query Release Notes V1', value: 'queryReleaseNotesV1', description: 'Queries for release-notes resources and returns IDs', action: 'Query release notes V1' },
		
	], 'combinedReleaseNotesV1'),
];

export const releaseNotesFields: INodeProperties[] = [
	{
		displayName: 'Authorization',
		name: 'authorization',
		type: 'string',
		typeOptions: {
			password: true,
		},
		displayOptions: {
			show: {
				resource: ['releaseNotes'],
				operation: [
					'combinedReleaseNotesV1',
					'getEntityIDsByQueryPOST',
					'getEntityIDsByQueryPOSTV2',
					'queryReleaseNotesV1',
				],
			},
		},
		default: '',
		description: 'Authorization token string',
	},
	createBodyJsonField('releaseNotes', ['getEntityIDsByQueryPOST', 'getEntityIDsByQueryPOSTV2']),
	...createStandardPaginationFields('releaseNotes', ['combinedReleaseNotesV1', 'queryReleaseNotesV1']),
];
