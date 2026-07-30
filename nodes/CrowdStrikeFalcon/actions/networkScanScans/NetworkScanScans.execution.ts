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

/** Handles aggregateScansMixin0 */
async function handleAggregateScansMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns scans aggregations. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScans.aggregateScansMixin0(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/** Handles createScans */
async function handleCreateScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create scans using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScans.createScans(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/** Handles deleteScans */
async function handleDeleteScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete scans by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScans.deleteScans(ids, xCSUSERUUID || undefined);
}

/** Handles getScans */
async function handleGetScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scans by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScans.getScans(ids, xCSUSERUUID || undefined);
}

/** Handles queryScansMixin0 */
async function handleQueryScansMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scans IDs by filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.networkScanScans.queryScansMixin0(xCSUSERUUID || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/** Handles updateScans */
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
			throw new Error(`Operation ${operation} is not supported for Network Scan Scans.`);
	}
}
