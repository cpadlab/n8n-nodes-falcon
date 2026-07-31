import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'cloneComplianceFramework' operation.
 */
async function handleCloneComplianceFramework(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Clones an existing compliance framework. */
	const ids = c.getNodeParameter('ids', i) as string;
	return await fc.cloudPolicies.cloneComplianceFramework(ids);
}

/**
 * Handles the 'createComplianceControl' operation.
 */
async function handleCreateComplianceControl(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a compliance control. */
	return await fc.cloudPolicies.createComplianceControl(parseJsonParam(c, i));
}

/**
 * Handles the 'createComplianceFramework' operation.
 */
async function handleCreateComplianceFramework(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a compliance framework. */
	return await fc.cloudPolicies.createComplianceFramework(parseJsonParam(c, i));
}

/**
 * Handles the 'createRuleMixin0' operation.
 */
async function handleCreateRuleMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new rule. */
	return await fc.cloudPolicies.createRuleMixin0(parseJsonParam(c, i));
}

/**
 * Handles the 'createRuleOverride' operation.
 */
async function handleCreateRuleOverride(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a rule override. */
	return await fc.cloudPolicies.createRuleOverride(parseJsonParam(c, i));
}

/**
 * Handles the 'createSuppressionRule' operation.
 */
async function handleCreateSuppressionRule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a suppression rule. */
	return await fc.cloudPolicies.createSuppressionRule(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteComplianceControl' operation.
 */
async function handleDeleteComplianceControl(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes compliance controls. */
	return await fc.cloudPolicies.deleteComplianceControl(parseArrayParam(c, i));
}

/**
 * Handles the 'deleteComplianceFramework' operation.
 */
async function handleDeleteComplianceFramework(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes a compliance framework. */
	const ids = c.getNodeParameter('ids', i) as string;
	return await fc.cloudPolicies.deleteComplianceFramework(ids);
}

/**
 * Handles the 'deleteRuleMixin0' operation.
 */
async function handleDeleteRuleMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes rules. */
	return await fc.cloudPolicies.deleteRuleMixin0(parseArrayParam(c, i));
}

/**
 * Handles the 'deleteRuleOverride' operation.
 */
async function handleDeleteRuleOverride(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes rule overrides. */
	return await fc.cloudPolicies.deleteRuleOverride(parseArrayParam(c, i));
}

/**
 * Handles the 'deleteSuppressionRules' operation.
 */
async function handleDeleteSuppressionRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes suppression rules. */
	return await fc.cloudPolicies.deleteSuppressionRules(parseArrayParam(c, i));
}

/**
 * Handles the 'getComplianceControls' operation.
 */
async function handleGetComplianceControls(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves compliance controls by IDs. */
	return await fc.cloudPolicies.getComplianceControls(parseArrayParam(c, i));
}

/**
 * Handles the 'getComplianceFrameworks' operation.
 */
async function handleGetComplianceFrameworks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves compliance frameworks by IDs. */
	return await fc.cloudPolicies.getComplianceFrameworks(parseArrayParam(c, i));
}

/**
 * Handles the 'getEnrichedAsset' operation.
 */
async function handleGetEnrichedAsset(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves enriched assets. */
	const ids = parseArrayParam(c, i);
	const domain = c.getNodeParameter('domain', i, '') as string;
	const subdomain = c.getNodeParameter('subdomain', i, '') as string;
	const resourceType = c.getNodeParameter('resourceType', i, '') as any;

	return await fc.cloudPolicies.getEnrichedAsset(ids.length ? ids : undefined, domain || undefined, subdomain || undefined, resourceType || undefined);
}

/**
 * Handles the 'getEvaluationResult' operation.
 */
async function handleGetEvaluationResult(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves evaluation results. */
	const body = parseJsonParam(c, i);
	const resourceType = c.getNodeParameter('resourceType', i, '') as string;
	const ids = parseArrayParam(c, i);

	return await fc.cloudPolicies.getEvaluationResult(body, undefined, resourceType || undefined, ids.length ? ids : undefined);
}

/**
 * Handles the 'getRule' operation.
 */
async function handleGetRule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves rules by IDs. */
	return await fc.cloudPolicies.getRule(parseArrayParam(c, i));
}

/**
 * Handles the 'getRuleInputSchema' operation.
 */
async function handleGetRuleInputSchema(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves rule input schema. */
	const domain = c.getNodeParameter('domain', i) as string;
	const subdomain = c.getNodeParameter('subdomain', i) as string;
	const resourceType = c.getNodeParameter('resourceType', i) as string;

	return await fc.cloudPolicies.getRuleInputSchema(domain, subdomain, resourceType);
}

/**
 * Handles the 'getRuleOverride' operation.
 */
async function handleGetRuleOverride(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves rule overrides by IDs. */
	return await fc.cloudPolicies.getRuleOverride(parseArrayParam(c, i));
}

/**
 * Handles the 'getSuppressionRules' operation.
 */
async function handleGetSuppressionRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves suppression rules by IDs. */
	return await fc.cloudPolicies.getSuppressionRules(parseArrayParam(c, i));
}

/**
 * Handles the 'queryComplianceControls' operation.
 */
async function handleQueryComplianceControls(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries compliance controls. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;

	return await fc.cloudPolicies.queryComplianceControls(filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'queryComplianceFrameworks' operation.
 */
async function handleQueryComplianceFrameworks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries compliance frameworks. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;

	return await fc.cloudPolicies.queryComplianceFrameworks(filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'queryRule' operation.
 */
async function handleQueryRule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries rules. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;

	return await fc.cloudPolicies.queryRule(filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'querySuppressionRules' operation.
 */
async function handleQuerySuppressionRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries suppression rules. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;

	return await fc.cloudPolicies.querySuppressionRules(filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'renameSectionComplianceFramework' operation.
 */
async function handleRenameSectionComplianceFramework(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Renames a section in a compliance framework. */
	const ids = c.getNodeParameter('ids', i) as string;
	const sectionName = c.getNodeParameter('sectionName', i) as string;
	const body = parseJsonParam(c, i);

	return await fc.cloudPolicies.renameSectionComplianceFramework(ids, sectionName, body);
}

/**
 * Handles the 'replaceControlRules' operation.
 */
async function handleReplaceControlRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Replaces control rules. */
	const ids = c.getNodeParameter('ids', i) as string;
	const body = parseJsonParam(c, i);

	return await fc.cloudPolicies.replaceControlRules(ids, body);
}

/**
 * Handles the 'updateComplianceControl' operation.
 */
async function handleUpdateComplianceControl(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates a compliance control. */
	const ids = c.getNodeParameter('ids', i) as string;
	const body = parseJsonParam(c, i);

	return await fc.cloudPolicies.updateComplianceControl(ids, body);
}

/**
 * Handles the 'updateComplianceFramework' operation.
 */
async function handleUpdateComplianceFramework(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates a compliance framework. */
	const ids = c.getNodeParameter('ids', i) as string;
	const body = parseJsonParam(c, i);

	return await fc.cloudPolicies.updateComplianceFramework(ids, body);
}

/**
 * Handles the 'updateRule' operation.
 */
async function handleUpdateRule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates a rule. */
	return await fc.cloudPolicies.updateRule(parseJsonParam(c, i));
}

/**
 * Handles the 'updateRuleOverride' operation.
 */
async function handleUpdateRuleOverride(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates a rule override. */
	return await fc.cloudPolicies.updateRuleOverride(parseJsonParam(c, i));
}

/**
 * Handles the 'updateSuppressionRule' operation.
 */
async function handleUpdateSuppressionRule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates a suppression rule. */
	return await fc.cloudPolicies.updateSuppressionRule(parseJsonParam(c, i));
}

/** Main execution handler for Cloud Policies operations. */
export async function executeCloudPolicies(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'cloneComplianceFramework': return await handleCloneComplianceFramework(this, index, falconClient);
		case 'createComplianceControl': return await handleCreateComplianceControl(this, index, falconClient);
		case 'createComplianceFramework': return await handleCreateComplianceFramework(this, index, falconClient);
		case 'createRuleMixin0': return await handleCreateRuleMixin0(this, index, falconClient);
		case 'createRuleOverride': return await handleCreateRuleOverride(this, index, falconClient);
		case 'createSuppressionRule': return await handleCreateSuppressionRule(this, index, falconClient);
		case 'deleteComplianceControl': return await handleDeleteComplianceControl(this, index, falconClient);
		case 'deleteComplianceFramework': return await handleDeleteComplianceFramework(this, index, falconClient);
		case 'deleteRuleMixin0': return await handleDeleteRuleMixin0(this, index, falconClient);
		case 'deleteRuleOverride': return await handleDeleteRuleOverride(this, index, falconClient);
		case 'deleteSuppressionRules': return await handleDeleteSuppressionRules(this, index, falconClient);
		case 'getComplianceControls': return await handleGetComplianceControls(this, index, falconClient);
		case 'getComplianceFrameworks': return await handleGetComplianceFrameworks(this, index, falconClient);
		case 'getEnrichedAsset': return await handleGetEnrichedAsset(this, index, falconClient);
		case 'getEvaluationResult': return await handleGetEvaluationResult(this, index, falconClient);
		case 'getRule': return await handleGetRule(this, index, falconClient);
		case 'getRuleInputSchema': return await handleGetRuleInputSchema(this, index, falconClient);
		case 'getRuleOverride': return await handleGetRuleOverride(this, index, falconClient);
		case 'getSuppressionRules': return await handleGetSuppressionRules(this, index, falconClient);
		case 'queryComplianceControls': return await handleQueryComplianceControls(this, index, falconClient);
		case 'queryComplianceFrameworks': return await handleQueryComplianceFrameworks(this, index, falconClient);
		case 'queryRule': return await handleQueryRule(this, index, falconClient);
		case 'querySuppressionRules': return await handleQuerySuppressionRules(this, index, falconClient);
		case 'renameSectionComplianceFramework': return await handleRenameSectionComplianceFramework(this, index, falconClient);
		case 'replaceControlRules': return await handleReplaceControlRules(this, index, falconClient);
		case 'updateComplianceControl': return await handleUpdateComplianceControl(this, index, falconClient);
		case 'updateComplianceFramework': return await handleUpdateComplianceFramework(this, index, falconClient);
		case 'updateRule': return await handleUpdateRule(this, index, falconClient);
		case 'updateRuleOverride': return await handleUpdateRuleOverride(this, index, falconClient);
		case 'updateSuppressionRule': return await handleUpdateSuppressionRule(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Cloud Policies.`);
	}
}
