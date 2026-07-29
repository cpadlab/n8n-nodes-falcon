import type { INodeProperties } from 'n8n-workflow';

export const incidentsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['incidents'],
			},
		},
		options: [
			{ name: 'Crowd Score', value: 'crowdScore', description: 'Query environment wide CrowdScore and return entity data', action: 'Crowd score' },
			{ name: 'Get Behaviors', value: 'getBehaviors', description: 'Get details on behaviors by providing behavior IDs in body', action: 'Get behaviors' },
			{ name: 'Get Incidents', value: 'getIncidents', description: 'Get details on incidents by providing incident IDs in body', action: 'Get incidents' },
			{ name: 'Perform Incident Action', value: 'performIncidentAction', description: 'Perform actions on one or more incidents', action: 'Perform incident action' },
			{ name: 'Query Behaviors', value: 'queryBehaviors', description: 'Search for behaviors by providing filter, sort, and paging', action: 'Query behaviors' },
			{ name: 'Query Incidents', value: 'queryIncidents', description: 'Search for incidents by providing filter, sort, and paging', action: 'Query incidents' },
		],
		default: 'queryIncidents',
	},
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
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['incidents'],
				operation: ['getBehaviors', 'getIncidents', 'performIncidentAction'],
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
				resource: ['incidents'],
				operation: ['crowdScore', 'queryBehaviors', 'queryIncidents'],
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
				resource: ['incidents'],
				operation: ['crowdScore', 'queryBehaviors', 'queryIncidents'],
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
				resource: ['incidents'],
				operation: ['crowdScore', 'queryBehaviors', 'queryIncidents'],
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
				resource: ['incidents'],
				operation: ['crowdScore', 'queryBehaviors', 'queryIncidents'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
