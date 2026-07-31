import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createLimitField, createOffsetField, createOperationField } from '../common';

export const aspmOperations: INodeProperties[] = [
	createOperationField('aspm', [

			{ name: 'Create Executor Node', value: 'createExecutorNode', description: 'Create a new relay node', action: 'Create executor node' },
			{ name: 'Create Integration', value: 'createIntegration', description: 'Create a new integration', action: 'Create integration' },
			{ name: 'Create Integration Task', value: 'createIntegrationTask', description: 'Create new integration task', action: 'Create integration task' },
			{ name: 'Delete Executor Node', value: 'deleteExecutorNode', description: 'Delete a relay node', action: 'Delete executor node' },
			{ name: 'Delete Group ID 09', value: 'deleteGroupID09', description: 'Delete group by ID', action: 'Delete group id 09' },
			{ name: 'Delete Integration', value: 'deleteIntegration', description: 'Delete an existing integration by ID', action: 'Delete integration' },
			{ name: 'Delete Integration Task', value: 'deleteIntegrationTask', description: 'Delete an existing integration task by ID', action: 'Delete integration task' },
			{ name: 'Delete Tags', value: 'deleteTags', description: 'Remove existing tags', action: 'Delete tags' },
			{ name: 'Execute Function Data', value: 'executeFunctionData', description: 'Query language queries (MSA format)', action: 'Execute function data' },
			{ name: 'Execute Function Data Count', value: 'executeFunctionDataCount', description: 'Query language count queries (MSA format)', action: 'Execute function data count' },
			{ name: 'Execute Function Data Query', value: 'executeFunctionDataQuery', description: 'Query language queries', action: 'Execute function data query' },
			{ name: 'Execute Function Data Query Count', value: 'executeFunctionDataQueryCount', description: 'Query language count queries', action: 'Execute function data query count' },
			{ name: 'Execute Functions', value: 'executeFunctions', description: 'Query language services queries', action: 'Execute functions' },
			{ name: 'Execute Functions Count', value: 'executeFunctionsCount', description: 'Query language count queries for functions', action: 'Execute functions count' },
			{ name: 'Execute Functions Overtime', value: 'executeFunctionsOvertime', description: 'Query language overtime queries', action: 'Execute functions overtime' },
			{ name: 'Execute Functions Query', value: 'executeFunctionsQuery', description: 'Query language services queries', action: 'Execute functions query' },
			{ name: 'Execute Functions Query Count', value: 'executeFunctionsQueryCount', description: 'Query language count queries', action: 'Execute functions query count' },
			{ name: 'Execute Functions Query Overtime', value: 'executeFunctionsQueryOvertime', description: 'Query language overtime queries', action: 'Execute functions query overtime' },
			{ name: 'Execute Query', value: 'executeQuery', description: 'Execute a query matching query page syntax', action: 'Execute query' },
			{ name: 'Get Cloud Security Integration State', value: 'getCloudSecurityIntegrationState', description: 'Get Cloud Security integration state', action: 'Get cloud security integration state' },
			{ name: 'Get Executor Nodes', value: 'getExecutorNodes', description: 'Get all the relay nodes', action: 'Get executor nodes' },
			{ name: 'Get Executor Nodes Instances CSV', value: 'getExecutorNodesID09InstancesCsv', description: 'Retrieve relay instances in CSV format', action: 'Get executor nodes instances csv' },
			{ name: 'Get Executor Nodes Metadata', value: 'getExecutorNodesMetadata', description: 'Get metadata about all executor nodes', action: 'Get executor nodes metadata' },
			{ name: 'Get Group ID 09 V2', value: 'getGroupID09V2', description: 'Get group details', action: 'Get group id 09 v2' },
			{ name: 'Get Groups Hierarchy V2', value: 'getGroupsHierV2', description: 'Get group hierarchy', action: 'Get groups hierarchy v2' },
			{ name: 'Get Groups List V2', value: 'getGroupsListV2', description: 'Get groups list', action: 'Get groups list v2' },
			{ name: 'Get Integration Tasks', value: 'getIntegrationTasks', description: 'Get all the integration tasks', action: 'Get integration tasks' },
			{ name: 'Get Integration Tasks Admin', value: 'getIntegrationTasksAdmin', description: 'Get integration tasks with admin scope', action: 'Get integration tasks admin' },
			{ name: 'Get Integration Tasks Metadata', value: 'getIntegrationTasksMetadata', description: 'Get metadata about all integration tasks', action: 'Get integration tasks metadata' },
			{ name: 'Get Integration Tasks V2', value: 'getIntegrationTasksV2', description: 'Get all integration tasks V2', action: 'Get integration tasks v2' },
			{ name: 'Get Integration Types', value: 'getIntegrationTypes', description: 'Get all the integration types', action: 'Get integration types' },
			{ name: 'Get Integrations', value: 'getIntegrations', description: 'Get list of all integrations', action: 'Get integrations' },
			{ name: 'Get Integrations V2', value: 'getIntegrationsV2', description: 'Get list of all integrations V2', action: 'Get integrations v2' },
			{ name: 'Get Service Artifacts', value: 'getServiceArtifacts', description: 'Get service artifacts', action: 'Get service artifacts' },
			{ name: 'Get Service Violation Types', value: 'getServiceViolationTypes', description: 'Get different types of violation', action: 'Get service violation types' },
			{ name: 'Get Services Count', value: 'getServicesCount', description: 'Get total amount of existing services', action: 'Get services count' },
			{ name: 'Get Tags', value: 'getTags', description: 'Get all tags', action: 'Get tags' },
			{ name: 'Get Users V2', value: 'getUsersV2', description: 'List users', action: 'Get users v2' },
			{ name: 'Post Group ID 09 Update Default', value: 'postGroupID09UpdateDefault', description: 'Update default group', action: 'Post group id 09 update default' },
			{ name: 'Post Group ID 09 V2', value: 'postGroupID09V2', description: 'Update group', action: 'Post group id 09 v2' },
			{ name: 'Post Group V2', value: 'postGroupV2', description: 'Create group', action: 'Post group v2' },
			{ name: 'Run Integration Task', value: 'runIntegrationTask', description: 'Run an integration task by ID', action: 'Run integration task' },
			{ name: 'Run Integration Task Admin', value: 'runIntegrationTaskAdmin', description: 'Run an integration task by ID (admin scope)', action: 'Run integration task admin' },
			{ name: 'Run Integration Task V2', value: 'runIntegrationTaskV2', description: 'Run an integration task by ID V2', action: 'Run integration task v2' },
			{ name: 'ServiceNow Get Deployments', value: 'serviceNowGetDeployments', description: 'Get ServiceNow deployments', action: 'Service now get deployments' },
			{ name: 'ServiceNow Get Services', value: 'serviceNowGetServices', description: 'Get ServiceNow services', action: 'Service now get services' },
			{ name: 'Set Cloud Security Integration State', value: 'setCloudSecurityIntegrationState', description: 'Set Cloud Security integration state', action: 'Set cloud security integration state' },
			{ name: 'Update Executor Node', value: 'updateExecutorNode', description: 'Update an existing relay node', action: 'Update executor node' },
			{ name: 'Update Integration', value: 'updateIntegration', description: 'Update an existing integration by ID', action: 'Update integration' },
			{ name: 'Update Integration Task', value: 'updateIntegrationTask', description: 'Update an existing integration task by ID', action: 'Update integration task' },
			{ name: 'Upsert Business Applications', value: 'upsertBusinessApplications', description: 'Create or update business applications', action: 'Upsert business applications' },
			{ name: 'Upsert Tags', value: 'upsertTags', description: 'Create new or update existing tag', action: 'Upsert tags' },
		
	], 'getIntegrations'),
];

export const aspmFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                   ID Field                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID',
		name: 'iD',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['aspm'],
				operation: [
					'deleteExecutorNode',
					'deleteGroupID09',
					'deleteIntegration',
					'deleteIntegrationTask',
					'getExecutorNodesID09InstancesCsv',
					'getGroupID09V2',
					'postGroupID09UpdateDefault',
					'postGroupID09V2',
					'runIntegrationTask',
					'runIntegrationTaskAdmin',
					'runIntegrationTaskV2',
					'updateIntegration',
					'updateIntegrationTask',
				],
			},
		},
		default: 0,
		required: true,
		description: 'Numeric ID parameter for the operation',
	},

	/* -------------------------------------------------------------------------- */
	/*                                 Field String                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Field',
		name: 'field',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['aspm'],
				operation: [
					'executeFunctionData',
					'executeFunctionDataQuery',
					'executeFunctionDataQueryCount',
					'executeFunctions',
					'executeFunctionsOvertime',
					'executeFunctionsQuery',
					'executeFunctionsQueryCount',
					'executeFunctionsQueryOvertime',
				],
			},
		},
		default: '',
		required: true,
		description: 'Field query parameter string',
	},

	/* -------------------------------------------------------------------------- */
	/*                                Node Type String                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Node Type',
		name: 'nodeType',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['aspm'],
				operation: ['getExecutorNodes'],
			},
		},
		default: '',
		required: true,
		description: 'Relay node type',
	},

	/* -------------------------------------------------------------------------- */
	/*                            Persistent Signature                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Persistent Signature',
		name: 'persistentSignature',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['aspm'],
				operation: ['getServiceArtifacts'],
			},
		},
		default: '',
		required: true,
		description: 'Persistent signature string',
	},

	/* -------------------------------------------------------------------------- */
	/*                              General Body JSON                             */
	/* -------------------------------------------------------------------------- */
	createBodyJsonField('aspm', ['createExecutorNode',
					'createIntegration',
					'createIntegrationTask',
					'deleteTags',
					'executeQuery',
					'getExecutorNodesID09InstancesCsv',
					'getServiceViolationTypes',
					'getServicesCount',
					'postGroupID09V2',
					'postGroupV2',
					'runIntegrationTask',
					'runIntegrationTaskAdmin',
					'runIntegrationTaskV2',
					'setCloudSecurityIntegrationState',
					'updateExecutorNode',
					'updateIntegration',
					'updateIntegrationTask',
					'upsertBusinessApplications',
					'upsertTags',]),

	/* -------------------------------------------------------------------------- */
	/*                             Pagination & Filters                           */
	/* -------------------------------------------------------------------------- */
	createLimitField('aspm', ['getExecutorNodes',
					'getIntegrationTasks',
					'getIntegrationTasksAdmin',
					'getIntegrationTasksV2',
					'getServiceArtifacts',
					'getTags',
					'serviceNowGetDeployments',
					'serviceNowGetServices',]),
	createOffsetField('aspm', ['getExecutorNodes',
					'getIntegrationTasks',
					'getIntegrationTasksAdmin',
					'getIntegrationTasksV2',
					'getServiceArtifacts',
					'getTags',
					'serviceNowGetDeployments',
					'serviceNowGetServices',]),
	{
		displayName: 'Category',
		name: 'category',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['aspm'],
				operation: [
					'getIntegrationTasks',
					'getIntegrationTasksAdmin',
					'getIntegrationTasksMetadata',
					'getIntegrationTasksV2',
					'getIntegrations',
					'getIntegrationsV2',
					'runIntegrationTask',
					'runIntegrationTaskAdmin',
					'runIntegrationTaskV2',
				],
			},
		},
		default: '',
		description: 'Category filter',
	},
];
