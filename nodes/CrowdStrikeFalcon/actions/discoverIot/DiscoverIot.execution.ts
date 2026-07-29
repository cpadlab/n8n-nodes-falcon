import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
	const str = (context.getNodeParameter(paramName, index, '') as string) || '';
	return str.split(',').map((id) => id.trim()).filter(Boolean);
}

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/** Handles getIotHosts */
async function handleGetIotHosts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets IoT hosts by IDs. */
	return await fc.discoverIot.getIotHosts(parseArrayParam(c, i, 'ids'));
}

/** Handles queryIotHosts */
async function handleQueryIotHosts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries IoT host IDs. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.discoverIot.queryIotHosts(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/** Handles queryIotHostsV2 */
async function handleQueryIotHostsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries IoT host IDs V2. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.discoverIot.queryIotHostsV2(undefined, limit || undefined, sort || undefined, filter || undefined);
}

/** Main execution handler for Discover IoT operations. */
export async function executeDiscoverIot(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getIotHosts': return await handleGetIotHosts(this, index, falconClient);
		case 'queryIotHosts': return await handleQueryIotHosts(this, index, falconClient);
		case 'queryIotHostsV2': return await handleQueryIotHostsV2(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Discover IoT.`);
	}
}
