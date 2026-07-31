import type { INodeProperties } from 'n8n-workflow';

import { createFilterField, createLimitField, createOperationField, createSortField } from '../common';

export const zeroTrustAssessmentOperations: INodeProperties[] = [
	createOperationField('zeroTrustAssessment', [

			{ name: 'Get Assessment V1', value: 'getAssessmentV1', description: 'Get Zero Trust Assessment data for hosts by Agent IDs', action: 'Get assessment V1' },
			{ name: 'Get Assessments By Score V1', value: 'getAssessmentsByScoreV1', description: 'Get Zero Trust Assessment data by range of scores', action: 'Get assessments by score V1' },
			{ name: 'Get Audit V1', value: 'getAuditV1', description: 'Get Zero Trust Assessment audit report for customer ID', action: 'Get audit V1' },
		
	], 'getAuditV1'),
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
	createFilterField('zeroTrustAssessment', ['getAssessmentsByScoreV1']),
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
	createLimitField('zeroTrustAssessment', ['getAssessmentsByScoreV1']),
	createSortField('zeroTrustAssessment', ['getAssessmentsByScoreV1']),
];
