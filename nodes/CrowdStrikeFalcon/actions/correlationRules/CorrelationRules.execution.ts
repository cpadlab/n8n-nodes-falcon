import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'aggregatesRuleVersionsPostV1' operation.
 */
async function handleAggregatesRuleVersionsPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets rules aggregates via json. */
	const ids = parseArrayParam(c, i, 'ids');
	const body = parseJsonParam(c, i);
	const bodyArray = Array.isArray(body) ? body : [body];
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.correlationRules.aggregatesRuleVersionsPostV1(ids, bodyArray, filter || undefined);
}

/**
 * Handles the 'combinedRulesGetV1' operation.
 */
async function handleCombinedRulesGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Finds all rules matching query and filter. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const q = c.getNodeParameter('q', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as any;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.correlationRules.combinedRulesGetV1(filter || undefined, q || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'combinedRulesGetV2' operation.
 */
async function handleCombinedRulesGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Finds all rules matching query and filter V2. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const q = c.getNodeParameter('q', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as any;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.correlationRules.combinedRulesGetV2(filter || undefined, q || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'entitiesLatestRulesGetV1' operation.
 */
async function handleEntitiesLatestRulesGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves latest rule versions by rule IDs. */
	const ruleIds = parseArrayParam(c, i, 'ruleIds');
	return await fc.correlationRules.entitiesLatestRulesGetV1(ruleIds);
}

/**
 * Handles the 'entitiesRuleVersionsDeleteV1' operation.
 */
async function handleEntitiesRuleVersionsDeleteV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes versions by IDs. */
	return await fc.correlationRules.entitiesRuleVersionsDeleteV1(parseArrayParam(c, i));
}

/**
 * Handles the 'entitiesRuleVersionsExportPostV1' operation.
 */
async function handleEntitiesRuleVersionsExportPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Exports rule versions. */
	return await fc.correlationRules.entitiesRuleVersionsExportPostV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesRuleVersionsImportPostV1' operation.
 */
async function handleEntitiesRuleVersionsImportPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Imports rule versions. */
	return await fc.correlationRules.entitiesRuleVersionsImportPostV1();
}

/**
 * Handles the 'entitiesRuleVersionsPublishPatchV1' operation.
 */
async function handleEntitiesRuleVersionsPublishPatchV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Publishes existing rule version. */
	return await fc.correlationRules.entitiesRuleVersionsPublishPatchV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesRulesDeleteV1' operation.
 */
async function handleEntitiesRulesDeleteV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes rules by IDs. */
	return await fc.correlationRules.entitiesRulesDeleteV1(parseArrayParam(c, i));
}

/**
 * Handles the 'entitiesRulesGetV1' operation.
 */
async function handleEntitiesRulesGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves rules by IDs. */
	return await fc.correlationRules.entitiesRulesGetV1(parseArrayParam(c, i));
}

/**
 * Handles the 'entitiesRulesGetV2' operation.
 */
async function handleEntitiesRulesGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves rule versions by IDs. */
	return await fc.correlationRules.entitiesRulesGetV2(parseArrayParam(c, i));
}

/**
 * Handles the 'entitiesRulesPatchV1' operation.
 */
async function handleEntitiesRulesPatchV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates rules. */
	const body = parseJsonParam(c, i);
	const bodyArray = Array.isArray(body) ? body : [body];
	return await fc.correlationRules.entitiesRulesPatchV1(bodyArray);
}

/**
 * Handles the 'entitiesRulesPostV1' operation.
 */
async function handleEntitiesRulesPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates rule. */
	return await fc.correlationRules.entitiesRulesPostV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesTemplatesGetV1Mixin0' operation.
 */
async function handleEntitiesTemplatesGetV1Mixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves rule templates by IDs. */
	return await fc.correlationRules.entitiesTemplatesGetV1Mixin0(parseArrayParam(c, i));
}

/**
 * Handles the 'entitiesTemplatesRulesPostV1' operation.
 */
async function handleEntitiesTemplatesRulesPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates rule from template. */
	const body = parseJsonParam(c, i);
	const bodyArray = Array.isArray(body) ? body : [body];
	return await fc.correlationRules.entitiesTemplatesRulesPostV1(bodyArray);
}

/**
 * Handles the 'queriesRulesGetV1' operation.
 */
async function handleQueriesRulesGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Finds all rule IDs matching query and filter. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const q = c.getNodeParameter('q', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as any;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.correlationRules.queriesRulesGetV1(filter || undefined, q || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queriesRulesGetV2' operation.
 */
async function handleQueriesRulesGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Finds all rule version IDs matching query and filter. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const q = c.getNodeParameter('q', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as any;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.correlationRules.queriesRulesGetV2(filter || undefined, q || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queriesTemplatesGetV1Mixin0' operation.
 */
async function handleQueriesTemplatesGetV1Mixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches rule template IDs matching filter. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as any;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.correlationRules.queriesTemplatesGetV1Mixin0(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/** Main execution handler for Correlation Rules operations. */
export async function executeCorrelationRules(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregatesRuleVersionsPostV1': return await handleAggregatesRuleVersionsPostV1(this, index, falconClient);
		case 'combinedRulesGetV1': return await handleCombinedRulesGetV1(this, index, falconClient);
		case 'combinedRulesGetV2': return await handleCombinedRulesGetV2(this, index, falconClient);
		case 'entitiesLatestRulesGetV1': return await handleEntitiesLatestRulesGetV1(this, index, falconClient);
		case 'entitiesRuleVersionsDeleteV1': return await handleEntitiesRuleVersionsDeleteV1(this, index, falconClient);
		case 'entitiesRuleVersionsExportPostV1': return await handleEntitiesRuleVersionsExportPostV1(this, index, falconClient);
		case 'entitiesRuleVersionsImportPostV1': return await handleEntitiesRuleVersionsImportPostV1(this, index, falconClient);
		case 'entitiesRuleVersionsPublishPatchV1': return await handleEntitiesRuleVersionsPublishPatchV1(this, index, falconClient);
		case 'entitiesRulesDeleteV1': return await handleEntitiesRulesDeleteV1(this, index, falconClient);
		case 'entitiesRulesGetV1': return await handleEntitiesRulesGetV1(this, index, falconClient);
		case 'entitiesRulesGetV2': return await handleEntitiesRulesGetV2(this, index, falconClient);
		case 'entitiesRulesPatchV1': return await handleEntitiesRulesPatchV1(this, index, falconClient);
		case 'entitiesRulesPostV1': return await handleEntitiesRulesPostV1(this, index, falconClient);
		case 'entitiesTemplatesGetV1Mixin0': return await handleEntitiesTemplatesGetV1Mixin0(this, index, falconClient);
		case 'entitiesTemplatesRulesPostV1': return await handleEntitiesTemplatesRulesPostV1(this, index, falconClient);
		case 'queriesRulesGetV1': return await handleQueriesRulesGetV1(this, index, falconClient);
		case 'queriesRulesGetV2': return await handleQueriesRulesGetV2(this, index, falconClient);
		case 'queriesTemplatesGetV1Mixin0': return await handleQueriesTemplatesGetV1Mixin0(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Correlation Rules.`);
	}
}
