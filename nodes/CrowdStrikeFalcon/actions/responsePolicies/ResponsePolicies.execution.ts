import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'createRTResponsePolicies' operation.
 */
async function handleCreateRTResponsePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Response Policies by specifying details about the policy to create. */
	return await fc.responsePolicies.createRTResponsePolicies(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteRTResponsePolicies' operation.
 */
async function handleDeleteRTResponsePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a set of Response Policies by specifying their IDs. */
	return await fc.responsePolicies.deleteRTResponsePolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getRTResponsePolicies' operation.
 */
async function handleGetRTResponsePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve a set of Response Policies by specifying their IDs. */
	return await fc.responsePolicies.getRTResponsePolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'performRTResponsePoliciesAction' operation.
 */
async function handlePerformRTResponsePoliciesAction(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Perform the specified action on the Response Policies specified in the request. */
	const actionName = getStringParam(c, i, 'actionName', 'enable');
	return await fc.responsePolicies.performRTResponsePoliciesAction(actionName as any, parseJsonParam(c, i));
}

/**
 * Handles the 'queryCombinedRTResponsePolicies' operation.
 */
async function handleQueryCombinedRTResponsePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Response Policies in your environment. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.responsePolicies.queryCombinedRTResponsePolicies(filter || undefined, offset || undefined, limit || undefined, sort as any || undefined);
}

/**
 * Handles the 'queryCombinedRTResponsePolicyMembers' operation.
 */
async function handleQueryCombinedRTResponsePolicyMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for members of a Response policy returning host details. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.responsePolicies.queryCombinedRTResponsePolicyMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queryRTResponsePolicies' operation.
 */
async function handleQueryRTResponsePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Response Policies returning IDs. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.responsePolicies.queryRTResponsePolicies(filter || undefined, offset || undefined, limit || undefined, sort as any || undefined);
}

/**
 * Handles the 'queryRTResponsePolicyMembers' operation.
 */
async function handleQueryRTResponsePolicyMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for members of a Response policy returning Agent IDs. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.responsePolicies.queryRTResponsePolicyMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'setRTResponsePoliciesPrecedence' operation.
 */
async function handleSetRTResponsePoliciesPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Sets the precedence of Response Policies based on order of IDs. */
	return await fc.responsePolicies.setRTResponsePoliciesPrecedence(parseJsonParam(c, i));
}

/**
 * Handles the 'updateRTResponsePolicies' operation.
 */
async function handleUpdateRTResponsePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Response Policies by specifying the ID of policy and details. */
	return await fc.responsePolicies.updateRTResponsePolicies(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Response Policies operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeResponsePolicies(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createRTResponsePolicies': return await handleCreateRTResponsePolicies(this, index, falconClient);
		case 'deleteRTResponsePolicies': return await handleDeleteRTResponsePolicies(this, index, falconClient);
		case 'getRTResponsePolicies': return await handleGetRTResponsePolicies(this, index, falconClient);
		case 'performRTResponsePoliciesAction': return await handlePerformRTResponsePoliciesAction(this, index, falconClient);
		case 'queryCombinedRTResponsePolicies': return await handleQueryCombinedRTResponsePolicies(this, index, falconClient);
		case 'queryCombinedRTResponsePolicyMembers': return await handleQueryCombinedRTResponsePolicyMembers(this, index, falconClient);
		case 'queryRTResponsePolicies': return await handleQueryRTResponsePolicies(this, index, falconClient);
		case 'queryRTResponsePolicyMembers': return await handleQueryRTResponsePolicyMembers(this, index, falconClient);
		case 'setRTResponsePoliciesPrecedence': return await handleSetRTResponsePoliciesPrecedence(this, index, falconClient);
		case 'updateRTResponsePolicies': return await handleUpdateRTResponsePolicies(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Response Policies.`);
	}
}
