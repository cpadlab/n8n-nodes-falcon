import type { INodeProperties } from 'n8n-workflow';

import { createFilterField, createIdsField, createOperationField } from '../common';

export const cloudSecurityComplianceOperations: INodeProperties[] = [
	createOperationField('cloudSecurityCompliance', [

			{ name: 'Get Framework Posture Summaries', value: 'cloudComplianceFrameworkPostureSummaries', description: 'Get sections and requirements with scores for benchmarks', action: 'Get framework posture summaries' },
			{ name: 'Get Rule Posture Summaries', value: 'cloudComplianceRulePostureSummaries', description: 'Get compliance score and counts for rules', action: 'Get rule posture summaries' },
		
	], 'cloudComplianceFrameworkPostureSummaries'),
];

export const cloudSecurityComplianceFields: INodeProperties[] = [
	createIdsField('cloudSecurityCompliance', ['cloudComplianceFrameworkPostureSummaries', 'cloudComplianceRulePostureSummaries']),
	createFilterField('cloudSecurityCompliance', ['cloudComplianceFrameworkPostureSummaries', 'cloudComplianceRulePostureSummaries']),
];
