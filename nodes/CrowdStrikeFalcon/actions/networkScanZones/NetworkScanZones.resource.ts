import type { INodeProperties } from 'n8n-workflow';

export const networkScanZonesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['networkScanZones'],
			},
		},
		options: [
			{ name: 'Aggregate Zones', value: 'aggregateZones', description: 'Returns zones aggregations', action: 'Aggregate zones' },
			{ name: 'Combined Zones', value: 'combinedZones', description: 'Get zones by filter', action: 'Combined zones' },
			{ name: 'Create Zones', value: 'createZones', description: 'Create zones using provided specifications', action: 'Create zones' },
			{ name: 'Delete Zones', value: 'deleteZones', description: 'Delete zones by their IDs', action: 'Delete zones' },
			{ name: 'Get Zones', value: 'getZones', description: 'Get zones by their IDs', action: 'Get zones' },
			{ name: 'Query Zones', value: 'queryZones', description: 'Get zones IDs by filter', action: 'Query zones' },
			{ name: 'Update Zones', value: 'updateZones', description: 'Update zones using provided specifications', action: 'Update zones' },
		],
		default: 'queryZones',
	},
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
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['networkScanZones'],
				operation: ['aggregateZones', 'createZones', 'updateZones'],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanZones'],
				operation: ['combinedZones', 'queryZones'],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		displayOptions: {
			show: {
				resource: ['networkScanZones'],
				operation: ['combinedZones', 'queryZones'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		typeOptions: {
			minValue: 0,
		},
		displayOptions: {
			show: {
				resource: ['networkScanZones'],
				operation: ['combinedZones', 'queryZones'],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanZones'],
				operation: ['combinedZones', 'queryZones'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
