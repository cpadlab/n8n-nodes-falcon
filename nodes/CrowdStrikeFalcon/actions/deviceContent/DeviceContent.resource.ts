import type { INodeProperties } from 'n8n-workflow';

import { createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const deviceContentOperations: INodeProperties[] = [
	createOperationField('deviceContent', [

			{ name: 'Entities States V1', value: 'entitiesStatesV1', description: 'Retrieve host content state for IDs', action: 'Entities states v1' },
			{ name: 'Queries States V1', value: 'queriesStatesV1', description: 'Query for the content state of the host', action: 'Queries states v1' },
		
	], 'queriesStatesV1'),
];

export const deviceContentFields: INodeProperties[] = [
	createIdsField('deviceContent', ['entitiesStatesV1']),
	...createStandardPaginationFields('deviceContent', ['queriesStatesV1']),
];
