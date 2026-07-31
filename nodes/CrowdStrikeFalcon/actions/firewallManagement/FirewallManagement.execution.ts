import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'aggregateEvents' operation.
 */
async function handleAggregateEvents(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Aggregate events for customer. */
	const body = parseJsonParam(c, i);
	return await fc.firewallManagement.aggregateEvents(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregatePolicyRules' operation.
 */
async function handleAggregatePolicyRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Aggregate rules within a policy for customer. */
	const body = parseJsonParam(c, i);
	return await fc.firewallManagement.aggregatePolicyRules(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateRuleGroups' operation.
 */
async function handleAggregateRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Aggregate rule groups for customer. */
	const body = parseJsonParam(c, i);
	return await fc.firewallManagement.aggregateRuleGroups(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateRules' operation.
 */
async function handleAggregateRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Aggregate rules for customer. */
	const body = parseJsonParam(c, i);
	return await fc.firewallManagement.aggregateRules(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'createNetworkLocations' operation.
 */
async function handleCreateNetworkLocations(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create new network locations. */
	const body = parseJsonParam(c, i);
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.firewallManagement.createNetworkLocations(body, undefined, undefined, comment || undefined);
}

/**
 * Handles the 'createRuleGroup' operation.
 */
async function handleCreateRuleGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create new rule group. */
	const body = parseJsonParam(c, i);
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.firewallManagement.createRuleGroup(body, undefined, undefined, comment || undefined);
}

/**
 * Handles the 'createRuleGroupValidation' operation.
 */
async function handleCreateRuleGroupValidation(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Validates request of creating new rule group. */
	const body = parseJsonParam(c, i);
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.firewallManagement.createRuleGroupValidation(body, undefined, undefined, comment || undefined);
}

/**
 * Handles the 'deleteNetworkLocations' operation.
 */
async function handleDeleteNetworkLocations(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete network location entities by ID. */
	return await fc.firewallManagement.deleteNetworkLocations(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'deleteRuleGroups' operation.
 */
async function handleDeleteRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete rule group entities by ID. */
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.firewallManagement.deleteRuleGroups(parseArrayParam(c, i, 'ids'), comment || undefined);
}

/**
 * Handles the 'getEvents' operation.
 */
async function handleGetEvents(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get events entities by ID. */
	return await fc.firewallManagement.getEvents(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getFirewallFields' operation.
 */
async function handleGetFirewallFields(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get firewall field specifications by ID. */
	return await fc.firewallManagement.getFirewallFields(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getNetworkLocations' operation.
 */
async function handleGetNetworkLocations(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get summary of network locations entities by ID. */
	return await fc.firewallManagement.getNetworkLocations(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getNetworkLocationsDetails' operation.
 */
async function handleGetNetworkLocationsDetails(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get complete network locations objects. */
	return await fc.firewallManagement.getNetworkLocationsDetails(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getPlatforms' operation.
 */
async function handleGetPlatforms(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get platforms by ID. */
	return await fc.firewallManagement.getPlatforms(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getPolicyContainers' operation.
 */
async function handleGetPolicyContainers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get policy container entities by policy ID. */
	return await fc.firewallManagement.getPolicyContainers(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getRuleGroups' operation.
 */
async function handleGetRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get rule group entities by ID. */
	return await fc.firewallManagement.getRuleGroups(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getRules' operation.
 */
async function handleGetRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get rule entities by ID or Family ID. */
	return await fc.firewallManagement.getRules(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'queryEvents' operation.
 */
async function handleQueryEvents(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Find all event IDs matching query with filter. */
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.firewallManagement.queryEvents(sort || undefined, filter || undefined, q || undefined, offset || undefined, undefined, limit || undefined);
}

/**
 * Handles the 'queryFirewallFields' operation.
 */
async function handleQueryFirewallFields(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get firewall field specification IDs for platform. */
	const platformId = getStringParam(c, i, 'platformId', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.firewallManagement.queryFirewallFields(platformId || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryNetworkLocations' operation.
 */
async function handleQueryNetworkLocations(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get list of network location IDs. */
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.firewallManagement.queryNetworkLocations(sort || undefined, filter || undefined, q || undefined, offset || undefined, undefined, limit || undefined);
}

/**
 * Handles the 'queryPlatforms' operation.
 */
async function handleQueryPlatforms(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get list of platform names. */
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.firewallManagement.queryPlatforms(offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryPolicyRules' operation.
 */
async function handleQueryPolicyRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Find all firewall rule IDs matching query in precedence order. */
	const id = getStringParam(c, i, 'id', '');
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.firewallManagement.queryPolicyRules(id || undefined, sort || undefined, filter || undefined, q || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryRuleGroups' operation.
 */
async function handleQueryRuleGroups(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Find all rule group IDs matching query. */
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.firewallManagement.queryRuleGroups(sort || undefined, filter || undefined, q || undefined, offset || undefined, undefined, limit || undefined);
}

/**
 * Handles the 'queryRules' operation.
 */
async function handleQueryRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Find all rule IDs matching query. */
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.firewallManagement.queryRules(sort || undefined, filter || undefined, q || undefined, offset || undefined, undefined, limit || undefined);
}

/**
 * Handles the 'updateNetworkLocations' operation.
 */
async function handleUpdateNetworkLocations(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates network locations provided. */
	const body = parseJsonParam(c, i);
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.firewallManagement.updateNetworkLocations(body, comment || undefined);
}

/**
 * Handles the 'updateNetworkLocationsMetadata' operation.
 */
async function handleUpdateNetworkLocationsMetadata(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates network locations metadata. */
	const body = parseJsonParam(c, i);
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.firewallManagement.updateNetworkLocationsMetadata(body, comment || undefined);
}

/**
 * Handles the 'updateNetworkLocationsPrecedence' operation.
 */
async function handleUpdateNetworkLocationsPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates network locations precedence. */
	const body = parseJsonParam(c, i);
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.firewallManagement.updateNetworkLocationsPrecedence(body, comment || undefined);
}

/**
 * Handles the 'updatePolicyContainer' operation.
 */
async function handleUpdatePolicyContainer(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update identified policy container including local logging. */
	return await fc.firewallManagement.updatePolicyContainer(parseJsonParam(c, i));
}

/**
 * Handles the 'updatePolicyContainerV1' operation.
 */
async function handleUpdatePolicyContainerV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update identified policy container (deprecated). */
	return await fc.firewallManagement.updatePolicyContainerV1(parseJsonParam(c, i));
}

/**
 * Handles the 'updateRuleGroup' operation.
 */
async function handleUpdateRuleGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update rule group. */
	const body = parseJsonParam(c, i);
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.firewallManagement.updateRuleGroup(body, comment || undefined);
}

/**
 * Handles the 'updateRuleGroupValidation' operation.
 */
async function handleUpdateRuleGroupValidation(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Validates request of updating rule group. */
	const body = parseJsonParam(c, i);
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.firewallManagement.updateRuleGroupValidation(body, comment || undefined);
}

/**
 * Handles the 'upsertNetworkLocations' operation.
 */
async function handleUpsertNetworkLocations(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upserts network locations provided. */
	const body = parseJsonParam(c, i);
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.firewallManagement.upsertNetworkLocations(body, comment || undefined);
}

/**
 * Handles the 'validateFilepathPattern' operation.
 */
async function handleValidateFilepathPattern(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Validates test pattern matches executable filepath glob pattern. */
	return await fc.firewallManagement.validateFilepathPattern(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Firewall Management operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
const HANDLER_MAP: Record<string, (c: IExecuteFunctions, i: number, fc: FalconClient) => Promise<any>> = {
	'aggregateEvents': handleAggregateEvents,
	'aggregatePolicyRules': handleAggregatePolicyRules,
	'aggregateRuleGroups': handleAggregateRuleGroups,
	'aggregateRules': handleAggregateRules,
	'createNetworkLocations': handleCreateNetworkLocations,
	'createRuleGroup': handleCreateRuleGroup,
	'createRuleGroupValidation': handleCreateRuleGroupValidation,
	'deleteNetworkLocations': handleDeleteNetworkLocations,
	'deleteRuleGroups': handleDeleteRuleGroups,
	'getEvents': handleGetEvents,
	'getFirewallFields': handleGetFirewallFields,
	'getNetworkLocations': handleGetNetworkLocations,
	'getNetworkLocationsDetails': handleGetNetworkLocationsDetails,
	'getPlatforms': handleGetPlatforms,
	'getPolicyContainers': handleGetPolicyContainers,
	'getRuleGroups': handleGetRuleGroups,
	'getRules': handleGetRules,
	'queryEvents': handleQueryEvents,
	'queryFirewallFields': handleQueryFirewallFields,
	'queryNetworkLocations': handleQueryNetworkLocations,
	'queryPlatforms': handleQueryPlatforms,
	'queryPolicyRules': handleQueryPolicyRules,
	'queryRuleGroups': handleQueryRuleGroups,
	'queryRules': handleQueryRules,
	'updateNetworkLocations': handleUpdateNetworkLocations,
	'updateNetworkLocationsMetadata': handleUpdateNetworkLocationsMetadata,
	'updateNetworkLocationsPrecedence': handleUpdateNetworkLocationsPrecedence,
	'updatePolicyContainer': handleUpdatePolicyContainer,
	'updatePolicyContainerV1': handleUpdatePolicyContainerV1,
	'updateRuleGroup': handleUpdateRuleGroup,
	'updateRuleGroupValidation': handleUpdateRuleGroupValidation,
	'upsertNetworkLocations': handleUpsertNetworkLocations,
	'validateFilepathPattern': handleValidateFilepathPattern,
};

export async function executeFirewallManagement(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	const handler = HANDLER_MAP[operation];
	if (handler) {
		return await handler(this, index, falconClient);
	}
	throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for FirewallManagement.`); as any)), `Operation ${operation} is not supported for Firewall Management.`);
	}
}
