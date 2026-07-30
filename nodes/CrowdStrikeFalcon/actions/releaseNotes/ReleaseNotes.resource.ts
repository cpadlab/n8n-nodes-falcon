import type { INodeProperties } from 'n8n-workflow';

export const releaseNotesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['releaseNotes'],
			},
		},
		options: [
			{ name: 'Combined Release Notes V1', value: 'combinedReleaseNotesV1', description: 'Queries for release-notes resources and returns details', action: 'Combined release notes V1' },
			{ name: 'Get Entity IDs by Query POST', value: 'getEntityIDsByQueryPOST', description: 'Returns release notes for IDs in request', action: 'Get entity IDs by query POST' },
			{ name: 'Get Entity IDs by Query POST V2', value: 'getEntityIDsByQueryPOSTV2', description: 'Returns release notes for IDs with EA and GA dates in ISO 8601 format', action: 'Get entity IDs by query POST V2' },
			{ name: 'Query Release Notes V1', value: 'queryReleaseNotesV1', description: 'Queries for release-notes resources and returns IDs', action: 'Query release notes V1' },
		],
		default: 'combinedReleaseNotesV1',
	},
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
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['releaseNotes'],
				operation: ['getEntityIDsByQueryPOST', 'getEntityIDsByQueryPOSTV2'],
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
				resource: ['releaseNotes'],
				operation: ['combinedReleaseNotesV1', 'queryReleaseNotesV1'],
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
				resource: ['releaseNotes'],
				operation: ['combinedReleaseNotesV1', 'queryReleaseNotesV1'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['releaseNotes'],
				operation: ['combinedReleaseNotesV1', 'queryReleaseNotesV1'],
			},
		},
		default: '',
		description: 'Starting index for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['releaseNotes'],
				operation: ['combinedReleaseNotesV1', 'queryReleaseNotesV1'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
