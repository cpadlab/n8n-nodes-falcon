import type { INodeProperties } from 'n8n-workflow';

export const accessScopesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['accessScopes'],
			},
		},
		options: [
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
		],
		default: 'queryAccessScopesExternal',
	},
];

export const accessScopesFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                        queryAccessScopesExternal                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['accessScopes'],
				operation: ['queryAccessScopesExternal'],
			},
		},
		default: '',
		description: 'FQL filter string to refine results',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['accessScopes'],
				operation: ['queryAccessScopesExternal'],
			},
		},
		default: '',
		description: 'Sort criteria for returned Access Scope IDs',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		displayOptions: {
			show: {
				resource: ['accessScopes'],
				operation: ['queryAccessScopesExternal'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		typeOptions: {
			minValue: 0,
		},
		displayOptions: {
			show: {
				resource: ['accessScopes'],
				operation: ['queryAccessScopesExternal'],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},

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
