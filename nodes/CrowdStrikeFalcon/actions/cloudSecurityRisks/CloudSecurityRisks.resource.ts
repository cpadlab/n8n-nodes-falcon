import type { INodeProperties } from 'n8n-workflow';

import { createOperationField } from '../common';

export const cloudSecurityRisksOperations: INodeProperties[] = [
	createOperationField('cloudSecurityRisks', [

			{ name: 'Get Enriched Timeline Risks', value: 'cloudSecurityTimelineRisksEnriched', description: 'Returns the enriched asset timeline', action: 'Get enriched timeline risks' },
		
	], 'cloudSecurityTimelineRisksEnriched'),
];

export const cloudSecurityRisksFields: INodeProperties[] = [
	{
		displayName: 'Asset ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudSecurityRisks'],
				operation: ['cloudSecurityTimelineRisksEnriched'],
			},
		},
		default: '',
		required: true,
		description: 'Asset ID to retrieve enriched timeline risks for',
	},
];
