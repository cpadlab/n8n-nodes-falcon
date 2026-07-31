import type { INodeProperties } from 'n8n-workflow';

import { createFilterField, createLimitField, createOperationField, createSortField } from '../common';

export const configurationAssessmentOperations: INodeProperties[] = [
	createOperationField('configurationAssessment', [

			{ name: 'Get Combined Assessments Query', value: 'getCombinedAssessmentsQuery', description: 'Search for assessments matching FQL filter', action: 'Get combined assessments query' },
			{ name: 'Get Rule Details', value: 'getRuleDetails', description: 'Get rules details for provided rule IDs', action: 'Get rule details' },
		
	], 'getCombinedAssessmentsQuery'),
];

export const configurationAssessmentFields: INodeProperties[] = [
	createFilterField('configurationAssessment', ['getCombinedAssessmentsQuery']),
	{
		displayName: 'Rule IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['configurationAssessment'],
				operation: ['getRuleDetails'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of rule IDs',
	},
	createLimitField('configurationAssessment', ['getCombinedAssessmentsQuery']),
	createSortField('configurationAssessment', ['getCombinedAssessmentsQuery']),
];
