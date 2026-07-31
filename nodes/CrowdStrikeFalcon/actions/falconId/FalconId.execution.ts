import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'deleteThirdPartyPasskeyRegistry' operation.
 */
async function handleDeleteThirdPartyPasskeyRegistry(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes third party passkey registries by IDs. */
	return await fc.falconId.deleteThirdPartyPasskeyRegistry(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getThirdPartyPasskeyRegistry' operation.
 */
async function handleGetThirdPartyPasskeyRegistry(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Fetches third party passkey registries by IDs. */
	return await fc.falconId.getThirdPartyPasskeyRegistry(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'queryThirdPartyPasskeyRegistry' operation.
 */
async function handleQueryThirdPartyPasskeyRegistry(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries third party passkey registries. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.falconId.queryThirdPartyPasskeyRegistry(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'updateThirdPartyPasskeyRegistry' operation.
 */
async function handleUpdateThirdPartyPasskeyRegistry(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates third party passkey registries. */
	const body = parseJsonParam(c, i);
	const bodyArray = Array.isArray(body) ? body : [body];
	return await fc.falconId.updateThirdPartyPasskeyRegistry(bodyArray);
}

/**
 * Main execution handler for CrowdStrike Falcon ID operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeFalconId(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'deleteThirdPartyPasskeyRegistry': return await handleDeleteThirdPartyPasskeyRegistry(this, index, falconClient);
		case 'getThirdPartyPasskeyRegistry': return await handleGetThirdPartyPasskeyRegistry(this, index, falconClient);
		case 'queryThirdPartyPasskeyRegistry': return await handleQueryThirdPartyPasskeyRegistry(this, index, falconClient);
		case 'updateThirdPartyPasskeyRegistry': return await handleUpdateThirdPartyPasskeyRegistry(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Falcon ID.`);
	}
}
