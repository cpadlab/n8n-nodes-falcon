import type { INodeProperties } from 'n8n-workflow';

export const discoverOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['discover'],
			},
		},
		options: [
			{ name: 'Combined Applications', value: 'combinedApplications', description: 'Search for applications in your environment with filter and paging', action: 'Combined applications' },
			{ name: 'Combined Hosts', value: 'combinedHosts', description: 'Search for assets in your environment with filter and paging', action: 'Combined hosts' },
			{ name: 'Get Accounts', value: 'getAccounts', description: 'Get details on accounts by providing IDs', action: 'Get accounts' },
			{ name: 'Get Applications', value: 'getApplications', description: 'Get details on applications by providing IDs', action: 'Get applications' },
			{ name: 'Get Hosts', value: 'getHosts', description: 'Get details on assets by providing IDs', action: 'Get hosts' },
			{ name: 'Get Logins', value: 'getLogins', description: 'Get details on logins by providing IDs', action: 'Get logins' },
			{ name: 'Query Accounts', value: 'queryAccounts', description: 'Search for accounts returning matching IDs', action: 'Query accounts' },
			{ name: 'Query Applications', value: 'queryApplications', description: 'Search for applications returning matching IDs', action: 'Query applications' },
			{ name: 'Query Hosts', value: 'queryHosts', description: 'Search for assets returning matching IDs', action: 'Query hosts' },
			{ name: 'Query Logins', value: 'queryLogins', description: 'Search for logins returning matching IDs', action: 'Query logins' },
		],
		default: 'combinedHosts',
	},
];

export const discoverFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['discover'],
				operation: ['getAccounts', 'getApplications', 'getHosts', 'getLogins'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['discover'],
				operation: [
					'combinedApplications',
					'combinedHosts',
					'queryAccounts',
					'queryApplications',
					'queryHosts',
					'queryLogins',
				],
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
				resource: ['discover'],
				operation: [
					'combinedApplications',
					'combinedHosts',
					'queryAccounts',
					'queryApplications',
					'queryHosts',
					'queryLogins',
				],
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
				resource: ['discover'],
				operation: ['queryAccounts', 'queryApplications', 'queryHosts', 'queryLogins'],
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
				resource: ['discover'],
				operation: [
					'combinedApplications',
					'combinedHosts',
					'queryAccounts',
					'queryApplications',
					'queryHosts',
					'queryLogins',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
