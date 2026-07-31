import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField } from '../common';

export const identityProtectionOperations: INodeProperties[] = [
	createOperationField('identityProtection', [

			{ name: 'API Preempt Proxy Delete Policy Rules', value: 'apiPreemptProxyDeletePolicyRules', description: 'Delete policy rules', action: 'API preempt proxy delete policy rules' },
			{ name: 'API Preempt Proxy Get Policy Rules', value: 'apiPreemptProxyGetPolicyRules', description: 'Get policy rules', action: 'API preempt proxy get policy rules' },
			{ name: 'API Preempt Proxy Get Policy Rules Query', value: 'apiPreemptProxyGetPolicyRulesQuery', description: 'Query policy rule IDs', action: 'API preempt proxy get policy rules query' },
			{ name: 'API Preempt Proxy Post GraphQL', value: 'apiPreemptProxyPostGraphql', description: 'Identity Protection GraphQL API (entities, timeline activities, etc.)', action: 'API preempt proxy post graphQL' },
			{ name: 'API Preempt Proxy Post Policy Rules', value: 'apiPreemptProxyPostPolicyRules', description: 'Create policy rule', action: 'API preempt proxy post policy rules' },
		
	], 'apiPreemptProxyGetPolicyRulesQuery'),
];

export const identityProtectionFields: INodeProperties[] = [
	createIdsField('identityProtection', ['apiPreemptProxyDeletePolicyRules', 'apiPreemptProxyGetPolicyRules']),
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['identityProtection'],
				operation: ['apiPreemptProxyGetPolicyRulesQuery'],
			},
		},
		default: '',
		description: 'Filter by rule name',
	},
	{
		displayName: 'Enabled',
		name: 'enabled',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['identityProtection'],
				operation: ['apiPreemptProxyGetPolicyRulesQuery'],
			},
		},
		default: true,
		description: 'Filter by enabled status',
	},
	{
		displayName: 'Simulation Mode',
		name: 'simulationMode',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['identityProtection'],
				operation: ['apiPreemptProxyGetPolicyRulesQuery'],
			},
		},
		default: false,
		description: 'Filter by simulation mode',
	},
	createBodyJsonField('identityProtection', ['apiPreemptProxyPostGraphql', 'apiPreemptProxyPostPolicyRules']),
];
