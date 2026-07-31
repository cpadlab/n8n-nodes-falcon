import type { INodeProperties } from 'n8n-workflow';

import { createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const driftIndicatorsOperations: INodeProperties[] = [
	createOperationField('driftIndicators', [

			{ name: 'Get Drift Indicators Values by Date', value: 'getDriftIndicatorsValuesByDate', description: 'Returns the count of Drift Indicators by date', action: 'Get drift indicators values by date' },
			{ name: 'Read Drift Indicator Entities', value: 'readDriftIndicatorEntities', description: 'Retrieve Drift Indicator entities identified by IDs', action: 'Read drift indicator entities' },
			{ name: 'Read Drift Indicators Count', value: 'readDriftIndicatorsCount', description: 'Returns total count of Drift indicators over time period', action: 'Read drift indicators count' },
			{ name: 'Search and Read Drift Indicator Entities', value: 'searchAndReadDriftIndicatorEntities', description: 'Retrieve Drift Indicators by search criteria', action: 'Search and read drift indicator entities' },
			{ name: 'Search Drift Indicators', value: 'searchDriftIndicators', description: 'Retrieve all drift indicators matching query', action: 'Search drift indicators' },
		
	], 'searchDriftIndicators'),
];

export const driftIndicatorsFields: INodeProperties[] = [
	createIdsField('driftIndicators', ['readDriftIndicatorEntities']),
	...createStandardPaginationFields('driftIndicators', ['getDriftIndicatorsValuesByDate',
					'readDriftIndicatorsCount',
					'searchAndReadDriftIndicatorEntities',
					'searchDriftIndicators',]),
];
