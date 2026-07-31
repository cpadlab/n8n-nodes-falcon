import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField } from '../common';

export const networkScanGlobalConfigsOperations: INodeProperties[] = [
	createOperationField('networkScanGlobalConfigs', [

			{ name: 'Get Global Configs', value: 'getGlobalConfigs', description: 'Get global configs for the CID', action: 'Get global configs' },
			{ name: 'Update Global Configs', value: 'updateGlobalConfigs', description: 'Update global configs using provided specifications', action: 'Update global configs' },
		
	], 'getGlobalConfigs'),
];

export const networkScanGlobalConfigsFields: INodeProperties[] = [
	{
		displayName: 'X-CS-USERUUID',
		name: 'xCSUSERUUID',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanGlobalConfigs'],
				operation: ['getGlobalConfigs', 'updateGlobalConfigs'],
			},
		},
		default: '',
		description: 'User UUID header override',
	},
	createBodyJsonField('networkScanGlobalConfigs', ['updateGlobalConfigs']),
];
