import type { INodeProperties } from 'n8n-workflow';

export const identityEntitiesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['identityEntities'],
			},
		},
		options: [
			{ name: 'Get Sensor Aggregates', value: 'getSensorAggregates', description: 'Get sensor aggregates as specified via JSON in request body', action: 'Get sensor aggregates' },
			{ name: 'Get Sensor Details', value: 'getSensorDetails', description: 'Get details on one or more sensors by providing device IDs in body', action: 'Get sensor details' },
			{ name: 'Query Sensors by Filter', value: 'querySensorsByFilter', description: 'Search for sensors by hostname, IP, and other criteria', action: 'Query sensors by filter' },
		],
		default: 'querySensorsByFilter',
	},
];

export const identityEntitiesFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['identityEntities'],
				operation: ['getSensorAggregates', 'getSensorDetails'],
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
				resource: ['identityEntities'],
				operation: ['querySensorsByFilter'],
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
				resource: ['identityEntities'],
				operation: ['querySensorsByFilter'],
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
				resource: ['identityEntities'],
				operation: ['querySensorsByFilter'],
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
				resource: ['identityEntities'],
				operation: ['querySensorsByFilter'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
