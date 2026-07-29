import type { INodeProperties } from 'n8n-workflow';

export const federatedConnectionsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['federatedConnections'],
			},
		},
		options: [
			{ name: 'Delete Federated Connections Config', value: 'deleteFederatedConnectionsConfig', description: 'Delete configuration for a federated connection', action: 'Delete federated connections config' },
			{ name: 'Patch Federated Connections Config', value: 'patchFederatedConnectionsConfig', description: 'Update configuration for a federated connection', action: 'Patch federated connections config' },
			{ name: 'Post Federated Connections Config', value: 'postFederatedConnectionsConfig', description: 'Create configuration for a federated connection', action: 'Post federated connections config' },
		],
		default: 'postFederatedConnectionsConfig',
	},
];

export const federatedConnectionsFields: INodeProperties[] = [
	{
		displayName: 'Connection ID',
		name: 'connectionId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['federatedConnections'],
				operation: ['deleteFederatedConnectionsConfig', 'patchFederatedConnectionsConfig'],
			},
		},
		default: '',
		required: true,
		description: 'Federated connection identifier',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['federatedConnections'],
				operation: ['patchFederatedConnectionsConfig', 'postFederatedConnectionsConfig'],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload for federated connection config',
	},
];
