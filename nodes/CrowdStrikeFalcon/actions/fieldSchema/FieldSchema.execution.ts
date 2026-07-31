import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'fdrschemaEntitiesFieldGet' operation.
 */
async function handleFdrschemaEntitiesFieldGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Fetch field schema by ID. */
	return await fc.fieldSchema.fdrschemaEntitiesFieldGet(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'fdrschemaQueriesFieldGet' operation.
 */
async function handleFdrschemaQueriesFieldGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get list of field IDs given a particular query. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.fieldSchema.fdrschemaQueriesFieldGet(limit || undefined, offset || undefined, filter || undefined, sort || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Field Schema operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeFieldSchema(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'fdrschemaEntitiesFieldGet': return await handleFdrschemaEntitiesFieldGet(this, index, falconClient);
		case 'fdrschemaQueriesFieldGet': return await handleFdrschemaQueriesFieldGet(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Field Schema.`);
	}
}
