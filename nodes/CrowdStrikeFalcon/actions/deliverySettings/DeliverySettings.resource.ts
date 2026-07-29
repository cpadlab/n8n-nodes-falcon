import type { INodeProperties } from 'n8n-workflow';

export const deliverySettingsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['deliverySettings'],
			},
		},
		options: [
			{ name: 'Get Delivery Settings', value: 'getDeliverySettings', description: 'Get Delivery Settings', action: 'Get delivery settings' },
			{ name: 'Post Delivery Settings', value: 'postDeliverySettings', description: 'Create Delivery Settings', action: 'Post delivery settings' },
		],
		default: 'getDeliverySettings',
	},
];

export const deliverySettingsFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['deliverySettings'],
				operation: ['postDeliverySettings'],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload for delivery settings',
	},
];
