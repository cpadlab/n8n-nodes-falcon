import type { INodeProperties } from 'n8n-workflow';

import { createOperationField } from '../common';

export const streamOperations: INodeProperties[] = [
	createOperationField('stream', [

			{ name: 'Stream Invocation Response V1', value: 'streamInvocationResponseV1', description: 'Retrieves the stream of results for an invocation', action: 'Stream invocation response V1' },
		
	], 'streamInvocationResponseV1'),
];

export const streamFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['stream'],
				operation: ['streamInvocationResponseV1'],
			},
		},
		default: '',
		required: true,
		description: 'Invocation ID',
	},
];
