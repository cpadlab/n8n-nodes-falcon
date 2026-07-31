import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Parses a JSON string parameter into an object safely.
 */
function parseBodyJson(context: IExecuteFunctions, index: number, paramName = 'bodyJson'): Record<string, any> {
	const rawJson = context.getNodeParameter(paramName, index, '') as string;
	if (!rawJson) return {};
	try {
		return typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
	} catch (e) {
		throw new NodeOperationError(context.getNode(), `Invalid JSON in ${paramName}: ${(e as Error).message}`);
	}
}

/**
 * Handles the 'admissionControlQueryPolicies' operation.
 */
async function handleAdmissionControlQueryPolicies(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Searches admission control policies matching filter, limit, offset, and sort parameters.
	 */
	const filter = context.getNodeParameter('filter', index, '') as string;
	const limit = context.getNodeParameter('limit', index, 100) as number;
	const offset = context.getNodeParameter('offset', index, 0) as number;
	const sort = context.getNodeParameter('sort', index, '') as string;

	return await falconClient.admissionControlPolicies.admissionControlQueryPolicies(
		filter || undefined,
		limit || undefined,
		offset || undefined,
		sort || undefined,
	);
}

/**
 * Handles the 'admissionControlGetPolicies' operation.
 */
async function handleAdmissionControlGetPolicies(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Retrieves detailed information for given admission control policy IDs.
	 */
	const idsString = context.getNodeParameter('ids', index, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await falconClient.admissionControlPolicies.admissionControlGetPolicies(ids);
}

/**
 * Handles the 'admissionControlCreatePolicy' operation.
 */
async function handleAdmissionControlCreatePolicy(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Creates a new admission control policy using the supplied JSON body payload.
	 */
	const body = parseBodyJson(context, index);
	return await falconClient.admissionControlPolicies.admissionControlCreatePolicy(body as any);
}

/**
 * Handles the 'admissionControlUpdatePolicy' operation.
 */
async function handleAdmissionControlUpdatePolicy(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Updates an existing admission control policy specified by ID with new JSON payload settings.
	 */
	const policyId = context.getNodeParameter('policyId', index) as string;
	const body = parseBodyJson(context, index);

	return await falconClient.admissionControlPolicies.admissionControlUpdatePolicy(policyId, body as any);
}

/**
 * Handles the 'admissionControlDeletePolicies' operation.
 */
async function handleAdmissionControlDeletePolicies(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Deletes one or more admission control policies specified by IDs.
	 */
	const idsString = context.getNodeParameter('ids', index, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await falconClient.admissionControlPolicies.admissionControlDeletePolicies(ids);
}

/**
 * Handles the 'admissionControlUpdatePolicyPrecedence' operation.
 */
async function handleAdmissionControlUpdatePolicyPrecedence(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Updates the evaluation precedence order among admission control policies.
	 */
	const body = parseBodyJson(context, index);
	return await falconClient.admissionControlPolicies.admissionControlUpdatePolicyPrecedence(body as any);
}

/**
 * Handles the 'admissionControlAddHostGroups' operation.
 */
async function handleAdmissionControlAddHostGroups(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Adds host groups to a target admission control policy.
	 */
	const body = parseBodyJson(context, index);
	return await falconClient.admissionControlPolicies.admissionControlAddHostGroups(body as any);
}

/**
 * Handles the 'admissionControlRemoveHostGroups' operation.
 */
async function handleAdmissionControlRemoveHostGroups(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Removes host groups from a specific admission control policy.
	 */
	const policyId = context.getNodeParameter('policyId', index) as string;
	const hostGroupIdsString = context.getNodeParameter('hostGroupIds', index) as string;
	const hostGroupIds = hostGroupIdsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await falconClient.admissionControlPolicies.admissionControlRemoveHostGroups(policyId, hostGroupIds);
}

/**
 * Handles the 'admissionControlCreateRuleGroups' operation.
 */
async function handleAdmissionControlCreateRuleGroups(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Creates new rule groups and appends them to an admission control policy.
	 */
	const body = parseBodyJson(context, index);
	return await falconClient.admissionControlPolicies.admissionControlCreateRuleGroups(body as any);
}

/**
 * Handles the 'admissionControlUpdateRuleGroups' operation.
 */
async function handleAdmissionControlUpdateRuleGroups(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Updates rule group configurations in an admission control policy.
	 */
	const body = parseBodyJson(context, index);
	return await falconClient.admissionControlPolicies.admissionControlUpdateRuleGroups(body as any);
}

/**
 * Handles the 'admissionControlDeleteRuleGroups' operation.
 */
async function handleAdmissionControlDeleteRuleGroups(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Removes rule groups from a designated admission control policy.
	 */
	const policyId = context.getNodeParameter('policyId', index) as string;
	const ruleGroupIdsString = context.getNodeParameter('ruleGroupIds', index) as string;
	const ruleGroupIds = ruleGroupIdsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await falconClient.admissionControlPolicies.admissionControlDeleteRuleGroups(policyId, ruleGroupIds);
}

/**
 * Handles the 'admissionControlSetRuleGroupPrecedence' operation.
 */
async function handleAdmissionControlSetRuleGroupPrecedence(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Modifies rule group precedence ordering inside an admission control policy.
	 */
	const body = parseBodyJson(context, index);
	return await falconClient.admissionControlPolicies.admissionControlSetRuleGroupPrecedence(body as any);
}

/**
 * Handles the 'admissionControlReplaceRuleGroupSelectors' operation.
 */
async function handleAdmissionControlReplaceRuleGroupSelectors(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Replaces label or namespace selectors of a rule group in a policy.
	 */
	const body = parseBodyJson(context, index);
	return await falconClient.admissionControlPolicies.admissionControlReplaceRuleGroupSelectors(body as any);
}

/**
 * Handles the 'admissionControlAddRuleGroupCustomRule' operation.
 */
async function handleAdmissionControlAddRuleGroupCustomRule(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Adds custom Rego rules to a designated rule group in a policy.
	 */
	const body = parseBodyJson(context, index);
	return await falconClient.admissionControlPolicies.admissionControlAddRuleGroupCustomRule(body as any);
}

/**
 * Handles the 'admissionControlRemoveRuleGroupCustomRule' operation.
 */
async function handleAdmissionControlRemoveRuleGroupCustomRule(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Removes custom Rego rules from rule groups within an admission control policy.
	 */
	const policyId = context.getNodeParameter('policyId', index) as string;
	const customRuleIdsString = context.getNodeParameter('customRuleIds', index) as string;
	const customRuleIds = customRuleIdsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await falconClient.admissionControlPolicies.admissionControlRemoveRuleGroupCustomRule(policyId, customRuleIds);
}

/**
 * Main execution handler for CrowdStrike Falcon Admission Control Policies operations.
 * Routes execution to specialized internal functions to minimize Cognitive Complexity.
 */
export async function executeAdmissionControlPolicies(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {

	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'admissionControlQueryPolicies':
			return await handleAdmissionControlQueryPolicies(this, index, falconClient);
		case 'admissionControlGetPolicies':
			return await handleAdmissionControlGetPolicies(this, index, falconClient);
		case 'admissionControlCreatePolicy':
			return await handleAdmissionControlCreatePolicy(this, index, falconClient);
		case 'admissionControlUpdatePolicy':
			return await handleAdmissionControlUpdatePolicy(this, index, falconClient);
		case 'admissionControlDeletePolicies':
			return await handleAdmissionControlDeletePolicies(this, index, falconClient);
		case 'admissionControlUpdatePolicyPrecedence':
			return await handleAdmissionControlUpdatePolicyPrecedence(this, index, falconClient);
		case 'admissionControlAddHostGroups':
			return await handleAdmissionControlAddHostGroups(this, index, falconClient);
		case 'admissionControlRemoveHostGroups':
			return await handleAdmissionControlRemoveHostGroups(this, index, falconClient);
		case 'admissionControlCreateRuleGroups':
			return await handleAdmissionControlCreateRuleGroups(this, index, falconClient);
		case 'admissionControlUpdateRuleGroups':
			return await handleAdmissionControlUpdateRuleGroups(this, index, falconClient);
		case 'admissionControlDeleteRuleGroups':
			return await handleAdmissionControlDeleteRuleGroups(this, index, falconClient);
		case 'admissionControlSetRuleGroupPrecedence':
			return await handleAdmissionControlSetRuleGroupPrecedence(this, index, falconClient);
		case 'admissionControlReplaceRuleGroupSelectors':
			return await handleAdmissionControlReplaceRuleGroupSelectors(this, index, falconClient);
		case 'admissionControlAddRuleGroupCustomRule':
			return await handleAdmissionControlAddRuleGroupCustomRule(this, index, falconClient);
		case 'admissionControlRemoveRuleGroupCustomRule':
			return await handleAdmissionControlRemoveRuleGroupCustomRule(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Admission Control Policies.`);
	}
	
}
