import type { INodeProperties } from 'n8n-workflow';

export const spotlightSupportedEvaluationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['spotlightSupportedEvaluation'],
			},
		},
		options: [
			{ name: 'Combined Supported Evaluation Ext', value: 'combinedSupportedEvaluationExt', description: 'Performs combined query for retrieving RiskSupportedEvaluation entities', action: 'Combined supported evaluation ext' },
		],
		default: 'combinedSupportedEvaluationExt',
	},
];

export const spotlightSupportedEvaluationFields: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['spotlightSupportedEvaluation'],
				operation: ['combinedSupportedEvaluationExt'],
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
				resource: ['spotlightSupportedEvaluation'],
				operation: ['combinedSupportedEvaluationExt'],
			},
		},
		default: '',
		description: 'Paging cursor string',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['spotlightSupportedEvaluation'],
				operation: ['combinedSupportedEvaluationExt'],
			},
		},
		default: '',
		description: 'Offset string for pagination',
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
				resource: ['spotlightSupportedEvaluation'],
				operation: ['combinedSupportedEvaluationExt'],
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
				resource: ['spotlightSupportedEvaluation'],
				operation: ['combinedSupportedEvaluationExt'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
	{
		displayName: 'Risk Provider',
		name: 'riskProvider',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['spotlightSupportedEvaluation'],
				operation: ['combinedSupportedEvaluationExt'],
			},
		},
		default: '',
		description: 'Comma-separated list of risk providers',
	},
];
