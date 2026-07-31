import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam } from '../common';

/**
 * Handles the 'downloadFile' operation.
 */
async function handleDownloadFile(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Downloads file pre-signed URL (deprecated). */
	const fileName = getStringParam(c, i, 'fileName', '');
	const fileVersion = getStringParam(c, i, 'fileVersion', '');
	return await fc.downloadsApi.downloadFile(fileName, fileVersion);
}

/**
 * Handles the 'enumerateFile' operation.
 */
async function handleEnumerateFile(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Enumerates files (deprecated). */
	const fileName = getStringParam(c, i, 'fileName', '');
	const fileVersion = getStringParam(c, i, 'fileVersion', '');
	return await fc.downloadsApi.enumerateFile(fileName || undefined, fileVersion || undefined);
}

/**
 * Handles the 'fetchFilesDownloadInfo' operation.
 */
async function handleFetchFilesDownloadInfo(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Fetches files download info (deprecated). */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.downloadsApi.fetchFilesDownloadInfo(filter || undefined, sort || undefined);
}

/**
 * Handles the 'fetchFilesDownloadInfoV2' operation.
 */
async function handleFetchFilesDownloadInfoV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Fetches files download info V2. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.downloadsApi.fetchFilesDownloadInfoV2(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Main execution handler for Downloads API operations. */
export async function executeDownloadsApi(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'downloadFile': return await handleDownloadFile(this, index, falconClient);
		case 'enumerateFile': return await handleEnumerateFile(this, index, falconClient);
		case 'fetchFilesDownloadInfo': return await handleFetchFilesDownloadInfo(this, index, falconClient);
		case 'fetchFilesDownloadInfoV2': return await handleFetchFilesDownloadInfoV2(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Downloads API.`);
	}
}
