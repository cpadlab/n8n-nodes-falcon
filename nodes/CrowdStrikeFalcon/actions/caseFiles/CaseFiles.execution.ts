import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'aggregatesFileDetailsPostV1' operation.
 */
async function handleAggregatesFileDetailsPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves file details aggregates. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	const body = parseJsonParam(c, i);
	const bodyArray = Array.isArray(body) ? body : [body];
	const filter = c.getNodeParameter('filter', i, '') as string;

	return await fc.caseFiles.aggregatesFileDetailsPostV1(ids, bodyArray, filter || undefined);
}

/**
 * Handles the 'combinedFileDetailsGetV1' operation.
 */
async function handleCombinedFileDetailsGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries file details. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;

	return await fc.caseFiles.combinedFileDetailsGetV1(filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'entitiesFileDetailsGetV1' operation.
 */
async function handleEntitiesFileDetailsGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves file details by ID. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await fc.caseFiles.entitiesFileDetailsGetV1(ids);
}

/**
 * Handles the 'entitiesFileDetailsPatchV1' operation.
 */
async function handleEntitiesFileDetailsPatchV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates file details. */
	return await fc.caseFiles.entitiesFileDetailsPatchV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesFilesBulkDownloadPostV1' operation.
 */
async function handleEntitiesFilesBulkDownloadPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Downloads multiple existing files as ZIP. */
	return await fc.caseFiles.entitiesFilesBulkDownloadPostV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesFilesDeleteV1' operation.
 */
async function handleEntitiesFilesDeleteV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes file details by ID. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await fc.caseFiles.entitiesFilesDeleteV1(ids);
}

/**
 * Handles the 'entitiesFilesDownloadGetV1' operation.
 */
async function handleEntitiesFilesDownloadGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Downloads file from case by ID. */
	const id = c.getNodeParameter('id', i) as string;

	return await fc.caseFiles.entitiesFilesDownloadGetV1(id);
}

/**
 * Handles the 'entitiesFilesDownloadPostV1' operation.
 */
async function handleEntitiesFilesDownloadPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Downloads file from case using POST (deprecated). */
	return await fc.caseFiles.entitiesFilesDownloadPostV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesFilesUploadPostV1' operation.
 */
async function handleEntitiesFilesUploadPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Uploads file for case. */
	const caseId = c.getNodeParameter('caseId', i) as string;
	const description = c.getNodeParameter('description', i, '') as string;
	const body = parseJsonParam(c, i);

	return await fc.caseFiles.entitiesFilesUploadPostV1(body as any, caseId, description || undefined);
}

/**
 * Handles the 'entitiesGetRtrFileMetadataPostV1' operation.
 */
async function handleEntitiesGetRtrFileMetadataPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets RTR file metadata without retrieving file. */
	return await fc.caseFiles.entitiesGetRtrFileMetadataPostV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesRetrieveRtrFilePostV1' operation.
 */
async function handleEntitiesRetrieveRtrFilePostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves file via RTR and attaches to case. */
	return await fc.caseFiles.entitiesRetrieveRtrFilePostV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesRetrieveRtrRecentFilePostV1' operation.
 */
async function handleEntitiesRetrieveRtrRecentFilePostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves recently fetched RTR file and attaches to case. */
	return await fc.caseFiles.entitiesRetrieveRtrRecentFilePostV1(parseJsonParam(c, i));
}

/**
 * Handles the 'queriesFileDetailsGetV1' operation.
 */
async function handleQueriesFileDetailsGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries for IDs of file details. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;

	return await fc.caseFiles.queriesFileDetailsGetV1(filter || undefined, limit || undefined, offset || undefined);
}

/** Main execution handler for Case Files operations. */
export async function executeCaseFiles(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregatesFileDetailsPostV1': return await handleAggregatesFileDetailsPostV1(this, index, falconClient);
		case 'combinedFileDetailsGetV1': return await handleCombinedFileDetailsGetV1(this, index, falconClient);
		case 'entitiesFileDetailsGetV1': return await handleEntitiesFileDetailsGetV1(this, index, falconClient);
		case 'entitiesFileDetailsPatchV1': return await handleEntitiesFileDetailsPatchV1(this, index, falconClient);
		case 'entitiesFilesBulkDownloadPostV1': return await handleEntitiesFilesBulkDownloadPostV1(this, index, falconClient);
		case 'entitiesFilesDeleteV1': return await handleEntitiesFilesDeleteV1(this, index, falconClient);
		case 'entitiesFilesDownloadGetV1': return await handleEntitiesFilesDownloadGetV1(this, index, falconClient);
		case 'entitiesFilesDownloadPostV1': return await handleEntitiesFilesDownloadPostV1(this, index, falconClient);
		case 'entitiesFilesUploadPostV1': return await handleEntitiesFilesUploadPostV1(this, index, falconClient);
		case 'entitiesGetRtrFileMetadataPostV1': return await handleEntitiesGetRtrFileMetadataPostV1(this, index, falconClient);
		case 'entitiesRetrieveRtrFilePostV1': return await handleEntitiesRetrieveRtrFilePostV1(this, index, falconClient);
		case 'entitiesRetrieveRtrRecentFilePostV1': return await handleEntitiesRetrieveRtrRecentFilePostV1(this, index, falconClient);
		case 'queriesFileDetailsGetV1': return await handleQueriesFileDetailsGetV1(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Case Files.`);
	}
}
