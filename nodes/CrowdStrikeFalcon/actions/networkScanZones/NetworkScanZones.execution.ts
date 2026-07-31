import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'aggregateZones' operation.
 */
async function handleAggregateZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns zones aggregations. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanZones.aggregateZones(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Handles the 'combinedZones' operation.
 */
async function handleCombinedZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get zones by filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.networkScanZones.combinedZones(xCSUSERUUID || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'createZones' operation.
 */
async function handleCreateZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create zones using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanZones.createZones(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Handles the 'deleteZones' operation.
 */
async function handleDeleteZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete zones by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanZones.deleteZones(ids, xCSUSERUUID || undefined);
}

/**
 * Handles the 'getZones' operation.
 */
async function handleGetZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get zones by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanZones.getZones(ids, xCSUSERUUID || undefined);
}

/**
 * Handles the 'queryZones' operation.
 */
async function handleQueryZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get zones IDs by filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.networkScanZones.queryZones(xCSUSERUUID || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'updateZones' operation.
 */
async function handleUpdateZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update zones using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanZones.updateZones(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Network Scan Zones operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeNetworkScanZones(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateZones': return await handleAggregateZones(this, index, falconClient);
		case 'combinedZones': return await handleCombinedZones(this, index, falconClient);
		case 'createZones': return await handleCreateZones(this, index, falconClient);
		case 'deleteZones': return await handleDeleteZones(this, index, falconClient);
		case 'getZones': return await handleGetZones(this, index, falconClient);
		case 'queryZones': return await handleQueryZones(this, index, falconClient);
		case 'updateZones': return await handleUpdateZones(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Network Scan Zones.`);
	}
}
