import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'createFirewallPolicies' operation.
 */
async function handleCreateFirewallPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Firewall Policies by specifying details about the policy to create. */
	const body = parseJsonParam(c, i);
	const cloneId = getStringParam(c, i, 'cloneId', '');
	return await fc.firewallPolicies.createFirewallPolicies(body, cloneId || undefined);
}

/**
 * Handles the 'deleteFirewallPolicies' operation.
 */
async function handleDeleteFirewallPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a set of Firewall Policies by specifying their IDs. */
	return await fc.firewallPolicies.deleteFirewallPolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getFirewallPolicies' operation.
 */
async function handleGetFirewallPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve a set of Firewall Policies by specifying their IDs. */
	return await fc.firewallPolicies.getFirewallPolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'performFirewallPoliciesAction' operation.
 */
async function handlePerformFirewallPoliciesAction(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Perform the specified action on the Firewall Policies specified in request. */
	const actionName = getStringParam(c, i, 'actionName', '') as any;
	const body = parseJsonParam(c, i);
	return await fc.firewallPolicies.performFirewallPoliciesAction(actionName, body);
}

/**
 * Handles the 'queryCombinedFirewallPolicies' operation.
 */
async function handleQueryCombinedFirewallPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Firewall Policies in environment returning matching policies. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.firewallPolicies.queryCombinedFirewallPolicies(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queryCombinedFirewallPolicyMembers' operation.
 */
async function handleQueryCombinedFirewallPolicyMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for members of Firewall Policy returning matching host details. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.firewallPolicies.queryCombinedFirewallPolicyMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queryFirewallPolicies' operation.
 */
async function handleQueryFirewallPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Firewall Policies in environment returning matching policy IDs. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.firewallPolicies.queryFirewallPolicies(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queryFirewallPolicyMembers' operation.
 */
async function handleQueryFirewallPolicyMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for members of Firewall Policy returning Agent IDs. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.firewallPolicies.queryFirewallPolicyMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'setFirewallPoliciesPrecedence' operation.
 */
async function handleSetFirewallPoliciesPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Sets precedence of Firewall Policies based on order of IDs. */
	return await fc.firewallPolicies.setFirewallPoliciesPrecedence(parseJsonParam(c, i));
}

/**
 * Handles the 'updateFirewallPolicies' operation.
 */
async function handleUpdateFirewallPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Firewall Policies by specifying policy ID and details. */
	return await fc.firewallPolicies.updateFirewallPolicies(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Firewall Policies operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeFirewallPolicies(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createFirewallPolicies': return await handleCreateFirewallPolicies(this, index, falconClient);
		case 'deleteFirewallPolicies': return await handleDeleteFirewallPolicies(this, index, falconClient);
		case 'getFirewallPolicies': return await handleGetFirewallPolicies(this, index, falconClient);
		case 'performFirewallPoliciesAction': return await handlePerformFirewallPoliciesAction(this, index, falconClient);
		case 'queryCombinedFirewallPolicies': return await handleQueryCombinedFirewallPolicies(this, index, falconClient);
		case 'queryCombinedFirewallPolicyMembers': return await handleQueryCombinedFirewallPolicyMembers(this, index, falconClient);
		case 'queryFirewallPolicies': return await handleQueryFirewallPolicies(this, index, falconClient);
		case 'queryFirewallPolicyMembers': return await handleQueryFirewallPolicyMembers(this, index, falconClient);
		case 'setFirewallPoliciesPrecedence': return await handleSetFirewallPoliciesPrecedence(this, index, falconClient);
		case 'updateFirewallPolicies': return await handleUpdateFirewallPolicies(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Firewall Policies.`);
	}
}
