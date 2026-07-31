import type { INodeProperties } from 'n8n-workflow';

import { createFilterField, createLimitField, createOffsetField, createOperationField, createSortField } from '../common';

export const accessScopesOperations: INodeProperties[] = [
	createOperationField('accessScopes', [

			{
				name: 'Query Access Scopes',
				value: 'queryAccessScopesExternal',
				description: 'Query Access Scopes and return matching IDs',
				action: 'Query access scopes',
			},
			{
				name: 'Get Access Scopes by IDs',
				value: 'listAccessScopesExternal',
				description: 'Retrieves full details for given Access Scope IDs',
				action: 'Get access scopes by IDs',
			},
		
	], 'queryAccessScopesExternal'),
];

export const accessScopesFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                        queryAccessScopesExternal                           */
	/* -------------------------------------------------------------------------- */
	createFilterField('accessScopes', ['queryAccessScopesExternal']),
	createSortField('accessScopes', ['queryAccessScopesExternal']),
	createLimitField('accessScopes', ['queryAccessScopesExternal']),
	createOffsetField('accessScopes', ['queryAccessScopesExternal']),

	/* -------------------------------------------------------------------------- */
	/*                         listAccessScopesExternal                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Access Scope IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['accessScopes'],
				operation: ['listAccessScopesExternal'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Access Scope IDs to retrieve',
	},
];
