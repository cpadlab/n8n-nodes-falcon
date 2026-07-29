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
	const str = context.getNodeParameter(paramName, index, '') as string;
	return str.split(',').map((id) => id.trim()).filter(Boolean);
}

/** Handles createRule */
async function handleCreateRule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a rule within a rule group. */
	return await fc.customIoa.createRule(parseJsonParam(c, i));
}

/** Handles createRuleGroupMixin0 */
async function handleCreateRuleGroupMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a rule group. */
	return await fc.customIoa.createRuleGroupMixin0(parseJsonParam(c, i));
}

/** Handles deleteRuleGroupsMixin0 */
async function handleDeleteRuleGroupsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes rule groups by ID. */
	const comment = c.getNodeParameter('comment', i, '') as string;
	return await fc.customIoa.deleteRuleGroupsMixin0(parseArrayParam(c, i), comment || undefined);
}

/** Handles deleteRules */
async function handleDeleteRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes rules from a rule group. */
	const ruleGroupId = c.getNodeParameter('ruleGroupId', i) as string;
	const comment = c.getNodeParameter('comment', i, '') as string;
	return await fc.customIoa.deleteRules(ruleGroupId, parseArrayParam(c, i), comment || undefined);
}

/** Handles getPatterns */
async function handleGetPatterns(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets pattern severities by ID. */
	return await fc.customIoa.getPatterns(parseArrayParam(c, i));
}

/** Handles getPlatformsMixin0 */
async function handleGetPlatformsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets platforms by ID. */
	return await fc.customIoa.getPlatformsMixin0(parseArrayParam(c, i));
}

/** Handles getRuleGroupsMixin0 */
async function handleGetRuleGroupsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets rule groups by ID. */
	return await fc.customIoa.getRuleGroupsMixin0(parseArrayParam(c, i));
}

/** Handles getRuleTypes */
async function handleGetRuleTypes(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets rule types by ID. */
	return await fc.customIoa.getRuleTypes(parseArrayParam(c, i));
}

/** Handles getRulesGet */
async function handleGetRulesGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets rules via POST body. */
	return await fc.customIoa.getRulesGet(parseJsonParam(c, i));
}

/** Handles getRulesMixin0 */
async function handleGetRulesMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets rules by ID list. */
	return await fc.customIoa.getRulesMixin0(parseArrayParam(c, i));
}

/** Handles queryPatterns */
async function handleQueryPatterns(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets all pattern severity IDs. */
	const offset = c.getNodeParameter('offset', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customIoa.queryPatterns(offset || undefined, limit || undefined);
}

/** Handles queryPlatformsMixin0 */
async function handleQueryPlatformsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets all platform IDs. */
	const offset = c.getNodeParameter('offset', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customIoa.queryPlatformsMixin0(offset || undefined, limit || undefined);
}

/** Handles queryRuleGroupsFull */
async function handleQueryRuleGroupsFull(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Finds all rule groups matching query with filter. */
	const sort = c.getNodeParameter('sort', i, '') as any;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const q = c.getNodeParameter('q', i, '') as string;
	const offset = c.getNodeParameter('offset', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customIoa.queryRuleGroupsFull(sort || undefined, filter || undefined, q || undefined, offset || undefined, limit || undefined);
}

/** Handles queryRuleGroupsMixin0 */
async function handleQueryRuleGroupsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Finds all rule group IDs matching query. */
	const sort = c.getNodeParameter('sort', i, '') as any;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const q = c.getNodeParameter('q', i, '') as string;
	const offset = c.getNodeParameter('offset', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customIoa.queryRuleGroupsMixin0(sort || undefined, filter || undefined, q || undefined, offset || undefined, limit || undefined);
}

/** Handles queryRuleTypes */
async function handleQueryRuleTypes(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets all rule type IDs. */
	const offset = c.getNodeParameter('offset', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customIoa.queryRuleTypes(offset || undefined, limit || undefined);
}

/** Handles queryRulesMixin0 */
async function handleQueryRulesMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Finds all rule IDs matching query. */
	const sort = c.getNodeParameter('sort', i, '') as any;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const q = c.getNodeParameter('q', i, '') as string;
	const offset = c.getNodeParameter('offset', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customIoa.queryRulesMixin0(sort || undefined, filter || undefined, q || undefined, offset || undefined, limit || undefined);
}

/** Handles updateRuleGroupMixin0 */
async function handleUpdateRuleGroupMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates a rule group. */
	return await fc.customIoa.updateRuleGroupMixin0(parseJsonParam(c, i));
}

/** Handles updateRules */
async function handleUpdateRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates rules within a rule group. */
	return await fc.customIoa.updateRules(parseJsonParam(c, i));
}

/** Handles updateRulesV2 */
async function handleUpdateRulesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates rules V2. */
	return await fc.customIoa.updateRulesV2(parseJsonParam(c, i));
}

/** Handles validate */
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
