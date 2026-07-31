import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField } from '../common';

export const deliverySettingsOperations: INodeProperties[] = [
	createOperationField('deliverySettings', [

			{ name: 'Get Delivery Settings', value: 'getDeliverySettings', description: 'Get Delivery Settings', action: 'Get delivery settings' },
			{ name: 'Post Delivery Settings', value: 'postDeliverySettings', description: 'Create Delivery Settings', action: 'Post delivery settings' },
		
	], 'getDeliverySettings'),
];

export const deliverySettingsFields: INodeProperties[] = [
	createBodyJsonField('deliverySettings', ['postDeliverySettings']),
];
