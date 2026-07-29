import type { INodeProperties } from 'n8n-workflow';

export const installationTokensSettingsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['installationTokensSettings'],
			},
		},
		options: [
			{ name: 'Customer Settings Update', value: 'customerSettingsUpdate', description: 'Update installation token settings', action: 'Customer settings update' },
		],
		default: 'customerSettingsUpdate',
	},
];

export const installationTokensSettingsFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['installationTokensSettings'],
				operation: ['customerSettingsUpdate'],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload for customer settings update',
	},
];
