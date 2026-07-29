import type { INodeProperties } from 'n8n-workflow';

export const cloudSecurityDetectionsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cloudSecurityDetections'],
			},
		},
		options: [
			{ name: 'Get Combined IOM by Rule', value: 'cspmEvaluationsCombinedIomByRule', description: 'Returns IOMs grouped by rule', action: 'Get combined IOM by rule' },
			{ name: 'Get IOM Entities by IDs', value: 'cspmEvaluationsIomEntities', description: 'Gets IOMs based on provided IDs', action: 'Get IOM entities by IDs' },
			{ name: 'Get IOM Entities by Body (POST)', value: 'cspmEvaluationsIomEntitiesPost', description: 'Gets IOMs based on IDs in request body', action: 'Get IOM entities by body' },
			{ name: 'Query IOM IDs', value: 'cspmEvaluationsIomQueries', description: 'Gets a list of IOM IDs for given parameters', action: 'Query IOM IDs' },
		],
		default: 'cspmEvaluationsIomQueries',
	},
];

export const cloudSecurityDetectionsFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudSecurityDetections'],
				operation: ['cspmEvaluationsIomEntities'],
			},
		},
		default: '',
		description: 'Comma-separated list of IOM IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['cloudSecurityDetections'],
				operation: ['cspmEvaluationsIomEntitiesPost'],
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
				resource: ['cloudSecurityDetections'],
				operation: ['cspmEvaluationsCombinedIomByRule', 'cspmEvaluationsIomQueries'],
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
				resource: ['cloudSecurityDetections'],
				operation: ['cspmEvaluationsCombinedIomByRule', 'cspmEvaluationsIomQueries'],
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
				resource: ['cloudSecurityDetections'],
				operation: ['cspmEvaluationsCombinedIomByRule', 'cspmEvaluationsIomQueries'],
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
				resource: ['cloudSecurityDetections'],
				operation: ['cspmEvaluationsCombinedIomByRule', 'cspmEvaluationsIomQueries'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
