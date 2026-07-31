import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseJsonParam } from '../common';

/**
 * Handles the 'getGlobalConfigs' operation.
 */
async function handleGetGlobalConfigs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get global configs for the CID. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanGlobalConfigs.getGlobalConfigs(xCSUSERUUID || undefined);
}

/**
 * Handles the 'updateGlobalConfigs' operation.
 */
async function handleUpdateGlobalConfigs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update global configs using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanGlobalConfigs.updateGlobalConfigs(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Network Scan Global Configs operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeNetworkScanGlobalConfigs(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getGlobalConfigs': return await handleGetGlobalConfigs(this, index, falconClient);
		case 'updateGlobalConfigs': return await handleUpdateGlobalConfigs(this, index, falconClient);
		default:
			throw new NodeOperationError(c.getNode(), `Operation ${operation} is not supported for Network Scan Global Configs.`);
	}
}
