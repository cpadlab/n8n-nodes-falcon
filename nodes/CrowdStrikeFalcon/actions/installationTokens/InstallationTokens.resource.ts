import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const installationTokensOperations: INodeProperties[] = [
	createOperationField('installationTokens', [

			{ name: 'Audit Events Query', value: 'auditEventsQuery', description: 'Search for audit events by providing an FQL filter and paging details', action: 'Audit events query' },
			{ name: 'Audit Events Read', value: 'auditEventsRead', description: 'Gets the details of one or more audit events by ID', action: 'Audit events read' },
			{ name: 'Customer Settings Read', value: 'customerSettingsRead', description: 'Check current installation token settings', action: 'Customer settings read' },
			{ name: 'Tokens Create', value: 'tokensCreate', description: 'Creates an installation token', action: 'Tokens create' },
			{ name: 'Tokens Delete', value: 'tokensDelete', description: 'Deletes a token immediately', action: 'Tokens delete' },
			{ name: 'Tokens Query', value: 'tokensQuery', description: 'Search for tokens by providing an FQL filter and paging details', action: 'Tokens query' },
			{ name: 'Tokens Read', value: 'tokensRead', description: 'Gets the details of one or more tokens by ID', action: 'Tokens read' },
			{ name: 'Tokens Update', value: 'tokensUpdate', description: 'Updates one or more tokens', action: 'Tokens update' },
		
	], 'tokensQuery'),
];

export const installationTokensFields: INodeProperties[] = [
	createIdsField('installationTokens', ['auditEventsRead', 'tokensDelete', 'tokensRead', 'tokensUpdate']),
	createBodyJsonField('installationTokens', ['tokensCreate', 'tokensUpdate']),
	...createStandardPaginationFields('installationTokens', ['auditEventsQuery', 'tokensQuery']),
];
