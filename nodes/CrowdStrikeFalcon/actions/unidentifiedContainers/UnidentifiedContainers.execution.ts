import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam } from '../common';

/**
 * Handles the 'count' operation.
 */
async function handleCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns the total count of Unidentified Containers over a time period. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.unidentifiedContainers.count(filter || undefined);
}

/**
 * Handles the 'countByDateRange' operation.
 */
async function handleCountByDateRange(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns the count of Unidentified Containers over the last 7 days. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.unidentifiedContainers.countByDateRange(filter || undefined);
}

/**
 * Handles the 'search' operation.
 */
async function handleSearch(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search Unidentified Containers by the provided search criteria. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.unidentifiedContainers.search(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Unidentified Containers operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeUnidentifiedContainers(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'count': return await handleCount(this, index, falconClient);
		case 'countByDateRange': return await handleCountByDateRange(this, index, falconClient);
		case 'search': return await handleSearch(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Unidentified Containers.`);
	}
}
