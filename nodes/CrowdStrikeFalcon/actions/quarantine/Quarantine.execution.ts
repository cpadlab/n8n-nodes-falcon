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
 * Handles the 'actionUpdateCount' operation.
 */
async function handleActionUpdateCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns count of potentially affected quarantined files for each action. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.quarantine.actionUpdateCount(filter);
}

/**
 * Handles the 'getAggregateFiles' operation.
 */
async function handleGetAggregateFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get quarantine file aggregates as specified via json in request body. */
	return await fc.quarantine.getAggregateFiles(parseJsonParam(c, i));
}

/**
 * Handles the 'getQuarantineFiles' operation.
 */
async function handleGetQuarantineFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get quarantine file metadata for specified ids. */
	return await fc.quarantine.getQuarantineFiles(parseJsonParam(c, i));
}

/**
 * Handles the 'queryQuarantineFiles' operation.
 */
async function handleQueryQuarantineFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get quarantine file ids that match the provided filter criteria. */
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.quarantine.queryQuarantineFiles(offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'updateQfByQuery' operation.
 */
async function handleUpdateQfByQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Apply quarantine file actions by query. */
	return await fc.quarantine.updateQfByQuery(parseJsonParam(c, i));
}

/**
 * Handles the 'updateQuarantinedDetectsByIds' operation.
 */
async function handleUpdateQuarantinedDetectsByIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Apply action by quarantine file ids. */
	return await fc.quarantine.updateQuarantinedDetectsByIds(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Quarantine operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeQuarantine(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'actionUpdateCount': return await handleActionUpdateCount(this, index, falconClient);
		case 'getAggregateFiles': return await handleGetAggregateFiles(this, index, falconClient);
		case 'getQuarantineFiles': return await handleGetQuarantineFiles(this, index, falconClient);
		case 'queryQuarantineFiles': return await handleQueryQuarantineFiles(this, index, falconClient);
		case 'updateQfByQuery': return await handleUpdateQfByQuery(this, index, falconClient);
		case 'updateQuarantinedDetectsByIds': return await handleUpdateQuarantinedDetectsByIds(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Quarantine.`);
	}
}
