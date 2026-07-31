import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseJsonParam } from '../common';

/**
 * Handles the 'createPolicies' operation.
 */
async function handleCreatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Image Assessment policies. */
	return await fc.imageAssessmentPolicies.createPolicies(parseJsonParam(c, i));
}

/**
 * Handles the 'createPolicyGroups' operation.
 */
async function handleCreatePolicyGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Image Assessment Policy Group entities. */
	return await fc.imageAssessmentPolicies.createPolicyGroups(parseJsonParam(c, i));
}

/**
 * Handles the 'deletePolicy' operation.
 */
async function handleDeletePolicy(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete Image Assessment Policy by policy UUID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.imageAssessmentPolicies.deletePolicy(id);
}

/**
 * Handles the 'deletePolicyGroup' operation.
 */
async function handleDeletePolicyGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete Image Assessment Policy Group entities. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.imageAssessmentPolicies.deletePolicyGroup(id);
}

/**
 * Handles the 'readPolicies' operation.
 */
async function handleReadPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get all Image Assessment policies. */
	return await fc.imageAssessmentPolicies.readPolicies();
}

/**
 * Handles the 'readPolicyExclusions' operation.
 */
async function handleReadPolicyExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve Image Assessment Policy Exclusion entities. */
	return await fc.imageAssessmentPolicies.readPolicyExclusions();
}

/**
 * Handles the 'readPolicyGroups' operation.
 */
async function handleReadPolicyGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve Image Assessment Policy Group entities. */
	return await fc.imageAssessmentPolicies.readPolicyGroups();
}

/**
 * Handles the 'updatePolicies' operation.
 */
async function handleUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Image Assessment Policy entities. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.imageAssessmentPolicies.updatePolicies(id, parseJsonParam(c, i));
}

/**
 * Handles the 'updatePolicyExclusions' operation.
 */
async function handleUpdatePolicyExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Image Assessment Policy Exclusion entities. */
	return await fc.imageAssessmentPolicies.updatePolicyExclusions(parseJsonParam(c, i));
}

/**
 * Handles the 'updatePolicyGroups' operation.
 */
async function handleUpdatePolicyGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Image Assessment Policy Group entities. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.imageAssessmentPolicies.updatePolicyGroups(id, parseJsonParam(c, i));
}

/**
 * Handles the 'updatePolicyPrecedence' operation.
 */
async function handleUpdatePolicyPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Image Assessment Policy precedence. */
	return await fc.imageAssessmentPolicies.updatePolicyPrecedence(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Image Assessment Policies operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeImageAssessmentPolicies(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createPolicies': return await handleCreatePolicies(this, index, falconClient);
		case 'createPolicyGroups': return await handleCreatePolicyGroups(this, index, falconClient);
		case 'deletePolicy': return await handleDeletePolicy(this, index, falconClient);
		case 'deletePolicyGroup': return await handleDeletePolicyGroup(this, index, falconClient);
		case 'readPolicies': return await handleReadPolicies(this, index, falconClient);
		case 'readPolicyExclusions': return await handleReadPolicyExclusions(this, index, falconClient);
		case 'readPolicyGroups': return await handleReadPolicyGroups(this, index, falconClient);
		case 'updatePolicies': return await handleUpdatePolicies(this, index, falconClient);
		case 'updatePolicyExclusions': return await handleUpdatePolicyExclusions(this, index, falconClient);
		case 'updatePolicyGroups': return await handleUpdatePolicyGroups(this, index, falconClient);
		case 'updatePolicyPrecedence': return await handleUpdatePolicyPrecedence(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Image Assessment Policies.`);
	}
}
