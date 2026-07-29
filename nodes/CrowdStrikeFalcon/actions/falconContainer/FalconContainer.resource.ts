import type { INodeProperties } from 'n8n-workflow';

export const falconContainerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['falconContainer'],
			},
		},
		options: [
			{ name: 'Get Credentials', value: 'getCredentials', description: 'Gets the registry credentials', action: 'Get credentials' },
		],
		default: 'getCredentials',
	},
];

export const falconContainerFields: INodeProperties[] = [];
