import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'entitiesClassificationDeleteV2' operation.
 */
async function handleEntitiesClassificationDeleteV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes classifications that match the provided ids. */
	return await fc.dataProtectionConfiguration.entitiesClassificationDeleteV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesClassificationGetV2' operation.
 */
async function handleEntitiesClassificationGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets the classifications that match the provided ids. */
	return await fc.dataProtectionConfiguration.entitiesClassificationGetV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesClassificationPatchV2' operation.
 */
async function handleEntitiesClassificationPatchV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update classifications. */
	return await fc.dataProtectionConfiguration.entitiesClassificationPatchV2(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesClassificationPostV2' operation.
 */
async function handleEntitiesClassificationPostV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create classifications. */
	return await fc.dataProtectionConfiguration.entitiesClassificationPostV2(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesCloudApplicationCreate' operation.
 */
async function handleEntitiesCloudApplicationCreate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Persist the given cloud application for the provided entity instance. */
	return await fc.dataProtectionConfiguration.entitiesCloudApplicationCreate(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesCloudApplicationDelete' operation.
 */
async function handleEntitiesCloudApplicationDelete(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete cloud application. */
	return await fc.dataProtectionConfiguration.entitiesCloudApplicationDelete(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesCloudApplicationGet' operation.
 */
async function handleEntitiesCloudApplicationGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a particular cloud-application. */
	return await fc.dataProtectionConfiguration.entitiesCloudApplicationGet(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesCloudApplicationPatch' operation.
 */
async function handleEntitiesCloudApplicationPatch(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update a cloud application. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.dataProtectionConfiguration.entitiesCloudApplicationPatch(id, parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesContentPatternCreate' operation.
 */
async function handleEntitiesContentPatternCreate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Persist the given content pattern for the provided entity instance. */
	return await fc.dataProtectionConfiguration.entitiesContentPatternCreate(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesContentPatternDelete' operation.
 */
async function handleEntitiesContentPatternDelete(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete content pattern. */
	return await fc.dataProtectionConfiguration.entitiesContentPatternDelete(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesContentPatternGet' operation.
 */
async function handleEntitiesContentPatternGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a particular content-pattern(s). */
	return await fc.dataProtectionConfiguration.entitiesContentPatternGet(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesContentPatternPatch' operation.
 */
async function handleEntitiesContentPatternPatch(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update a content pattern. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.dataProtectionConfiguration.entitiesContentPatternPatch(id, parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesEnterpriseAccountCreate' operation.
 */
async function handleEntitiesEnterpriseAccountCreate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Persist the given enterprise account for the provided entity instance. */
	return await fc.dataProtectionConfiguration.entitiesEnterpriseAccountCreate(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesEnterpriseAccountDelete' operation.
 */
async function handleEntitiesEnterpriseAccountDelete(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete enterprise account. */
	return await fc.dataProtectionConfiguration.entitiesEnterpriseAccountDelete(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesEnterpriseAccountGet' operation.
 */
async function handleEntitiesEnterpriseAccountGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a particular enterprise-account(s). */
	return await fc.dataProtectionConfiguration.entitiesEnterpriseAccountGet(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesEnterpriseAccountPatch' operation.
 */
async function handleEntitiesEnterpriseAccountPatch(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update a enterprise account. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.dataProtectionConfiguration.entitiesEnterpriseAccountPatch(id, parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesFileTypeGet' operation.
 */
async function handleEntitiesFileTypeGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a particular file-type. */
	return await fc.dataProtectionConfiguration.entitiesFileTypeGet(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesLocalApplicationCreate' operation.
 */
async function handleEntitiesLocalApplicationCreate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Persist the given local application for the provided entity instance. */
	return await fc.dataProtectionConfiguration.entitiesLocalApplicationCreate(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesLocalApplicationDelete' operation.
 */
async function handleEntitiesLocalApplicationDelete(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Soft Delete local application. */
	return await fc.dataProtectionConfiguration.entitiesLocalApplicationDelete(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesLocalApplicationGet' operation.
 */
async function handleEntitiesLocalApplicationGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a particular local application. */
	return await fc.dataProtectionConfiguration.entitiesLocalApplicationGet(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesLocalApplicationGroupCreate' operation.
 */
async function handleEntitiesLocalApplicationGroupCreate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Persist the given local application group for the provided entity instance. */
	return await fc.dataProtectionConfiguration.entitiesLocalApplicationGroupCreate(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesLocalApplicationGroupDelete' operation.
 */
async function handleEntitiesLocalApplicationGroupDelete(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Soft Delete local application group. */
	return await fc.dataProtectionConfiguration.entitiesLocalApplicationGroupDelete(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesLocalApplicationGroupGet' operation.
 */
async function handleEntitiesLocalApplicationGroupGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get specific local application groups. */
	return await fc.dataProtectionConfiguration.entitiesLocalApplicationGroupGet(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesLocalApplicationGroupPatch' operation.
 */
async function handleEntitiesLocalApplicationGroupPatch(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update a local application group. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.dataProtectionConfiguration.entitiesLocalApplicationGroupPatch(id, parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesLocalApplicationPatch' operation.
 */
async function handleEntitiesLocalApplicationPatch(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update a local application. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.dataProtectionConfiguration.entitiesLocalApplicationPatch(id, parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesPolicyDeleteV2' operation.
 */
async function handleEntitiesPolicyDeleteV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes policies that match the provided ids. */
	const platformName = getStringParam(c, i, 'platformName', 'Windows');
	return await fc.dataProtectionConfiguration.entitiesPolicyDeleteV2(parseArrayParam(c, i, 'ids'), platformName);
}

/**
 * Handles the 'entitiesPolicyGetV2' operation.
 */
async function handleEntitiesPolicyGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets policies that match the provided ids. */
	return await fc.dataProtectionConfiguration.entitiesPolicyGetV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesPolicyPatchV2' operation.
 */
async function handleEntitiesPolicyPatchV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update policies. */
	const platformName = getStringParam(c, i, 'platformName', 'Windows');
	return await fc.dataProtectionConfiguration.entitiesPolicyPatchV2(platformName, parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesPolicyPostV2' operation.
 */
async function handleEntitiesPolicyPostV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create policies. */
	const platformName = getStringParam(c, i, 'platformName', 'Windows');
	return await fc.dataProtectionConfiguration.entitiesPolicyPostV2(platformName, parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesPolicyPrecedencePostV1' operation.
 */
async function handleEntitiesPolicyPrecedencePostV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Policy Precedence. */
	return await fc.dataProtectionConfiguration.entitiesPolicyPrecedencePostV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesSensitivityLabelCreateV2' operation.
 */
async function handleEntitiesSensitivityLabelCreateV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create new sensitivity label (V2). */
	return await fc.dataProtectionConfiguration.entitiesSensitivityLabelCreateV2(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesSensitivityLabelDeleteV2' operation.
 */
async function handleEntitiesSensitivityLabelDeleteV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete sensitivity labels matching the IDs (V2). */
	return await fc.dataProtectionConfiguration.entitiesSensitivityLabelDeleteV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesSensitivityLabelGetV2' operation.
 */
async function handleEntitiesSensitivityLabelGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get sensitivity label matching the IDs (V2). */
	return await fc.dataProtectionConfiguration.entitiesSensitivityLabelGetV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesWebLocationCreateV2' operation.
 */
async function handleEntitiesWebLocationCreateV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Persist the given web-locations. */
	return await fc.dataProtectionConfiguration.entitiesWebLocationCreateV2(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesWebLocationDeleteV2' operation.
 */
async function handleEntitiesWebLocationDeleteV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete web-location. */
	return await fc.dataProtectionConfiguration.entitiesWebLocationDeleteV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesWebLocationGetV2' operation.
 */
async function handleEntitiesWebLocationGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get web-location entities matching the provided ID(s). */
	return await fc.dataProtectionConfiguration.entitiesWebLocationGetV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'entitiesWebLocationPatchV2' operation.
 */
async function handleEntitiesWebLocationPatchV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update a web-location. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.dataProtectionConfiguration.entitiesWebLocationPatchV2(id, parseJsonParam(c, i));
}

/**
 * Handles the 'queriesClassificationGetV2' operation.
 */
async function handleQueriesClassificationGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for classifications that match the provided criteria. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.dataProtectionConfiguration.queriesClassificationGetV2(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queriesCloudApplicationGetV2' operation.
 */
async function handleQueriesCloudApplicationGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get all cloud-application IDs matching the query with filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.dataProtectionConfiguration.queriesCloudApplicationGetV2(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'queriesContentPatternGetV2' operation.
 */
async function handleQueriesContentPatternGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get all content-pattern IDs matching the query with filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.dataProtectionConfiguration.queriesContentPatternGetV2(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'queriesEnterpriseAccountGetV2' operation.
 */
async function handleQueriesEnterpriseAccountGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get all enterprise-account IDs matching the query with filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.dataProtectionConfiguration.queriesEnterpriseAccountGetV2(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'queriesFileTypeGetV2' operation.
 */
async function handleQueriesFileTypeGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get all file-type IDs matching the query with filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.dataProtectionConfiguration.queriesFileTypeGetV2(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'queriesLocalApplicationGet' operation.
 */
async function handleQueriesLocalApplicationGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get all local-application IDs matching the query with filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.dataProtectionConfiguration.queriesLocalApplicationGet(xCSUSERUUID, filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'queriesLocalApplicationGroupGet' operation.
 */
async function handleQueriesLocalApplicationGroupGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get all local application group IDs matching the query with filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.dataProtectionConfiguration.queriesLocalApplicationGroupGet(xCSUSERUUID, filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'queriesPolicyGetV2' operation.
 */
async function handleQueriesPolicyGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for policies that match the provided criteria. */
	const platformName = getStringParam(c, i, 'platformName', 'Windows');
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.dataProtectionConfiguration.queriesPolicyGetV2(platformName, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'queriesSensitivityLabelGetV2' operation.
 */
async function handleQueriesSensitivityLabelGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get all sensitivity label IDs matching the query with filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.dataProtectionConfiguration.queriesSensitivityLabelGetV2(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'queriesWebLocationGetV2' operation.
 */
async function handleQueriesWebLocationGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get web-location IDs matching the query with filter. */
	const filter = getStringParam(c, i, 'filter', '');
	const type = getStringParam(c, i, 'type', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.dataProtectionConfiguration.queriesWebLocationGetV2(filter || undefined, type || undefined, limit || undefined, offset || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Data Protection Configuration operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
const HANDLER_MAP: Record<string, (c: IExecuteFunctions, i: number, fc: FalconClient) => Promise<any>> = {
	'entitiesClassificationDeleteV2': handleEntitiesClassificationDeleteV2,
	'entitiesClassificationGetV2': handleEntitiesClassificationGetV2,
	'entitiesClassificationPatchV2': handleEntitiesClassificationPatchV2,
	'entitiesClassificationPostV2': handleEntitiesClassificationPostV2,
	'entitiesCloudApplicationCreate': handleEntitiesCloudApplicationCreate,
	'entitiesCloudApplicationDelete': handleEntitiesCloudApplicationDelete,
	'entitiesCloudApplicationGet': handleEntitiesCloudApplicationGet,
	'entitiesCloudApplicationPatch': handleEntitiesCloudApplicationPatch,
	'entitiesContentPatternCreate': handleEntitiesContentPatternCreate,
	'entitiesContentPatternDelete': handleEntitiesContentPatternDelete,
	'entitiesContentPatternGet': handleEntitiesContentPatternGet,
	'entitiesContentPatternPatch': handleEntitiesContentPatternPatch,
	'entitiesEnterpriseAccountCreate': handleEntitiesEnterpriseAccountCreate,
	'entitiesEnterpriseAccountDelete': handleEntitiesEnterpriseAccountDelete,
	'entitiesEnterpriseAccountGet': handleEntitiesEnterpriseAccountGet,
	'entitiesEnterpriseAccountPatch': handleEntitiesEnterpriseAccountPatch,
	'entitiesFileTypeGet': handleEntitiesFileTypeGet,
	'entitiesLocalApplicationCreate': handleEntitiesLocalApplicationCreate,
	'entitiesLocalApplicationDelete': handleEntitiesLocalApplicationDelete,
	'entitiesLocalApplicationGet': handleEntitiesLocalApplicationGet,
	'entitiesLocalApplicationGroupCreate': handleEntitiesLocalApplicationGroupCreate,
	'entitiesLocalApplicationGroupDelete': handleEntitiesLocalApplicationGroupDelete,
	'entitiesLocalApplicationGroupGet': handleEntitiesLocalApplicationGroupGet,
	'entitiesLocalApplicationGroupPatch': handleEntitiesLocalApplicationGroupPatch,
	'entitiesLocalApplicationPatch': handleEntitiesLocalApplicationPatch,
	'entitiesPolicyDeleteV2': handleEntitiesPolicyDeleteV2,
	'entitiesPolicyGetV2': handleEntitiesPolicyGetV2,
	'entitiesPolicyPatchV2': handleEntitiesPolicyPatchV2,
	'entitiesPolicyPostV2': handleEntitiesPolicyPostV2,
	'entitiesPolicyPrecedencePostV1': handleEntitiesPolicyPrecedencePostV1,
	'entitiesSensitivityLabelCreateV2': handleEntitiesSensitivityLabelCreateV2,
	'entitiesSensitivityLabelDeleteV2': handleEntitiesSensitivityLabelDeleteV2,
	'entitiesSensitivityLabelGetV2': handleEntitiesSensitivityLabelGetV2,
	'entitiesWebLocationCreateV2': handleEntitiesWebLocationCreateV2,
	'entitiesWebLocationDeleteV2': handleEntitiesWebLocationDeleteV2,
	'entitiesWebLocationGetV2': handleEntitiesWebLocationGetV2,
	'entitiesWebLocationPatchV2': handleEntitiesWebLocationPatchV2,
	'queriesClassificationGetV2': handleQueriesClassificationGetV2,
	'queriesCloudApplicationGetV2': handleQueriesCloudApplicationGetV2,
	'queriesContentPatternGetV2': handleQueriesContentPatternGetV2,
	'queriesEnterpriseAccountGetV2': handleQueriesEnterpriseAccountGetV2,
	'queriesFileTypeGetV2': handleQueriesFileTypeGetV2,
	'queriesLocalApplicationGet': handleQueriesLocalApplicationGet,
	'queriesLocalApplicationGroupGet': handleQueriesLocalApplicationGroupGet,
	'queriesPolicyGetV2': handleQueriesPolicyGetV2,
	'queriesSensitivityLabelGetV2': handleQueriesSensitivityLabelGetV2,
	'queriesWebLocationGetV2': handleQueriesWebLocationGetV2,
};

export async function executeDataProtectionConfiguration(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	const handler = HANDLER_MAP[operation];
	if (handler) {
		return await handler(this, index, falconClient);
	}
	throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for DataProtectionConfiguration.`); as any)), `Operation ${operation} is not supported for Data Protection Configuration.`);
	}
}
