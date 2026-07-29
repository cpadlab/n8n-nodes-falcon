import type { INodeProperties } from 'n8n-workflow';

export const installationTokensOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['installationTokens'],
			},
		},
		options: [
			{ name: 'Audit Events Query', value: 'auditEventsQuery', description: 'Search for audit events by providing an FQL filter and paging details', action: 'Audit events query' },
			{ name: 'Audit Events Read', value: 'auditEventsRead', description: 'Gets the details of one or more audit events by ID', action: 'Audit events read' },
			{ name: 'Customer Settings Read', value: 'customerSettingsRead', description: 'Check current installation token settings', action: 'Customer settings read' },
			{ name: 'Tokens Create', value: 'tokensCreate', description: 'Creates an installation token', action: 'Tokens create' },
			{ name: 'Tokens Delete', value: 'tokensDelete', description: 'Deletes a token immediately', action: 'Tokens delete' },
			{ name: 'Tokens Query', value: 'tokensQuery', description: 'Search for tokens by providing an FQL filter and paging details', action: 'Tokens query' },
			{ name: 'Tokens Read', value: 'tokensRead', description: 'Gets the details of one or more tokens by ID', action: 'Tokens read' },
			{ name: 'Tokens Update', value: 'tokensUpdate', description: 'Updates one or more tokens', action: 'Tokens update' },
		],
		default: 'tokensQuery',
	},
];

export const installationTokensFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['installationTokens'],
				operation: ['auditEventsRead', 'tokensDelete', 'tokensRead', 'tokensUpdate'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['installationTokens'],
				operation: ['tokensCreate', 'tokensUpdate'],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['installationTokens'],
				operation: ['auditEventsQuery', 'tokensQuery'],
			},
		},
		default: '',
		description: 'FQL filter string',
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
				resource: ['installationTokens'],
				operation: ['auditEventsQuery', 'tokensQuery'],
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
				resource: ['installationTokens'],
				operation: ['auditEventsQuery', 'tokensQuery'],
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
				resource: ['installationTokens'],
				operation: ['auditEventsQuery', 'tokensQuery'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
