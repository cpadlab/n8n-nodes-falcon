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

/** Handles aggregateZones */
async function handleAggregateZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns zones aggregations. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanZones.aggregateZones(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/** Handles combinedZones */
async function handleCombinedZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get zones by filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.networkScanZones.combinedZones(xCSUSERUUID || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/** Handles createZones */
async function handleCreateZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create zones using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanZones.createZones(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/** Handles deleteZones */
async function handleDeleteZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete zones by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanZones.deleteZones(ids, xCSUSERUUID || undefined);
}

/** Handles getZones */
async function handleGetZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get zones by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanZones.getZones(ids, xCSUSERUUID || undefined);
}

/** Handles queryZones */
async function handleQueryZones(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get zones IDs by filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.networkScanZones.queryZones(xCSUSERUUID || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/** Handles updateZones */
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
			throw new Error(`Operation ${operation} is not supported for Network Scan Zones.`);
	}
}
