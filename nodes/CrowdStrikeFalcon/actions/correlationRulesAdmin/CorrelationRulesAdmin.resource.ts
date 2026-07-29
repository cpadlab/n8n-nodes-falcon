import type { INodeProperties } from 'n8n-workflow';

export const correlationRulesAdminOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['correlationRulesAdmin'],
			},
		},
		options: [
			{ name: 'Update Rule Ownership V1', value: 'entitiesRulesOwnershipPutV1', description: 'Change the owner of an existing Correlation Rule', action: 'Update rule ownership v1' },
			{ name: 'Update Rule Ownership V2 (Bulk)', value: 'entitiesRulesOwnershipPutV2', description: 'Bulk change the owner of existing Correlation Rules', action: 'Update rule ownership v2' },
		],
		default: 'entitiesRulesOwnershipPutV1',
	},
];

export const correlationRulesAdminFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['correlationRulesAdmin'],
				operation: ['entitiesRulesOwnershipPutV1', 'entitiesRulesOwnershipPutV2'],
			},
		},
		default: '',
		required: true,
		description: 'JSON body payload specifying new rule owner details',
	},
];
