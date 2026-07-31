import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createFilterField, createLimitField, createOffsetField, createOperationField, createSortField } from '../common';

export const quarantineOperations: INodeProperties[] = [
	createOperationField('quarantine', [

			{ name: 'Action Update Count', value: 'actionUpdateCount', description: 'Returns count of potentially affected quarantined files for each action', action: 'Action update count' },
			{ name: 'Get Aggregate Files', value: 'getAggregateFiles', description: 'Get quarantine file aggregates as specified via JSON in request body', action: 'Get aggregate files' },
			{ name: 'Get Quarantine Files', value: 'getQuarantineFiles', description: 'Get quarantine file metadata for specified IDs', action: 'Get quarantine files' },
			{ name: 'Query Quarantine Files', value: 'queryQuarantineFiles', description: 'Get quarantine file IDs that match filter criteria', action: 'Query quarantine files' },
			{ name: 'Update Qf by Query', value: 'updateQfByQuery', description: 'Apply quarantine file actions by query', action: 'Update qf by query' },
			{ name: 'Update Quarantined Detects by IDs', value: 'updateQuarantinedDetectsByIds', description: 'Apply action by quarantine file IDs', action: 'Update quarantined detects by IDs' },
		
	], 'queryQuarantineFiles'),
];

export const quarantineFields: INodeProperties[] = [
	createBodyJsonField('quarantine', ['getAggregateFiles',
					'getQuarantineFiles',
					'updateQfByQuery',
					'updateQuarantinedDetectsByIds',]),
	createFilterField('quarantine', ['actionUpdateCount', 'queryQuarantineFiles']),
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['quarantine'],
				operation: ['queryQuarantineFiles'],
			},
		},
		default: '',
		description: 'Search query string',
	},
	createLimitField('quarantine', ['queryQuarantineFiles']),
	createOffsetField('quarantine', ['queryQuarantineFiles']),
	createSortField('quarantine', ['queryQuarantineFiles']),
];
