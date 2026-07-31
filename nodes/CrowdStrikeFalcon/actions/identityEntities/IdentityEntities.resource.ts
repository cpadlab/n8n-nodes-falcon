import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const identityEntitiesOperations: INodeProperties[] = [
	createOperationField('identityEntities', [

			{ name: 'Get Sensor Aggregates', value: 'getSensorAggregates', description: 'Get sensor aggregates as specified via JSON in request body', action: 'Get sensor aggregates' },
			{ name: 'Get Sensor Details', value: 'getSensorDetails', description: 'Get details on one or more sensors by providing device IDs in body', action: 'Get sensor details' },
			{ name: 'Query Sensors by Filter', value: 'querySensorsByFilter', description: 'Search for sensors by hostname, IP, and other criteria', action: 'Query sensors by filter' },
		
	], 'querySensorsByFilter'),
];

export const identityEntitiesFields: INodeProperties[] = [
	createBodyJsonField('identityEntities', ['getSensorAggregates', 'getSensorDetails']),
	...createStandardPaginationFields('identityEntities', ['querySensorsByFilter']),
];
