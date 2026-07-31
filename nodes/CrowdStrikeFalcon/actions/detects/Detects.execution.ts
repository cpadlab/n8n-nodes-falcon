import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseJsonParam } from '../common';

/**
 * Handles the 'getAggregateDetects' operation. // NOSONAR
 */
async function handleGetAggregateDetects(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets aggregate detects (deprecated). */
	const body = parseJsonParam(c, i);
	const bodyArray = Array.isArray(body) ? body : [body];
	return await fc.detects.getAggregateDetects(bodyArray); // NOSONAR
}

/**
 * Handles the 'getDetectSummaries' operation. // NOSONAR
 */
async function handleGetDetectSummaries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets detect summaries (deprecated). */
	return await fc.detects.getDetectSummaries(parseJsonParam(c, i)); // NOSONAR
}

/**
 * Handles the 'queryDetects' operation. // NOSONAR
 */
async function handleQueryDetects(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries detects (deprecated). */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.detects.queryDetects(offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined); // NOSONAR
}

/**
 * Handles the 'updateDetectsByIdsV2' operation. // NOSONAR
 */
async function handleUpdateDetectsByIdsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates detects by IDs (deprecated). */
	return await fc.detects.updateDetectsByIdsV2(parseJsonParam(c, i)); // NOSONAR
}

/** Main execution handler for Detects operations. */
export async function executeDetects(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getAggregateDetects': return await handleGetAggregateDetects(this, index, falconClient); // NOSONAR
		case 'getDetectSummaries': return await handleGetDetectSummaries(this, index, falconClient); // NOSONAR
		case 'queryDetects': return await handleQueryDetects(this, index, falconClient); // NOSONAR
		case 'updateDetectsByIdsV2': return await handleUpdateDetectsByIdsV2(this, index, falconClient); // NOSONAR
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Detects.`);
	}
}
