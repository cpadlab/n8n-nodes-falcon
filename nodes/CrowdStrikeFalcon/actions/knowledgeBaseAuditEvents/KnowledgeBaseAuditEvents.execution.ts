import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'aggregatesKnowledgeBaseAuditEventsV1' operation.
 */
async function handleAggregatesKnowledgeBaseAuditEventsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Aggregate knowledge base audit events based on MSA criteria. */
	const body = parseJsonParam(c, i);
	const includeDeleted = c.getNodeParameter('includeDeleted', i, false) as boolean;
	return await fc.knowledgeBaseAuditEvents.aggregatesKnowledgeBaseAuditEventsV1(body, includeDeleted);
}

/**
 * Handles the 'combinedKnowledgeBaseAuditEventsV1' operation.
 */
async function handleCombinedKnowledgeBaseAuditEventsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get knowledge base audit events with full details and pagination. */
	const knowledgeBaseId = getStringParam(c, i, 'knowledgeBaseId', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const includeDeleted = c.getNodeParameter('includeDeleted', i, false) as boolean;
	return await fc.knowledgeBaseAuditEvents.combinedKnowledgeBaseAuditEventsV1(knowledgeBaseId, offset || undefined, limit || undefined, sort || undefined, filter || undefined, includeDeleted);
}

/**
 * Handles the 'entitiesKnowledgeBaseAuditEventsV1' operation.
 */
async function handleEntitiesKnowledgeBaseAuditEventsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve knowledge base audit event entities by their IDs. */
	const knowledgeBaseId = getStringParam(c, i, 'knowledgeBaseId', '');
	const ids = parseArrayParam(c, i, 'ids');
	const includeDeleted = c.getNodeParameter('includeDeleted', i, false) as boolean;
	return await fc.knowledgeBaseAuditEvents.entitiesKnowledgeBaseAuditEventsV1(knowledgeBaseId, ids, includeDeleted);
}

/**
 * Handles the 'queriesKnowledgeBaseAuditEventsV1' operation.
 */
async function handleQueriesKnowledgeBaseAuditEventsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query knowledge base audit event IDs with pagination and filtering. */
	const knowledgeBaseId = getStringParam(c, i, 'knowledgeBaseId', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const includeDeleted = c.getNodeParameter('includeDeleted', i, false) as boolean;
	return await fc.knowledgeBaseAuditEvents.queriesKnowledgeBaseAuditEventsV1(knowledgeBaseId, offset || undefined, limit || undefined, sort || undefined, filter || undefined, includeDeleted);
}

/**
 * Main execution handler for CrowdStrike Falcon Knowledge Base Audit Events operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeKnowledgeBaseAuditEvents(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregatesKnowledgeBaseAuditEventsV1': return await handleAggregatesKnowledgeBaseAuditEventsV1(this, index, falconClient);
		case 'combinedKnowledgeBaseAuditEventsV1': return await handleCombinedKnowledgeBaseAuditEventsV1(this, index, falconClient);
		case 'entitiesKnowledgeBaseAuditEventsV1': return await handleEntitiesKnowledgeBaseAuditEventsV1(this, index, falconClient);
		case 'queriesKnowledgeBaseAuditEventsV1': return await handleQueriesKnowledgeBaseAuditEventsV1(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Knowledge Base Audit Events.`);
	}
}
