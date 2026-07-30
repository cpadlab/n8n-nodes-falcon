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

/** Handles getMalQueryDownloadV1 */
async function handleGetMalQueryDownloadV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download a file indexed by MalQuery. Specify the file using its SHA256. */
	return await fc.malquery.getMalQueryDownloadV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getMalQueryEntitiesSamplesFetchV1 */
async function handleGetMalQueryEntitiesSamplesFetchV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Fetch a zip archive containing the samples. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.malquery.getMalQueryEntitiesSamplesFetchV1(id);
}

/** Handles getMalQueryMetadataV1 */
async function handleGetMalQueryMetadataV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve indexed files metadata by their hash. */
	return await fc.malquery.getMalQueryMetadataV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getMalQueryQuotasV1 */
async function handleGetMalQueryQuotasV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get information about search and download quotas in your environment. */
	return await fc.malquery.getMalQueryQuotasV1();
}

/** Handles getMalQueryRequestV1 */
async function handleGetMalQueryRequestV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Check the status and results of an asynchronous request. */
	return await fc.malquery.getMalQueryRequestV1(parseArrayParam(c, i, 'ids'));
}

/** Handles postMalQueryEntitiesSamplesMultidownloadV1 */
async function handlePostMalQueryEntitiesSamplesMultidownloadV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Schedule samples for download. */
	return await fc.malquery.postMalQueryEntitiesSamplesMultidownloadV1(parseJsonParam(c, i));
}

/** Handles postMalQueryExactSearchV1 */
async function handlePostMalQueryExactSearchV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search Falcon MalQuery for a combination of hex patterns and strings. */
	return await fc.malquery.postMalQueryExactSearchV1(parseJsonParam(c, i));
}

/** Handles postMalQueryFuzzySearchV1 */
async function handlePostMalQueryFuzzySearchV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search Falcon MalQuery quickly with potential for false positives. */
	return await fc.malquery.postMalQueryFuzzySearchV1(parseJsonParam(c, i));
}

/** Handles postMalQueryHuntV1 */
async function handlePostMalQueryHuntV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Schedule a YARA-based search for execution. */
	return await fc.malquery.postMalQueryHuntV1(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Malquery operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeMalquery(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getMalQueryDownloadV1': return await handleGetMalQueryDownloadV1(this, index, falconClient);
		case 'getMalQueryEntitiesSamplesFetchV1': return await handleGetMalQueryEntitiesSamplesFetchV1(this, index, falconClient);
		case 'getMalQueryMetadataV1': return await handleGetMalQueryMetadataV1(this, index, falconClient);
		case 'getMalQueryQuotasV1': return await handleGetMalQueryQuotasV1(this, index, falconClient);
		case 'getMalQueryRequestV1': return await handleGetMalQueryRequestV1(this, index, falconClient);
		case 'postMalQueryEntitiesSamplesMultidownloadV1': return await handlePostMalQueryEntitiesSamplesMultidownloadV1(this, index, falconClient);
		case 'postMalQueryExactSearchV1': return await handlePostMalQueryExactSearchV1(this, index, falconClient);
		case 'postMalQueryFuzzySearchV1': return await handlePostMalQueryFuzzySearchV1(this, index, falconClient);
		case 'postMalQueryHuntV1': return await handlePostMalQueryHuntV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Malquery.`);
	}
}
