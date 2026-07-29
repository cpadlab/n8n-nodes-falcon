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

/** Handles deleteReport */
async function handleDeleteReport(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes sandbox report by ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.falconxSandbox.deleteReport(id);
}

/** Handles deleteSampleV2 */
async function handleDeleteSampleV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes sandbox sample by ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.falconxSandbox.deleteSampleV2(id);
}

/** Handles getArtifacts */
async function handleGetArtifacts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets analysis artifacts. */
	const id = getStringParam(c, i, 'id', '');
	const name = getStringParam(c, i, 'name', '');
	return await fc.falconxSandbox.getArtifacts(id, name || undefined);
}

/** Handles getMemoryDump */
async function handleGetMemoryDump(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets memory dump content. */
	const id = getStringParam(c, i, 'id', '');
	const name = getStringParam(c, i, 'name', '');
	return await fc.falconxSandbox.getMemoryDump(id, name || undefined);
}

/** Handles getMemoryDumpExtractedStrings */
async function handleGetMemoryDumpExtractedStrings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets extracted strings from memory dump. */
	const id = getStringParam(c, i, 'id', '');
	const name = getStringParam(c, i, 'name', '');
	return await fc.falconxSandbox.getMemoryDumpExtractedStrings(id, name || undefined);
}

/** Handles getMemoryDumpHexDump */
async function handleGetMemoryDumpHexDump(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets hex view of memory dump. */
	const id = getStringParam(c, i, 'id', '');
	const name = getStringParam(c, i, 'name', '');
	return await fc.falconxSandbox.getMemoryDumpHexDump(id, name || undefined);
}

/** Handles getReports */
async function handleGetReports(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets full sandbox reports by IDs. */
	return await fc.falconxSandbox.getReports(parseArrayParam(c, i, 'ids'));
}

/** Handles getSampleV2 */
async function handleGetSampleV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets sample file by SHA256 ID. */
	const id = getStringParam(c, i, 'id', '');
	const passwordProtected = c.getNodeParameter('passwordProtected', i, false) as boolean;
	return await fc.falconxSandbox.getSampleV2(id, passwordProtected);
}

/** Handles getSubmissions */
async function handleGetSubmissions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets status of sandbox analysis submissions. */
	return await fc.falconxSandbox.getSubmissions(parseArrayParam(c, i, 'ids'));
}

/** Handles getSummaryReports */
async function handleGetSummaryReports(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets summary sandbox reports by IDs. */
	return await fc.falconxSandbox.getSummaryReports(parseArrayParam(c, i, 'ids'));
}

/** Handles queryReports */
async function handleQueryReports(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries sandbox report IDs. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.falconxSandbox.queryReports(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles querySampleV1 */
async function handleQuerySampleV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries accessible sample SHA256s. */
	return await fc.falconxSandbox.querySampleV1(parseJsonParam(c, i));
}

/** Handles querySubmissions */
async function handleQuerySubmissions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries submission IDs. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.falconxSandbox.querySubmissions(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles submit */
async function handleSubmit(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Submits file/URL for sandbox analysis. */
	const body = parseJsonParam(c, i);
	const aid = getStringParam(c, i, 'aid', '');
	return await fc.falconxSandbox.submit(body, aid || undefined);
}

/** Handles uploadSampleV2 */
async function handleUploadSampleV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Uploads a sample file for sandbox analysis. */
	const fileName = getStringParam(c, i, 'fileName', 'sample.bin');
	const comment = getStringParam(c, i, 'comment', '');
	const isConfidential = c.getNodeParameter('isConfidential', i, false) as boolean;
	const sampleBlob = new Blob([Buffer.from('')]);
	return await fc.falconxSandbox.uploadSampleV2(sampleBlob, fileName, comment || undefined, isConfidential);
}

/**
 * Main execution handler for CrowdStrike FalconX Sandbox operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeFalconxSandbox(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'deleteReport': return await handleDeleteReport(this, index, falconClient);
		case 'deleteSampleV2': return await handleDeleteSampleV2(this, index, falconClient);
		case 'getArtifacts': return await handleGetArtifacts(this, index, falconClient);
		case 'getMemoryDump': return await handleGetMemoryDump(this, index, falconClient);
		case 'getMemoryDumpExtractedStrings': return await handleGetMemoryDumpExtractedStrings(this, index, falconClient);
		case 'getMemoryDumpHexDump': return await handleGetMemoryDumpHexDump(this, index, falconClient);
		case 'getReports': return await handleGetReports(this, index, falconClient);
		case 'getSampleV2': return await handleGetSampleV2(this, index, falconClient);
		case 'getSubmissions': return await handleGetSubmissions(this, index, falconClient);
		case 'getSummaryReports': return await handleGetSummaryReports(this, index, falconClient);
		case 'queryReports': return await handleQueryReports(this, index, falconClient);
		case 'querySampleV1': return await handleQuerySampleV1(this, index, falconClient);
		case 'querySubmissions': return await handleQuerySubmissions(this, index, falconClient);
		case 'submit': return await handleSubmit(this, index, falconClient);
		case 'uploadSampleV2': return await handleUploadSampleV2(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for FalconX Sandbox.`);
	}
}
