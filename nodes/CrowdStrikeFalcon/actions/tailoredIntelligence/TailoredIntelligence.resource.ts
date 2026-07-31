import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createFilterField, createLimitField, createOffsetField, createOperationField, createSortField } from '../common';

export const tailoredIntelligenceOperations: INodeProperties[] = [
	createOperationField('tailoredIntelligence', [

			{ name: 'Get Events Body', value: 'getEventsBody', description: 'Get event body for event ID', action: 'Get events body' },
			{ name: 'Get Events Entities', value: 'getEventsEntities', description: 'Get events entities for specified IDs', action: 'Get events entities' },
			{ name: 'Get Rules Entities', value: 'getRulesEntities', description: 'Get rules entities for specified IDs', action: 'Get rules entities' },
			{ name: 'Query Events', value: 'queryEvents', description: 'Get events IDs matching filter criteria', action: 'Query events' },
			{ name: 'Query Rules', value: 'queryRules', description: 'Get rules IDs matching filter criteria', action: 'Query rules' },
		
	], 'queryEvents'),
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
	createBodyJsonField('tailoredIntelligence', ['getEventsEntities', 'getRulesEntities']),
	createFilterField('tailoredIntelligence', ['queryEvents', 'queryRules']),
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
	createLimitField('tailoredIntelligence', ['queryEvents', 'queryRules']),
	createOffsetField('tailoredIntelligence', ['queryEvents', 'queryRules']),
	createSortField('tailoredIntelligence', ['queryEvents', 'queryRules']),
];
