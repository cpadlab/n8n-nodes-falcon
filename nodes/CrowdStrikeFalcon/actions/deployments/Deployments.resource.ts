import type { INodeProperties } from 'n8n-workflow';

import { createIdsField, createOperationField } from '../common';

export const deploymentsOperations: INodeProperties[] = [
	createOperationField('deployments', [

			{ name: 'Get Deployments External V1', value: 'getDeploymentsExternalV1', description: 'Get deployment resources by IDs', action: 'Get deployments external v1' },
		
	], 'getDeploymentsExternalV1'),
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
	createIdsField('deployments', ['getDeploymentsExternalV1']),
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
