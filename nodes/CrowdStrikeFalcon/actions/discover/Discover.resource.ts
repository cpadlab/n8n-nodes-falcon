import type { INodeProperties } from 'n8n-workflow';

import { createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const discoverOperations: INodeProperties[] = [
	createOperationField('discover', [

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
		
	], 'combinedHosts'),
];

export const discoverFields: INodeProperties[] = [
	createIdsField('discover', ['getAccounts', 'getApplications', 'getHosts', 'getLogins']),
	...createStandardPaginationFields('discover', ['combinedApplications',
					'combinedHosts',
					'queryAccounts',
					'queryApplications',
					'queryHosts',
					'queryLogins',]),
];
