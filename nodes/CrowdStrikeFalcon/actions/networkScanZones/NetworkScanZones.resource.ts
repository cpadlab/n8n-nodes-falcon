import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const networkScanZonesOperations: INodeProperties[] = [
	createOperationField('networkScanZones', [

			{ name: 'Aggregate Zones', value: 'aggregateZones', description: 'Returns zones aggregations', action: 'Aggregate zones' },
			{ name: 'Combined Zones', value: 'combinedZones', description: 'Get zones by filter', action: 'Combined zones' },
			{ name: 'Create Zones', value: 'createZones', description: 'Create zones using provided specifications', action: 'Create zones' },
			{ name: 'Delete Zones', value: 'deleteZones', description: 'Delete zones by their IDs', action: 'Delete zones' },
			{ name: 'Get Zones', value: 'getZones', description: 'Get zones by their IDs', action: 'Get zones' },
			{ name: 'Query Zones', value: 'queryZones', description: 'Get zones IDs by filter', action: 'Query zones' },
			{ name: 'Update Zones', value: 'updateZones', description: 'Update zones using provided specifications', action: 'Update zones' },
		
	], 'queryZones'),
];

export const networkScanZonesFields: INodeProperties[] = [
	{
		displayName: 'Zone IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanZones'],
				operation: ['deleteZones', 'getZones'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Zone IDs',
	},
	{
		displayName: 'X-CS-USERUUID',
		name: 'xCSUSERUUID',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanZones'],
				operation: [
					'aggregateZones',
					'combinedZones',
					'createZones',
					'deleteZones',
					'getZones',
					'queryZones',
					'updateZones',
				],
			},
		},
		default: '',
		description: 'User UUID header override',
	},
	createBodyJsonField('networkScanZones', ['aggregateZones', 'createZones', 'updateZones']),
	...createStandardPaginationFields('networkScanZones', ['combinedZones', 'queryZones']),
];
