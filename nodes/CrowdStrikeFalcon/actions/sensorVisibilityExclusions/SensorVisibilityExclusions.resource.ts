import type { INodeProperties } from 'n8n-workflow';

export const sensorVisibilityExclusionsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sensorVisibilityExclusions'],
			},
		},
		options: [
			{ name: 'Create SV Exclusions V1', value: 'createSVExclusionsV1', description: 'Create sensor visibility exclusions V1', action: 'Create SV exclusions V1' },
			{ name: 'Delete Sensor Visibility Exclusions V1', value: 'deleteSensorVisibilityExclusionsV1', description: 'Delete sensor visibility exclusions by ID', action: 'Delete sensor visibility exclusions V1' },
			{ name: 'Get Sensor Visibility Exclusions V1', value: 'getSensorVisibilityExclusionsV1', description: 'Get sensor visibility exclusions by IDs', action: 'Get sensor visibility exclusions V1' },
			{ name: 'Query Sensor Visibility Exclusions V1', value: 'querySensorVisibilityExclusionsV1', description: 'Search sensor visibility exclusions', action: 'Query sensor visibility exclusions V1' },
			{ name: 'Update Sensor Visibility Exclusions V1', value: 'updateSensorVisibilityExclusionsV1', description: 'Update sensor visibility exclusions V1', action: 'Update sensor visibility exclusions V1' },
		],
		default: 'querySensorVisibilityExclusionsV1',
	},
];

export const sensorVisibilityExclusionsFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sensorVisibilityExclusions'],
				operation: ['deleteSensorVisibilityExclusionsV1', 'getSensorVisibilityExclusionsV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sensorVisibilityExclusions'],
				operation: ['deleteSensorVisibilityExclusionsV1'],
			},
		},
		default: '',
		description: 'Audit log comment',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['sensorVisibilityExclusions'],
				operation: ['createSVExclusionsV1', 'updateSensorVisibilityExclusionsV1'],
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
				resource: ['sensorVisibilityExclusions'],
				operation: ['querySensorVisibilityExclusionsV1'],
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
				resource: ['sensorVisibilityExclusions'],
				operation: ['querySensorVisibilityExclusionsV1'],
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
				resource: ['sensorVisibilityExclusions'],
				operation: ['querySensorVisibilityExclusionsV1'],
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
				resource: ['sensorVisibilityExclusions'],
				operation: ['querySensorVisibilityExclusionsV1'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
