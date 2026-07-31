import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam } from '../common';

/**
 * Handles the 'createFileV1' operation.
 */
async function handleCreateFileV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a lookup file within a foundry app. */
	const name = getStringParam(c, i, 'name', '');
	const description = getStringParam(c, i, 'description', '');
	const id = getStringParam(c, i, 'id', '');
	const repo = getStringParam(c, i, 'repo', '');
	const fileBlob = new Blob([Buffer.from('')]);
	return await fc.foundryLookupFiles.createFileV1(fileBlob, name, undefined, undefined, description || undefined, id || undefined, repo || undefined);
}

/**
 * Handles the 'updateFileV1' operation.
 */
async function handleUpdateFileV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates a lookup file within a Foundry app. */
	const id = getStringParam(c, i, 'id', '');
	const description = getStringParam(c, i, 'description', '');
	return await fc.foundryLookupFiles.updateFileV1(id, undefined, undefined, description || undefined, undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Foundry Lookup Files operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeFoundryLookupFiles(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createFileV1': return await handleCreateFileV1(this, index, falconClient);
		case 'updateFileV1': return await handleUpdateFileV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Foundry Lookup Files.`);
	}
}
