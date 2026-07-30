import type { INodeProperties } from 'n8n-workflow';

export const spotlightEvaluationLogicOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['spotlightEvaluationLogic'],
			},
		},
		options: [
			{ name: 'Combined Query Evaluation Logic', value: 'combinedQueryEvaluationLogic', description: 'Search evaluation logic returning full entities', action: 'Combined query evaluation logic' },
			{ name: 'Get Evaluation Logic', value: 'getEvaluationLogic', description: 'Get details on evaluation logic items by IDs', action: 'Get evaluation logic' },
			{ name: 'Query Evaluation Logic', value: 'queryEvaluationLogic', description: 'Search evaluation logic returning IDs', action: 'Query evaluation logic' },
		],
		default: 'combinedQueryEvaluationLogic',
	},
];

export const spotlightEvaluationLogicFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['spotlightEvaluationLogic'],
				operation: ['getEvaluationLogic'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['spotlightEvaluationLogic'],
				operation: ['combinedQueryEvaluationLogic', 'queryEvaluationLogic'],
			},
		},
		default: '',
		required: true,
		description: 'FQL filter string',
	},
	{
		displayName: 'After',
		name: 'after',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['spotlightEvaluationLogic'],
				operation: ['combinedQueryEvaluationLogic', 'queryEvaluationLogic'],
			},
		},
		default: '',
		description: 'Paging cursor string',
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
				resource: ['spotlightEvaluationLogic'],
				operation: ['combinedQueryEvaluationLogic', 'queryEvaluationLogic'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['spotlightEvaluationLogic'],
				operation: ['combinedQueryEvaluationLogic', 'queryEvaluationLogic'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
