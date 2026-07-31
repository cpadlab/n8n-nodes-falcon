import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'aggregateScanRuns' operation.
 */
async function handleAggregateScanRuns(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns scan-runs aggregations. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScanRuns.aggregateScanRuns(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Handles the 'createScanRuns' operation.
 */
async function handleCreateScanRuns(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create scan-runs using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScanRuns.createScanRuns(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Handles the 'getScanRuns' operation.
 */
async function handleGetScanRuns(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scan-runs by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScanRuns.getScanRuns(ids, xCSUSERUUID || undefined);
}

/**
 * Handles the 'queryScanRuns' operation.
 */
async function handleQueryScanRuns(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scan-runs IDs by filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.networkScanScanRuns.queryScanRuns(xCSUSERUUID || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'updateScanRuns' operation.
 */
async function handleUpdateScanRuns(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update scan-runs using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScanRuns.updateScanRuns(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Network Scan Scan Runs operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeNetworkScanScanRuns(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateScanRuns': return await handleAggregateScanRuns(this, index, falconClient);
		case 'createScanRuns': return await handleCreateScanRuns(this, index, falconClient);
		case 'getScanRuns': return await handleGetScanRuns(this, index, falconClient);
		case 'queryScanRuns': return await handleQueryScanRuns(this, index, falconClient);
		case 'updateScanRuns': return await handleUpdateScanRuns(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Network Scan Scan Runs.`);
	}
}
