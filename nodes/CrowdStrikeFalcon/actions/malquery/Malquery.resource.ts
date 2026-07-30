import type { INodeProperties } from 'n8n-workflow';

export const malqueryOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['malquery'],
			},
		},
		options: [
			{ name: 'Get MalQuery Download V1', value: 'getMalQueryDownloadV1', description: 'Download a file indexed by MalQuery by SHA256', action: 'Get MalQuery download V1' },
			{ name: 'Get MalQuery Entities Samples Fetch V1', value: 'getMalQueryEntitiesSamplesFetchV1', description: 'Fetch a zip archive containing samples', action: 'Get MalQuery entities samples fetch V1' },
			{ name: 'Get MalQuery Metadata V1', value: 'getMalQueryMetadataV1', description: 'Retrieve indexed files metadata by hash', action: 'Get MalQuery metadata V1' },
			{ name: 'Get MalQuery Quotas V1', value: 'getMalQueryQuotasV1', description: 'Get search and download quota info', action: 'Get MalQuery quotas V1' },
			{ name: 'Get MalQuery Request V1', value: 'getMalQueryRequestV1', description: 'Check status and results of async request', action: 'Get MalQuery request V1' },
			{ name: 'Post MalQuery Entities Samples Multidownload V1', value: 'postMalQueryEntitiesSamplesMultidownloadV1', description: 'Schedule samples for download', action: 'Post MalQuery entities samples multidownload V1' },
			{ name: 'Post MalQuery Exact Search V1', value: 'postMalQueryExactSearchV1', description: 'Search MalQuery by hex patterns and strings', action: 'Post MalQuery exact search V1' },
			{ name: 'Post MalQuery Fuzzy Search V1', value: 'postMalQueryFuzzySearchV1', description: 'Quick fuzzy search MalQuery for patterns', action: 'Post MalQuery fuzzy search V1' },
			{ name: 'Post MalQuery Hunt V1', value: 'postMalQueryHuntV1', description: 'Schedule YARA-based search execution', action: 'Post MalQuery hunt V1' },
		],
		default: 'getMalQueryQuotasV1',
	},
];

export const malqueryFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['malquery'],
				operation: ['getMalQueryEntitiesSamplesFetchV1'],
			},
		},
		default: '',
		required: true,
		description: 'Sample request ID string',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['malquery'],
				operation: ['getMalQueryDownloadV1', 'getMalQueryMetadataV1', 'getMalQueryRequestV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs / SHA256 hashes',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['malquery'],
				operation: [
					'postMalQueryEntitiesSamplesMultidownloadV1',
					'postMalQueryExactSearchV1',
					'postMalQueryFuzzySearchV1',
					'postMalQueryHuntV1',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
];
