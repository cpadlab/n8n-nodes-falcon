import type { INodeProperties } from 'n8n-workflow';

export const cloudSecurityComplianceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cloudSecurityCompliance'],
			},
		},
		options: [
			{ name: 'Get Framework Posture Summaries', value: 'cloudComplianceFrameworkPostureSummaries', description: 'Get sections and requirements with scores for benchmarks', action: 'Get framework posture summaries' },
			{ name: 'Get Rule Posture Summaries', value: 'cloudComplianceRulePostureSummaries', description: 'Get compliance score and counts for rules', action: 'Get rule posture summaries' },
		],
		default: 'cloudComplianceFrameworkPostureSummaries',
	},
];

export const cloudSecurityComplianceFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudSecurityCompliance'],
				operation: ['cloudComplianceFrameworkPostureSummaries', 'cloudComplianceRulePostureSummaries'],
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
				resource: ['cloudSecurityCompliance'],
				operation: ['cloudComplianceFrameworkPostureSummaries', 'cloudComplianceRulePostureSummaries'],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
];
