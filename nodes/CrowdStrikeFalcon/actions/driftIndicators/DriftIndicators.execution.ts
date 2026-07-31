import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'getDriftIndicatorsValuesByDate' operation.
 * Returns the count of Drift Indicators grouped by date over a specified period.
 */
async function handleGetDriftIndicatorsValuesByDate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract optional FQL filter and limit parameters before querying API. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.driftIndicators.getDriftIndicatorsValuesByDate(filter || undefined, limit || undefined);
}

/**
 * Handles the 'readDriftIndicatorEntities' operation.
 * Retrieves detailed entity data for specific Drift Indicators identified by IDs.
 */
async function handleReadDriftIndicatorEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract and clean array of IDs from node execution context. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.driftIndicators.readDriftIndicatorEntities(ids.length ? ids : undefined);
}

/**
 * Handles the 'readDriftIndicatorsCount' operation.
 * Returns the total aggregate count of Drift Indicators matching filter criteria.
 */
async function handleReadDriftIndicatorsCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract optional filter parameter. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.driftIndicators.readDriftIndicatorsCount(filter || undefined);
}

/**
 * Handles the 'searchAndReadDriftIndicatorEntities' operation.
 * Search and return full Drift Indicator entities based on criteria.
 */
async function handleSearchAndReadDriftIndicatorEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract pagination and sort criteria. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.driftIndicators.searchAndReadDriftIndicatorEntities(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'searchDriftIndicators' operation.
 * Searches for Drift Indicators and returns a list of matching indicator IDs.
 */
async function handleSearchDriftIndicators(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract pagination and query parameters. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.driftIndicators.searchDriftIndicators(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Drift Indicators operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeDriftIndicators(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getDriftIndicatorsValuesByDate': return await handleGetDriftIndicatorsValuesByDate(this, index, falconClient);
		case 'readDriftIndicatorEntities': return await handleReadDriftIndicatorEntities(this, index, falconClient);
		case 'readDriftIndicatorsCount': return await handleReadDriftIndicatorsCount(this, index, falconClient);
		case 'searchAndReadDriftIndicatorEntities': return await handleSearchAndReadDriftIndicatorEntities(this, index, falconClient);
		case 'searchDriftIndicators': return await handleSearchDriftIndicators(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Drift Indicators.`);
	}
}
