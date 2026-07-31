import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'iTAutomationCancelTaskExecution' operation.
 */
async function handleITAutomationCancelTaskExecution(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Cancel a task execution specified in the request. */
	return await fc.itAutomation.iTAutomationCancelTaskExecution(parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationCombinedScheduledTasks' operation.
 */
async function handleITAutomationCombinedScheduledTasks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns full details of scheduled tasks matching filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.itAutomation.iTAutomationCombinedScheduledTasks(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'iTAutomationCreatePolicy' operation.
 */
async function handleITAutomationCreatePolicy(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new policy of the specified type. */
	return await fc.itAutomation.iTAutomationCreatePolicy(parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationCreateScheduledTask' operation.
 */
async function handleITAutomationCreateScheduledTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a scheduled task from the given request. */
	return await fc.itAutomation.iTAutomationCreateScheduledTask(parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationCreateTask' operation.
 */
async function handleITAutomationCreateTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a task with details from the given request. */
	return await fc.itAutomation.iTAutomationCreateTask(parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationCreateTaskGroup' operation.
 */
async function handleITAutomationCreateTaskGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a task group from the given request. */
	return await fc.itAutomation.iTAutomationCreateTaskGroup(parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationCreateUserGroup' operation.
 */
async function handleITAutomationCreateUserGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a user group from the given request. */
	return await fc.itAutomation.iTAutomationCreateUserGroup(parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationDeletePolicy' operation.
 */
async function handleITAutomationDeletePolicy(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes 1 or more disabled policies. */
	return await fc.itAutomation.iTAutomationDeletePolicy(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'iTAutomationDeleteScheduledTasks' operation.
 */
async function handleITAutomationDeleteScheduledTasks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete one or more scheduled tasks by ID. */
	return await fc.itAutomation.iTAutomationDeleteScheduledTasks(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'iTAutomationDeleteTask' operation.
 */
async function handleITAutomationDeleteTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes tasks for each provided ID. */
	return await fc.itAutomation.iTAutomationDeleteTask(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'iTAutomationDeleteTaskGroups' operation.
 */
async function handleITAutomationDeleteTaskGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete one or more task groups by ID. */
	return await fc.itAutomation.iTAutomationDeleteTaskGroups(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'iTAutomationDeleteUserGroup' operation.
 */
async function handleITAutomationDeleteUserGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes user groups for each provided ID. */
	return await fc.itAutomation.iTAutomationDeleteUserGroup(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'iTAutomationGetAssociatedTasks' operation.
 */
async function handleITAutomationGetAssociatedTasks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve tasks associated with the provided file ID. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.itAutomation.iTAutomationGetAssociatedTasks(id, filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'iTAutomationGetExecutionResults' operation.
 */
async function handleITAutomationGetExecutionResults(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the task execution results from an async search. */
	const id = getStringParam(c, i, 'id', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.itAutomation.iTAutomationGetExecutionResults(id, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'iTAutomationGetExecutionResultsSearchStatus' operation.
 */
async function handleITAutomationGetExecutionResultsSearchStatus(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the status of an async task execution results search. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.itAutomation.iTAutomationGetExecutionResultsSearchStatus(id);
}

/**
 * Handles the 'iTAutomationGetPolicies' operation.
 */
async function handleITAutomationGetPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the configuration for 1 or more policies. */
	return await fc.itAutomation.iTAutomationGetPolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'iTAutomationGetScheduledTasks' operation.
 */
async function handleITAutomationGetScheduledTasks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns scheduled tasks for each provided ID. */
	return await fc.itAutomation.iTAutomationGetScheduledTasks(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'iTAutomationGetTaskExecution' operation.
 */
async function handleITAutomationGetTaskExecution(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the task execution for provided task execution IDs. */
	return await fc.itAutomation.iTAutomationGetTaskExecution(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'iTAutomationGetTaskExecutionHostStatus' operation.
 */
async function handleITAutomationGetTaskExecutionHostStatus(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the status of host executions by providing execution IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.itAutomation.iTAutomationGetTaskExecutionHostStatus(ids, filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'iTAutomationGetTaskExecutionsByQuery' operation.
 */
async function handleITAutomationGetTaskExecutionsByQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns list of task executions matching filter query. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.itAutomation.iTAutomationGetTaskExecutionsByQuery(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'iTAutomationGetTaskGroups' operation.
 */
async function handleITAutomationGetTaskGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns task groups for each provided ID. */
	return await fc.itAutomation.iTAutomationGetTaskGroups(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'iTAutomationGetTaskGroupsByQuery' operation.
 */
async function handleITAutomationGetTaskGroupsByQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns full details of task groups matching filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.itAutomation.iTAutomationGetTaskGroupsByQuery(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'iTAutomationGetTasks' operation.
 */
async function handleITAutomationGetTasks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns tasks for each provided ID. */
	return await fc.itAutomation.iTAutomationGetTasks(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'iTAutomationGetTasksByQuery' operation.
 */
async function handleITAutomationGetTasksByQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns full details of tasks matching filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.itAutomation.iTAutomationGetTasksByQuery(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'iTAutomationGetUserGroup' operation.
 */
async function handleITAutomationGetUserGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns user groups for each provided ID. */
	return await fc.itAutomation.iTAutomationGetUserGroup(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'iTAutomationQueryPolicies' operation.
 */
async function handleITAutomationQueryPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns list of policy IDs matching filter query. */
	const platform = getStringParam(c, i, 'platform', 'Windows') as any;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.itAutomation.iTAutomationQueryPolicies(platform, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'iTAutomationRerunTaskExecution' operation.
 */
async function handleITAutomationRerunTaskExecution(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Rerun the task execution specified in the request. */
	return await fc.itAutomation.iTAutomationRerunTaskExecution(parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationRunLiveQuery' operation.
 */
async function handleITAutomationRunLiveQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Starts a new task execution from provided query data. */
	return await fc.itAutomation.iTAutomationRunLiveQuery(parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationSearchScheduledTasks' operation.
 */
async function handleITAutomationSearchScheduledTasks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns list of scheduled task IDs matching filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.itAutomation.iTAutomationSearchScheduledTasks(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'iTAutomationSearchTaskExecutions' operation.
 */
async function handleITAutomationSearchTaskExecutions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns list of task execution IDs matching filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.itAutomation.iTAutomationSearchTaskExecutions(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'iTAutomationSearchTaskGroups' operation.
 */
async function handleITAutomationSearchTaskGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns list of task group IDs matching filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.itAutomation.iTAutomationSearchTaskGroups(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'iTAutomationSearchTasks' operation.
 */
async function handleITAutomationSearchTasks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns list of task IDs matching filter query. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.itAutomation.iTAutomationSearchTasks(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'iTAutomationSearchUserGroup' operation.
 */
async function handleITAutomationSearchUserGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns list of user group IDs matching filter query. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.itAutomation.iTAutomationSearchUserGroup(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'iTAutomationStartExecutionResultsSearch' operation.
 */
async function handleITAutomationStartExecutionResultsSearch(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Starts an async task execution results search. */
	return await fc.itAutomation.iTAutomationStartExecutionResultsSearch(parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationStartTaskExecution' operation.
 */
async function handleITAutomationStartTaskExecution(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Starts a new task execution from an existing task. */
	return await fc.itAutomation.iTAutomationStartTaskExecution(parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationUpdatePolicies' operation.
 */
async function handleITAutomationUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates multiple fields for a policy. */
	return await fc.itAutomation.iTAutomationUpdatePolicies(parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationUpdatePoliciesPrecedence' operation.
 */
async function handleITAutomationUpdatePoliciesPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates policy precedence for all policies of a specific platform. */
	const platform = getStringParam(c, i, 'platform', 'Windows');
	return await fc.itAutomation.iTAutomationUpdatePoliciesPrecedence(platform, parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationUpdatePolicyHostGroups' operation.
 */
async function handleITAutomationUpdatePolicyHostGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Manage host groups assigned to a policy. */
	return await fc.itAutomation.iTAutomationUpdatePolicyHostGroups(parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationUpdateScheduledTask' operation.
 */
async function handleITAutomationUpdateScheduledTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update an existing scheduled task. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.itAutomation.iTAutomationUpdateScheduledTask(id, parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationUpdateTask' operation.
 */
async function handleITAutomationUpdateTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update a task with details from given request. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.itAutomation.iTAutomationUpdateTask(id, parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationUpdateTaskGroup' operation.
 */
async function handleITAutomationUpdateTaskGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update a task group for a given ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.itAutomation.iTAutomationUpdateTaskGroup(id, parseJsonParam(c, i));
}

/**
 * Handles the 'iTAutomationUpdateUserGroup' operation.
 */
async function handleITAutomationUpdateUserGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update a user group for a given ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.itAutomation.iTAutomationUpdateUserGroup(id, parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon IT Automation operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeItAutomation(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'iTAutomationCancelTaskExecution': return await handleITAutomationCancelTaskExecution(this, index, falconClient);
		case 'iTAutomationCombinedScheduledTasks': return await handleITAutomationCombinedScheduledTasks(this, index, falconClient);
		case 'iTAutomationCreatePolicy': return await handleITAutomationCreatePolicy(this, index, falconClient);
		case 'iTAutomationCreateScheduledTask': return await handleITAutomationCreateScheduledTask(this, index, falconClient);
		case 'iTAutomationCreateTask': return await handleITAutomationCreateTask(this, index, falconClient);
		case 'iTAutomationCreateTaskGroup': return await handleITAutomationCreateTaskGroup(this, index, falconClient);
		case 'iTAutomationCreateUserGroup': return await handleITAutomationCreateUserGroup(this, index, falconClient);
		case 'iTAutomationDeletePolicy': return await handleITAutomationDeletePolicy(this, index, falconClient);
		case 'iTAutomationDeleteScheduledTasks': return await handleITAutomationDeleteScheduledTasks(this, index, falconClient);
		case 'iTAutomationDeleteTask': return await handleITAutomationDeleteTask(this, index, falconClient);
		case 'iTAutomationDeleteTaskGroups': return await handleITAutomationDeleteTaskGroups(this, index, falconClient);
		case 'iTAutomationDeleteUserGroup': return await handleITAutomationDeleteUserGroup(this, index, falconClient);
		case 'iTAutomationGetAssociatedTasks': return await handleITAutomationGetAssociatedTasks(this, index, falconClient);
		case 'iTAutomationGetExecutionResults': return await handleITAutomationGetExecutionResults(this, index, falconClient);
		case 'iTAutomationGetExecutionResultsSearchStatus': return await handleITAutomationGetExecutionResultsSearchStatus(this, index, falconClient);
		case 'iTAutomationGetPolicies': return await handleITAutomationGetPolicies(this, index, falconClient);
		case 'iTAutomationGetScheduledTasks': return await handleITAutomationGetScheduledTasks(this, index, falconClient);
		case 'iTAutomationGetTaskExecution': return await handleITAutomationGetTaskExecution(this, index, falconClient);
		case 'iTAutomationGetTaskExecutionHostStatus': return await handleITAutomationGetTaskExecutionHostStatus(this, index, falconClient);
		case 'iTAutomationGetTaskExecutionsByQuery': return await handleITAutomationGetTaskExecutionsByQuery(this, index, falconClient);
		case 'iTAutomationGetTaskGroups': return await handleITAutomationGetTaskGroups(this, index, falconClient);
		case 'iTAutomationGetTaskGroupsByQuery': return await handleITAutomationGetTaskGroupsByQuery(this, index, falconClient);
		case 'iTAutomationGetTasks': return await handleITAutomationGetTasks(this, index, falconClient);
		case 'iTAutomationGetTasksByQuery': return await handleITAutomationGetTasksByQuery(this, index, falconClient);
		case 'iTAutomationGetUserGroup': return await handleITAutomationGetUserGroup(this, index, falconClient);
		case 'iTAutomationQueryPolicies': return await handleITAutomationQueryPolicies(this, index, falconClient);
		case 'iTAutomationRerunTaskExecution': return await handleITAutomationRerunTaskExecution(this, index, falconClient);
		case 'iTAutomationRunLiveQuery': return await handleITAutomationRunLiveQuery(this, index, falconClient);
		case 'iTAutomationSearchScheduledTasks': return await handleITAutomationSearchScheduledTasks(this, index, falconClient);
		case 'iTAutomationSearchTaskExecutions': return await handleITAutomationSearchTaskExecutions(this, index, falconClient);
		case 'iTAutomationSearchTaskGroups': return await handleITAutomationSearchTaskGroups(this, index, falconClient);
		case 'iTAutomationSearchTasks': return await handleITAutomationSearchTasks(this, index, falconClient);
		case 'iTAutomationSearchUserGroup': return await handleITAutomationSearchUserGroup(this, index, falconClient);
		case 'iTAutomationStartExecutionResultsSearch': return await handleITAutomationStartExecutionResultsSearch(this, index, falconClient);
		case 'iTAutomationStartTaskExecution': return await handleITAutomationStartTaskExecution(this, index, falconClient);
		case 'iTAutomationUpdatePolicies': return await handleITAutomationUpdatePolicies(this, index, falconClient);
		case 'iTAutomationUpdatePoliciesPrecedence': return await handleITAutomationUpdatePoliciesPrecedence(this, index, falconClient);
		case 'iTAutomationUpdatePolicyHostGroups': return await handleITAutomationUpdatePolicyHostGroups(this, index, falconClient);
		case 'iTAutomationUpdateScheduledTask': return await handleITAutomationUpdateScheduledTask(this, index, falconClient);
		case 'iTAutomationUpdateTask': return await handleITAutomationUpdateTask(this, index, falconClient);
		case 'iTAutomationUpdateTaskGroup': return await handleITAutomationUpdateTaskGroup(this, index, falconClient);
		case 'iTAutomationUpdateUserGroup': return await handleITAutomationUpdateUserGroup(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for IT Automation.`);
	}
}
