import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createFilterField, createIdsField, createLimitField, createOffsetField, createOperationField, createSortField } from '../common';

export const scheduledReportsOperations: INodeProperties[] = [
	createOperationField('scheduledReports', [

			{ name: 'Execute', value: 'execute', description: 'Launch scheduled report executions for report IDs', action: 'Execute' },
			{ name: 'Query', value: 'query', description: 'Find all report IDs matching query with filter', action: 'Query' },
			{ name: 'Query By ID', value: 'queryById', description: 'Retrieve scheduled reports for provided report IDs', action: 'Query by ID' },
		
	], 'query'),
];

export const scheduledReportsFields: INodeProperties[] = [
	createIdsField('scheduledReports', ['queryById']),
	createBodyJsonField('scheduledReports', ['execute']),
	createFilterField('scheduledReports', ['query']),
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['scheduledReports'],
				operation: ['query'],
			},
		},
		default: '',
		description: 'Search string',
	},
	createLimitField('scheduledReports', ['query']),
	createOffsetField('scheduledReports', ['query']),
	createSortField('scheduledReports', ['query']),
];
