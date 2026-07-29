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

/** Handles deleteFederatedConnectionsConfig */
async function handleDeleteFederatedConnectionsConfig(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete configuration for a federated connection. */
	const connectionId = getStringParam(c, i, 'connectionId', '');
	return await fc.federatedConnections.deleteFederatedConnectionsConfig(connectionId);
}

/** Handles patchFederatedConnectionsConfig */
async function handlePatchFederatedConnectionsConfig(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Patch configuration for a federated connection. */
	const connectionId = getStringParam(c, i, 'connectionId', '');
	return await fc.federatedConnections.patchFederatedConnectionsConfig(connectionId, parseJsonParam(c, i));
}

/** Handles postFederatedConnectionsConfig */
async function handlePostFederatedConnectionsConfig(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create configuration for a federated connection. */
	return await fc.federatedConnections.postFederatedConnectionsConfig(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Federated Connections operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeFederatedConnections(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'deleteFederatedConnectionsConfig': return await handleDeleteFederatedConnectionsConfig(this, index, falconClient);
		case 'patchFederatedConnectionsConfig': return await handlePatchFederatedConnectionsConfig(this, index, falconClient);
		case 'postFederatedConnectionsConfig': return await handlePostFederatedConnectionsConfig(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Federated Connections.`);
	}
}
