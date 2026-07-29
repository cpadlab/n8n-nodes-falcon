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
 * Handles the 'aggregateExternalAssets' operation.
 * Evaluates external asset aggregates specified via JSON query request array in request body.
 */
async function handleAggregateExternalAssets(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Ensure body is formatted as an array for aggregate query processing. */
	const body = parseJsonParam(c, i);
	const bodyArray = Array.isArray(body) ? body : [body];
	return await fc.exposureManagement.aggregateExternalAssets(bodyArray);
}

/**
 * Handles the 'blobDownloadExternalAssets' operation.
 * Downloads the complete binary blob contents for a given asset ID and hash.
 */
async function handleBlobDownloadExternalAssets(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract asset ID and target blob hash. */
	const assetId = getStringParam(c, i, 'assetId', '');
	const hash = getStringParam(c, i, 'hash', '');
	return await fc.exposureManagement.blobDownloadExternalAssets(assetId, hash);
}

/**
 * Handles the 'blobPreviewExternalAssets' operation.
 * Downloads a partial preview payload for a given asset ID and blob hash.
 */
async function handleBlobPreviewExternalAssets(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract asset ID and target blob hash. */
	const assetId = getStringParam(c, i, 'assetId', '');
	const hash = getStringParam(c, i, 'hash', '');
	return await fc.exposureManagement.blobPreviewExternalAssets(assetId, hash);
}

/**
 * Handles the 'combinedEcosystemSubsidiaries' operation.
 * Retrieves detailed entity records for ecosystem subsidiaries based on query criteria.
 */
async function handleCombinedEcosystemSubsidiaries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract optional pagination, filter, and version ID parameters. */
	const offsetRaw = getStringParam(c, i, 'offset', '');
	const offset = offsetRaw ? Number(offsetRaw) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const versionId = getStringParam(c, i, 'versionId', '');
	return await fc.exposureManagement.combinedEcosystemSubsidiaries(offset, limit || undefined, filter || undefined, sort || undefined, versionId || undefined);
}

/**
 * Handles the 'deleteExternalAssets' operation.
 * Deletes external assets matching specified IDs and request payload parameters.
 */
async function handleDeleteExternalAssets(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract ID array and request payload. */
	const ids = parseArrayParam(c, i, 'ids');
	const body = parseJsonParam(c, i);
	return await fc.exposureManagement.deleteExternalAssets(ids, body);
}

/**
 * Handles the 'getEcosystemSubsidiaries' operation.
 * Retrieves detailed ecosystem subsidiary records for specified IDs.
 */
async function handleGetEcosystemSubsidiaries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract target IDs and optional version ID. */
	const ids = parseArrayParam(c, i, 'ids');
	const versionId = getStringParam(c, i, 'versionId', '');
	return await fc.exposureManagement.getEcosystemSubsidiaries(ids, versionId || undefined);
}

/**
 * Handles the 'getExternalAssets' operation.
 * Retrieves detailed external asset records by providing one or more asset IDs.
 */
async function handleGetExternalAssets(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract asset IDs list. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.exposureManagement.getExternalAssets(ids);
}

/**
 * Handles the 'patchExternalAssets' operation.
 * Updates metadata and state details of external assets using patch instructions.
 */
async function handlePatchExternalAssets(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract patch body from parameters. */
	return await fc.exposureManagement.patchExternalAssets(parseJsonParam(c, i));
}

/**
 * Handles the 'postExternalAssetsInventoryV1' operation.
 * Registers new external assets into the inventory for external asset scanning.
 */
async function handlePostExternalAssetsInventoryV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract asset registration payload from parameters. */
	return await fc.exposureManagement.postExternalAssetsInventoryV1(parseJsonParam(c, i));
}

/**
 * Handles the 'queryEcosystemSubsidiaries' operation.
 * Queries ecosystem subsidiary IDs matching provided filter criteria.
 */
async function handleQueryEcosystemSubsidiaries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract pagination, filter, and version ID parameters. */
	const offsetRaw = getStringParam(c, i, 'offset', '');
	const offset = offsetRaw ? Number(offsetRaw) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const versionId = getStringParam(c, i, 'versionId', '');
	return await fc.exposureManagement.queryEcosystemSubsidiaries(offset, limit || undefined, filter || undefined, sort || undefined, versionId || undefined);
}

/**
 * Handles the 'queryExternalAssets' operation.
 * Queries external asset IDs matching filter criteria.
 */
async function handleQueryExternalAssets(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract pagination and query filter parameters. */
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.exposureManagement.queryExternalAssets(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'queryExternalAssetsV2' operation.
 * Queries external asset IDs V2 matching filter criteria.
 */
async function handleQueryExternalAssetsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract pagination and query filter parameters. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.exposureManagement.queryExternalAssetsV2(undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Exposure Management operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeExposureManagement(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateExternalAssets': return await handleAggregateExternalAssets(this, index, falconClient);
		case 'blobDownloadExternalAssets': return await handleBlobDownloadExternalAssets(this, index, falconClient);
		case 'blobPreviewExternalAssets': return await handleBlobPreviewExternalAssets(this, index, falconClient);
		case 'combinedEcosystemSubsidiaries': return await handleCombinedEcosystemSubsidiaries(this, index, falconClient);
		case 'deleteExternalAssets': return await handleDeleteExternalAssets(this, index, falconClient);
		case 'getEcosystemSubsidiaries': return await handleGetEcosystemSubsidiaries(this, index, falconClient);
		case 'getExternalAssets': return await handleGetExternalAssets(this, index, falconClient);
		case 'patchExternalAssets': return await handlePatchExternalAssets(this, index, falconClient);
		case 'postExternalAssetsInventoryV1': return await handlePostExternalAssetsInventoryV1(this, index, falconClient);
		case 'queryEcosystemSubsidiaries': return await handleQueryEcosystemSubsidiaries(this, index, falconClient);
		case 'queryExternalAssets': return await handleQueryExternalAssets(this, index, falconClient);
		case 'queryExternalAssetsV2': return await handleQueryExternalAssetsV2(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Exposure Management.`);
	}
}
