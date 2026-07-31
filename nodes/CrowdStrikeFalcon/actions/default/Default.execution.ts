import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'combinedQueryInstalledPatches' operation.
 */
async function handleCombinedQueryInstalledPatches(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves installed patches information. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.default.combinedQueryInstalledPatches(undefined, limit || undefined, filter || undefined, sort || undefined);
}

/**
 * Handles the 'deleteCollectionsV1' operation.
 */
async function handleDeleteCollectionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Cancels collections. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.default.deleteCollectionsV1(ids.length ? ids : undefined);
}

/**
 * Handles the 'deleteConfigsV1' operation.
 */
async function handleDeleteConfigsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retires a custom configuration. */
	return await fc.default.deleteConfigsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'falconCompleteDashboardsQueriesDetectsV1Get' operation.
 */
async function handleFalconCompleteDashboardsQueriesDetectsV1Get(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries detects for Falcon Complete dashboards. */
	return await fc.default.falconCompleteDashboardsQueriesDetectsV1Get();
}

/**
 * Handles the 'falconCompleteDashboardsQueriesIncidentsV1Get' operation.
 */
async function handleFalconCompleteDashboardsQueriesIncidentsV1Get(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries incidents for Falcon Complete dashboards. */
	return await fc.default.falconCompleteDashboardsQueriesIncidentsV1Get();
}

/**
 * Handles the 'getCollectionCountsByV1' operation.
 */
async function handleGetCollectionCountsByV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets collection counts by field names. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = getStringParam(c, i, 'limit', '100');
	const offset = getStringParam(c, i, 'offset', '');
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.default.getCollectionCountsByV1(filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'getCollectionsV1' operation.
 */
async function handleGetCollectionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets collections with given IDs, platform, etc. */
	const ids = parseArrayParam(c, i, 'ids');
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.default.getCollectionsV1(ids.length ? ids : undefined, undefined, undefined, undefined, undefined, sort || undefined);
}

/**
 * Handles the 'getCollectorsV1' operation.
 */
async function handleGetCollectorsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets collectors. */
	const ids = parseArrayParam(c, i, 'ids');
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.default.getCollectorsV1(ids.length ? ids : undefined, undefined, sort || undefined);
}

/**
 * Handles the 'getCombinedCollectionsV1' operation.
 */
async function handleGetCombinedCollectionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets combined collections. */
	const ids = parseArrayParam(c, i, 'ids');
	const filter = getStringParam(c, i, 'filter', '');
	const limit = getStringParam(c, i, 'limit', '100');
	const offset = getStringParam(c, i, 'offset', '');
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.default.getCombinedCollectionsV1(ids.length ? ids : undefined, filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'getCombinedCollectorsV1' operation.
 */
async function handleGetCombinedCollectorsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets combined collectors. */
	const ids = parseArrayParam(c, i, 'ids');
	const filter = getStringParam(c, i, 'filter', '');
	const limit = getStringParam(c, i, 'limit', '100');
	const offset = getStringParam(c, i, 'offset', '');
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.default.getCombinedCollectorsV1(ids.length ? ids : undefined, filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'getCombinedConfigsV1' operation.
 */
async function handleGetCombinedConfigsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets combined configurations. */
	const ids = parseArrayParam(c, i, 'ids');
	const filter = getStringParam(c, i, 'filter', '');
	const limit = getStringParam(c, i, 'limit', '100');
	const offset = getStringParam(c, i, 'offset', '');
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.default.getCombinedConfigsV1(ids.length ? ids : undefined, filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'getCombinedTemplatesV1' operation.
 */
async function handleGetCombinedTemplatesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets combined templates. */
	const ids = parseArrayParam(c, i, 'ids');
	const filter = getStringParam(c, i, 'filter', '');
	const limit = getStringParam(c, i, 'limit', '100');
	const offset = getStringParam(c, i, 'offset', '');
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.default.getCombinedTemplatesV1(ids.length ? ids : undefined, filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'getConfigDownloadV1' operation.
 */
async function handleGetConfigDownloadV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Downloads configuration file. */
	const id = getStringParam(c, i, 'idSingle', '');
	return await fc.default.getConfigDownloadV1(id);
}

/**
 * Handles the 'getConfigsV1' operation.
 */
async function handleGetConfigsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets configurations by IDs. */
	return await fc.default.getConfigsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getTemplatesV1' operation.
 */
async function handleGetTemplatesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets templates by IDs. */
	return await fc.default.getTemplatesV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'postCollectionsV1' operation.
 */
async function handlePostCollectionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates collections. */
	return await fc.default.postCollectionsV1(parseJsonParam(c, i));
}

/**
 * Handles the 'postCollectorsV1' operation.
 */
async function handlePostCollectorsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Shutdowns collectors. */
	return await fc.default.postCollectorsV1(parseJsonParam(c, i));
}

/**
 * Handles the 'postConfigsV1' operation.
 */
async function handlePostConfigsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a custom configuration. */
	return await fc.default.postConfigsV1(parseJsonParam(c, i));
}

/**
 * Handles the 'postDeployV1' operation.
 */
async function handlePostDeployV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deploys collector to managed endpoints. */
	return await fc.default.postDeployV1(parseJsonParam(c, i));
}

/**
 * Handles the 'putCollectionsV1' operation.
 */
async function handlePutCollectionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates collections. */
	return await fc.default.putCollectionsV1(parseJsonParam(c, i));
}

/**
 * Handles the 'putConfigsV1' operation.
 */
async function handlePutConfigsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Replaces custom configuration. */
	return await fc.default.putConfigsV1(parseJsonParam(c, i));
}

/**
 * Handles the 'searchCollectionsV1' operation.
 */
async function handleSearchCollectionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches collections. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = getStringParam(c, i, 'limit', '100');
	const offset = getStringParam(c, i, 'offset', '');
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.default.searchCollectionsV1(undefined, undefined, undefined, undefined, filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'searchCollectorsV1' operation.
 */
async function handleSearchCollectorsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches collectors. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = getStringParam(c, i, 'limit', '100');
	const offset = getStringParam(c, i, 'offset', '');
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.default.searchCollectorsV1(undefined, filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'searchConfigsV1' operation.
 */
async function handleSearchConfigsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches configurations. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = getStringParam(c, i, 'limit', '100');
	const offset = getStringParam(c, i, 'offset', '');
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.default.searchConfigsV1(filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'searchTemplatesV1' operation.
 */
async function handleSearchTemplatesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches templates. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = getStringParam(c, i, 'limit', '100');
	const offset = getStringParam(c, i, 'offset', '');
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.default.searchTemplatesV1(filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'v1HostConfigsPost' operation.
 */
async function handleV1HostConfigsPost(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Configures hosts in host group. */
	return await fc.default.v1HostConfigsPost(parseJsonParam(c, i));
}

/**
 * Handles the 'v1StatusGet' operation.
 */
async function handleV1StatusGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets host configs within host group. */
	return await fc.default.v1StatusGet(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'validateCollectionV1' operation.
 */
async function handleValidateCollectionV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Validates configuration collection. */
	return await fc.default.validateCollectionV1(parseJsonParam(c, i));
}

/**
 * Handles the 'validateConfigV1' operation.
 */
async function handleValidateConfigV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Validates custom configuration. */
	return await fc.default.validateConfigV1(parseJsonParam(c, i));
}

/** Main execution handler for Default operations. */
export async function executeDefault(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'combinedQueryInstalledPatches': return await handleCombinedQueryInstalledPatches(this, index, falconClient);
		case 'deleteCollectionsV1': return await handleDeleteCollectionsV1(this, index, falconClient);
		case 'deleteConfigsV1': return await handleDeleteConfigsV1(this, index, falconClient);
		case 'falconCompleteDashboardsQueriesDetectsV1Get': return await handleFalconCompleteDashboardsQueriesDetectsV1Get(this, index, falconClient);
		case 'falconCompleteDashboardsQueriesIncidentsV1Get': return await handleFalconCompleteDashboardsQueriesIncidentsV1Get(this, index, falconClient);
		case 'getCollectionCountsByV1': return await handleGetCollectionCountsByV1(this, index, falconClient);
		case 'getCollectionsV1': return await handleGetCollectionsV1(this, index, falconClient);
		case 'getCollectorsV1': return await handleGetCollectorsV1(this, index, falconClient);
		case 'getCombinedCollectionsV1': return await handleGetCombinedCollectionsV1(this, index, falconClient);
		case 'getCombinedCollectorsV1': return await handleGetCombinedCollectorsV1(this, index, falconClient);
		case 'getCombinedConfigsV1': return await handleGetCombinedConfigsV1(this, index, falconClient);
		case 'getCombinedTemplatesV1': return await handleGetCombinedTemplatesV1(this, index, falconClient);
		case 'getConfigDownloadV1': return await handleGetConfigDownloadV1(this, index, falconClient);
		case 'getConfigsV1': return await handleGetConfigsV1(this, index, falconClient);
		case 'getTemplatesV1': return await handleGetTemplatesV1(this, index, falconClient);
		case 'postCollectionsV1': return await handlePostCollectionsV1(this, index, falconClient);
		case 'postCollectorsV1': return await handlePostCollectorsV1(this, index, falconClient);
		case 'postConfigsV1': return await handlePostConfigsV1(this, index, falconClient);
		case 'postDeployV1': return await handlePostDeployV1(this, index, falconClient);
		case 'putCollectionsV1': return await handlePutCollectionsV1(this, index, falconClient);
		case 'putConfigsV1': return await handlePutConfigsV1(this, index, falconClient);
		case 'searchCollectionsV1': return await handleSearchCollectionsV1(this, index, falconClient);
		case 'searchCollectorsV1': return await handleSearchCollectorsV1(this, index, falconClient);
		case 'searchConfigsV1': return await handleSearchConfigsV1(this, index, falconClient);
		case 'searchTemplatesV1': return await handleSearchTemplatesV1(this, index, falconClient);
		case 'v1HostConfigsPost': return await handleV1HostConfigsPost(this, index, falconClient);
		case 'v1StatusGet': return await handleV1StatusGet(this, index, falconClient);
		case 'validateCollectionV1': return await handleValidateCollectionV1(this, index, falconClient);
		case 'validateConfigV1': return await handleValidateConfigV1(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Default.`);
	}
}
