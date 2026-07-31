import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'getIotHosts' operation.
 */
async function handleGetIotHosts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets IoT hosts by IDs. */
	return await fc.discoverIot.getIotHosts(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'queryIotHosts' operation.
 */
async function handleQueryIotHosts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries IoT host IDs. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.discoverIot.queryIotHosts(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'queryIotHostsV2' operation.
 */
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
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Discover IoT.`);
	}
}
