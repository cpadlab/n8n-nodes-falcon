import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'deprovision' operation.
 */
async function handleDeprovision(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deprovisions a system definition. */
	return await fc.workflows.deprovision(parseJsonParam(c, i));
}

/**
 * Handles the 'execute' operation.
 */
async function handleExecute(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes an on-demand Workflow. */
	return await fc.workflows.execute(parseJsonParam(c, i));
}

/**
 * Handles the 'executionAction' operation.
 */
async function handleExecutionAction(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Resume/retry a failed workflow execution or cancel/stop. */
	const actionName = getStringParam(c, i, 'actionName', 'resume') as any;
	return await fc.workflows.executionAction(actionName, parseJsonParam(c, i));
}

/**
 * Handles the 'executionResults' operation.
 */
async function handleExecutionResults(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get execution result of a given execution. */
	return await fc.workflows.executionResults(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'promote' operation.
 */
async function handlePromote(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Promotes a version of a system definition. */
	return await fc.workflows.promote(parseJsonParam(c, i));
}

/**
 * Handles the 'provision' operation.
 */
async function handleProvision(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provisions a system definition onto target CID. */
	return await fc.workflows.provision(parseJsonParam(c, i));
}

/**
 * Handles the 'v1ChildExecutionsQuery' operation.
 */
async function handleV1ChildExecutionsQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for child executions by providing a FQL filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.workflows.v1ChildExecutionsQuery(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'workflowActivitiesCombined' operation.
 */
async function handleWorkflowActivitiesCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for activities by name. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.workflows.workflowActivitiesCombined(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'workflowActivitiesContentCombined' operation.
 */
async function handleWorkflowActivitiesContentCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for activities by name. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.workflows.workflowActivitiesContentCombined(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'workflowDefinitionsAction' operation.
 */
async function handleWorkflowDefinitionsAction(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Enable or disable a workflow definition. */
	const actionName = getStringParam(c, i, 'actionName', 'enable');
	return await fc.workflows.workflowDefinitionsAction(actionName, parseJsonParam(c, i));
}

/**
 * Handles the 'workflowDefinitionsCombined' operation.
 */
async function handleWorkflowDefinitionsCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search workflow definitions based on the provided filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.workflows.workflowDefinitionsCombined(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'workflowDefinitionsDelete' operation.
 */
async function handleWorkflowDefinitionsDelete(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Accepts a list of workflow definition IDs and deletes those definitions. */
	return await fc.workflows.workflowDefinitionsDelete(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'workflowDefinitionsExport' operation.
 */
async function handleWorkflowDefinitionsExport(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Exports a workflow definition for the given definition ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.workflows.workflowDefinitionsExport(id);
}

/**
 * Handles the 'workflowDefinitionsImport' operation.
 */
async function handleWorkflowDefinitionsImport(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Imports a workflow definition based on the provided model. */
	const dataFile = parseJsonParam(c, i, 'bodyJson');
	return await fc.workflows.workflowDefinitionsImport(dataFile as any);
}

/**
 * Handles the 'workflowDefinitionsUpdate' operation.
 */
async function handleWorkflowDefinitionsUpdate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates a workflow definition based on the provided model. */
	return await fc.workflows.workflowDefinitionsUpdate(parseJsonParam(c, i));
}

/**
 * Handles the 'workflowExecuteInternal' operation.
 */
async function handleWorkflowExecuteInternal(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes an on-demand Workflow - internal workflows permitted. */
	return await fc.workflows.workflowExecuteInternal(parseJsonParam(c, i));
}

/**
 * Handles the 'workflowExecuteSingleNodeV1' operation.
 */
async function handleWorkflowExecuteSingleNodeV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes a single activity node. */
	return await fc.workflows.workflowExecuteSingleNodeV1(parseJsonParam(c, i));
}

/**
 * Handles the 'workflowExecutionsCombined' operation.
 */
async function handleWorkflowExecutionsCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search workflow executions based on the provided filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.workflows.workflowExecutionsCombined(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'workflowGetHumanInputV1' operation.
 */
async function handleWorkflowGetHumanInputV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets one or more specific human inputs by their IDs. */
	return await fc.workflows.workflowGetHumanInputV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'workflowMockExecute' operation.
 */
async function handleWorkflowMockExecute(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes a workflow definition with mocks. */
	return await fc.workflows.workflowMockExecute(parseJsonParam(c, i));
}

/**
 * Handles the 'workflowTriggersCombined' operation.
 */
async function handleWorkflowTriggersCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for triggers by namespaced identifier. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.workflows.workflowTriggersCombined(filter || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'workflowUpdateHumanInputV1' operation.
 */
async function handleWorkflowUpdateHumanInputV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provides an input in response to a human input action. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.workflows.workflowUpdateHumanInputV1(id, parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Workflows operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeWorkflows(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'deprovision': return await handleDeprovision(this, index, falconClient);
		case 'execute': return await handleExecute(this, index, falconClient);
		case 'executionAction': return await handleExecutionAction(this, index, falconClient);
		case 'executionResults': return await handleExecutionResults(this, index, falconClient);
		case 'promote': return await handlePromote(this, index, falconClient);
		case 'provision': return await handleProvision(this, index, falconClient);
		case 'v1ChildExecutionsQuery': return await handleV1ChildExecutionsQuery(this, index, falconClient);
		case 'workflowActivitiesCombined': return await handleWorkflowActivitiesCombined(this, index, falconClient);
		case 'workflowActivitiesContentCombined': return await handleWorkflowActivitiesContentCombined(this, index, falconClient);
		case 'workflowDefinitionsAction': return await handleWorkflowDefinitionsAction(this, index, falconClient);
		case 'workflowDefinitionsCombined': return await handleWorkflowDefinitionsCombined(this, index, falconClient);
		case 'workflowDefinitionsDelete': return await handleWorkflowDefinitionsDelete(this, index, falconClient);
		case 'workflowDefinitionsExport': return await handleWorkflowDefinitionsExport(this, index, falconClient);
		case 'workflowDefinitionsImport': return await handleWorkflowDefinitionsImport(this, index, falconClient);
		case 'workflowDefinitionsUpdate': return await handleWorkflowDefinitionsUpdate(this, index, falconClient);
		case 'workflowExecuteInternal': return await handleWorkflowExecuteInternal(this, index, falconClient);
		case 'workflowExecuteSingleNodeV1': return await handleWorkflowExecuteSingleNodeV1(this, index, falconClient);
		case 'workflowExecutionsCombined': return await handleWorkflowExecutionsCombined(this, index, falconClient);
		case 'workflowGetHumanInputV1': return await handleWorkflowGetHumanInputV1(this, index, falconClient);
		case 'workflowMockExecute': return await handleWorkflowMockExecute(this, index, falconClient);
		case 'workflowTriggersCombined': return await handleWorkflowTriggersCombined(this, index, falconClient);
		case 'workflowUpdateHumanInputV1': return await handleWorkflowUpdateHumanInputV1(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Workflows.`);
	}
}
