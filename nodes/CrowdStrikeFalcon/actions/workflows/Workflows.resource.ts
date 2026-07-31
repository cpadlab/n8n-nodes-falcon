import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const workflowsOperations: INodeProperties[] = [
	createOperationField('workflows', [

			{ name: 'Deprovision', value: 'deprovision', description: 'Deprovisions a system definition provisioned on target CID', action: 'Deprovision' },
			{ name: 'Execute', value: 'execute', description: 'Executes an on-demand Workflow', action: 'Execute' },
			{ name: 'Execution Action', value: 'executionAction', description: 'Resume, retry, cancel, or stop workflow execution', action: 'Execution action' },
			{ name: 'Execution Results', value: 'executionResults', description: 'Get execution result of a given execution', action: 'Execution results' },
			{ name: 'Promote', value: 'promote', description: 'Promotes a version of a system definition for a customer', action: 'Promote' },
			{ name: 'Provision', value: 'provision', description: 'Provisions a system definition onto target CID', action: 'Provision' },
			{ name: 'V1 Child Executions Query', value: 'v1ChildExecutionsQuery', description: 'Search for child executions by FQL filter', action: 'V1 child executions query' },
			{ name: 'Workflow Activities Combined', value: 'workflowActivitiesCombined', description: 'Search for activities by name', action: 'Workflow activities combined' },
			{ name: 'Workflow Activities Content Combined', value: 'workflowActivitiesContentCombined', description: 'Search for activities content by name', action: 'Workflow activities content combined' },
			{ name: 'Workflow Definitions Action', value: 'workflowDefinitionsAction', description: 'Enable or disable a workflow definition', action: 'Workflow definitions action' },
			{ name: 'Workflow Definitions Combined', value: 'workflowDefinitionsCombined', description: 'Search workflow definitions based on filter', action: 'Workflow definitions combined' },
			{ name: 'Workflow Definitions Delete', value: 'workflowDefinitionsDelete', description: 'Delete workflow definitions and associated versions', action: 'Workflow definitions delete' },
			{ name: 'Workflow Definitions Export', value: 'workflowDefinitionsExport', description: 'Exports a workflow definition by ID', action: 'Workflow definitions export' },
			{ name: 'Workflow Definitions Import', value: 'workflowDefinitionsImport', description: 'Imports a workflow definition based on model', action: 'Workflow definitions import' },
			{ name: 'Workflow Definitions Update', value: 'workflowDefinitionsUpdate', description: 'Updates a workflow definition based on model', action: 'Workflow definitions update' },
			{ name: 'Workflow Execute Internal', value: 'workflowExecuteInternal', description: 'Executes an on-demand Workflow (Internal)', action: 'Workflow execute internal' },
			{ name: 'Workflow Execute Single Node V1', value: 'workflowExecuteSingleNodeV1', description: 'Executes a single activity node', action: 'Workflow execute single node V1' },
			{ name: 'Workflow Executions Combined', value: 'workflowExecutionsCombined', description: 'Search workflow executions based on filter', action: 'Workflow executions combined' },
			{ name: 'Workflow Get Human Input V1', value: 'workflowGetHumanInputV1', description: 'Gets specific human inputs by IDs', action: 'Workflow get human input V1' },
			{ name: 'Workflow Mock Execute', value: 'workflowMockExecute', description: 'Executes a workflow definition with mocks', action: 'Workflow mock execute' },
			{ name: 'Workflow Triggers Combined', value: 'workflowTriggersCombined', description: 'Search for triggers by namespaced identifier', action: 'Workflow triggers combined' },
			{ name: 'Workflow Update Human Input V1', value: 'workflowUpdateHumanInputV1', description: 'Provides an input in response to a human input action', action: 'Workflow update human input V1' },
		
	], 'workflowExecutionsCombined'),
];

export const workflowsFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['workflows'],
				operation: ['workflowDefinitionsExport', 'workflowUpdateHumanInputV1'],
			},
		},
		default: '',
		required: true,
		description: 'Definition or input ID',
	},
	createIdsField('workflows', ['executionResults', 'workflowDefinitionsDelete', 'workflowGetHumanInputV1']),
	{
		displayName: 'Action Name',
		name: 'actionName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['workflows'],
				operation: ['executionAction', 'workflowDefinitionsAction'],
			},
		},
		default: 'resume',
		required: true,
		description: 'Action name (e.g. resume, cancel, enable, disable)',
	},
	createBodyJsonField('workflows', ['deprovision',
					'execute',
					'executionAction',
					'promote',
					'provision',
					'workflowDefinitionsAction',
					'workflowDefinitionsUpdate',
					'workflowExecuteInternal',
					'workflowExecuteSingleNodeV1',
					'workflowMockExecute',
					'workflowUpdateHumanInputV1',]),
	...createStandardPaginationFields('workflows', ['v1ChildExecutionsQuery',
					'workflowActivitiesCombined',
					'workflowActivitiesContentCombined',
					'workflowDefinitionsCombined',
					'workflowExecutionsCombined',
					'workflowTriggersCombined',]),
];
