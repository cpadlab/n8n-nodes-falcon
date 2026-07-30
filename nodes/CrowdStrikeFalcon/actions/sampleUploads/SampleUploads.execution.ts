import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
	const str = (context.getNodeParameter(paramName, index, '') as string) || '';
	return str.split(',').map((id) => id.trim()).filter(Boolean);
}

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/** Handles archiveGetV1 */
async function handleArchiveGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves archive files from sample. */
	const sha256 = getStringParam(c, i, 'sha256', '');
	return await fc.sampleUploads.archiveGetV1(sha256);
}

/** Handles deleteSampleV1 */
async function handleDeleteSampleV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a sample by SHA256. */
	const sha256 = getStringParam(c, i, 'sha256', '');
	return await fc.sampleUploads.deleteSampleV1(sha256);
}

/** Handles deleteSampleV2 */
async function handleDeleteSampleV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a sample by SHA256 V2. */
	const sha256 = getStringParam(c, i, 'sha256', '');
	return await fc.sampleUploads.deleteSampleV2(sha256);
}

/** Handles downloadSampleV1 */
async function handleDownloadSampleV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download a sample by SHA256. */
	const sha256 = getStringParam(c, i, 'sha256', '');
	return await fc.sampleUploads.downloadSampleV1(sha256);
}

/** Handles getSampleV1 */
async function handleGetSampleV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve sample metadata by SHA256. */
	const sha256 = getStringParam(c, i, 'sha256', '');
	return await fc.sampleUploads.getSampleV1(sha256);
}

/** Handles getSampleV2 */
async function handleGetSampleV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve sample metadata by SHA256 V2. */
	const sha256 = getStringParam(c, i, 'sha256', '');
	return await fc.sampleUploads.getSampleV2(sha256);
}

/** Handles getSamplesV1 */
async function handleGetSamplesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve sample metadata by SHA256 list. */
	return await fc.sampleUploads.getSamplesV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getSamplesV2 */
async function handleGetSamplesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve sample metadata by SHA256 list V2. */
	return await fc.sampleUploads.getSamplesV2(parseArrayParam(c, i, 'ids'));
}

/** Handles uploadSampleV1 */
async function handleUploadSampleV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload a sample file. */
	const fileBlob = new Blob([]);
	return await fc.sampleUploads.uploadSampleV1(fileBlob, 'Sample File');
}

/** Handles uploadSampleV2 */
async function handleUploadSampleV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload a sample file V2. */
	const fileBlob = new Blob([]);
	return await fc.sampleUploads.uploadSampleV2(fileBlob, 'Sample File V2');
}

/** Handles uploadSampleV3 */
async function handleUploadSampleV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload a sample file V3. */
	const fileBlob = new Blob([]);
	return await fc.sampleUploads.uploadSampleV3(fileBlob, 'Sample File V3');
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
		case 'archiveGetV1': return await handleArchiveGetV1(this, index, falconClient);
		case 'deleteSampleV1': return await handleDeleteSampleV1(this, index, falconClient);
		case 'deleteSampleV2': return await handleDeleteSampleV2(this, index, falconClient);
		case 'downloadSampleV1': return await handleDownloadSampleV1(this, index, falconClient);
		case 'getSampleV1': return await handleGetSampleV1(this, index, falconClient);
		case 'getSampleV2': return await handleGetSampleV2(this, index, falconClient);
		case 'getSamplesV1': return await handleGetSamplesV1(this, index, falconClient);
		case 'getSamplesV2': return await handleGetSamplesV2(this, index, falconClient);
		case 'uploadSampleV1': return await handleUploadSampleV1(this, index, falconClient);
		case 'uploadSampleV2': return await handleUploadSampleV2(this, index, falconClient);
		case 'uploadSampleV3': return await handleUploadSampleV3(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Sample Uploads.`);
	}
}
