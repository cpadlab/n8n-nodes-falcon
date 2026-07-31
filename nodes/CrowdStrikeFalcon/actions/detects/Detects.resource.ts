import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createFilterField, createLimitField, createOffsetField, createOperationField, createSortField } from '../common';

export const detectsOperations: INodeProperties[] = [
	createOperationField('detects', [

			{ name: 'Get Aggregate Detects (Deprecated)', value: 'getAggregateDetects', description: 'Get aggregate detects (deprecated)', action: 'Get aggregate detects' },
			{ name: 'Get Detect Summaries (Deprecated)', value: 'getDetectSummaries', description: 'Get detect summaries by IDs (deprecated)', action: 'Get detect summaries' },
			{ name: 'Query Detects (Deprecated)', value: 'queryDetects', description: 'Query detects matching filter criteria (deprecated)', action: 'Query detects' },
			{ name: 'Update Detects by IDs V2 (Deprecated)', value: 'updateDetectsByIdsV2', description: 'Update detects by IDs (deprecated)', action: 'Update detects by ids v2' },
		
	], 'queryDetects'),
];

export const detectsFields: INodeProperties[] = [
	createBodyJsonField('detects', ['getAggregateDetects', 'getDetectSummaries', 'updateDetectsByIdsV2']),
	createFilterField('detects', ['queryDetects']),
	{
		displayName: 'Search Query (q)',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['detects'],
				operation: ['queryDetects'],
			},
		},
		default: '',
		description: 'Search string',
	},
	createLimitField('detects', ['queryDetects']),
	createOffsetField('detects', ['queryDetects']),
	createSortField('detects', ['queryDetects']),
];
