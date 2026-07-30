import type { INodeProperties } from 'n8n-workflow';

export const mlExclusionsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['mlExclusions'],
			},
		},
		options: [
			{ name: 'Create ML Exclusions V1', value: 'createMLExclusionsV1', description: 'Create ML exclusions V1', action: 'Create ML exclusions V1' },
			{ name: 'Delete ML Exclusions V1', value: 'deleteMLExclusionsV1', description: 'Delete ML exclusions by ID', action: 'Delete ML exclusions V1' },
			{ name: 'Exclusions Aggregates V2', value: 'exclusionsAggregatesV2', description: 'Get exclusion aggregates', action: 'Exclusions aggregates V2' },
			{ name: 'Exclusions Create V2', value: 'exclusionsCreateV2', description: 'Create exclusions with ancestor fields', action: 'Exclusions create V2' },
			{ name: 'Exclusions Delete V2', value: 'exclusionsDeleteV2', description: 'Delete exclusions with ancestor fields', action: 'Exclusions delete V2' },
			{ name: 'Exclusions Get All V2', value: 'exclusionsGetAllV2', description: 'Get all exclusions', action: 'Exclusions get all V2' },
			{ name: 'Exclusions Get Reports V2', value: 'exclusionsGetReportsV2', description: 'Create report of ML exclusions', action: 'Exclusions get reports V2' },
			{ name: 'Exclusions Get V2', value: 'exclusionsGetV2', description: 'Get exclusions by ID with ancestor fields', action: 'Exclusions get V2' },
			{ name: 'Exclusions Perform Action V2', value: 'exclusionsPerformActionV2', description: 'Manipulate exclusion content', action: 'Exclusions perform action V2' },
			{ name: 'Exclusions SDMF Query V1', value: 'exclusionsSdmfQueryV1', description: 'Execute SDMF data frame query', action: 'Exclusions SDMF query V1' },
			{ name: 'Exclusions Search V2', value: 'exclusionsSearchV2', description: 'Search for exclusions with ancestor fields', action: 'Exclusions search V2' },
			{ name: 'Exclusions Update V2', value: 'exclusionsUpdateV2', description: 'Update exclusions with ancestor fields', action: 'Exclusions update V2' },
			{ name: 'Get ML Exclusions V1', value: 'getMLExclusionsV1', description: 'Get set of ML Exclusions by IDs', action: 'Get ML exclusions V1' },
			{ name: 'Query ML Exclusions V1', value: 'queryMLExclusionsV1', description: 'Search for ML exclusions', action: 'Query ML exclusions V1' },
			{ name: 'Update ML Exclusions V1', value: 'updateMLExclusionsV1', description: 'Update ML exclusions V1', action: 'Update ML exclusions V1' },
		],
		default: 'queryMLExclusionsV1',
	},
];

export const mlExclusionsFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mlExclusions'],
				operation: [
					'deleteMLExclusionsV1',
					'exclusionsDeleteV2',
					'exclusionsGetV2',
					'getMLExclusionsV1',
				],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mlExclusions'],
				operation: ['deleteMLExclusionsV1', 'exclusionsDeleteV2'],
			},
		},
		default: '',
		description: 'Audit log comment',
	},
	{
		displayName: 'Action Name',
		name: 'actionName',
		type: 'options',
		options: [
			{ name: 'Add Item', value: 'add_item' },
			{ name: 'Remove Item', value: 'remove_item' },
			{ name: 'Validate Filepath', value: 'validate_filepath' },
		],
		displayOptions: {
			show: {
				resource: ['mlExclusions'],
				operation: ['exclusionsPerformActionV2'],
			},
		},
		default: 'add_item',
		required: true,
		description: 'Action name to perform',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['mlExclusions'],
				operation: [
					'createMLExclusionsV1',
					'exclusionsAggregatesV2',
					'exclusionsCreateV2',
					'exclusionsGetReportsV2',
					'exclusionsPerformActionV2',
					'exclusionsSdmfQueryV1',
					'exclusionsUpdateV2',
					'updateMLExclusionsV1',
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
				resource: ['mlExclusions'],
				operation: ['exclusionsSearchV2', 'queryMLExclusionsV1'],
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
				resource: ['mlExclusions'],
				operation: ['exclusionsSearchV2', 'queryMLExclusionsV1'],
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
				resource: ['mlExclusions'],
				operation: ['exclusionsSearchV2', 'queryMLExclusionsV1'],
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
				resource: ['mlExclusions'],
				operation: ['exclusionsSearchV2', 'queryMLExclusionsV1'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
