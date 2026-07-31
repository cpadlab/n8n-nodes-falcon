import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam } from '../common';

/**
 * Handles the 'listAvailableStreamsOAuth2' operation.
 * Discovers available event stream feeds configured for the specified application ID.
 */
async function handleListAvailableStreamsOAuth2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract required App ID and optional format configuration. */
	const appId = getStringParam(c, i, 'appId', '');
	const format = getStringParam(c, i, 'format', '');
	return await fc.eventStreams.listAvailableStreamsOAuth2(appId, format || undefined);
}

/**
 * Handles the 'refreshActiveStreamSession' operation.
 * Sends a refresh ping request to extend an active stream session lease.
 */
async function handleRefreshActiveStreamSession(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Extract required action name, application ID, and partition parameters. */
	const actionName = getStringParam(c, i, 'actionName', 'refresh');
	const appId = getStringParam(c, i, 'appId', '');
	const partition = c.getNodeParameter('partition', i, 0) as number;
	return await fc.eventStreams.refreshActiveStreamSession(actionName, appId, partition);
}

/**
 * Main execution handler for CrowdStrike Falcon Event Streams operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeEventStreams(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'listAvailableStreamsOAuth2': return await handleListAvailableStreamsOAuth2(this, index, falconClient);
		case 'refreshActiveStreamSession': return await handleRefreshActiveStreamSession(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Event Streams.`);
	}
}
