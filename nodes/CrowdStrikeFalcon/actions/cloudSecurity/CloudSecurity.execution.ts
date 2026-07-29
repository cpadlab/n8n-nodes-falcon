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

/** Handles combinedCloudRisks */
async function handleCombinedCloudRisks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves combined cloud risks. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cloudSecurity.combinedCloudRisks(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles createCloudGroupExternal */
async function handleCreateCloudGroupExternal(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a Cloud Group. */
	return await fc.cloudSecurity.createCloudGroupExternal(parseJsonParam(c, i));
}

/** Handles deleteCloudGroupsExternal */
async function handleDeleteCloudGroupsExternal(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes Cloud Groups by IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudSecurity.deleteCloudGroupsExternal(ids.length ? ids : undefined);
}

/** Handles listCloudGroupIDsExternal */
async function handleListCloudGroupIDsExternal(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Lists Cloud Group IDs. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const offset = String(c.getNodeParameter('offset', i, 0));
	const limit = String(c.getNodeParameter('limit', i, 100));
	return await fc.cloudSecurity.listCloudGroupIDsExternal(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/** Handles listCloudGroupsByIDExternal */
async function handleListCloudGroupsByIDExternal(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Lists Cloud Groups by IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudSecurity.listCloudGroupsByIDExternal(ids.length ? ids : undefined);
}

/** Handles listCloudGroupsExternal */
async function handleListCloudGroupsExternal(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Lists Cloud Groups entities. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const offset = String(c.getNodeParameter('offset', i, 0));
	const limit = String(c.getNodeParameter('limit', i, 100));
	return await fc.cloudSecurity.listCloudGroupsExternal(filter || undefined, sort || undefined, offset || undefined, limit || undefined);
}

/** Handles updateCloudGroupExternal */
async function handleUpdateCloudGroupExternal(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates a Cloud Group. */
	return await fc.cloudSecurity.updateCloudGroupExternal(parseJsonParam(c, i));
}

/** Main execution handler for Cloud Security operations. */
export async function executeCloudSecurity(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'combinedCloudRisks': return await handleCombinedCloudRisks(this, index, falconClient);
		case 'createCloudGroupExternal': return await handleCreateCloudGroupExternal(this, index, falconClient);
		case 'deleteCloudGroupsExternal': return await handleDeleteCloudGroupsExternal(this, index, falconClient);
		case 'listCloudGroupIDsExternal': return await handleListCloudGroupIDsExternal(this, index, falconClient);
		case 'listCloudGroupsByIDExternal': return await handleListCloudGroupsByIDExternal(this, index, falconClient);
		case 'listCloudGroupsExternal': return await handleListCloudGroupsExternal(this, index, falconClient);
		case 'updateCloudGroupExternal': return await handleUpdateCloudGroupExternal(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Cloud Security.`);
	}
}
