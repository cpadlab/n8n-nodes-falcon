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
 * Handles the 'createDeviceControlPolicies' operation.
 */
async function handleCreateDeviceControlPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates Device Control Policies (deprecated). */
	return await fc.deviceControlPolicies.createDeviceControlPolicies(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteDeviceControlPolicies' operation.
 */
async function handleDeleteDeviceControlPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes Device Control Policies by IDs. */
	return await fc.deviceControlPolicies.deleteDeviceControlPolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getDefaultDeviceControlPolicies' operation.
 */
async function handleGetDefaultDeviceControlPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets Default Device Control Policies configuration (deprecated). */
	return await fc.deviceControlPolicies.getDefaultDeviceControlPolicies();
}

/**
 * Handles the 'getDeviceControlPolicies' operation.
 */
async function handleGetDeviceControlPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets Device Control Policies by IDs (deprecated). */
	return await fc.deviceControlPolicies.getDeviceControlPolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'performDeviceControlPoliciesAction' operation.
 */
async function handlePerformDeviceControlPoliciesAction(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Performs action on Device Control Policies. */
	const actionName = c.getNodeParameter('actionName', i) as any;
	return await fc.deviceControlPolicies.performDeviceControlPoliciesAction(actionName, parseJsonParam(c, i));
}

/**
 * Handles the 'queryCombinedDeviceControlPolicies' operation.
 */
async function handleQueryCombinedDeviceControlPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries combined Device Control Policies. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.deviceControlPolicies.queryCombinedDeviceControlPolicies(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queryCombinedDeviceControlPolicyMembers' operation.
 */
async function handleQueryCombinedDeviceControlPolicyMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries combined Device Control Policy members. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.deviceControlPolicies.queryCombinedDeviceControlPolicyMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queryDeviceControlPolicies' operation.
 */
async function handleQueryDeviceControlPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries Device Control Policy IDs. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.deviceControlPolicies.queryDeviceControlPolicies(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queryDeviceControlPolicyMembers' operation.
 */
async function handleQueryDeviceControlPolicyMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries Device Control Policy member IDs. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.deviceControlPolicies.queryDeviceControlPolicyMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'setDeviceControlPoliciesPrecedence' operation.
 */
async function handleSetDeviceControlPoliciesPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Sets Device Control Policies precedence. */
	return await fc.deviceControlPolicies.setDeviceControlPoliciesPrecedence(parseJsonParam(c, i));
}

/**
 * Handles the 'updateDefaultDeviceControlPolicies' operation.
 */
async function handleUpdateDefaultDeviceControlPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates Default Device Control Policies configuration (deprecated). */
	return await fc.deviceControlPolicies.updateDefaultDeviceControlPolicies(parseJsonParam(c, i));
}

/**
 * Handles the 'updateDeviceControlPolicies' operation.
 */
async function handleUpdateDeviceControlPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates Device Control Policies (deprecated). */
	return await fc.deviceControlPolicies.updateDeviceControlPolicies(parseJsonParam(c, i));
}

/** Main execution handler for Device Control Policies operations. */
export async function executeDeviceControlPolicies(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createDeviceControlPolicies': return await handleCreateDeviceControlPolicies(this, index, falconClient);
		case 'deleteDeviceControlPolicies': return await handleDeleteDeviceControlPolicies(this, index, falconClient);
		case 'getDefaultDeviceControlPolicies': return await handleGetDefaultDeviceControlPolicies(this, index, falconClient);
		case 'getDeviceControlPolicies': return await handleGetDeviceControlPolicies(this, index, falconClient);
		case 'performDeviceControlPoliciesAction': return await handlePerformDeviceControlPoliciesAction(this, index, falconClient);
		case 'queryCombinedDeviceControlPolicies': return await handleQueryCombinedDeviceControlPolicies(this, index, falconClient);
		case 'queryCombinedDeviceControlPolicyMembers': return await handleQueryCombinedDeviceControlPolicyMembers(this, index, falconClient);
		case 'queryDeviceControlPolicies': return await handleQueryDeviceControlPolicies(this, index, falconClient);
		case 'queryDeviceControlPolicyMembers': return await handleQueryDeviceControlPolicyMembers(this, index, falconClient);
		case 'setDeviceControlPoliciesPrecedence': return await handleSetDeviceControlPoliciesPrecedence(this, index, falconClient);
		case 'updateDefaultDeviceControlPolicies': return await handleUpdateDefaultDeviceControlPolicies(this, index, falconClient);
		case 'updateDeviceControlPolicies': return await handleUpdateDeviceControlPolicies(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Device Control Policies.`);
	}
}
