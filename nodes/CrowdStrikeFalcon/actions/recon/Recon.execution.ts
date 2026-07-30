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

function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
	const str = (context.getNodeParameter(paramName, index, '') as string) || '';
	return str.split(',').map((id) => id.trim()).filter(Boolean);
}

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/** Handles aggregateNotificationsExposedDataRecordsV1 */
async function handleAggregateNotificationsExposedDataRecordsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get notification exposed data record aggregates as specified via JSON in request body. */
	const body = parseJsonParam(c, i);
	return await fc.recon.aggregateNotificationsExposedDataRecordsV1(Array.isArray(body) ? body : [body]);
}

/** Handles aggregateNotificationsV1 */
async function handleAggregateNotificationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get notification aggregates as specified via JSON in request body. */
	const body = parseJsonParam(c, i);
	return await fc.recon.aggregateNotificationsV1(Array.isArray(body) ? body : [body]);
}

/** Handles createActionsV1 */
async function handleCreateActionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create actions for a monitoring rule. */
	return await fc.recon.createActionsV1(parseJsonParam(c, i));
}

/** Handles createExportJobsV1 */
async function handleCreateExportJobsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Launch asynchronous export job. */
	const body = parseJsonParam(c, i);
	return await fc.recon.createExportJobsV1(Array.isArray(body) ? body : [body]);
}

/** Handles createRulesV1 */
async function handleCreateRulesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create monitoring rules. */
	const body = parseJsonParam(c, i);
	return await fc.recon.createRulesV1(Array.isArray(body) ? body : [body]);
}

/** Handles deleteActionV1 */
async function handleDeleteActionV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete an action from a monitoring rule based on the action ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.recon.deleteActionV1(id);
}

/** Handles deleteExportJobsV1 */
async function handleDeleteExportJobsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete export jobs based on their IDs. */
	return await fc.recon.deleteExportJobsV1(parseArrayParam(c, i, 'ids'));
}

/** Handles deleteNotificationsV1 */
async function handleDeleteNotificationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete notifications based on IDs. */
	return await fc.recon.deleteNotificationsV1(parseArrayParam(c, i, 'ids'));
}

/** Handles deleteRulesV1 */
async function handleDeleteRulesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete monitoring rules. */
	return await fc.recon.deleteRulesV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getActionsV1 */
async function handleGetActionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get actions based on their IDs. */
	return await fc.recon.getActionsV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getExportJobsV1 */
async function handleGetExportJobsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the status of export jobs based on their IDs. */
	return await fc.recon.getExportJobsV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getFileContentForExportJobsV1 */
async function handleGetFileContentForExportJobsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download the file associated with a job ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.recon.getFileContentForExportJobsV1(id);
}

/** Handles getNotificationsDetailedTranslatedV1 */
async function handleGetNotificationsDetailedTranslatedV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get detailed translated notifications based on their IDs. */
	return await fc.recon.getNotificationsDetailedTranslatedV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getNotificationsDetailedV1 */
async function handleGetNotificationsDetailedV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get detailed notifications based on their IDs. */
	return await fc.recon.getNotificationsDetailedV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getNotificationsExposedDataRecordsV1 */
async function handleGetNotificationsExposedDataRecordsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get notifications exposed data records based on their IDs. */
	return await fc.recon.getNotificationsExposedDataRecordsV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getNotificationsTranslatedV1 */
async function handleGetNotificationsTranslatedV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get translated notifications based on their IDs. */
	return await fc.recon.getNotificationsTranslatedV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getNotificationsV1 */
async function handleGetNotificationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get notifications based on their IDs. */
	return await fc.recon.getNotificationsV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getRulesV1 */
async function handleGetRulesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get monitoring rules based on their IDs. */
	return await fc.recon.getRulesV1(parseArrayParam(c, i, 'ids'));
}

/** Handles previewRuleV1 */
async function handlePreviewRuleV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Preview rules notification count and distribution. */
	return await fc.recon.previewRuleV1(parseJsonParam(c, i));
}

/** Handles queryActionsV1 */
async function handleQueryActionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query actions based on provided criteria. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.recon.queryActionsV1(offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/** Handles queryNotificationsExposedDataRecordsV1 */
async function handleQueryNotificationsExposedDataRecordsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query notifications exposed data records based on provided criteria. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.recon.queryNotificationsExposedDataRecordsV1(offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/** Handles queryNotificationsV1 */
async function handleQueryNotificationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query notifications based on provided criteria. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.recon.queryNotificationsV1(offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/** Handles queryRulesV1 */
async function handleQueryRulesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query monitoring rules based on provided criteria. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.recon.queryRulesV1(offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/** Handles updateActionV1 */
async function handleUpdateActionV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update an action for a monitoring rule. */
	return await fc.recon.updateActionV1(parseJsonParam(c, i));
}

/** Handles updateNotificationsV1 */
async function handleUpdateNotificationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update notification status or assignee. */
	const body = parseJsonParam(c, i);
	return await fc.recon.updateNotificationsV1(Array.isArray(body) ? body : [body]);
}

/** Handles updateRulesV1 */
async function handleUpdateRulesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update monitoring rules. */
	const body = parseJsonParam(c, i);
	return await fc.recon.updateRulesV1(Array.isArray(body) ? body : [body]);
}

/**
 * Main execution handler for CrowdStrike Falcon Recon operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeRecon(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateNotificationsExposedDataRecordsV1': return await handleAggregateNotificationsExposedDataRecordsV1(this, index, falconClient);
		case 'aggregateNotificationsV1': return await handleAggregateNotificationsV1(this, index, falconClient);
		case 'createActionsV1': return await handleCreateActionsV1(this, index, falconClient);
		case 'createExportJobsV1': return await handleCreateExportJobsV1(this, index, falconClient);
		case 'createRulesV1': return await handleCreateRulesV1(this, index, falconClient);
		case 'deleteActionV1': return await handleDeleteActionV1(this, index, falconClient);
		case 'deleteExportJobsV1': return await handleDeleteExportJobsV1(this, index, falconClient);
		case 'deleteNotificationsV1': return await handleDeleteNotificationsV1(this, index, falconClient);
		case 'deleteRulesV1': return await handleDeleteRulesV1(this, index, falconClient);
		case 'getActionsV1': return await handleGetActionsV1(this, index, falconClient);
		case 'getExportJobsV1': return await handleGetExportJobsV1(this, index, falconClient);
		case 'getFileContentForExportJobsV1': return await handleGetFileContentForExportJobsV1(this, index, falconClient);
		case 'getNotificationsDetailedTranslatedV1': return await handleGetNotificationsDetailedTranslatedV1(this, index, falconClient);
		case 'getNotificationsDetailedV1': return await handleGetNotificationsDetailedV1(this, index, falconClient);
		case 'getNotificationsExposedDataRecordsV1': return await handleGetNotificationsExposedDataRecordsV1(this, index, falconClient);
		case 'getNotificationsTranslatedV1': return await handleGetNotificationsTranslatedV1(this, index, falconClient);
		case 'getNotificationsV1': return await handleGetNotificationsV1(this, index, falconClient);
		case 'getRulesV1': return await handleGetRulesV1(this, index, falconClient);
		case 'previewRuleV1': return await handlePreviewRuleV1(this, index, falconClient);
		case 'queryActionsV1': return await handleQueryActionsV1(this, index, falconClient);
		case 'queryNotificationsExposedDataRecordsV1': return await handleQueryNotificationsExposedDataRecordsV1(this, index, falconClient);
		case 'queryNotificationsV1': return await handleQueryNotificationsV1(this, index, falconClient);
		case 'queryRulesV1': return await handleQueryRulesV1(this, index, falconClient);
		case 'updateActionV1': return await handleUpdateActionV1(this, index, falconClient);
		case 'updateNotificationsV1': return await handleUpdateNotificationsV1(this, index, falconClient);
		case 'updateRulesV1': return await handleUpdateRulesV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Recon.`);
	}
}
