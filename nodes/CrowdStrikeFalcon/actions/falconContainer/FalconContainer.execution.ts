import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Handles the 'getCredentials' operation.
 * Retrieves registry authentication credentials for Falcon Container operations.
 */
async function handleGetCredentials(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query Falcon Container API to get container registry credentials. */
	return await fc.falconContainer.getCredentials();
}

/**
 * Main execution handler for CrowdStrike Falcon Container operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeFalconContainer(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getCredentials': return await handleGetCredentials(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Falcon Container.`);
	}
}
