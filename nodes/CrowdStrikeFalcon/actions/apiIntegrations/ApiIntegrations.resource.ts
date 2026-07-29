import type { INodeProperties } from 'n8n-workflow';

export const apiIntegrationsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['apiIntegrations'],
			},
		},
		options: [
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
		],
		default: 'getCombinedPluginConfigs',
	},
];

export const apiIntegrationsFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                        executeCommand & executeCommandProxy                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Body / Resources (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['apiIntegrations'],
				operation: ['executeCommand', 'executeCommandProxy'],
			},
		},
		default: '',
		required: true,
		description: 'JSON object or array payload containing command execution details',
	},

	/* -------------------------------------------------------------------------- */
	/*                       getCombinedPluginConfigs                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['apiIntegrations'],
				operation: ['getCombinedPluginConfigs'],
			},
		},
		default: '',
		description: 'FQL filter string to refine results',
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
				resource: ['apiIntegrations'],
				operation: ['getCombinedPluginConfigs'],
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
				resource: ['apiIntegrations'],
				operation: ['getCombinedPluginConfigs'],
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
				resource: ['apiIntegrations'],
				operation: ['getCombinedPluginConfigs'],
			},
		},
		default: '',
		description: 'Sort criteria for returned config resources',
	},
];
