import type { INodeProperties } from 'n8n-workflow';

import { createFilterField, createIdsField, createLimitField, createOperationField, createSortField } from '../common';

export const spotlightEvaluationLogicOperations: INodeProperties[] = [
	createOperationField('spotlightEvaluationLogic', [

			{ name: 'Combined Query Evaluation Logic', value: 'combinedQueryEvaluationLogic', description: 'Search evaluation logic returning full entities', action: 'Combined query evaluation logic' },
			{ name: 'Get Evaluation Logic', value: 'getEvaluationLogic', description: 'Get details on evaluation logic items by IDs', action: 'Get evaluation logic' },
			{ name: 'Query Evaluation Logic', value: 'queryEvaluationLogic', description: 'Search evaluation logic returning IDs', action: 'Query evaluation logic' },
		
	], 'combinedQueryEvaluationLogic'),
];

export const spotlightEvaluationLogicFields: INodeProperties[] = [
	createIdsField('spotlightEvaluationLogic', ['getEvaluationLogic']),
	createFilterField('spotlightEvaluationLogic', ['combinedQueryEvaluationLogic', 'queryEvaluationLogic']),
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
	createLimitField('spotlightEvaluationLogic', ['combinedQueryEvaluationLogic', 'queryEvaluationLogic']),
	createSortField('spotlightEvaluationLogic', ['combinedQueryEvaluationLogic', 'queryEvaluationLogic']),
];
