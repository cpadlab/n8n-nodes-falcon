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

/** Handles aggregateScanners */
async function handleAggregateScanners(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns scanners aggregations. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const body = parseJsonParam(c, i);
	return await fc.networkScanScanners.aggregateScanners(Array.isArray(body) ? body : [body], xCSUSERUUID || undefined);
}

/** Handles getScanners */
async function handleGetScanners(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scanners by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScanners.getScanners(ids, xCSUSERUUID || undefined);
}

/** Handles queryScanners */
async function handleQueryScanners(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scanners IDs by filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.networkScanScanners.queryScanners(xCSUSERUUID || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/** Handles updateScanners */
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
			throw new Error(`Operation ${operation} is not supported for Network Scan Scanners.`);
	}
}
