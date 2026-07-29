import type { INodeProperties } from 'n8n-workflow';

export const falconIdOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['falconId'],
			},
		},
		options: [
			{ name: 'Delete Third Party Passkey Registry', value: 'deleteThirdPartyPasskeyRegistry', description: 'Deletes third party passkey registries', action: 'Delete third party passkey registry' },
			{ name: 'Get Third Party Passkey Registry', value: 'getThirdPartyPasskeyRegistry', description: 'Fetches third party passkey registries', action: 'Get third party passkey registry' },
			{ name: 'Query Third Party Passkey Registry', value: 'queryThirdPartyPasskeyRegistry', description: 'Query third party passkey registries', action: 'Query third party passkey registry' },
			{ name: 'Update Third Party Passkey Registry', value: 'updateThirdPartyPasskeyRegistry', description: 'Updates third party passkey registries', action: 'Update third party passkey registry' },
		],
		default: 'queryThirdPartyPasskeyRegistry',
	},
];

export const falconIdFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconId'],
				operation: ['deleteThirdPartyPasskeyRegistry', 'getThirdPartyPasskeyRegistry'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of passkey registry IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['falconId'],
				operation: ['updateThirdPartyPasskeyRegistry'],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload array of patch requests',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconId'],
				operation: ['queryThirdPartyPasskeyRegistry'],
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
				resource: ['falconId'],
				operation: ['queryThirdPartyPasskeyRegistry'],
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
				resource: ['falconId'],
				operation: ['queryThirdPartyPasskeyRegistry'],
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
				resource: ['falconId'],
				operation: ['queryThirdPartyPasskeyRegistry'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
