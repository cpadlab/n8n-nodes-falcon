import type { INodeProperties } from 'n8n-workflow';

import { createFilterField, createLimitField, createOffsetField, createOperationField, createSortField } from '../common';

export const spotlightSupportedEvaluationOperations: INodeProperties[] = [
	createOperationField('spotlightSupportedEvaluation', [

			{ name: 'Combined Supported Evaluation Ext', value: 'combinedSupportedEvaluationExt', description: 'Performs combined query for retrieving RiskSupportedEvaluation entities', action: 'Combined supported evaluation ext' },
		
	], 'combinedSupportedEvaluationExt'),
];

export const spotlightSupportedEvaluationFields: INodeProperties[] = [
	createFilterField('spotlightSupportedEvaluation', ['combinedSupportedEvaluationExt']),
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
	createOffsetField('spotlightSupportedEvaluation', ['combinedSupportedEvaluationExt']),
	createLimitField('spotlightSupportedEvaluation', ['combinedSupportedEvaluationExt']),
	createSortField('spotlightSupportedEvaluation', ['combinedSupportedEvaluationExt']),
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
