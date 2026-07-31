import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'aggregateScanners' operation.
 */
async function handleAggregateScanners(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns scanners aggregations. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const body = parseJsonParam(c, i);
	return await fc.networkScanScanners.aggregateScanners(Array.isArray(body) ? body : [body], xCSUSERUUID || undefined);
}

/**
 * Handles the 'getScanners' operation.
 */
async function handleGetScanners(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scanners by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScanners.getScanners(ids, xCSUSERUUID || undefined);
}

/**
 * Handles the 'queryScanners' operation.
 */
async function handleQueryScanners(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scanners IDs by filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.networkScanScanners.queryScanners(xCSUSERUUID || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'updateScanners' operation.
 */
async function handleUpdateScanners(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update scanners using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScanners.updateScanners(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Network Scan Scanners operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeNetworkScanScanners(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateScanners': return await handleAggregateScanners(this, index, falconClient);
		case 'getScanners': return await handleGetScanners(this, index, falconClient);
		case 'queryScanners': return await handleQueryScanners(this, index, falconClient);
		case 'updateScanners': return await handleUpdateScanners(this, index, falconClient);
		default:
			throw new NodeOperationError(c.getNode(), `Operation ${operation} is not supported for Network Scan Scanners.`);
	}
}
