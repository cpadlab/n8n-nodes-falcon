import type { INodeProperties } from 'n8n-workflow';

export const networkScanGlobalConfigsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['networkScanGlobalConfigs'],
			},
		},
		options: [
			{ name: 'Get Global Configs', value: 'getGlobalConfigs', description: 'Get global configs for the CID', action: 'Get global configs' },
			{ name: 'Update Global Configs', value: 'updateGlobalConfigs', description: 'Update global configs using provided specifications', action: 'Update global configs' },
		],
		default: 'getGlobalConfigs',
	},
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
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['networkScanGlobalConfigs'],
				operation: ['updateGlobalConfigs'],
			},
		},
		default: '',
		required: true,
		description: 'JSON global configuration specifications payload',
	},
];
