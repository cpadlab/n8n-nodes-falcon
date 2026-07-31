import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'aggregateNotificationsExposedDataRecordsV1' operation.
 */
async function handleAggregateNotificationsExposedDataRecordsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get notification exposed data record aggregates as specified via JSON in request body. */
	const body = parseJsonParam(c, i);
	return await fc.recon.aggregateNotificationsExposedDataRecordsV1(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregateNotificationsV1' operation.
 */
async function handleAggregateNotificationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get notification aggregates as specified via JSON in request body. */
	const body = parseJsonParam(c, i);
	return await fc.recon.aggregateNotificationsV1(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'createActionsV1' operation.
 */
async function handleCreateActionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create actions for a monitoring rule. */
	return await fc.recon.createActionsV1(parseJsonParam(c, i));
}

/**
 * Handles the 'createExportJobsV1' operation.
 */
async function handleCreateExportJobsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Launch asynchronous export job. */
	const body = parseJsonParam(c, i);
	return await fc.recon.createExportJobsV1(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'createRulesV1' operation.
 */
async function handleCreateRulesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create monitoring rules. */
	const body = parseJsonParam(c, i);
	return await fc.recon.createRulesV1(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'deleteActionV1' operation.
 */
async function handleDeleteActionV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete an action from a monitoring rule based on the action ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.recon.deleteActionV1(id);
}

/**
 * Handles the 'deleteExportJobsV1' operation.
 */
async function handleDeleteExportJobsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete export jobs based on their IDs. */
	return await fc.recon.deleteExportJobsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'deleteNotificationsV1' operation.
 */
async function handleDeleteNotificationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete notifications based on IDs. */
	return await fc.recon.deleteNotificationsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'deleteRulesV1' operation.
 */
async function handleDeleteRulesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete monitoring rules. */
	return await fc.recon.deleteRulesV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getActionsV1' operation.
 */
async function handleGetActionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get actions based on their IDs. */
	return await fc.recon.getActionsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getExportJobsV1' operation.
 */
async function handleGetExportJobsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the status of export jobs based on their IDs. */
	return await fc.recon.getExportJobsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getFileContentForExportJobsV1' operation.
 */
async function handleGetFileContentForExportJobsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download the file associated with a job ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.recon.getFileContentForExportJobsV1(id);
}

/**
 * Handles the 'getNotificationsDetailedTranslatedV1' operation.
 */
async function handleGetNotificationsDetailedTranslatedV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get detailed translated notifications based on their IDs. */
	return await fc.recon.getNotificationsDetailedTranslatedV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getNotificationsDetailedV1' operation.
 */
async function handleGetNotificationsDetailedV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get detailed notifications based on their IDs. */
	return await fc.recon.getNotificationsDetailedV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getNotificationsExposedDataRecordsV1' operation.
 */
async function handleGetNotificationsExposedDataRecordsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get notifications exposed data records based on their IDs. */
	return await fc.recon.getNotificationsExposedDataRecordsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getNotificationsTranslatedV1' operation.
 */
async function handleGetNotificationsTranslatedV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get translated notifications based on their IDs. */
	return await fc.recon.getNotificationsTranslatedV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getNotificationsV1' operation.
 */
async function handleGetNotificationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get notifications based on their IDs. */
	return await fc.recon.getNotificationsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getRulesV1' operation.
 */
async function handleGetRulesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get monitoring rules based on their IDs. */
	return await fc.recon.getRulesV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'previewRuleV1' operation.
 */
async function handlePreviewRuleV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Preview rules notification count and distribution. */
	return await fc.recon.previewRuleV1(parseJsonParam(c, i));
}

/**
 * Handles the 'queryActionsV1' operation.
 */
async function handleQueryActionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query actions based on provided criteria. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.recon.queryActionsV1(offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'queryNotificationsExposedDataRecordsV1' operation.
 */
async function handleQueryNotificationsExposedDataRecordsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query notifications exposed data records based on provided criteria. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.recon.queryNotificationsExposedDataRecordsV1(offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'queryNotificationsV1' operation.
 */
async function handleQueryNotificationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query notifications based on provided criteria. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.recon.queryNotificationsV1(offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'queryRulesV1' operation.
 */
async function handleQueryRulesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query monitoring rules based on provided criteria. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.recon.queryRulesV1(offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'updateActionV1' operation.
 */
async function handleUpdateActionV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update an action for a monitoring rule. */
	return await fc.recon.updateActionV1(parseJsonParam(c, i));
}

/**
 * Handles the 'updateNotificationsV1' operation.
 */
async function handleUpdateNotificationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update notification status or assignee. */
	const body = parseJsonParam(c, i);
	return await fc.recon.updateNotificationsV1(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'updateRulesV1' operation.
 */
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
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Recon.`);
	}
}
