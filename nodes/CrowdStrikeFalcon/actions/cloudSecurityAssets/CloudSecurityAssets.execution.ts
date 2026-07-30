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

/**
 * Handles the 'cloudSecurityAssetsCombinedApplicationFindings' operation.
 */
async function handleCloudSecurityAssetsCombinedApplicationFindings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves findings for an application resource. */
	const type = c.getNodeParameter('type', i) as string;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	return await fc.cloudSecurityAssets.cloudSecurityAssetsCombinedApplicationFindings(type, undefined, undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'cloudSecurityAssetsCombinedComplianceByAccount' operation.
 */
async function handleCloudSecurityAssetsCombinedComplianceByAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves combined compliance data by account. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cloudSecurityAssets.cloudSecurityAssetsCombinedComplianceByAccount(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'cloudSecurityAssetsEntitiesGet' operation.
 */
async function handleCloudSecurityAssetsEntitiesGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets raw resources based on IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudSecurityAssets.cloudSecurityAssetsEntitiesGet(ids.length ? ids : undefined);
}

/**
 * Handles the 'cloudSecurityAssetsEntitiesPost' operation.
 */
async function handleCloudSecurityAssetsEntitiesPost(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets raw resources via POST body. */
	return await fc.cloudSecurityAssets.cloudSecurityAssetsEntitiesPost(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudSecurityAssetsQueries' operation.
 */
async function handleCloudSecurityAssetsQueries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets a list of resource IDs matching parameters. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cloudSecurityAssets.cloudSecurityAssetsQueries(undefined, filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Main execution handler for Cloud Security Assets operations. */
export async function executeCloudSecurityAssets(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'cloudSecurityAssetsCombinedApplicationFindings': return await handleCloudSecurityAssetsCombinedApplicationFindings(this, index, falconClient);
		case 'cloudSecurityAssetsCombinedComplianceByAccount': return await handleCloudSecurityAssetsCombinedComplianceByAccount(this, index, falconClient);
		case 'cloudSecurityAssetsEntitiesGet': return await handleCloudSecurityAssetsEntitiesGet(this, index, falconClient);
		case 'cloudSecurityAssetsEntitiesPost': return await handleCloudSecurityAssetsEntitiesPost(this, index, falconClient);
		case 'cloudSecurityAssetsQueries': return await handleCloudSecurityAssetsQueries(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Cloud Security Assets.`);
	}
}
