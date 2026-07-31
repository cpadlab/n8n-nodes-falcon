import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const sensorVisibilityExclusionsOperations: INodeProperties[] = [
	createOperationField('sensorVisibilityExclusions', [

			{ name: 'Create SV Exclusions V1', value: 'createSVExclusionsV1', description: 'Create sensor visibility exclusions V1', action: 'Create SV exclusions V1' },
			{ name: 'Delete Sensor Visibility Exclusions V1', value: 'deleteSensorVisibilityExclusionsV1', description: 'Delete sensor visibility exclusions by ID', action: 'Delete sensor visibility exclusions V1' },
			{ name: 'Get Sensor Visibility Exclusions V1', value: 'getSensorVisibilityExclusionsV1', description: 'Get sensor visibility exclusions by IDs', action: 'Get sensor visibility exclusions V1' },
			{ name: 'Query Sensor Visibility Exclusions V1', value: 'querySensorVisibilityExclusionsV1', description: 'Search sensor visibility exclusions', action: 'Query sensor visibility exclusions V1' },
			{ name: 'Update Sensor Visibility Exclusions V1', value: 'updateSensorVisibilityExclusionsV1', description: 'Update sensor visibility exclusions V1', action: 'Update sensor visibility exclusions V1' },
		
	], 'querySensorVisibilityExclusionsV1'),
];

export const sensorVisibilityExclusionsFields: INodeProperties[] = [
	createIdsField('sensorVisibilityExclusions', ['deleteSensorVisibilityExclusionsV1', 'getSensorVisibilityExclusionsV1']),
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
	createBodyJsonField('sensorVisibilityExclusions', ['createSVExclusionsV1', 'updateSensorVisibilityExclusionsV1']),
	...createStandardPaginationFields('sensorVisibilityExclusions', ['querySensorVisibilityExclusionsV1']),
];
