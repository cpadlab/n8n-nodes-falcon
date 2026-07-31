import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createFilterField, createLimitField, createOffsetField, createOperationField, createSortField } from '../common';

export const reportExecutionsOperations: INodeProperties[] = [
	createOperationField('reportExecutions', [

			{ name: 'Report Executions Download Get', value: 'reportExecutionsDownloadGet', description: 'Get report entity download', action: 'Report executions download get' },
			{ name: 'Report Executions Get', value: 'reportExecutionsGet', description: 'Retrieve report details for provided report IDs', action: 'Report executions get' },
			{ name: 'Report Executions Query', value: 'reportExecutionsQuery', description: 'Find all report execution IDs matching query with filter', action: 'Report executions query' },
			{ name: 'Report Executions Retry', value: 'reportExecutionsRetry', description: 'Retry report executions', action: 'Report executions retry' },
		
	], 'reportExecutionsQuery'),
];

export const reportExecutionsFields: INodeProperties[] = [
	{
		displayName: 'Report Execution ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['reportExecutions'],
				operation: ['reportExecutionsDownloadGet'],
			},
		},
		default: '',
		required: true,
		description: 'Report execution ID',
	},
	{
		displayName: 'Report Execution IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['reportExecutions'],
				operation: ['reportExecutionsGet'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of report execution IDs',
	},
	createBodyJsonField('reportExecutions', ['reportExecutionsRetry']),
	createFilterField('reportExecutions', ['reportExecutionsQuery']),
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['reportExecutions'],
				operation: ['reportExecutionsQuery'],
			},
		},
		default: '',
		description: 'Search query string',
	},
	createLimitField('reportExecutions', ['reportExecutionsQuery']),
	createOffsetField('reportExecutions', ['reportExecutionsQuery']),
	createSortField('reportExecutions', ['reportExecutionsQuery']),
];
