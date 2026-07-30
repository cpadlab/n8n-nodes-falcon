import type { INodeProperties } from 'n8n-workflow';

export const zeroTrustAssessmentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['zeroTrustAssessment'],
			},
		},
		options: [
			{ name: 'Get Assessment V1', value: 'getAssessmentV1', description: 'Get Zero Trust Assessment data for hosts by Agent IDs', action: 'Get assessment V1' },
			{ name: 'Get Assessments By Score V1', value: 'getAssessmentsByScoreV1', description: 'Get Zero Trust Assessment data by range of scores', action: 'Get assessments by score V1' },
			{ name: 'Get Audit V1', value: 'getAuditV1', description: 'Get Zero Trust Assessment audit report for customer ID', action: 'Get audit V1' },
		],
		default: 'getAuditV1',
	},
];

export const zeroTrustAssessmentFields: INodeProperties[] = [
	{
		displayName: 'Agent IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['zeroTrustAssessment'],
				operation: ['getAssessmentV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Agent IDs (AID)',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['zeroTrustAssessment'],
				operation: ['getAssessmentsByScoreV1'],
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
				resource: ['zeroTrustAssessment'],
				operation: ['getAssessmentsByScoreV1'],
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
				resource: ['zeroTrustAssessment'],
				operation: ['getAssessmentsByScoreV1'],
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
				resource: ['zeroTrustAssessment'],
				operation: ['getAssessmentsByScoreV1'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
