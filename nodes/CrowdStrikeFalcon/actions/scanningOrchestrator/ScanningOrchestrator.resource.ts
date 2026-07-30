import type { INodeProperties } from 'n8n-workflow';

export const scanningOrchestratorOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['scanningOrchestrator'],
			},
		},
		options: [
			{ name: 'Create Orchestrator Deployment V1', value: 'createOrchestratorDeploymentV1', description: 'Create an orchestrator deployment', action: 'Create orchestrator deployment V1' },
			{ name: 'Delete Orchestrator Deployment V1', value: 'deleteOrchestratorDeploymentV1', description: 'Delete orchestrator deployments by IDs', action: 'Delete orchestrator deployment V1' },
			{ name: 'Get Orchestrator Deployment V1', value: 'getOrchestratorDeploymentV1', description: 'Get orchestrator deployments by IDs', action: 'Get orchestrator deployment V1' },
			{ name: 'Get Orchestrator Deployment V2', value: 'getOrchestratorDeploymentV2', description: 'Get orchestrator deployments by IDs V2', action: 'Get orchestrator deployment V2' },
			{ name: 'Query Orchestrator Deployment V1', value: 'queryOrchestratorDeploymentV1', description: 'Query orchestrator deployments', action: 'Query orchestrator deployment V1' },
			{ name: 'Query Orchestrator Deployment V2', value: 'queryOrchestratorDeploymentV2', description: 'Query orchestrator deployments V2', action: 'Query orchestrator deployment V2' },
			{ name: 'Update Orchestrator Deployment V1', value: 'updateOrchestratorDeploymentV1', description: 'Update an orchestrator deployment', action: 'Update orchestrator deployment V1' },
			{ name: 'Update Orchestrator Deployment V2', value: 'updateOrchestratorDeploymentV2', description: 'Update an orchestrator deployment V2', action: 'Update orchestrator deployment V2' },
		],
		default: 'queryOrchestratorDeploymentV1',
	},
];

export const scanningOrchestratorFields: INodeProperties[] = [
	{
		displayName: 'Deployment IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['scanningOrchestrator'],
				operation: [
					'deleteOrchestratorDeploymentV1',
					'getOrchestratorDeploymentV1',
					'getOrchestratorDeploymentV2',
				],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Orchestrator Deployment IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['scanningOrchestrator'],
				operation: [
					'createOrchestratorDeploymentV1',
					'updateOrchestratorDeploymentV1',
					'updateOrchestratorDeploymentV2',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['scanningOrchestrator'],
				operation: ['queryOrchestratorDeploymentV1', 'queryOrchestratorDeploymentV2'],
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
				resource: ['scanningOrchestrator'],
				operation: ['queryOrchestratorDeploymentV1', 'queryOrchestratorDeploymentV2'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['scanningOrchestrator'],
				operation: ['queryOrchestratorDeploymentV1', 'queryOrchestratorDeploymentV2'],
			},
		},
		default: '',
		description: 'Starting index for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['scanningOrchestrator'],
				operation: ['queryOrchestratorDeploymentV1', 'queryOrchestratorDeploymentV2'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
