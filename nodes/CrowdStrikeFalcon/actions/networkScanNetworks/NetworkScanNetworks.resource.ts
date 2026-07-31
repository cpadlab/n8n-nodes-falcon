import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const networkScanNetworksOperations: INodeProperties[] = [
	createOperationField('networkScanNetworks', [

			{ name: 'Aggregate Networks', value: 'aggregateNetworks', description: 'Returns networks aggregations', action: 'Aggregate networks' },
			{ name: 'Create Networks', value: 'createNetworks', description: 'Create networks using provided specifications', action: 'Create networks' },
			{ name: 'Delete Networks', value: 'deleteNetworks', description: 'Delete networks by their IDs', action: 'Delete networks' },
			{ name: 'Get Networks', value: 'getNetworks', description: 'Get networks by their IDs', action: 'Get networks' },
			{ name: 'Query Networks', value: 'queryNetworks', description: 'Get networks IDs by filter', action: 'Query networks' },
			{ name: 'Update Networks', value: 'updateNetworks', description: 'Update networks using provided specifications', action: 'Update networks' },
		
	], 'queryNetworks'),
];

export const networkScanNetworksFields: INodeProperties[] = [
	{
		displayName: 'Network IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanNetworks'],
				operation: ['deleteNetworks', 'getNetworks'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Network IDs',
	},
	{
		displayName: 'X-CS-USERUUID',
		name: 'xCSUSERUUID',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanNetworks'],
				operation: [
					'aggregateNetworks',
					'createNetworks',
					'deleteNetworks',
					'getNetworks',
					'queryNetworks',
					'updateNetworks',
				],
			},
		},
		default: '',
		description: 'User UUID header override',
	},
	createBodyJsonField('networkScanNetworks', ['aggregateNetworks', 'createNetworks', 'updateNetworks']),
	...createStandardPaginationFields('networkScanNetworks', ['queryNetworks']),
];
