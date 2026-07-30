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
 * Handles the 'combinedReleaseNotesV1' operation.
 */
async function handleCombinedReleaseNotesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries for release-notes resources and returns details. */
	const authorization = getStringParam(c, i, 'authorization', '');
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = getStringParam(c, i, 'offset', '');
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.releaseNotes.combinedReleaseNotesV1(authorization, undefined, filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'getEntityIDsByQueryPOST' operation.
 */
async function handleGetEntityIDsByQueryPOST(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns the release notes for the IDs in the request. */
	const authorization = getStringParam(c, i, 'authorization', '');
	return await fc.releaseNotes.getEntityIDsByQueryPOST(authorization, parseJsonParam(c, i));
}

/**
 * Handles the 'getEntityIDsByQueryPOSTV2' operation.
 */
async function handleGetEntityIDsByQueryPOSTV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns the release notes for the IDs in the request with EA and GA dates in ISO 8601 format. */
	const authorization = getStringParam(c, i, 'authorization', '');
	return await fc.releaseNotes.getEntityIDsByQueryPOSTV2(authorization, parseJsonParam(c, i));
}

/**
 * Handles the 'queryReleaseNotesV1' operation.
 */
async function handleQueryReleaseNotesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries for release-notes resources and returns ids. */
	const authorization = getStringParam(c, i, 'authorization', '');
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = getStringParam(c, i, 'offset', '');
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.releaseNotes.queryReleaseNotesV1(authorization, undefined, filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Release Notes operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeReleaseNotes(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'combinedReleaseNotesV1': return await handleCombinedReleaseNotesV1(this, index, falconClient);
		case 'getEntityIDsByQueryPOST': return await handleGetEntityIDsByQueryPOST(this, index, falconClient);
		case 'getEntityIDsByQueryPOSTV2': return await handleGetEntityIDsByQueryPOSTV2(this, index, falconClient);
		case 'queryReleaseNotesV1': return await handleQueryReleaseNotesV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Release Notes.`);
	}
}
