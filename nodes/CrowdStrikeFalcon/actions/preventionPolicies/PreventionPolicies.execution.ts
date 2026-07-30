import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function parseJsonParam(context: IExecuteFunctions, index: number, paramName = 'bodyJson'): any {
	const rawJson = context.getNodeParameter(paramName, index, '') as string;
	if (!rawJson) return {};
	try {
		return typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
	} catch (e) {
		throw new Error(`Invalid JSON in ${paramName}: ${(e as Error).message}`);
	}
}

function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
	const str = (context.getNodeParameter(paramName, index, '') as string) || '';
	return str.split(',').map((id) => id.trim()).filter(Boolean);
}

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/**
 * Handles the 'createPreventionPolicies' operation.
 */
async function handleCreatePreventionPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Prevention Policies by specifying details about the policy to create. */
	return await fc.preventionPolicies.createPreventionPolicies(parseJsonParam(c, i));
}

/**
 * Handles the 'deletePreventionPolicies' operation.
 */
async function handleDeletePreventionPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a set of Prevention Policies by specifying their IDs. */
	return await fc.preventionPolicies.deletePreventionPolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getPreventionPolicies' operation.
 */
async function handleGetPreventionPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve a set of Prevention Policies by specifying their IDs. */
	return await fc.preventionPolicies.getPreventionPolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'performPreventionPoliciesAction' operation.
 */
async function handlePerformPreventionPoliciesAction(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Perform the specified action on the Prevention Policies specified in the request. */
	const actionName = getStringParam(c, i, 'actionName', 'enable');
	return await fc.preventionPolicies.performPreventionPoliciesAction(actionName as any, parseJsonParam(c, i));
}

/**
 * Handles the 'queryCombinedPreventionPolicies' operation.
 */
async function handleQueryCombinedPreventionPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Prevention Policies in your environment. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.preventionPolicies.queryCombinedPreventionPolicies(filter || undefined, offset || undefined, limit || undefined, sort as any || undefined);
}

/**
 * Handles the 'queryCombinedPreventionPolicyMembers' operation.
 */
async function handleQueryCombinedPreventionPolicyMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for members of a Prevention Policy returning host details. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.preventionPolicies.queryCombinedPreventionPolicyMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queryPreventionPolicies' operation.
 */
async function handleQueryPreventionPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Prevention Policies returning IDs. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.preventionPolicies.queryPreventionPolicies(filter || undefined, offset || undefined, limit || undefined, sort as any || undefined);
}

/**
 * Handles the 'queryPreventionPolicyMembers' operation.
 */
async function handleQueryPreventionPolicyMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for members of a Prevention Policy returning Agent IDs. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.preventionPolicies.queryPreventionPolicyMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'setPreventionPoliciesPrecedence' operation.
 */
async function handleSetPreventionPoliciesPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Sets the precedence of Prevention Policies based on order. */
	return await fc.preventionPolicies.setPreventionPoliciesPrecedence(parseJsonParam(c, i));
}

/**
 * Handles the 'updatePreventionPolicies' operation.
 */
async function handleUpdatePreventionPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Prevention Policies by specifying ID and details to update. */
	return await fc.preventionPolicies.updatePreventionPolicies(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Prevention Policies operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executePreventionPolicies(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createPreventionPolicies': return await handleCreatePreventionPolicies(this, index, falconClient);
		case 'deletePreventionPolicies': return await handleDeletePreventionPolicies(this, index, falconClient);
		case 'getPreventionPolicies': return await handleGetPreventionPolicies(this, index, falconClient);
		case 'performPreventionPoliciesAction': return await handlePerformPreventionPoliciesAction(this, index, falconClient);
		case 'queryCombinedPreventionPolicies': return await handleQueryCombinedPreventionPolicies(this, index, falconClient);
		case 'queryCombinedPreventionPolicyMembers': return await handleQueryCombinedPreventionPolicyMembers(this, index, falconClient);
		case 'queryPreventionPolicies': return await handleQueryPreventionPolicies(this, index, falconClient);
		case 'queryPreventionPolicyMembers': return await handleQueryPreventionPolicyMembers(this, index, falconClient);
		case 'setPreventionPoliciesPrecedence': return await handleSetPreventionPoliciesPrecedence(this, index, falconClient);
		case 'updatePreventionPolicies': return await handleUpdatePreventionPolicies(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Prevention Policies.`);
	}
}
