import type { INodeProperties } from 'n8n-workflow';

import { createOperationField } from '../common';

export const eventStreamsOperations: INodeProperties[] = [
	createOperationField('eventStreams', [

			{ name: 'List Available Streams OAuth2', value: 'listAvailableStreamsOAuth2', description: 'Discover all event streams in your environment', action: 'List available streams OAuth2' },
			{ name: 'Refresh Active Stream Session', value: 'refreshActiveStreamSession', description: 'Refresh an active event stream session', action: 'Refresh active stream session' },
		
	], 'listAvailableStreamsOAuth2'),
];

export const eventStreamsFields: INodeProperties[] = [
	{
		displayName: 'App ID',
		name: 'appId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['eventStreams'],
				operation: ['listAvailableStreamsOAuth2', 'refreshActiveStreamSession'],
			},
		},
		default: '',
		required: true,
		description: 'Unique application identifier',
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['eventStreams'],
				operation: ['listAvailableStreamsOAuth2'],
			},
		},
		default: '',
		description: 'Format of event stream output',
	},
	{
		displayName: 'Action Name',
		name: 'actionName',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['eventStreams'],
				operation: ['refreshActiveStreamSession'],
			},
		},
		options: [
			{ name: 'Refresh', value: 'refresh' },
		],
		default: 'refresh',
		required: true,
		description: 'Action to perform on stream session',
	},
	{
		displayName: 'Partition',
		name: 'partition',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['eventStreams'],
				operation: ['refreshActiveStreamSession'],
			},
		},
		default: 0,
		required: true,
		description: 'Stream partition index number',
	},
];
