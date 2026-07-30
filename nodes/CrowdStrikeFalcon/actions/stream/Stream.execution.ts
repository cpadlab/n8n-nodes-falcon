import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

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

	switch (operation) {
		case 'streamInvocationResponseV1': return await handleStreamInvocationResponseV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Stream.`);
	}
}
