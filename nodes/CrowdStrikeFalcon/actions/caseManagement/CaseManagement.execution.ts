import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

function parseSetParam(context: IExecuteFunctions, index: number, paramName = 'ids'): Set<string> {
	const idsString = context.getNodeParameter(paramName, index, '') as string;
	const idsArray = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return new Set(idsArray);
}

/**
 * Handles the 'aggregatesAccessTagsPostV1' operation.
 */
async function handleAggregatesAccessTagsPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves access tag aggregates. */
	const body = parseJsonParam(c, i);
	return await fc.caseManagement.aggregatesAccessTagsPostV1(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregatesNotificationGroupsPostV1' operation.
 */
async function handleAggregatesNotificationGroupsPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves notification groups aggregations V1. */
	const body = parseJsonParam(c, i);
	return await fc.caseManagement.aggregatesNotificationGroupsPostV1(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregatesNotificationGroupsPostV2' operation.
 */
async function handleAggregatesNotificationGroupsPostV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves notification groups aggregations V2. */
	const body = parseJsonParam(c, i);
	return await fc.caseManagement.aggregatesNotificationGroupsPostV2(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregatesSlasPostV1' operation.
 */
async function handleAggregatesSlasPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves SLA aggregations. */
	const body = parseJsonParam(c, i);
	return await fc.caseManagement.aggregatesSlasPostV1(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'aggregatesTemplatesPostV1' operation.
 */
async function handleAggregatesTemplatesPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves templates aggregations. */
	const body = parseJsonParam(c, i);
	return await fc.caseManagement.aggregatesTemplatesPostV1(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'entitiesFieldsGetV1' operation.
 */
async function handleEntitiesFieldsGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves fields by ID. */
	return await fc.caseManagement.entitiesFieldsGetV1(parseSetParam(c, i));
}

/**
 * Handles the 'entitiesNotificationGroupsDeleteV1' operation.
 */
async function handleEntitiesNotificationGroupsDeleteV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes notification groups V1. */
	return await fc.caseManagement.entitiesNotificationGroupsDeleteV1(parseSetParam(c, i));
}

/**
 * Handles the 'entitiesNotificationGroupsDeleteV2' operation.
 */
async function handleEntitiesNotificationGroupsDeleteV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes notification groups V2. */
	return await fc.caseManagement.entitiesNotificationGroupsDeleteV2(parseSetParam(c, i));
}

/**
 * Handles the 'entitiesNotificationGroupsGetV1' operation.
 */
async function handleEntitiesNotificationGroupsGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves notification groups V1. */
	return await fc.caseManagement.entitiesNotificationGroupsGetV1(parseSetParam(c, i));
}

/**
 * Handles the 'entitiesNotificationGroupsGetV2' operation.
 */
async function handleEntitiesNotificationGroupsGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves notification groups V2. */
	return await fc.caseManagement.entitiesNotificationGroupsGetV2(parseSetParam(c, i));
}

/**
 * Handles the 'entitiesNotificationGroupsPatchV1' operation.
 */
async function handleEntitiesNotificationGroupsPatchV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates notification group V1. */
	return await fc.caseManagement.entitiesNotificationGroupsPatchV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesNotificationGroupsPatchV2' operation.
 */
async function handleEntitiesNotificationGroupsPatchV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates notification group V2. */
	return await fc.caseManagement.entitiesNotificationGroupsPatchV2(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesNotificationGroupsPostV1' operation.
 */
async function handleEntitiesNotificationGroupsPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates notification group V1. */
	return await fc.caseManagement.entitiesNotificationGroupsPostV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesNotificationGroupsPostV2' operation.
 */
async function handleEntitiesNotificationGroupsPostV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates notification group V2. */
	return await fc.caseManagement.entitiesNotificationGroupsPostV2(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesSlasDeleteV1' operation.
 */
async function handleEntitiesSlasDeleteV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes SLAs by ID. */
	return await fc.caseManagement.entitiesSlasDeleteV1(parseSetParam(c, i));
}

/**
 * Handles the 'entitiesSlasGetV1' operation.
 */
async function handleEntitiesSlasGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves SLAs by ID. */
	return await fc.caseManagement.entitiesSlasGetV1(parseSetParam(c, i));
}

/**
 * Handles the 'entitiesSlasPatchV1' operation.
 */
async function handleEntitiesSlasPatchV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates SLA. */
	return await fc.caseManagement.entitiesSlasPatchV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesSlasPostV1' operation.
 */
async function handleEntitiesSlasPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates SLA. */
	return await fc.caseManagement.entitiesSlasPostV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesTemplateSnapshotsGetV1' operation.
 */
async function handleEntitiesTemplateSnapshotsGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves template snapshots. */
	const idsSet = parseSetParam(c, i);
	return await fc.caseManagement.entitiesTemplateSnapshotsGetV1(idsSet.size ? idsSet : undefined);
}

/**
 * Handles the 'entitiesTemplatesDeleteV1' operation.
 */
async function handleEntitiesTemplatesDeleteV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes templates by ID. */
	return await fc.caseManagement.entitiesTemplatesDeleteV1(parseSetParam(c, i));
}

/**
 * Handles the 'entitiesTemplatesExportGetV1' operation.
 */
async function handleEntitiesTemplatesExportGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Exports templates. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const idsSet = parseSetParam(c, i);
	return await fc.caseManagement.entitiesTemplatesExportGetV1(idsSet.size ? idsSet : undefined, filter || undefined);
}

/**
 * Handles the 'entitiesTemplatesGetV1' operation.
 */
async function handleEntitiesTemplatesGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves templates by ID. */
	return await fc.caseManagement.entitiesTemplatesGetV1(parseSetParam(c, i));
}

/**
 * Handles the 'entitiesTemplatesImportPostV1' operation.
 */
async function handleEntitiesTemplatesImportPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Imports template from file. */
	const body = parseJsonParam(c, i);
	return await fc.caseManagement.entitiesTemplatesImportPostV1(body as any);
}

/**
 * Handles the 'entitiesTemplatesPatchV1' operation.
 */
async function handleEntitiesTemplatesPatchV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates template. */
	return await fc.caseManagement.entitiesTemplatesPatchV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesTemplatesPostV1' operation.
 */
async function handleEntitiesTemplatesPostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates template. */
	return await fc.caseManagement.entitiesTemplatesPostV1(parseJsonParam(c, i));
}

/**
 * Handles the 'queriesAccessTagsGetV1' operation.
 */
async function handleQueriesAccessTagsGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries access tags. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.caseManagement.queriesAccessTagsGetV1(filter || undefined, sort || undefined, limit || undefined);
}

/**
 * Handles the 'queriesFieldsGetV1' operation.
 */
async function handleQueriesFieldsGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries fields. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.caseManagement.queriesFieldsGetV1(filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'queriesNotificationGroupsGetV1' operation.
 */
async function handleQueriesNotificationGroupsGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries notification groups V1. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.caseManagement.queriesNotificationGroupsGetV1(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'queriesNotificationGroupsGetV2' operation.
 */
async function handleQueriesNotificationGroupsGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries notification groups V2. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.caseManagement.queriesNotificationGroupsGetV2(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'queriesSlasGetV1' operation.
 */
async function handleQueriesSlasGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries SLAs. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.caseManagement.queriesSlasGetV1(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'queriesTemplateSnapshotsGetV1' operation.
 */
async function handleQueriesTemplateSnapshotsGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries template snapshots. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.caseManagement.queriesTemplateSnapshotsGetV1(filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'queriesTemplatesGetV1' operation.
 */
async function handleQueriesTemplatesGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries templates. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.caseManagement.queriesTemplatesGetV1(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Main execution handler for Case Management operations. */
export async function executeCaseManagement(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregatesAccessTagsPostV1': return await handleAggregatesAccessTagsPostV1(this, index, falconClient);
		case 'aggregatesNotificationGroupsPostV1': return await handleAggregatesNotificationGroupsPostV1(this, index, falconClient);
		case 'aggregatesNotificationGroupsPostV2': return await handleAggregatesNotificationGroupsPostV2(this, index, falconClient);
		case 'aggregatesSlasPostV1': return await handleAggregatesSlasPostV1(this, index, falconClient);
		case 'aggregatesTemplatesPostV1': return await handleAggregatesTemplatesPostV1(this, index, falconClient);
		case 'entitiesFieldsGetV1': return await handleEntitiesFieldsGetV1(this, index, falconClient);
		case 'entitiesNotificationGroupsDeleteV1': return await handleEntitiesNotificationGroupsDeleteV1(this, index, falconClient);
		case 'entitiesNotificationGroupsDeleteV2': return await handleEntitiesNotificationGroupsDeleteV2(this, index, falconClient);
		case 'entitiesNotificationGroupsGetV1': return await handleEntitiesNotificationGroupsGetV1(this, index, falconClient);
		case 'entitiesNotificationGroupsGetV2': return await handleEntitiesNotificationGroupsGetV2(this, index, falconClient);
		case 'entitiesNotificationGroupsPatchV1': return await handleEntitiesNotificationGroupsPatchV1(this, index, falconClient);
		case 'entitiesNotificationGroupsPatchV2': return await handleEntitiesNotificationGroupsPatchV2(this, index, falconClient);
		case 'entitiesNotificationGroupsPostV1': return await handleEntitiesNotificationGroupsPostV1(this, index, falconClient);
		case 'entitiesNotificationGroupsPostV2': return await handleEntitiesNotificationGroupsPostV2(this, index, falconClient);
		case 'entitiesSlasDeleteV1': return await handleEntitiesSlasDeleteV1(this, index, falconClient);
		case 'entitiesSlasGetV1': return await handleEntitiesSlasGetV1(this, index, falconClient);
		case 'entitiesSlasPatchV1': return await handleEntitiesSlasPatchV1(this, index, falconClient);
		case 'entitiesSlasPostV1': return await handleEntitiesSlasPostV1(this, index, falconClient);
		case 'entitiesTemplateSnapshotsGetV1': return await handleEntitiesTemplateSnapshotsGetV1(this, index, falconClient);
		case 'entitiesTemplatesDeleteV1': return await handleEntitiesTemplatesDeleteV1(this, index, falconClient);
		case 'entitiesTemplatesExportGetV1': return await handleEntitiesTemplatesExportGetV1(this, index, falconClient);
		case 'entitiesTemplatesGetV1': return await handleEntitiesTemplatesGetV1(this, index, falconClient);
		case 'entitiesTemplatesImportPostV1': return await handleEntitiesTemplatesImportPostV1(this, index, falconClient);
		case 'entitiesTemplatesPatchV1': return await handleEntitiesTemplatesPatchV1(this, index, falconClient);
		case 'entitiesTemplatesPostV1': return await handleEntitiesTemplatesPostV1(this, index, falconClient);
		case 'queriesAccessTagsGetV1': return await handleQueriesAccessTagsGetV1(this, index, falconClient);
		case 'queriesFieldsGetV1': return await handleQueriesFieldsGetV1(this, index, falconClient);
		case 'queriesNotificationGroupsGetV1': return await handleQueriesNotificationGroupsGetV1(this, index, falconClient);
		case 'queriesNotificationGroupsGetV2': return await handleQueriesNotificationGroupsGetV2(this, index, falconClient);
		case 'queriesSlasGetV1': return await handleQueriesSlasGetV1(this, index, falconClient);
		case 'queriesTemplateSnapshotsGetV1': return await handleQueriesTemplateSnapshotsGetV1(this, index, falconClient);
		case 'queriesTemplatesGetV1': return await handleQueriesTemplatesGetV1(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Case Management.`);
	}
}
