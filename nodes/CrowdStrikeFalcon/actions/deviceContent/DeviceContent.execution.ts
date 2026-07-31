import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'entitiesStatesV1' operation.
 */
async function handleEntitiesStatesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves host content state for IDs. */
	return await fc.deviceContent.entitiesStatesV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'queriesStatesV1' operation.
 */
async function handleQueriesStatesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries for content state of the host. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.deviceContent.queriesStatesV1(limit || undefined, sort || undefined, offset || undefined, filter || undefined);
}

/** Main execution handler for Device Content operations. */
export async function executeDeviceContent(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'entitiesStatesV1': return await handleEntitiesStatesV1(this, index, falconClient);
		case 'queriesStatesV1': return await handleQueriesStatesV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Device Content.`);
	}
}
