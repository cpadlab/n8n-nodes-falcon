import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'createRule' operation.
 */
async function handleCreateRule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a rule within a rule group. */
	return await fc.customIoa.createRule(parseJsonParam(c, i));
}

/**
 * Handles the 'createRuleGroupMixin0' operation.
 */
async function handleCreateRuleGroupMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a rule group. */
	return await fc.customIoa.createRuleGroupMixin0(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteRuleGroupsMixin0' operation.
 */
async function handleDeleteRuleGroupsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes rule groups by ID. */
	const comment = c.getNodeParameter('comment', i, '') as string;
	return await fc.customIoa.deleteRuleGroupsMixin0(parseArrayParam(c, i), comment || undefined);
}

/**
 * Handles the 'deleteRules' operation.
 */
async function handleDeleteRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes rules from a rule group. */
	const ruleGroupId = c.getNodeParameter('ruleGroupId', i) as string;
	const comment = c.getNodeParameter('comment', i, '') as string;
	return await fc.customIoa.deleteRules(ruleGroupId, parseArrayParam(c, i), comment || undefined);
}

/**
 * Handles the 'getPatterns' operation.
 */
async function handleGetPatterns(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets pattern severities by ID. */
	return await fc.customIoa.getPatterns(parseArrayParam(c, i));
}

/**
 * Handles the 'getPlatformsMixin0' operation.
 */
async function handleGetPlatformsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets platforms by ID. */
	return await fc.customIoa.getPlatformsMixin0(parseArrayParam(c, i));
}

/**
 * Handles the 'getRuleGroupsMixin0' operation.
 */
async function handleGetRuleGroupsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets rule groups by ID. */
	return await fc.customIoa.getRuleGroupsMixin0(parseArrayParam(c, i));
}

/**
 * Handles the 'getRuleTypes' operation.
 */
async function handleGetRuleTypes(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets rule types by ID. */
	return await fc.customIoa.getRuleTypes(parseArrayParam(c, i));
}

/**
 * Handles the 'getRulesGet' operation.
 */
async function handleGetRulesGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets rules via POST body. */
	return await fc.customIoa.getRulesGet(parseJsonParam(c, i));
}

/**
 * Handles the 'getRulesMixin0' operation.
 */
async function handleGetRulesMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets rules by ID list. */
	return await fc.customIoa.getRulesMixin0(parseArrayParam(c, i));
}

/**
 * Handles the 'queryPatterns' operation.
 */
async function handleQueryPatterns(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets all pattern severity IDs. */
	const offset = c.getNodeParameter('offset', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customIoa.queryPatterns(offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryPlatformsMixin0' operation.
 */
async function handleQueryPlatformsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets all platform IDs. */
	const offset = c.getNodeParameter('offset', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customIoa.queryPlatformsMixin0(offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryRuleGroupsFull' operation.
 */
async function handleQueryRuleGroupsFull(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Finds all rule groups matching query with filter. */
	const sort = c.getNodeParameter('sort', i, '') as any;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const q = c.getNodeParameter('q', i, '') as string;
	const offset = c.getNodeParameter('offset', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customIoa.queryRuleGroupsFull(sort || undefined, filter || undefined, q || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryRuleGroupsMixin0' operation.
 */
async function handleQueryRuleGroupsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Finds all rule group IDs matching query. */
	const sort = c.getNodeParameter('sort', i, '') as any;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const q = c.getNodeParameter('q', i, '') as string;
	const offset = c.getNodeParameter('offset', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customIoa.queryRuleGroupsMixin0(sort || undefined, filter || undefined, q || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryRuleTypes' operation.
 */
async function handleQueryRuleTypes(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets all rule type IDs. */
	const offset = c.getNodeParameter('offset', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customIoa.queryRuleTypes(offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryRulesMixin0' operation.
 */
async function handleQueryRulesMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Finds all rule IDs matching query. */
	const sort = c.getNodeParameter('sort', i, '') as any;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const q = c.getNodeParameter('q', i, '') as string;
	const offset = c.getNodeParameter('offset', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customIoa.queryRulesMixin0(sort || undefined, filter || undefined, q || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'updateRuleGroupMixin0' operation.
 */
async function handleUpdateRuleGroupMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates a rule group. */
	return await fc.customIoa.updateRuleGroupMixin0(parseJsonParam(c, i));
}

/**
 * Handles the 'updateRules' operation.
 */
async function handleUpdateRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates rules within a rule group. */
	return await fc.customIoa.updateRules(parseJsonParam(c, i));
}

/**
 * Handles the 'updateRulesV2' operation.
 */
async function handleUpdateRulesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates rules V2. */
	return await fc.customIoa.updateRulesV2(parseJsonParam(c, i));
}

/**
 * Handles the 'validate' operation.
 */
async function handleValidate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Validates field values and test string. */
	return await fc.customIoa.validate(parseJsonParam(c, i));
}

/** Main execution handler for Custom IOA operations. */
export async function executeCustomIoa(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createRule': return await handleCreateRule(this, index, falconClient);
		case 'createRuleGroupMixin0': return await handleCreateRuleGroupMixin0(this, index, falconClient);
		case 'deleteRuleGroupsMixin0': return await handleDeleteRuleGroupsMixin0(this, index, falconClient);
		case 'deleteRules': return await handleDeleteRules(this, index, falconClient);
		case 'getPatterns': return await handleGetPatterns(this, index, falconClient);
		case 'getPlatformsMixin0': return await handleGetPlatformsMixin0(this, index, falconClient);
		case 'getRuleGroupsMixin0': return await handleGetRuleGroupsMixin0(this, index, falconClient);
		case 'getRuleTypes': return await handleGetRuleTypes(this, index, falconClient);
		case 'getRulesGet': return await handleGetRulesGet(this, index, falconClient);
		case 'getRulesMixin0': return await handleGetRulesMixin0(this, index, falconClient);
		case 'queryPatterns': return await handleQueryPatterns(this, index, falconClient);
		case 'queryPlatformsMixin0': return await handleQueryPlatformsMixin0(this, index, falconClient);
		case 'queryRuleGroupsFull': return await handleQueryRuleGroupsFull(this, index, falconClient);
		case 'queryRuleGroupsMixin0': return await handleQueryRuleGroupsMixin0(this, index, falconClient);
		case 'queryRuleTypes': return await handleQueryRuleTypes(this, index, falconClient);
		case 'queryRulesMixin0': return await handleQueryRulesMixin0(this, index, falconClient);
		case 'updateRuleGroupMixin0': return await handleUpdateRuleGroupMixin0(this, index, falconClient);
		case 'updateRules': return await handleUpdateRules(this, index, falconClient);
		case 'updateRulesV2': return await handleUpdateRulesV2(this, index, falconClient);
		case 'validate': return await handleValidate(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Custom IOA.`);
	}
}
