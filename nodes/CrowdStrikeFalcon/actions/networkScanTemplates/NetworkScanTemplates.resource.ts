import type { INodeProperties } from 'n8n-workflow';

export const networkScanTemplatesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['networkScanTemplates'],
			},
		},
		options: [
			{ name: 'Create Templates', value: 'createTemplates', description: 'Create templates using provided specifications', action: 'Create templates' },
			{ name: 'Delete Templates', value: 'deleteTemplates', description: 'Delete templates by their IDs', action: 'Delete templates' },
			{ name: 'Get Template Configs', value: 'getTemplateConfigs', description: 'Get details on network scan template configurations', action: 'Get template configs' },
			{ name: 'Get Templates', value: 'getTemplates', description: 'Get templates by their IDs', action: 'Get templates' },
			{ name: 'Query Templates', value: 'queryTemplates', description: 'Get templates IDs by filter', action: 'Query templates' },
			{ name: 'Update Templates', value: 'updateTemplates', description: 'Update templates using provided specifications', action: 'Update templates' },
		],
		default: 'queryTemplates',
	},
];

export const networkScanTemplatesFields: INodeProperties[] = [
	{
		displayName: 'Template IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanTemplates'],
				operation: ['deleteTemplates', 'getTemplates'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Template IDs',
	},
	{
		displayName: 'X-CS-USERUUID',
		name: 'xCSUSERUUID',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanTemplates'],
				operation: [
					'createTemplates',
					'deleteTemplates',
					'getTemplateConfigs',
					'getTemplates',
					'queryTemplates',
					'updateTemplates',
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
				resource: ['networkScanTemplates'],
				operation: ['createTemplates', 'updateTemplates'],
			},
		},
		default: '',
		required: true,
		description: 'JSON array request payload',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['networkScanTemplates'],
				operation: ['queryTemplates'],
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
				resource: ['networkScanTemplates'],
				operation: ['queryTemplates'],
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
				resource: ['networkScanTemplates'],
				operation: ['queryTemplates'],
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
				resource: ['networkScanTemplates'],
				operation: ['queryTemplates'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
