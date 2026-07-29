import type { INodeProperties } from 'n8n-workflow';

export const cloudSecurityRegistrationCombinedOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cloudSecurityRegistrationCombined'],
			},
		},
		options: [
			{ name: 'Get Account Aggregates', value: 'cloudRegistrationCrossProviderGetAccountAggregates', description: 'Returns cross-provider account aggregates by status', action: 'Get account aggregates' },
		],
		default: 'cloudRegistrationCrossProviderGetAccountAggregates',
	},
];

export const cloudSecurityRegistrationCombinedFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['cloudSecurityRegistrationCombined'],
				operation: ['cloudRegistrationCrossProviderGetAccountAggregates'],
			},
		},
		default: '',
		required: true,
		description: 'JSON array of aggregate query requests',
	},
];
