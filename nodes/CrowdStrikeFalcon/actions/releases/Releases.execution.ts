import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam } from '../common';

/**
 * Handles the 'combinedReleasesV1Mixin0' operation.
 */
async function handleCombinedReleasesV1Mixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries for releases resources and returns details. */
	const authorization = getStringParam(c, i, 'authorization', '');
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = getStringParam(c, i, 'offset', '');
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.releases.combinedReleasesV1Mixin0(authorization, undefined, filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Releases operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeReleases(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'combinedReleasesV1Mixin0': return await handleCombinedReleasesV1Mixin0(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Releases.`);
	}
}
