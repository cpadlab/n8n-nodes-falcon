import type { INodeProperties } from 'n8n-workflow';

export const cloudSecurityRisksOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cloudSecurityRisks'],
			},
		},
		options: [
			{ name: 'Get Enriched Timeline Risks', value: 'cloudSecurityTimelineRisksEnriched', description: 'Returns the enriched asset timeline', action: 'Get enriched timeline risks' },
		],
		default: 'cloudSecurityTimelineRisksEnriched',
	},
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
