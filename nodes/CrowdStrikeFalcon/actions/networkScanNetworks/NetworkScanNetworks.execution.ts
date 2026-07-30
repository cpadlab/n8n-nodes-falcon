import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function parseJsonParam(context: IExecuteFunctions, index: number, paramName = 'bodyJson'): any {
	const rawJson = context.getNodeParameter(paramName, index, '') as string;
	if (!rawJson) return [];
	try {
		const parsed = typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
		return Array.isArray(parsed) ? parsed : [parsed];
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
 * Handles the 'aggregateNetworks' operation.
 */
async function handleAggregateNetworks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns networks aggregations. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanNetworks.aggregateNetworks(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Handles the 'createNetworks' operation.
 */
async function handleCreateNetworks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create networks using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanNetworks.createNetworks(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Handles the 'deleteNetworks' operation.
 */
async function handleDeleteNetworks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete networks by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanNetworks.deleteNetworks(ids, xCSUSERUUID || undefined);
}

/**
 * Handles the 'getNetworks' operation.
 */
async function handleGetNetworks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get networks by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanNetworks.getNetworks(ids, xCSUSERUUID || undefined);
}

/**
 * Handles the 'queryNetworks' operation.
 */
async function handleQueryNetworks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get networks IDs by filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.networkScanNetworks.queryNetworks(xCSUSERUUID || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'updateNetworks' operation.
 */
async function handleUpdateNetworks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update networks using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanNetworks.updateNetworks(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Network Scan Networks operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeNetworkScanNetworks(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateNetworks': return await handleAggregateNetworks(this, index, falconClient);
		case 'createNetworks': return await handleCreateNetworks(this, index, falconClient);
		case 'deleteNetworks': return await handleDeleteNetworks(this, index, falconClient);
		case 'getNetworks': return await handleGetNetworks(this, index, falconClient);
		case 'queryNetworks': return await handleQueryNetworks(this, index, falconClient);
		case 'updateNetworks': return await handleUpdateNetworks(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Network Scan Networks.`);
	}
}
