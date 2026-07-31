import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseJsonParam } from '../common';

/**
 * Handles the 'getSensorAggregates' operation.
 */
async function handleGetSensorAggregates(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get sensor aggregates as specified via JSON in request body. */
	return await fc.identityEntities.getSensorAggregates(parseJsonParam(c, i));
}

/**
 * Handles the 'getSensorDetails' operation.
 */
async function handleGetSensorDetails(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get details on one or more sensors by providing device IDs in body. */
	return await fc.identityEntities.getSensorDetails(parseJsonParam(c, i));
}

/**
 * Handles the 'querySensorsByFilter' operation.
 */
async function handleQuerySensorsByFilter(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for sensors by hostname, IP, and other criteria. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.identityEntities.querySensorsByFilter(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Identity Entities operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeIdentityEntities(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getSensorAggregates': return await handleGetSensorAggregates(this, index, falconClient);
		case 'getSensorDetails': return await handleGetSensorDetails(this, index, falconClient);
		case 'querySensorsByFilter': return await handleQuerySensorsByFilter(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Identity Entities.`);
	}
}
