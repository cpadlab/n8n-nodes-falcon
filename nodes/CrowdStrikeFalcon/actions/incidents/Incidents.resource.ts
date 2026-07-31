import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const incidentsOperations: INodeProperties[] = [
	createOperationField('incidents', [

			{ name: 'Crowd Score', value: 'crowdScore', description: 'Query environment wide CrowdScore and return entity data', action: 'Crowd score' },
			{ name: 'Get Behaviors', value: 'getBehaviors', description: 'Get details on behaviors by providing behavior IDs in body', action: 'Get behaviors' },
			{ name: 'Get Incidents', value: 'getIncidents', description: 'Get details on incidents by providing incident IDs in body', action: 'Get incidents' },
			{ name: 'Perform Incident Action', value: 'performIncidentAction', description: 'Perform actions on one or more incidents', action: 'Perform incident action' },
			{ name: 'Query Behaviors', value: 'queryBehaviors', description: 'Search for behaviors by providing filter, sort, and paging', action: 'Query behaviors' },
			{ name: 'Query Incidents', value: 'queryIncidents', description: 'Search for incidents by providing filter, sort, and paging', action: 'Query incidents' },
		
	], 'queryIncidents'),
];

export const incidentsFields: INodeProperties[] = [
	{
		displayName: 'Update Detects',
		name: 'updateDetects',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['incidents'],
				operation: ['performIncidentAction'],
			},
		},
		default: false,
		description: 'Whether to update detects',
	},
	{
		displayName: 'Overwrite Detects',
		name: 'overwriteDetects',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['incidents'],
				operation: ['performIncidentAction'],
			},
		},
		default: false,
		description: 'Whether to overwrite detects',
	},
	createBodyJsonField('incidents', ['getBehaviors', 'getIncidents', 'performIncidentAction']),
	...createStandardPaginationFields('incidents', ['crowdScore', 'queryBehaviors', 'queryIncidents']),
];
