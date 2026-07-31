import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam } from '../common';

/**
 * Handles the 'streamInvocationResponseV1' operation.
 */
async function handleStreamInvocationResponseV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the stream of results for an invocation. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.stream.streamInvocationResponseV1(id);
}

/**
 * Main execution handler for CrowdStrike Falcon Stream operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeStream(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	if (operation === 'streamInvocationResponseV1') {
		return await handleStreamInvocationResponseV1(this, index, falconClient);
	}
	throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported.`); as any)), `Operation ${operation} is not supported for Stream.`);
	}
}
