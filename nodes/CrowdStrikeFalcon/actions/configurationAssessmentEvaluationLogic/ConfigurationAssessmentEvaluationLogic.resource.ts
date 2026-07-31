import type { INodeProperties } from 'n8n-workflow';

import { createOperationField } from '../common';

export const configurationAssessmentEvaluationLogicOperations: INodeProperties[] = [
	createOperationField('configurationAssessmentEvaluationLogic', [

			{ name: 'Get Evaluation Logic', value: 'getEvaluationLogicMixin0', description: 'Get details on evaluation logic items by finding IDs', action: 'Get evaluation logic' },
		
	], 'getEvaluationLogicMixin0'),
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
