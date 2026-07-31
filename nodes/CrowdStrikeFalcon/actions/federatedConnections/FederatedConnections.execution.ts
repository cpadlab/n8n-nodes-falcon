import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseJsonParam } from '../common';

/**
 * Handles the 'deleteFederatedConnectionsConfig' operation.
 */
async function handleDeleteFederatedConnectionsConfig(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete configuration for a federated connection. */
	const connectionId = getStringParam(c, i, 'connectionId', '');
	return await fc.federatedConnections.deleteFederatedConnectionsConfig(connectionId);
}

/**
 * Handles the 'patchFederatedConnectionsConfig' operation.
 */
async function handlePatchFederatedConnectionsConfig(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Patch configuration for a federated connection. */
	const connectionId = getStringParam(c, i, 'connectionId', '');
	return await fc.federatedConnections.patchFederatedConnectionsConfig(connectionId, parseJsonParam(c, i));
}

/**
 * Handles the 'postFederatedConnectionsConfig' operation.
 */
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
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Federated Connections.`);
	}
}
