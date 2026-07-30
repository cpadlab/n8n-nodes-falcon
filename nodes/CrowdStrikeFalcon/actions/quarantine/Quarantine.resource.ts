import type { INodeProperties } from 'n8n-workflow';

export const quarantineOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['quarantine'],
			},
		},
		options: [
			{ name: 'Action Update Count', value: 'actionUpdateCount', description: 'Returns count of potentially affected quarantined files for each action', action: 'Action update count' },
			{ name: 'Get Aggregate Files', value: 'getAggregateFiles', description: 'Get quarantine file aggregates as specified via JSON in request body', action: 'Get aggregate files' },
			{ name: 'Get Quarantine Files', value: 'getQuarantineFiles', description: 'Get quarantine file metadata for specified IDs', action: 'Get quarantine files' },
			{ name: 'Query Quarantine Files', value: 'queryQuarantineFiles', description: 'Get quarantine file IDs that match filter criteria', action: 'Query quarantine files' },
			{ name: 'Update Qf by Query', value: 'updateQfByQuery', description: 'Apply quarantine file actions by query', action: 'Update qf by query' },
			{ name: 'Update Quarantined Detects by IDs', value: 'updateQuarantinedDetectsByIds', description: 'Apply action by quarantine file IDs', action: 'Update quarantined detects by IDs' },
		],
		default: 'queryQuarantineFiles',
	},
];

export const quarantineFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['quarantine'],
				operation: [
					'getAggregateFiles',
					'getQuarantineFiles',
					'updateQfByQuery',
					'updateQuarantinedDetectsByIds',
				],
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
				resource: ['quarantine'],
				operation: ['actionUpdateCount', 'queryQuarantineFiles'],
			},
		},
		default: '',
		required: true,
		description: 'FQL filter string',
	},
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['quarantine'],
				operation: ['queryQuarantineFiles'],
			},
		},
		default: '',
		description: 'Search query string',
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
				resource: ['quarantine'],
				operation: ['queryQuarantineFiles'],
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
				resource: ['quarantine'],
				operation: ['queryQuarantineFiles'],
			},
		},
		default: '',
		description: 'Starting index or pagination token',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['quarantine'],
				operation: ['queryQuarantineFiles'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
