import type { INodeProperties } from 'n8n-workflow';

export const tailoredIntelligenceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tailoredIntelligence'],
			},
		},
		options: [
			{ name: 'Get Events Body', value: 'getEventsBody', description: 'Get event body for event ID', action: 'Get events body' },
			{ name: 'Get Events Entities', value: 'getEventsEntities', description: 'Get events entities for specified IDs', action: 'Get events entities' },
			{ name: 'Get Rules Entities', value: 'getRulesEntities', description: 'Get rules entities for specified IDs', action: 'Get rules entities' },
			{ name: 'Query Events', value: 'queryEvents', description: 'Get events IDs matching filter criteria', action: 'Query events' },
			{ name: 'Query Rules', value: 'queryRules', description: 'Get rules IDs matching filter criteria', action: 'Query rules' },
		],
		default: 'queryEvents',
	},
];

export const tailoredIntelligenceFields: INodeProperties[] = [
	{
		displayName: 'Event ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['tailoredIntelligence'],
				operation: ['getEventsBody'],
			},
		},
		default: '',
		required: true,
		description: 'Event ID string',
	},
	{
		displayName: 'Authorization',
		name: 'authorization',
		type: 'string',
		typeOptions: {
			password: true,
		},
		displayOptions: {
			show: {
				resource: ['tailoredIntelligence'],
				operation: ['getEventsBody', 'getEventsEntities', 'getRulesEntities', 'queryEvents', 'queryRules'],
			},
		},
		default: '',
		description: 'Authorization header string if required',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['tailoredIntelligence'],
				operation: ['getEventsEntities', 'getRulesEntities'],
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
				resource: ['tailoredIntelligence'],
				operation: ['queryEvents', 'queryRules'],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['tailoredIntelligence'],
				operation: ['queryEvents', 'queryRules'],
			},
		},
		default: '',
		description: 'Search query string',
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
				resource: ['tailoredIntelligence'],
				operation: ['queryEvents', 'queryRules'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['tailoredIntelligence'],
				operation: ['queryEvents', 'queryRules'],
			},
		},
		default: '',
		description: 'Offset string for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['tailoredIntelligence'],
				operation: ['queryEvents', 'queryRules'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
