import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'aggregateScansMixin0' operation.
 */
async function handleAggregateScansMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns scans aggregations. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScans.aggregateScansMixin0(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Handles the 'createScans' operation.
 */
async function handleCreateScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create scans using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScans.createScans(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Handles the 'deleteScans' operation.
 */
async function handleDeleteScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete scans by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScans.deleteScans(ids, xCSUSERUUID || undefined);
}

/**
 * Handles the 'getScans' operation.
 */
async function handleGetScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scans by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScans.getScans(ids, xCSUSERUUID || undefined);
}

/**
 * Handles the 'queryScansMixin0' operation.
 */
async function handleQueryScansMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scans IDs by filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.networkScanScans.queryScansMixin0(xCSUSERUUID || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'updateScans' operation.
 */
async function handleUpdateScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update scans using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScans.updateScans(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Network Scan Scans operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeNetworkScanScans(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateScansMixin0': return await handleAggregateScansMixin0(this, index, falconClient);
		case 'createScans': return await handleCreateScans(this, index, falconClient);
		case 'deleteScans': return await handleDeleteScans(this, index, falconClient);
		case 'getScans': return await handleGetScans(this, index, falconClient);
		case 'queryScansMixin0': return await handleQueryScansMixin0(this, index, falconClient);
		case 'updateScans': return await handleUpdateScans(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Network Scan Scans.`);
	}
}
