import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/**
 * Handles the 'readRequestBody' operation.
 * Retrieves a large request body or file payload that has spilled into Falcon object storage.
 */
async function handleReadRequestBody(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract required execution payload parameters. */
	const id = getStringParam(c, i, 'id', '');
	const fn = getStringParam(c, i, 'fn', '');
	const filename = getStringParam(c, i, 'filename', '');
	const sha256 = getStringParam(c, i, 'sha256', '');
	return await fc.execution.readRequestBody(id, fn, filename, sha256);
}

/**
 * Main execution handler for CrowdStrike Falcon Execution operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeExecution(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'readRequestBody': return await handleReadRequestBody(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Execution.`);
	}
}
