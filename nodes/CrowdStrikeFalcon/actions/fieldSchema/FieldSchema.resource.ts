import type { INodeProperties } from 'n8n-workflow';

import { createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const fieldSchemaOperations: INodeProperties[] = [
	createOperationField('fieldSchema', [

			{ name: 'Fetch Field Schema by ID', value: 'fdrschemaEntitiesFieldGet', description: 'Fetch field schema by ID', action: 'Fetch field schema by ID' },
			{ name: 'Get Field Query IDs', value: 'fdrschemaQueriesFieldGet', description: 'Get list of field IDs given a particular query', action: 'Get field query IDs' },
		
	], 'fdrschemaQueriesFieldGet'),
];

export const fieldSchemaFields: INodeProperties[] = [
	createIdsField('fieldSchema', ['fdrschemaEntitiesFieldGet']),
	...createStandardPaginationFields('fieldSchema', ['fdrschemaQueriesFieldGet']),
];
