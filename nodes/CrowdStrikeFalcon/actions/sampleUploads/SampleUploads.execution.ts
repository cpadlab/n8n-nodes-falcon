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

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/** Handles archiveDeleteV1 */
async function handleArchiveDeleteV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete an archive that was uploaded previously. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sampleUploads.archiveDeleteV1(id);
}

/** Handles archiveGetV1 */
async function handleArchiveGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the archives upload operation statuses. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sampleUploads.archiveGetV1(id);
}

/** Handles archiveListV1 */
async function handleArchiveListV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the archives files in chunks. */
	const id = getStringParam(c, i, 'id', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.sampleUploads.archiveListV1(id, limit || undefined, offset || undefined);
}

/** Handles archiveUploadV1 */
async function handleArchiveUploadV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Uploads an archive and extracts files list from it. */
	return await fc.sampleUploads.archiveUploadV1('archive.zip', []);
}

/** Handles archiveUploadV2 */
async function handleArchiveUploadV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Uploads an archive and extracts files list from it V2. */
	const fileBlob = new Blob([]);
	return await fc.sampleUploads.archiveUploadV2(fileBlob, 'archive.zip');
}

/** Handles deleteSampleV3 */
async function handleDeleteSampleV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Removes a sample, including file, meta and submissions. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sampleUploads.deleteSampleV3(id);
}

/** Handles extractionCreateV1 */
async function handleExtractionCreateV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extracts files from an uploaded archive and copies them to internal storage. */
	return await fc.sampleUploads.extractionCreateV1(parseJsonParam(c, i));
}

/** Handles extractionGetV1 */
async function handleExtractionGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the files extraction operation statuses. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sampleUploads.extractionGetV1(id);
}

/** Handles extractionListV1 */
async function handleExtractionListV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the files extractions in chunks. */
	const id = getStringParam(c, i, 'id', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.sampleUploads.extractionListV1(id, limit || undefined, offset || undefined);
}

/** Handles getSampleV3 */
async function handleGetSampleV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the file associated with the given ID (SHA256). */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sampleUploads.getSampleV3(id);
}

/** Handles uploadSampleV3 */
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
			throw new Error(`Operation ${operation} is not supported for Sample Uploads.`);
	}
}
