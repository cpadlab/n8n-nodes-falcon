import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField } from '../common';

export const federatedConnectionsOperations: INodeProperties[] = [
	createOperationField('federatedConnections', [

			{ name: 'Delete Federated Connections Config', value: 'deleteFederatedConnectionsConfig', description: 'Delete configuration for a federated connection', action: 'Delete federated connections config' },
			{ name: 'Patch Federated Connections Config', value: 'patchFederatedConnectionsConfig', description: 'Update configuration for a federated connection', action: 'Patch federated connections config' },
			{ name: 'Post Federated Connections Config', value: 'postFederatedConnectionsConfig', description: 'Create configuration for a federated connection', action: 'Post federated connections config' },
		
	], 'postFederatedConnectionsConfig'),
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
	createBodyJsonField('federatedConnections', ['patchFederatedConnectionsConfig', 'postFederatedConnectionsConfig']),
];
