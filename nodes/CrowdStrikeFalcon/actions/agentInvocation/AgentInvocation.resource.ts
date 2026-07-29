import type { INodeProperties } from 'n8n-workflow';

export const agentInvocationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['agentInvocation'],
			},
		},
		options: [
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
		],
		default: 'getAgentInvocationV3',
	},
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
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['agentInvocation'],
				operation: ['invokePublishedAgentExternalV1'],
			},
		},
		default: '',
		required: true,
		description: 'JSON payload containing input parameters to invoke the published agent',
	},
];
