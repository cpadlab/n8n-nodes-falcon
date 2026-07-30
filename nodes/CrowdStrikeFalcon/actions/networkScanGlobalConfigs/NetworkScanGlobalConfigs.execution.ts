import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function parseJsonParam(context: IExecuteFunctions, index: number, paramName = 'bodyJson'): any {
	const rawJson = context.getNodeParameter(paramName, index, '') as string;
	if (!rawJson) return {};
	try {
		return typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
	} catch (e) {
		throw new Error(`Invalid JSON in ${paramName}: ${(e as Error).message}`);
	}
}

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

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
			throw new Error(`Operation ${operation} is not supported for Network Scan Global Configs.`);
	}
}
