import type { INodeProperties } from 'n8n-workflow';

import { createOperationField, createStandardPaginationFields } from '../common';

export const unidentifiedContainersOperations: INodeProperties[] = [
	createOperationField('unidentifiedContainers', [

			{ name: 'Count', value: 'count', description: 'Returns total count of Unidentified Containers over a time period', action: 'Count' },
			{ name: 'Count By Date Range', value: 'countByDateRange', description: 'Returns count of Unidentified Containers over last 7 days', action: 'Count by date range' },
			{ name: 'Search', value: 'search', description: 'Search Unidentified Containers by provided search criteria', action: 'Search' },
		
	], 'search'),
];

export const unidentifiedContainersFields: INodeProperties[] = [
	...createStandardPaginationFields('unidentifiedContainers', ['count', 'countByDateRange', 'search']),
];
