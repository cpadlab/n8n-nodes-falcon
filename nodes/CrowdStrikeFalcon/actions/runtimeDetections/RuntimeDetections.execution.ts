import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam } from '../common';

/**
 * Handles the 'getRuntimeDetectionsCombinedV2' operation.
 */
async function handleGetRuntimeDetectionsCombinedV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve container runtime detections by the provided search criteria. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.runtimeDetections.getRuntimeDetectionsCombinedV2(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Runtime Detections operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeRuntimeDetections(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getRuntimeDetectionsCombinedV2': return await handleGetRuntimeDetectionsCombinedV2(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Runtime Detections.`);
	}
}
