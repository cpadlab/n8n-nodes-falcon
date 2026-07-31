import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'fdrschemaCombinedEventGet' operation.
 * Fetches the combined sensor event schema details across all event types.
 */
async function handleFdrschemaCombinedEventGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Call Falcon API to retrieve combined event schema definition. */
	return await fc.eventSchema.fdrschemaCombinedEventGet();
}

/**
 * Handles the 'fdrschemaEntitiesEventGet' operation.
 * Fetches specific event schema definitions identified by provided event IDs.
 */
async function handleFdrschemaEntitiesEventGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract and validate schema ID parameter list. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.eventSchema.fdrschemaEntitiesEventGet(ids.length ? ids : undefined);
}

/**
 * Handles the 'fdrschemaQueriesEventGet' operation.
 * Retrieves a list of event schema IDs that match search and filter criteria.
 */
async function handleFdrschemaQueriesEventGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract pagination and query filter options. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.eventSchema.fdrschemaQueriesEventGet(limit || undefined, offset || undefined, filter || undefined, sort || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Event Schema operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeEventSchema(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'fdrschemaCombinedEventGet': return await handleFdrschemaCombinedEventGet(this, index, falconClient);
		case 'fdrschemaEntitiesEventGet': return await handleFdrschemaEntitiesEventGet(this, index, falconClient);
		case 'fdrschemaQueriesEventGet': return await handleFdrschemaQueriesEventGet(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Event Schema.`);
	}
}
