import type { INodeProperties } from 'n8n-workflow';

import { createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const discoverIotOperations: INodeProperties[] = [
	createOperationField('discoverIot', [

			{ name: 'Get IoT Hosts', value: 'getIotHosts', description: 'Get details on IoT assets by providing IDs', action: 'Get IoT hosts' },
			{ name: 'Query IoT Hosts', value: 'queryIotHosts', description: 'Search for IoT assets returning matching IDs', action: 'Query IoT hosts' },
			{ name: 'Query IoT Hosts V2', value: 'queryIotHostsV2', description: 'Search for IoT assets returning matching IDs V2', action: 'Query IoT hosts v2' },
		
	], 'queryIotHosts'),
];

export const discoverIotFields: INodeProperties[] = [
	createIdsField('discoverIot', ['getIotHosts']),
	...createStandardPaginationFields('discoverIot', ['queryIotHosts', 'queryIotHostsV2']),
];
