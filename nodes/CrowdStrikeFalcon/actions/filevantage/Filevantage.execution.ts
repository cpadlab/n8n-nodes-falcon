import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'createPolicies' operation.
 */
async function handleCreatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new policy of the specified type. */
	return await fc.filevantage.createPolicies(parseJsonParam(c, i));
}

/**
 * Handles the 'createRuleGroups' operation.
 */
async function handleCreateRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new rule group of the specified type. */
	return await fc.filevantage.createRuleGroups(parseJsonParam(c, i));
}

/**
 * Handles the 'createRules' operation.
 */
async function handleCreateRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new rule configuration within the specified rule group. */
	return await fc.filevantage.createRules(parseJsonParam(c, i));
}

/**
 * Handles the 'createScheduledExclusions' operation.
 */
async function handleCreateScheduledExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new scheduled exclusion configuration. */
	return await fc.filevantage.createScheduledExclusions(parseJsonParam(c, i));
}

/**
 * Handles the 'deletePolicies' operation.
 */
async function handleDeletePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes 1 or more policies. */
	return await fc.filevantage.deletePolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'deleteRuleGroups' operation.
 */
async function handleDeleteRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes 1 or more rule groups. */
	return await fc.filevantage.deleteRuleGroups(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'deleteRules' operation.
 */
async function handleDeleteRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes 1 or more rules from specified rule group. */
	const ruleGroupId = getStringParam(c, i, 'ruleGroupId', '');
	return await fc.filevantage.deleteRules(ruleGroupId, parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'deleteScheduledExclusions' operation.
 */
async function handleDeleteScheduledExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes 1 or more scheduled exclusions from policy. */
	const policyId = getStringParam(c, i, 'policyId', '');
	return await fc.filevantage.deleteScheduledExclusions(policyId, parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getActionsMixin0' operation.
 */
async function handleGetActionsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves processing results for 1 or more actions. */
	return await fc.filevantage.getActionsMixin0(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getChanges' operation.
 */
async function handleGetChanges(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve information on changes. */
	return await fc.filevantage.getChanges(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getContents' operation.
 */
async function handleGetContents(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves content captured for change ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.filevantage.getContents(id);
}

/**
 * Handles the 'getPolicies' operation.
 */
async function handleGetPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves configuration for 1 or more policies. */
	return await fc.filevantage.getPolicies(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getRuleGroups' operation.
 */
async function handleGetRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves rule group details for 1 or more rule groups. */
	return await fc.filevantage.getRuleGroups(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getRules' operation.
 */
async function handleGetRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves configuration for 1 or more rules. */
	const ruleGroupId = getStringParam(c, i, 'ruleGroupId', '');
	return await fc.filevantage.getRules(ruleGroupId, parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getScheduledExclusions' operation.
 */
async function handleGetScheduledExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves configuration of scheduled exclusions. */
	const policyId = getStringParam(c, i, 'policyId', '');
	return await fc.filevantage.getScheduledExclusions(policyId, parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'highVolumeQueryChanges' operation.
 */
async function handleHighVolumeQueryChanges(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns 1 or more change IDs with high volume pagination. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.filevantage.highVolumeQueryChanges(undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'queryActionsMixin0' operation.
 */
async function handleQueryActionsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns one or more action IDs matching filter. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.filevantage.queryActionsMixin0(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'queryChanges' operation.
 */
async function handleQueryChanges(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns 1 or more change IDs matching filter. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.filevantage.queryChanges(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'queryPolicies' operation.
 */
async function handleQueryPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve IDs of policies assigned the provided type. */
	const type = getStringParam(c, i, 'type', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.filevantage.queryPolicies(type, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queryRuleGroups' operation.
 */
async function handleQueryRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve IDs of rule groups of provided type. */
	const type = getStringParam(c, i, 'type', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.filevantage.queryRuleGroups(type, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queryScheduledExclusions' operation.
 */
async function handleQueryScheduledExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve IDs of scheduled exclusions contained within policy ID. */
	const policyId = getStringParam(c, i, 'policyId', '');
	return await fc.filevantage.queryScheduledExclusions(policyId);
}

/**
 * Handles the 'signalChangesExternal' operation.
 */
async function handleSignalChangesExternal(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Initiates workflows for provided change IDs. */
	return await fc.filevantage.signalChangesExternal(parseJsonParam(c, i));
}

/**
 * Handles the 'startActions' operation.
 */
async function handleStartActions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Initiates specified action on provided change IDs. */
	return await fc.filevantage.startActions(parseJsonParam(c, i));
}

/**
 * Handles the 'updatePolicies' operation.
 */
async function handleUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates general information of provided policy. */
	return await fc.filevantage.updatePolicies(parseJsonParam(c, i));
}

/**
 * Handles the 'updatePolicyHostGroups' operation.
 */
async function handleUpdatePolicyHostGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Manage host groups assigned to a policy. */
	const policyId = getStringParam(c, i, 'policyId', '');
	const action = getStringParam(c, i, 'action', '');
	return await fc.filevantage.updatePolicyHostGroups(policyId, action, parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'updatePolicyPrecedence' operation.
 */
async function handleUpdatePolicyPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates policy precedence for policies of a specific type. */
	const type = getStringParam(c, i, 'type', '');
	return await fc.filevantage.updatePolicyPrecedence(parseArrayParam(c, i, 'ids'), type);
}

/**
 * Handles the 'updatePolicyRuleGroups' operation.
 */
async function handleUpdatePolicyRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Manage rule groups assigned to a policy. */
	const policyId = getStringParam(c, i, 'policyId', '');
	const action = getStringParam(c, i, 'action', '');
	return await fc.filevantage.updatePolicyRuleGroups(policyId, action, parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'updateRuleGroupPrecedence' operation.
 */
async function handleUpdateRuleGroupPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates rule precedence for rules in identified rule group. */
	const ruleGroupId = getStringParam(c, i, 'ruleGroupId', '');
	return await fc.filevantage.updateRuleGroupPrecedence(ruleGroupId, parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'updateRuleGroups' operation.
 */
async function handleUpdateRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates provided rule group. */
	return await fc.filevantage.updateRuleGroups(parseJsonParam(c, i));
}

/**
 * Handles the 'updateRules' operation.
 */
async function handleUpdateRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates provided rule configuration within specified rule group. */
	return await fc.filevantage.updateRules(parseJsonParam(c, i));
}

/**
 * Handles the 'updateScheduledExclusions' operation.
 */
async function handleUpdateScheduledExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates provided scheduled exclusion configuration. */
	return await fc.filevantage.updateScheduledExclusions(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Filevantage operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
const HANDLER_MAP: Record<string, (c: IExecuteFunctions, i: number, fc: FalconClient) => Promise<any>> = {
	'createPolicies': handleCreatePolicies,
	'createRuleGroups': handleCreateRuleGroups,
	'createRules': handleCreateRules,
	'createScheduledExclusions': handleCreateScheduledExclusions,
	'deletePolicies': handleDeletePolicies,
	'deleteRuleGroups': handleDeleteRuleGroups,
	'deleteRules': handleDeleteRules,
	'deleteScheduledExclusions': handleDeleteScheduledExclusions,
	'getActionsMixin0': handleGetActionsMixin0,
	'getChanges': handleGetChanges,
	'getContents': handleGetContents,
	'getPolicies': handleGetPolicies,
	'getRuleGroups': handleGetRuleGroups,
	'getRules': handleGetRules,
	'getScheduledExclusions': handleGetScheduledExclusions,
	'highVolumeQueryChanges': handleHighVolumeQueryChanges,
	'queryActionsMixin0': handleQueryActionsMixin0,
	'queryChanges': handleQueryChanges,
	'queryPolicies': handleQueryPolicies,
	'queryRuleGroups': handleQueryRuleGroups,
	'queryScheduledExclusions': handleQueryScheduledExclusions,
	'signalChangesExternal': handleSignalChangesExternal,
	'startActions': handleStartActions,
	'updatePolicies': handleUpdatePolicies,
	'updatePolicyHostGroups': handleUpdatePolicyHostGroups,
	'updatePolicyPrecedence': handleUpdatePolicyPrecedence,
	'updatePolicyRuleGroups': handleUpdatePolicyRuleGroups,
	'updateRuleGroupPrecedence': handleUpdateRuleGroupPrecedence,
	'updateRuleGroups': handleUpdateRuleGroups,
	'updateRules': handleUpdateRules,
	'updateScheduledExclusions': handleUpdateScheduledExclusions,
};

export async function executeFilevantage(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	const handler = HANDLER_MAP[operation];
	if (handler) {
		return await handler(this, index, falconClient);
	}
	throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Filevantage.`); as any)), `Operation ${operation} is not supported for Filevantage.`);
	}
}
