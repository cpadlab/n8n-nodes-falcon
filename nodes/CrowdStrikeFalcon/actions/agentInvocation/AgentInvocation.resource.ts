import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField } from '../common';

export const agentInvocationOperations: INodeProperties[] = [
	createOperationField('agentInvocation', [

			{
				name: 'Get Agent Invocation',
				value: 'getAgentInvocationV3',
				description: 'Retrieves the list of messages resulting from a specified invocation',
				action: 'Get agent invocation',
			},
			{
				name: 'Invoke Published Agent',
				value: 'invokePublishedAgentExternalV1',
				description: 'Invoke a published agent by ID with specified input',
				action: 'Invoke published agent',
			},
		
	], 'getAgentInvocationV3'),
];

export const agentInvocationFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                           getAgentInvocationV3                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Invocation ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['agentInvocation'],
				operation: ['getAgentInvocationV3'],
			},
		},
		default: '',
		required: true,
		description: 'ID of the agent invocation to retrieve messages for',
	},

	/* -------------------------------------------------------------------------- */
	/*                    invokePublishedAgentExternalV1                          */
	/* -------------------------------------------------------------------------- */
	createBodyJsonField('agentInvocation', ['invokePublishedAgentExternalV1']),
];
