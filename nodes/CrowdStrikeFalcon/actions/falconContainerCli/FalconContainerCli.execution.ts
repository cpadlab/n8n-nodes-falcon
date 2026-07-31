import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'readImageVulnerabilities' operation.
 * Sends a request to retrieve known vulnerability information for a specified container image.
 */
async function handleReadImageVulnerabilities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Parse body JSON parameters before calling Falcon Container CLI API. */
	return await fc.falconContainerCli.readImageVulnerabilities(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Container CLI operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeFalconContainerCli(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'readImageVulnerabilities': return await handleReadImageVulnerabilities(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Falcon Container CLI.`);
	}
}
