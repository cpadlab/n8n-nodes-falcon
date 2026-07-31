import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'createSensorUpdatePolicies' operation.
 */
async function handleCreateSensorUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Sensor Update Policies by specifying details about the policy to create. */
	return await fc.sensorUpdatePolicies.createSensorUpdatePolicies(parseJsonParam(c, i));
}

/**
 * Handles the 'createSensorUpdatePoliciesV2' operation.
 */
async function handleCreateSensorUpdatePoliciesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Sensor Update Policies by specifying details about the policy to create with additional support for uninstall protection. */
	return await fc.sensorUpdatePolicies.createSensorUpdatePoliciesV2(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteSensorUpdatePolicies' operation.
 */
async function handleDeleteSensorUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a set of Sensor Update Policies by specifying their IDs. */
	return await fc.sensorUpdatePolicies.deleteSensorUpdatePolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getSensorUpdatePolicies' operation.
 */
async function handleGetSensorUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve a set of Sensor Update Policies by specifying their IDs. */
	return await fc.sensorUpdatePolicies.getSensorUpdatePolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getSensorUpdatePoliciesV2' operation.
 */
async function handleGetSensorUpdatePoliciesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve a set of Sensor Update Policies with additional support for uninstall protection by specifying their IDs. */
	return await fc.sensorUpdatePolicies.getSensorUpdatePoliciesV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'performSensorUpdatePoliciesAction' operation.
 */
async function handlePerformSensorUpdatePoliciesAction(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Perform the specified action on the Sensor Update Policies specified in the request. */
	const actionName = getStringParam(c, i, 'actionName', 'enable') as any;
	return await fc.sensorUpdatePolicies.performSensorUpdatePoliciesAction(actionName, parseJsonParam(c, i));
}

/**
 * Handles the 'queryCombinedSensorUpdateBuilds' operation.
 */
async function handleQueryCombinedSensorUpdateBuilds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve available builds for use with Sensor Update Policies. */
	const platform = getStringParam(c, i, 'platform', '') as any;
	return await fc.sensorUpdatePolicies.queryCombinedSensorUpdateBuilds(platform || undefined);
}

/**
 * Handles the 'queryCombinedSensorUpdateKernels' operation.
 */
async function handleQueryCombinedSensorUpdateKernels(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve kernel compatibility info for Sensor Update Builds. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.sensorUpdatePolicies.queryCombinedSensorUpdateKernels(filter || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryCombinedSensorUpdatePolicies' operation.
 */
async function handleQueryCombinedSensorUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Sensor Update Policies in your environment. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.sensorUpdatePolicies.queryCombinedSensorUpdatePolicies(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queryCombinedSensorUpdatePoliciesV2' operation.
 */
async function handleQueryCombinedSensorUpdatePoliciesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Sensor Update Policies with additional support for uninstall protection. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.sensorUpdatePolicies.queryCombinedSensorUpdatePoliciesV2(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queryCombinedSensorUpdatePolicyMembers' operation.
 */
async function handleQueryCombinedSensorUpdatePolicyMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for members of a Sensor Update Policy in your environment. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.sensorUpdatePolicies.queryCombinedSensorUpdatePolicyMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'querySensorUpdateKernelsDistinct' operation.
 */
async function handleQuerySensorUpdateKernelsDistinct(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve kernel compatibility info for Sensor Update Builds. */
	const distinctField = getStringParam(c, i, 'distinctField', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.sensorUpdatePolicies.querySensorUpdateKernelsDistinct(distinctField, filter || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'querySensorUpdatePolicies' operation.
 */
async function handleQuerySensorUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Sensor Update Policies returning IDs. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.sensorUpdatePolicies.querySensorUpdatePolicies(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'querySensorUpdatePolicyMembers' operation.
 */
async function handleQuerySensorUpdatePolicyMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for members of a Sensor Update Policy returning Agent IDs. */
	const id = getStringParam(c, i, 'id', '');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.sensorUpdatePolicies.querySensorUpdatePolicyMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'revealUninstallToken' operation.
 */
async function handleRevealUninstallToken(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reveals an uninstall token for a specific device. */
	return await fc.sensorUpdatePolicies.revealUninstallToken(parseJsonParam(c, i));
}

/**
 * Handles the 'setSensorUpdatePoliciesPrecedence' operation.
 */
async function handleSetSensorUpdatePoliciesPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Sets the precedence of Sensor Update Policies. */
	return await fc.sensorUpdatePolicies.setSensorUpdatePoliciesPrecedence(parseJsonParam(c, i));
}

/**
 * Handles the 'updateSensorUpdatePolicies' operation.
 */
async function handleUpdateSensorUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Sensor Update Policies. */
	return await fc.sensorUpdatePolicies.updateSensorUpdatePolicies(parseJsonParam(c, i));
}

/**
 * Handles the 'updateSensorUpdatePoliciesV2' operation.
 */
async function handleUpdateSensorUpdatePoliciesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Sensor Update Policies with uninstall protection. */
	return await fc.sensorUpdatePolicies.updateSensorUpdatePoliciesV2(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Sensor Update Policies operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeSensorUpdatePolicies(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createSensorUpdatePolicies': return await handleCreateSensorUpdatePolicies(this, index, falconClient);
		case 'createSensorUpdatePoliciesV2': return await handleCreateSensorUpdatePoliciesV2(this, index, falconClient);
		case 'deleteSensorUpdatePolicies': return await handleDeleteSensorUpdatePolicies(this, index, falconClient);
		case 'getSensorUpdatePolicies': return await handleGetSensorUpdatePolicies(this, index, falconClient);
		case 'getSensorUpdatePoliciesV2': return await handleGetSensorUpdatePoliciesV2(this, index, falconClient);
		case 'performSensorUpdatePoliciesAction': return await handlePerformSensorUpdatePoliciesAction(this, index, falconClient);
		case 'queryCombinedSensorUpdateBuilds': return await handleQueryCombinedSensorUpdateBuilds(this, index, falconClient);
		case 'queryCombinedSensorUpdateKernels': return await handleQueryCombinedSensorUpdateKernels(this, index, falconClient);
		case 'queryCombinedSensorUpdatePolicies': return await handleQueryCombinedSensorUpdatePolicies(this, index, falconClient);
		case 'queryCombinedSensorUpdatePoliciesV2': return await handleQueryCombinedSensorUpdatePoliciesV2(this, index, falconClient);
		case 'queryCombinedSensorUpdatePolicyMembers': return await handleQueryCombinedSensorUpdatePolicyMembers(this, index, falconClient);
		case 'querySensorUpdateKernelsDistinct': return await handleQuerySensorUpdateKernelsDistinct(this, index, falconClient);
		case 'querySensorUpdatePolicies': return await handleQuerySensorUpdatePolicies(this, index, falconClient);
		case 'querySensorUpdatePolicyMembers': return await handleQuerySensorUpdatePolicyMembers(this, index, falconClient);
		case 'revealUninstallToken': return await handleRevealUninstallToken(this, index, falconClient);
		case 'setSensorUpdatePoliciesPrecedence': return await handleSetSensorUpdatePoliciesPrecedence(this, index, falconClient);
		case 'updateSensorUpdatePolicies': return await handleUpdateSensorUpdatePolicies(this, index, falconClient);
		case 'updateSensorUpdatePoliciesV2': return await handleUpdateSensorUpdatePoliciesV2(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Sensor Update Policies.`);
	}
}
