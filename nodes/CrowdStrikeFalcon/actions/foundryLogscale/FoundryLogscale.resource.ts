import type { INodeProperties } from 'n8n-workflow';

export const foundryLogscaleOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['foundryLogscale'],
			},
		},
		options: [
			{ name: 'Create Saved Searches Dynamic Execute Alt V1', value: 'createSavedSearchesDynamicExecuteAltV1', description: 'Execute a dynamic saved search', action: 'Create saved searches dynamic execute alt v1' },
			{ name: 'Create Saved Searches Execute Alt V1', value: 'createSavedSearchesExecuteAltV1', description: 'Execute a saved search', action: 'Create saved searches execute alt v1' },
			{ name: 'Create Saved Searches Ingest Alt V1', value: 'createSavedSearchesIngestAltV1', description: 'Populate a saved search', action: 'Create saved searches ingest alt v1' },
			{ name: 'Download Results', value: 'downloadResults', description: 'Get the results of a saved search as a file', action: 'Download results' },
			{ name: 'Execute', value: 'execute', description: 'Execute a saved search', action: 'Execute' },
			{ name: 'Execute Dynamic', value: 'executeDynamic', description: 'Execute a dynamic saved search', action: 'Execute dynamic' },
			{ name: 'Get Saved Searches Execute Alt V1', value: 'getSavedSearchesExecuteAltV1', description: 'Get the results of a saved search', action: 'Get saved searches execute alt v1' },
			{ name: 'Get Saved Searches Job Results Download Alt V1', value: 'getSavedSearchesJobResultsDownloadAltV1', description: 'Get the results of a saved search as a file', action: 'Get saved searches job results download alt v1' },
			{ name: 'Get Search Results', value: 'getSearchResults', description: 'Get the results of a saved search', action: 'Get search results' },
			{ name: 'Ingest Data', value: 'ingestData', description: 'Synchronously ingest data into the application repository', action: 'Ingest data' },
			{ name: 'Ingest Data Async V1', value: 'ingestDataAsyncV1', description: 'Asynchronously ingest data into the application repository', action: 'Ingest data async v1' },
			{ name: 'List Repos', value: 'listRepos', description: 'Lists available repositories', action: 'List repos' },
			{ name: 'List Views', value: 'listViews', description: 'List available views', action: 'List views' },
			{ name: 'Populate', value: 'populate', description: 'Populate a saved search', action: 'Populate' },
		],
		default: 'listRepos',
	},
];

export const foundryLogscaleFields: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['foundryLogscale'],
				operation: [
					'downloadResults',
					'getSavedSearchesExecuteAltV1',
					'getSavedSearchesJobResultsDownloadAltV1',
					'getSearchResults',
				],
			},
		},
		default: '',
		required: true,
		description: 'Search Job ID',
	},
	{
		displayName: 'App ID',
		name: 'appId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['foundryLogscale'],
				operation: [
					'createSavedSearchesDynamicExecuteAltV1',
					'createSavedSearchesExecuteAltV1',
					'createSavedSearchesIngestAltV1',
					'execute',
					'executeDynamic',
					'getSavedSearchesExecuteAltV1',
					'getSearchResults',
					'populate',
				],
			},
		},
		default: '',
		description: 'Foundry App ID',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['foundryLogscale'],
				operation: [
					'createSavedSearchesDynamicExecuteAltV1',
					'createSavedSearchesExecuteAltV1',
					'execute',
					'executeDynamic',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
	{
		displayName: 'Data Content',
		name: 'dataContent',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['foundryLogscale'],
				operation: ['ingestData', 'ingestDataAsyncV1'],
			},
		},
		default: '',
		description: 'Data string to ingest',
	},
	{
		displayName: 'Repo',
		name: 'repo',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['foundryLogscale'],
				operation: ['ingestDataAsyncV1'],
			},
		},
		default: '',
		description: 'Target repository name',
	},
	{
		displayName: 'Check Test Data',
		name: 'checkTestData',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['foundryLogscale'],
				operation: ['listRepos', 'listViews'],
			},
		},
		default: false,
		description: 'Whether to check test data',
	},
];
