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

/** Handles createPolicies */
async function handleCreatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new policy of the specified type. */
	return await fc.filevantage.createPolicies(parseJsonParam(c, i));
}

/** Handles createRuleGroups */
async function handleCreateRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new rule group of the specified type. */
	return await fc.filevantage.createRuleGroups(parseJsonParam(c, i));
}

/** Handles createRules */
async function handleCreateRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new rule configuration within the specified rule group. */
	return await fc.filevantage.createRules(parseJsonParam(c, i));
}

/** Handles createScheduledExclusions */
async function handleCreateScheduledExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new scheduled exclusion configuration. */
	return await fc.filevantage.createScheduledExclusions(parseJsonParam(c, i));
}

/** Handles deletePolicies */
async function handleDeletePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes 1 or more policies. */
	return await fc.filevantage.deletePolicies(parseArrayParam(c, i, 'ids'));
}

/** Handles deleteRuleGroups */
async function handleDeleteRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes 1 or more rule groups. */
	return await fc.filevantage.deleteRuleGroups(parseArrayParam(c, i, 'ids'));
}

/** Handles deleteRules */
async function handleDeleteRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes 1 or more rules from specified rule group. */
	const ruleGroupId = getStringParam(c, i, 'ruleGroupId', '');
	return await fc.filevantage.deleteRules(ruleGroupId, parseArrayParam(c, i, 'ids'));
}

/** Handles deleteScheduledExclusions */
async function handleDeleteScheduledExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes 1 or more scheduled exclusions from policy. */
	const policyId = getStringParam(c, i, 'policyId', '');
	return await fc.filevantage.deleteScheduledExclusions(policyId, parseArrayParam(c, i, 'ids'));
}

/** Handles getActionsMixin0 */
async function handleGetActionsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves processing results for 1 or more actions. */
	return await fc.filevantage.getActionsMixin0(parseArrayParam(c, i, 'ids'));
}

/** Handles getChanges */
async function handleGetChanges(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve information on changes. */
	return await fc.filevantage.getChanges(parseArrayParam(c, i, 'ids'));
}

/** Handles getContents */
async function handleGetContents(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves content captured for change ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.filevantage.getContents(id);
}

/** Handles getPolicies */
async function handleGetPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves configuration for 1 or more policies. */
	return await fc.filevantage.getPolicies(parseArrayParam(c, i, 'ids'));
}

/** Handles getRuleGroups */
async function handleGetRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves rule group details for 1 or more rule groups. */
	return await fc.filevantage.getRuleGroups(parseArrayParam(c, i, 'ids'));
}

/** Handles getRules */
async function handleGetRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves configuration for 1 or more rules. */
	const ruleGroupId = getStringParam(c, i, 'ruleGroupId', '');
	return await fc.filevantage.getRules(ruleGroupId, parseArrayParam(c, i, 'ids'));
}

/** Handles getScheduledExclusions */
async function handleGetScheduledExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves configuration of scheduled exclusions. */
	const policyId = getStringParam(c, i, 'policyId', '');
	return await fc.filevantage.getScheduledExclusions(policyId, parseArrayParam(c, i, 'ids'));
}

/** Handles highVolumeQueryChanges */
async function handleHighVolumeQueryChanges(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns 1 or more change IDs with high volume pagination. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.filevantage.highVolumeQueryChanges(undefined, limit || undefined, sort || undefined, filter || undefined);
}

/** Handles queryActionsMixin0 */
async function handleQueryActionsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns one or more action IDs matching filter. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.filevantage.queryActionsMixin0(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/** Handles queryChanges */
async function handleQueryChanges(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns 1 or more change IDs matching filter. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.filevantage.queryChanges(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/** Handles queryPolicies */
async function handleQueryPolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve IDs of policies assigned the provided type. */
	const type = getStringParam(c, i, 'type', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.filevantage.queryPolicies(type, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles queryRuleGroups */
async function handleQueryRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve IDs of rule groups of provided type. */
	const type = getStringParam(c, i, 'type', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.filevantage.queryRuleGroups(type, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles queryScheduledExclusions */
async function handleQueryScheduledExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve IDs of scheduled exclusions contained within policy ID. */
	const policyId = getStringParam(c, i, 'policyId', '');
	return await fc.filevantage.queryScheduledExclusions(policyId);
}

/** Handles signalChangesExternal */
async function handleSignalChangesExternal(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Initiates workflows for provided change IDs. */
	return await fc.filevantage.signalChangesExternal(parseJsonParam(c, i));
}

/** Handles startActions */
async function handleStartActions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Initiates specified action on provided change IDs. */
	return await fc.filevantage.startActions(parseJsonParam(c, i));
}

/** Handles updatePolicies */
async function handleUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates general information of provided policy. */
	return await fc.filevantage.updatePolicies(parseJsonParam(c, i));
}

/** Handles updatePolicyHostGroups */
async function handleUpdatePolicyHostGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Manage host groups assigned to a policy. */
	const policyId = getStringParam(c, i, 'policyId', '');
	const action = getStringParam(c, i, 'action', '');
	return await fc.filevantage.updatePolicyHostGroups(policyId, action, parseArrayParam(c, i, 'ids'));
}

/** Handles updatePolicyPrecedence */
async function handleUpdatePolicyPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates policy precedence for policies of a specific type. */
	const type = getStringParam(c, i, 'type', '');
	return await fc.filevantage.updatePolicyPrecedence(parseArrayParam(c, i, 'ids'), type);
}

/** Handles updatePolicyRuleGroups */
async function handleUpdatePolicyRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Manage rule groups assigned to a policy. */
	const policyId = getStringParam(c, i, 'policyId', '');
	const action = getStringParam(c, i, 'action', '');
	return await fc.filevantage.updatePolicyRuleGroups(policyId, action, parseArrayParam(c, i, 'ids'));
}

/** Handles updateRuleGroupPrecedence */
async function handleUpdateRuleGroupPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates rule precedence for rules in identified rule group. */
	const ruleGroupId = getStringParam(c, i, 'ruleGroupId', '');
	return await fc.filevantage.updateRuleGroupPrecedence(ruleGroupId, parseArrayParam(c, i, 'ids'));
}

/** Handles updateRuleGroups */
async function handleUpdateRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates provided rule group. */
	return await fc.filevantage.updateRuleGroups(parseJsonParam(c, i));
}

/** Handles updateRules */
async function handleUpdateRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates provided rule configuration within specified rule group. */
	return await fc.filevantage.updateRules(parseJsonParam(c, i));
}

/** Handles updateScheduledExclusions */
async function handleUpdateScheduledExclusions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates provided scheduled exclusion configuration. */
	return await fc.filevantage.updateScheduledExclusions(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Filevantage operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeFilevantage(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createPolicies': return await handleCreatePolicies(this, index, falconClient);
		case 'createRuleGroups': return await handleCreateRuleGroups(this, index, falconClient);
		case 'createRules': return await handleCreateRules(this, index, falconClient);
		case 'createScheduledExclusions': return await handleCreateScheduledExclusions(this, index, falconClient);
		case 'deletePolicies': return await handleDeletePolicies(this, index, falconClient);
		case 'deleteRuleGroups': return await handleDeleteRuleGroups(this, index, falconClient);
		case 'deleteRules': return await handleDeleteRules(this, index, falconClient);
		case 'deleteScheduledExclusions': return await handleDeleteScheduledExclusions(this, index, falconClient);
		case 'getActionsMixin0': return await handleGetActionsMixin0(this, index, falconClient);
		case 'getChanges': return await handleGetChanges(this, index, falconClient);
		case 'getContents': return await handleGetContents(this, index, falconClient);
		case 'getPolicies': return await handleGetPolicies(this, index, falconClient);
		case 'getRuleGroups': return await handleGetRuleGroups(this, index, falconClient);
		case 'getRules': return await handleGetRules(this, index, falconClient);
		case 'getScheduledExclusions': return await handleGetScheduledExclusions(this, index, falconClient);
		case 'highVolumeQueryChanges': return await handleHighVolumeQueryChanges(this, index, falconClient);
		case 'queryActionsMixin0': return await handleQueryActionsMixin0(this, index, falconClient);
		case 'queryChanges': return await handleQueryChanges(this, index, falconClient);
		case 'queryPolicies': return await handleQueryPolicies(this, index, falconClient);
		case 'queryRuleGroups': return await handleQueryRuleGroups(this, index, falconClient);
		case 'queryScheduledExclusions': return await handleQueryScheduledExclusions(this, index, falconClient);
		case 'signalChangesExternal': return await handleSignalChangesExternal(this, index, falconClient);
		case 'startActions': return await handleStartActions(this, index, falconClient);
		case 'updatePolicies': return await handleUpdatePolicies(this, index, falconClient);
		case 'updatePolicyHostGroups': return await handleUpdatePolicyHostGroups(this, index, falconClient);
		case 'updatePolicyPrecedence': return await handleUpdatePolicyPrecedence(this, index, falconClient);
		case 'updatePolicyRuleGroups': return await handleUpdatePolicyRuleGroups(this, index, falconClient);
		case 'updateRuleGroupPrecedence': return await handleUpdateRuleGroupPrecedence(this, index, falconClient);
		case 'updateRuleGroups': return await handleUpdateRuleGroups(this, index, falconClient);
		case 'updateRules': return await handleUpdateRules(this, index, falconClient);
		case 'updateScheduledExclusions': return await handleUpdateScheduledExclusions(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Filevantage.`);
	}
}
