import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const apiIntegrationsOperations: INodeProperties[] = [
	createOperationField('apiIntegrations', [

			{
				name: 'Execute Command',
				value: 'executeCommand',
				description: 'Execute a command',
				action: 'Execute command',
			},
			{
				name: 'Execute Command Proxy',
				value: 'executeCommandProxy',
				description: 'Execute a command and proxy the response directly',
				action: 'Execute command proxy',
			},
			{
				name: 'Get Combined Plugin Configs',
				value: 'getCombinedPluginConfigs',
				description: 'Queries for config resources and returns details',
				action: 'Get combined plugin configs',
			},
		
	], 'getCombinedPluginConfigs'),
];

export const apiIntegrationsFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                        executeCommand & executeCommandProxy                */
	/* -------------------------------------------------------------------------- */
	createBodyJsonField('apiIntegrations', ['executeCommand', 'executeCommandProxy']),

	/* -------------------------------------------------------------------------- */
	/*                       getCombinedPluginConfigs                             */
	/* -------------------------------------------------------------------------- */
	...createStandardPaginationFields('apiIntegrations', ['getCombinedPluginConfigs']),
];
