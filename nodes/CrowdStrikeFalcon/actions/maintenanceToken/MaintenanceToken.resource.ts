import type { INodeProperties } from 'n8n-workflow';

export const maintenanceTokenOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['maintenanceToken'],
			},
		},
		options: [
			{ name: 'Increment Uninstall Token', value: 'incrementUninstallToken', description: 'Increments a bulk maintenance token', action: 'Increment uninstall token' },
		],
		default: 'incrementUninstallToken',
	},
];

export const maintenanceTokenFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['maintenanceToken'],
				operation: ['incrementUninstallToken'],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
];
