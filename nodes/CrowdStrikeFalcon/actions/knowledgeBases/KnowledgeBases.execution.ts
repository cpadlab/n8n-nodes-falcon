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

/**
 * Handles the 'aggregatesKnowledgeBasesV1' operation.
 */
async function handleAggregatesKnowledgeBasesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Aggregate knowledge bases based on MSA criteria. */
	const body = parseJsonParam(c, i);
	const includeDeleted = c.getNodeParameter('includeDeleted', i, false) as boolean;
	return await fc.knowledgeBases.aggregatesKnowledgeBasesV1(Array.isArray(body) ? body : [body], includeDeleted);
}

/**
 * Handles the 'combinedKnowledgeBasesV1' operation.
 */
async function handleCombinedKnowledgeBasesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for knowledge bases returning full entity details. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const includeDeleted = c.getNodeParameter('includeDeleted', i, false) as boolean;
	return await fc.knowledgeBases.combinedKnowledgeBasesV1(offset || undefined, limit || undefined, sort || undefined, filter || undefined, includeDeleted);
}

/**
 * Handles the 'entitiesKnowledgeBasesCreateV1' operation.
 */
async function handleEntitiesKnowledgeBasesCreateV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create a knowledge base. */
	return await fc.knowledgeBases.entitiesKnowledgeBasesCreateV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesKnowledgeBasesUpdateV1' operation.
 */
async function handleEntitiesKnowledgeBasesUpdateV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update an existing knowledge base. */
	return await fc.knowledgeBases.entitiesKnowledgeBasesUpdateV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesKnowledgeBasesV1' operation.
 */
async function handleEntitiesKnowledgeBasesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve knowledge base entities for provided IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const includeDeleted = c.getNodeParameter('includeDeleted', i, false) as boolean;
	return await fc.knowledgeBases.entitiesKnowledgeBasesV1(ids, includeDeleted);
}

/**
 * Handles the 'queriesKnowledgeBasesV1' operation.
 */
async function handleQueriesKnowledgeBasesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query knowledge bases based on provided filters. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const includeDeleted = c.getNodeParameter('includeDeleted', i, false) as boolean;
	return await fc.knowledgeBases.queriesKnowledgeBasesV1(offset || undefined, limit || undefined, sort || undefined, filter || undefined, includeDeleted);
}

/**
 * Main execution handler for CrowdStrike Falcon Knowledge Bases operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeKnowledgeBases(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregatesKnowledgeBasesV1': return await handleAggregatesKnowledgeBasesV1(this, index, falconClient);
		case 'combinedKnowledgeBasesV1': return await handleCombinedKnowledgeBasesV1(this, index, falconClient);
		case 'entitiesKnowledgeBasesCreateV1': return await handleEntitiesKnowledgeBasesCreateV1(this, index, falconClient);
		case 'entitiesKnowledgeBasesUpdateV1': return await handleEntitiesKnowledgeBasesUpdateV1(this, index, falconClient);
		case 'entitiesKnowledgeBasesV1': return await handleEntitiesKnowledgeBasesV1(this, index, falconClient);
		case 'queriesKnowledgeBasesV1': return await handleQueriesKnowledgeBasesV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Knowledge Bases.`);
	}
}
