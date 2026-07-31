import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'execute' operation.
 */
async function handleExecute(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Launch scheduled reports executions for the provided report IDs. */
	return await fc.scheduledReports.execute(parseJsonParam(c, i));
}

/**
 * Handles the 'query' operation.
 */
async function handleQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Find all report IDs matching the query with filter. */
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.scheduledReports.query(sort || undefined, filter || undefined, q || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'queryById' operation.
 */
async function handleQueryById(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve scheduled reports for the provided report IDs. */
	return await fc.scheduledReports.queryById(parseArrayParam(c, i, 'ids'));
}

/**
 * Main execution handler for CrowdStrike Falcon Scheduled Reports operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeScheduledReports(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'execute': return await handleExecute(this, index, falconClient);
		case 'query': return await handleQuery(this, index, falconClient);
		case 'queryById': return await handleQueryById(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Scheduled Reports.`);
	}
}
