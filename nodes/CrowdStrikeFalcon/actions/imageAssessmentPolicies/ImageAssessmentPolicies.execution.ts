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

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/** Handles createPolicies */
async function handleCreatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Image Assessment policies. */
	return await fc.imageAssessmentPolicies.createPolicies(parseJsonParam(c, i));
}

/** Handles createPolicyGroups */
async function handleCreatePolicyGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Image Assessment Policy Group entities. */
	return await fc.imageAssessmentPolicies.createPolicyGroups(parseJsonParam(c, i));
}

/** Handles deletePolicy */
async function handleDeletePolicy(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete Image Assessment Policy by policy UUID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.imageAssessmentPolicies.deletePolicy(id);
}

/** Handles deletePolicyGroup */
async function handleDeletePolicyGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete Image Assessment Policy Group entities. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.imageAssessmentPolicies.deletePolicyGroup(id);
}

/** Handles readPolicies */
async function handleReadPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get all Image Assessment policies. */
	return await fc.imageAssessmentPolicies.readPolicies();
}

/** Handles readPolicyExclusions */
async function handleReadPolicyExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve Image Assessment Policy Exclusion entities. */
	return await fc.imageAssessmentPolicies.readPolicyExclusions();
}

/** Handles readPolicyGroups */
async function handleReadPolicyGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve Image Assessment Policy Group entities. */
	return await fc.imageAssessmentPolicies.readPolicyGroups();
}

/** Handles updatePolicies */
async function handleUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Image Assessment Policy entities. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.imageAssessmentPolicies.updatePolicies(id, parseJsonParam(c, i));
}

/** Handles updatePolicyExclusions */
async function handleUpdatePolicyExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Image Assessment Policy Exclusion entities. */
	return await fc.imageAssessmentPolicies.updatePolicyExclusions(parseJsonParam(c, i));
}

/** Handles updatePolicyGroups */
async function handleUpdatePolicyGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Image Assessment Policy Group entities. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.imageAssessmentPolicies.updatePolicyGroups(id, parseJsonParam(c, i));
}

/** Handles updatePolicyPrecedence */
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
			throw new Error(`Operation ${operation} is not supported for Image Assessment Policies.`);
	}
}
