import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'entitiesKnowledgeBaseFilesCreateV1' operation.
 */
async function handleEntitiesKnowledgeBaseFilesCreateV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload a file to a knowledge base. */
	const knowledgeBaseId = getStringParam(c, i, 'knowledgeBaseId', '');
	const fileDescription = getStringParam(c, i, 'fileDescription', '');
	// Blob dummy representation for API execution
	const fileBlob = new Blob([]);
	return await fc.knowledgeBaseFiles.entitiesKnowledgeBaseFilesCreateV1(knowledgeBaseId, fileBlob, fileDescription || undefined);
}

/**
 * Handles the 'entitiesKnowledgeBaseFilesDeleteV1' operation.
 */
async function handleEntitiesKnowledgeBaseFilesDeleteV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete document from knowledge base. */
	const knowledgeBaseId = getStringParam(c, i, 'knowledgeBaseId', '');
	const id = getStringParam(c, i, 'id', '');
	return await fc.knowledgeBaseFiles.entitiesKnowledgeBaseFilesDeleteV1(knowledgeBaseId, id);
}

/**
 * Handles the 'entitiesKnowledgeBaseFilesDownloadV1' operation.
 */
async function handleEntitiesKnowledgeBaseFilesDownloadV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download knowledge base file entities for the provided id. */
	const knowledgeBaseId = getStringParam(c, i, 'knowledgeBaseId', '');
	const id = getStringParam(c, i, 'id', '');
	return await fc.knowledgeBaseFiles.entitiesKnowledgeBaseFilesDownloadV1(knowledgeBaseId, id);
}

/**
 * Handles the 'entitiesKnowledgeBaseFilesUpdateV1' operation.
 */
async function handleEntitiesKnowledgeBaseFilesUpdateV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update an existing file in a knowledge base. */
	const id = getStringParam(c, i, 'id', '');
	const fileDescription = getStringParam(c, i, 'fileDescription', '');
	const fileBlob = new Blob([]);
	return await fc.knowledgeBaseFiles.entitiesKnowledgeBaseFilesUpdateV1(id, fileBlob, fileDescription || undefined);
}

/**
 * Handles the 'entitiesKnowledgeBaseFilesV1' operation.
 */
async function handleEntitiesKnowledgeBaseFilesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve knowledge base file entities for the provided id. */
	const knowledgeBaseId = getStringParam(c, i, 'knowledgeBaseId', '');
	const ids = parseArrayParam(c, i, 'ids');
	const includeDeleted = c.getNodeParameter('includeDeleted', i, false) as boolean;
	return await fc.knowledgeBaseFiles.entitiesKnowledgeBaseFilesV1(knowledgeBaseId, ids, includeDeleted);
}

/**
 * Handles the 'queriesKnowledgeBaseFilesV1' operation.
 */
async function handleQueriesKnowledgeBaseFilesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query knowledge base files based on the provided filters. */
	const knowledgeBaseId = getStringParam(c, i, 'knowledgeBaseId', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const filter = getStringParam(c, i, 'filter', '');
	const includeDeleted = c.getNodeParameter('includeDeleted', i, false) as boolean;
	return await fc.knowledgeBaseFiles.queriesKnowledgeBaseFilesV1(knowledgeBaseId, offset || undefined, limit || undefined, filter || undefined, includeDeleted);
}

/**
 * Main execution handler for CrowdStrike Falcon Knowledge Base Files operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeKnowledgeBaseFiles(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'entitiesKnowledgeBaseFilesCreateV1': return await handleEntitiesKnowledgeBaseFilesCreateV1(this, index, falconClient);
		case 'entitiesKnowledgeBaseFilesDeleteV1': return await handleEntitiesKnowledgeBaseFilesDeleteV1(this, index, falconClient);
		case 'entitiesKnowledgeBaseFilesDownloadV1': return await handleEntitiesKnowledgeBaseFilesDownloadV1(this, index, falconClient);
		case 'entitiesKnowledgeBaseFilesUpdateV1': return await handleEntitiesKnowledgeBaseFilesUpdateV1(this, index, falconClient);
		case 'entitiesKnowledgeBaseFilesV1': return await handleEntitiesKnowledgeBaseFilesV1(this, index, falconClient);
		case 'queriesKnowledgeBaseFilesV1': return await handleQueriesKnowledgeBaseFilesV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Knowledge Base Files.`);
	}
}
