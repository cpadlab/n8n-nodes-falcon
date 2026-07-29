import type { INodeProperties } from 'n8n-workflow';

export const configurationAssessmentEvaluationLogicOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['configurationAssessmentEvaluationLogic'],
			},
		},
		options: [
			{ name: 'Get Evaluation Logic', value: 'getEvaluationLogicMixin0', description: 'Get details on evaluation logic items by finding IDs', action: 'Get evaluation logic' },
		],
		default: 'getEvaluationLogicMixin0',
	},
];

export const configurationAssessmentEvaluationLogicFields: INodeProperties[] = [
	{
		displayName: 'Finding IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['configurationAssessmentEvaluationLogic'],
				operation: ['getEvaluationLogicMixin0'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of finding IDs',
	},
];
