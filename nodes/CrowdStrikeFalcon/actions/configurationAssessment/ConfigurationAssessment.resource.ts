import type { INodeProperties } from 'n8n-workflow';

export const configurationAssessmentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['configurationAssessment'],
			},
		},
		options: [
			{ name: 'Get Combined Assessments Query', value: 'getCombinedAssessmentsQuery', description: 'Search for assessments matching FQL filter', action: 'Get combined assessments query' },
			{ name: 'Get Rule Details', value: 'getRuleDetails', description: 'Get rules details for provided rule IDs', action: 'Get rule details' },
		],
		default: 'getCombinedAssessmentsQuery',
	},
];

export const configurationAssessmentFields: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['configurationAssessment'],
				operation: ['getCombinedAssessmentsQuery'],
			},
		},
		default: '',
		required: true,
		description: 'FQL filter string for assessments',
	},
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
				resource: ['configurationAssessment'],
				operation: ['getCombinedAssessmentsQuery'],
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
				resource: ['configurationAssessment'],
				operation: ['getCombinedAssessmentsQuery'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
