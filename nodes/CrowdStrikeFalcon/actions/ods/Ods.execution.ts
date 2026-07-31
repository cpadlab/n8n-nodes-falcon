import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'aggregateQueryScanHostMetadata' operation.
 */
async function handleAggregateQueryScanHostMetadata(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get aggregates on ODS scan-hosts data. */
	const body = parseJsonParam(c, i);
	return await fc.ods.aggregateQueryScanHostMetadata(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateScans' operation.
 */
async function handleAggregateScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get aggregates on ODS scan data. */
	const body = parseJsonParam(c, i);
	return await fc.ods.aggregateScans(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateScheduledScans' operation.
 */
async function handleAggregateScheduledScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get aggregates on ODS scheduled-scan data. */
	const body = parseJsonParam(c, i);
	return await fc.ods.aggregateScheduledScans(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'cancelScans' operation.
 */
async function handleCancelScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Cancel ODS scans for the given scan ids. */
	return await fc.ods.cancelScans(parseJsonParam(c, i));
}

/**
 * Handles the 'createScan' operation.
 */
async function handleCreateScan(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create ODS scan and start or schedule scan for the given scan request. */
	return await fc.ods.createScan(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteScheduledScans' operation.
 */
async function handleDeleteScheduledScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete ODS scheduled-scans for the given scheduled-scan ids. */
	const ids = parseArrayParam(c, i, 'ids');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.ods.deleteScheduledScans(ids, filter || undefined);
}

/**
 * Handles the 'getMaliciousFilesByIds' operation.
 */
async function handleGetMaliciousFilesByIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get malicious files by ids. */
	return await fc.ods.getMaliciousFilesByIds(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getScanHostMetadataByIds' operation.
 */
async function handleGetScanHostMetadataByIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scan hosts by ids. */
	return await fc.ods.getScanHostMetadataByIds(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getScansByScanIds' operation.
 */
async function handleGetScansByScanIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Scans by IDs. */
	return await fc.ods.getScansByScanIds(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getScansByScanIdsV2' operation.
 */
async function handleGetScansByScanIdsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Scans by IDs V2. */
	return await fc.ods.getScansByScanIdsV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getScheduledScansByScanIds' operation.
 */
async function handleGetScheduledScansByScanIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get ScheduledScans by IDs. */
	return await fc.ods.getScheduledScansByScanIds(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'queryMaliciousFiles' operation.
 */
async function handleQueryMaliciousFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query malicious files. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.ods.queryMaliciousFiles(filter || undefined, offset || undefined, limit || undefined, sort as any || undefined);
}

/**
 * Handles the 'queryScanHostMetadata' operation.
 */
async function handleQueryScanHostMetadata(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query scan hosts. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.ods.queryScanHostMetadata(filter || undefined, offset || undefined, limit || undefined, sort as any || undefined);
}

/**
 * Handles the 'queryScans' operation.
 */
async function handleQueryScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query Scans. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.ods.queryScans(filter || undefined, offset || undefined, limit || undefined, sort as any || undefined);
}

/**
 * Handles the 'queryScheduledScans' operation.
 */
async function handleQueryScheduledScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query ScheduledScans. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.ods.queryScheduledScans(filter || undefined, offset || undefined, limit || undefined, sort as any || undefined);
}

/**
 * Handles the 'scheduleScan' operation.
 */
async function handleScheduleScan(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create ODS scan and start or schedule scan for the given scan request. */
	return await fc.ods.scheduleScan(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon ODS operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeOds(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateQueryScanHostMetadata': return await handleAggregateQueryScanHostMetadata(this, index, falconClient);
		case 'aggregateScans': return await handleAggregateScans(this, index, falconClient);
		case 'aggregateScheduledScans': return await handleAggregateScheduledScans(this, index, falconClient);
		case 'cancelScans': return await handleCancelScans(this, index, falconClient);
		case 'createScan': return await handleCreateScan(this, index, falconClient);
		case 'deleteScheduledScans': return await handleDeleteScheduledScans(this, index, falconClient);
		case 'getMaliciousFilesByIds': return await handleGetMaliciousFilesByIds(this, index, falconClient);
		case 'getScanHostMetadataByIds': return await handleGetScanHostMetadataByIds(this, index, falconClient);
		case 'getScansByScanIds': return await handleGetScansByScanIds(this, index, falconClient);
		case 'getScansByScanIdsV2': return await handleGetScansByScanIdsV2(this, index, falconClient);
		case 'getScheduledScansByScanIds': return await handleGetScheduledScansByScanIds(this, index, falconClient);
		case 'queryMaliciousFiles': return await handleQueryMaliciousFiles(this, index, falconClient);
		case 'queryScanHostMetadata': return await handleQueryScanHostMetadata(this, index, falconClient);
		case 'queryScans': return await handleQueryScans(this, index, falconClient);
		case 'queryScheduledScans': return await handleQueryScheduledScans(this, index, falconClient);
		case 'scheduleScan': return await handleScheduleScan(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for ODS.`);
	}
}
