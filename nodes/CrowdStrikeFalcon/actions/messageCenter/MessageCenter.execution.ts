import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseJsonParam } from '../common';

/**
 * Handles the 'aggregateCases' operation.
 */
async function handleAggregateCases(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve aggregate case values based on the matched filter. */
	return await fc.messageCenter.aggregateCases(parseJsonParam(c, i));
}

/**
 * Handles the 'caseAddActivity' operation.
 */
async function handleCaseAddActivity(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Add an activity to case. */
	return await fc.messageCenter.caseAddActivity(parseJsonParam(c, i));
}

/**
 * Handles the 'caseAddAttachment' operation.
 */
async function handleCaseAddAttachment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload an attachment for the case. */
	const caseId = getStringParam(c, i, 'caseId', '');
	const userUuid = getStringParam(c, i, 'userUuid', '');
	const bodyJson = parseJsonParam(c, i, 'bodyJson');
	return await fc.messageCenter.caseAddAttachment(caseId, userUuid, bodyJson as any);
}

/**
 * Handles the 'caseDownloadAttachment' operation.
 */
async function handleCaseDownloadAttachment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* retrieves an attachment for the case, given the attachment id. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.messageCenter.caseDownloadAttachment(id);
}

/**
 * Handles the 'createCaseV2' operation.
 */
async function handleCreateCaseV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* create a new case. */
	return await fc.messageCenter.createCaseV2(parseJsonParam(c, i));
}

/**
 * Handles the 'getCaseActivityByIds' operation.
 */
async function handleGetCaseActivityByIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve activities for given id's. */
	return await fc.messageCenter.getCaseActivityByIds(parseJsonParam(c, i));
}

/**
 * Handles the 'getCaseEntitiesByIDs' operation.
 */
async function handleGetCaseEntitiesByIDs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve message center cases. */
	return await fc.messageCenter.getCaseEntitiesByIDs(parseJsonParam(c, i));
}

/**
 * Handles the 'queryActivityByCaseID' operation.
 */
async function handleQueryActivityByCaseID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve activities id's for a case. */
	const caseId = getStringParam(c, i, 'caseId', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.messageCenter.queryActivityByCaseID(caseId, limit || undefined, sort || undefined, filter || undefined, offset || undefined);
}

/**
 * Handles the 'queryCasesIdsByFilter' operation.
 */
async function handleQueryCasesIdsByFilter(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve case id's that match the provided filter criteria. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.messageCenter.queryCasesIdsByFilter(limit || undefined, sort || undefined, filter || undefined, offset || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Message Center operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeMessageCenter(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateCases': return await handleAggregateCases(this, index, falconClient);
		case 'caseAddActivity': return await handleCaseAddActivity(this, index, falconClient);
		case 'caseAddAttachment': return await handleCaseAddAttachment(this, index, falconClient);
		case 'caseDownloadAttachment': return await handleCaseDownloadAttachment(this, index, falconClient);
		case 'createCaseV2': return await handleCreateCaseV2(this, index, falconClient);
		case 'getCaseActivityByIds': return await handleGetCaseActivityByIds(this, index, falconClient);
		case 'getCaseEntitiesByIDs': return await handleGetCaseEntitiesByIDs(this, index, falconClient);
		case 'queryActivityByCaseID': return await handleQueryActivityByCaseID(this, index, falconClient);
		case 'queryCasesIdsByFilter': return await handleQueryCasesIdsByFilter(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Message Center.`);
	}
}
