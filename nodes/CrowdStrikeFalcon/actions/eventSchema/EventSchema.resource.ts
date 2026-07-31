import type { INodeProperties } from 'n8n-workflow';

import { createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const eventSchemaOperations: INodeProperties[] = [
	createOperationField('eventSchema', [

			{ name: 'Fetch Combined Schema', value: 'fdrschemaCombinedEventGet', description: 'Fetch combined event schema', action: 'Fetch combined schema' },
			{ name: 'Fetch Event Schema by ID', value: 'fdrschemaEntitiesEventGet', description: 'Fetch event schema by ID', action: 'Fetch event schema by ID' },
			{ name: 'Get Event Query IDs', value: 'fdrschemaQueriesEventGet', description: 'Get list of event IDs given a particular query', action: 'Get event query IDs' },
		
	], 'fdrschemaCombinedEventGet'),
];

export const eventSchemaFields: INodeProperties[] = [
	createIdsField('eventSchema', ['fdrschemaEntitiesEventGet']),
	...createStandardPaginationFields('eventSchema', ['fdrschemaQueriesEventGet']),
];
