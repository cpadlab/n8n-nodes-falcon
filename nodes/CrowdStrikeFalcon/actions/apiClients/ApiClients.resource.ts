import type { INodeProperties } from 'n8n-workflow';

export const apiClientsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['apiClients'],
			},
		},
		options: [
			{
				name: 'Get All API Client IDs',
				value: 'getAllAPIClientIdsForCustomer',
				description: 'Get all API client IDs for customer',
				action: 'Get all API client IDs',
			},
			{
				name: 'Get API Clients by IDs',
				value: 'getAPIClients',
				description: 'Get API Clients based on API Client IDs provided',
				action: 'Get API clients by IDs',
			},
			{
				name: 'Get Accessible Scopes',
				value: 'getAccessibleScopes',
				description: 'Get all available API scopes for customer',
				action: 'Get accessible scopes',
			},
			{
				name: 'Create API Client',
				value: 'createAPIClient',
				description: 'Create a new API Client',
				action: 'Create API client',
			},
			{
				name: 'Update API Client',
				value: 'updateAPIClient',
				description: 'Update an existing API Client by ID',
				action: 'Update API client',
			},
			{
				name: 'Delete API Clients',
				value: 'deleteAPIClients',
				description: 'Delete existing API Clients based on IDs',
				action: 'Delete API clients',
			},
			{
				name: 'Reset API Client Secret',
				value: 'resetAPIClientSecret',
				description: 'Reset existing API Client secret by IDs',
				action: 'Reset API client secret',
			},
		],
		default: 'getAllAPIClientIdsForCustomer',
	},
];

export const apiClientsFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                       getAllAPIClientIdsForCustomer                        */
	/* -------------------------------------------------------------------------- */
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
				resource: ['apiClients'],
				operation: ['getAllAPIClientIdsForCustomer'],
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
				resource: ['apiClients'],
				operation: ['getAllAPIClientIdsForCustomer'],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['apiClients'],
				operation: ['getAllAPIClientIdsForCustomer'],
			},
		},
		default: '',
		description: 'Sort criteria for returned API Client IDs',
	},

	/* -------------------------------------------------------------------------- */
	/*                   getAPIClients / deleteAPIClients                         */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'API Client IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['apiClients'],
				operation: ['getAPIClients', 'deleteAPIClients', 'resetAPIClientSecret'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of API Client IDs',
	},

	/* -------------------------------------------------------------------------- */
	/*                        resetAPIClientSecret                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Action Name',
		name: 'actionName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['apiClients'],
				operation: ['resetAPIClientSecret'],
			},
		},
		default: 'reset_secret',
		required: true,
		description: 'Action name specified to reset secret (e.g., reset_secret)',
	},

	/* -------------------------------------------------------------------------- */
	/*                        updateAPIClient                                     */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'API Client ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['apiClients'],
				operation: ['updateAPIClient'],
			},
		},
		default: '',
		required: true,
		description: 'API Client ID to update',
	},

	/* -------------------------------------------------------------------------- */
	/*                 createAPIClient / updateAPIClient Payload                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['apiClients'],
				operation: ['createAPIClient', 'updateAPIClient'],
			},
		},
		default: '',
		required: true,
		description: 'JSON object payload for API Client creation or update',
	},
];
