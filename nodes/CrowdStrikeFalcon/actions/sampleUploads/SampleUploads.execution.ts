import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseJsonParam } from '../common';

/**
 * Handles the 'archiveDeleteV1' operation.
 */
async function handleArchiveDeleteV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete an archive that was uploaded previously. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sampleUploads.archiveDeleteV1(id);
}

/**
 * Handles the 'archiveGetV1' operation.
 */
async function handleArchiveGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the archives upload operation statuses. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sampleUploads.archiveGetV1(id);
}

/**
 * Handles the 'archiveListV1' operation.
 */
async function handleArchiveListV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the archives files in chunks. */
	const id = getStringParam(c, i, 'id', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.sampleUploads.archiveListV1(id, limit || undefined, offset || undefined);
}

/**
 * Handles the 'archiveUploadV1' operation.
 */
async function handleArchiveUploadV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Uploads an archive and extracts files list from it. */
	return await fc.sampleUploads.archiveUploadV1('archive.zip', []);
}

/**
 * Handles the 'archiveUploadV2' operation.
 */
async function handleArchiveUploadV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Uploads an archive and extracts files list from it V2. */
	const fileBlob = new Blob([]);
	return await fc.sampleUploads.archiveUploadV2(fileBlob, 'archive.zip');
}

/**
 * Handles the 'deleteSampleV3' operation.
 */
async function handleDeleteSampleV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Removes a sample, including file, meta and submissions. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sampleUploads.deleteSampleV3(id);
}

/**
 * Handles the 'extractionCreateV1' operation.
 */
async function handleExtractionCreateV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extracts files from an uploaded archive and copies them to internal storage. */
	return await fc.sampleUploads.extractionCreateV1(parseJsonParam(c, i));
}

/**
 * Handles the 'extractionGetV1' operation.
 */
async function handleExtractionGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the files extraction operation statuses. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sampleUploads.extractionGetV1(id);
}

/**
 * Handles the 'extractionListV1' operation.
 */
async function handleExtractionListV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the files extractions in chunks. */
	const id = getStringParam(c, i, 'id', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.sampleUploads.extractionListV1(id, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getSampleV3' operation.
 */
async function handleGetSampleV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the file associated with the given ID (SHA256). */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sampleUploads.getSampleV3(id);
}

/**
 * Handles the 'uploadSampleV3' operation.
 */
async function handleUploadSampleV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload a file for further cloud analysis. */
	const fileBlob = new Blob([]);
	return await fc.sampleUploads.uploadSampleV3(fileBlob, 'sample.bin');
}

/**
 * Main execution handler for CrowdStrike Falcon Sample Uploads operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeSampleUploads(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'archiveDeleteV1': return await handleArchiveDeleteV1(this, index, falconClient);
		case 'archiveGetV1': return await handleArchiveGetV1(this, index, falconClient);
		case 'archiveListV1': return await handleArchiveListV1(this, index, falconClient);
		case 'archiveUploadV1': return await handleArchiveUploadV1(this, index, falconClient);
		case 'archiveUploadV2': return await handleArchiveUploadV2(this, index, falconClient);
		case 'deleteSampleV3': return await handleDeleteSampleV3(this, index, falconClient);
		case 'extractionCreateV1': return await handleExtractionCreateV1(this, index, falconClient);
		case 'extractionGetV1': return await handleExtractionGetV1(this, index, falconClient);
		case 'extractionListV1': return await handleExtractionListV1(this, index, falconClient);
		case 'getSampleV3': return await handleGetSampleV3(this, index, falconClient);
		case 'uploadSampleV3': return await handleUploadSampleV3(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Sample Uploads.`);
	}
}
