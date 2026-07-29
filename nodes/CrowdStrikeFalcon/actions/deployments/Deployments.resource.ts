import type { INodeProperties } from 'n8n-workflow';

export const deploymentsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['deployments'],
			},
		},
		options: [
			{ name: 'Get Deployments External V1', value: 'getDeploymentsExternalV1', description: 'Get deployment resources by IDs', action: 'Get deployments external v1' },
		],
		default: 'getDeploymentsExternalV1',
	},
];

export const deploymentsFields: INodeProperties[] = [
	{
		displayName: 'Authorization',
		name: 'authorization',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: {
			show: {
				resource: ['deployments'],
				operation: ['getDeploymentsExternalV1'],
			},
		},
		default: '',
		required: true,
		description: 'Authorization header string',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['deployments'],
				operation: ['getDeploymentsExternalV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of deployment IDs',
	},
	{
		displayName: 'CS Username',
		name: 'xCSUSERNAME',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['deployments'],
				operation: ['getDeploymentsExternalV1'],
			},
		},
		default: '',
		description: 'Optional CrowdStrike username header',
	},
];
