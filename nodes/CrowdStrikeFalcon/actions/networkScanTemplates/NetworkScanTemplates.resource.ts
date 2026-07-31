import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const networkScanTemplatesOperations: INodeProperties[] = [
	createOperationField('networkScanTemplates', [

			{ name: 'Create Templates', value: 'createTemplates', description: 'Create templates using provided specifications', action: 'Create templates' },
			{ name: 'Delete Templates', value: 'deleteTemplates', description: 'Delete templates by their IDs', action: 'Delete templates' },
			{ name: 'Get Template Configs', value: 'getTemplateConfigs', description: 'Get details on network scan template configurations', action: 'Get template configs' },
			{ name: 'Get Templates', value: 'getTemplates', description: 'Get templates by their IDs', action: 'Get templates' },
			{ name: 'Query Templates', value: 'queryTemplates', description: 'Get templates IDs by filter', action: 'Query templates' },
			{ name: 'Update Templates', value: 'updateTemplates', description: 'Update templates using provided specifications', action: 'Update templates' },
		
	], 'queryTemplates'),
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
	createBodyJsonField('networkScanTemplates', ['createTemplates', 'updateTemplates']),
	...createStandardPaginationFields('networkScanTemplates', ['queryTemplates']),
];
