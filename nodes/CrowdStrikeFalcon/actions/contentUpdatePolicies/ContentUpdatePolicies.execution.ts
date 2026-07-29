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

/** Handles createContentUpdatePolicies */
async function handleCreateContentUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates Content Update Policies. */
	return await fc.contentUpdatePolicies.createContentUpdatePolicies(parseJsonParam(c, i));
}

/** Handles deleteContentUpdatePolicies */
async function handleDeleteContentUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes Content Update Policies by IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.contentUpdatePolicies.deleteContentUpdatePolicies(ids);
}

/** Handles getContentUpdatePolicies */
async function handleGetContentUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves Content Update Policies by IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.contentUpdatePolicies.getContentUpdatePolicies(ids);
}

/** Handles performContentUpdatePoliciesAction */
async function handlePerformContentUpdatePoliciesAction(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Performs action on Content Update Policies. */
	const actionName = c.getNodeParameter('actionName', i) as any;
	return await fc.contentUpdatePolicies.performContentUpdatePoliciesAction(actionName, parseJsonParam(c, i));
}

/** Handles queryCombinedContentUpdatePolicies */
async function handleQueryCombinedContentUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries combined Content Update Policies. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = c.getNodeParameter('sort', i, '') as any;
	return await fc.contentUpdatePolicies.queryCombinedContentUpdatePolicies(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles queryCombinedContentUpdatePolicyMembers */
async function handleQueryCombinedContentUpdatePolicyMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries combined Content Update Policy members. */
	const id = c.getNodeParameter('id', i, '') as string;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	return await fc.contentUpdatePolicies.queryCombinedContentUpdatePolicyMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles queryContentUpdatePolicies */
async function handleQueryContentUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries Content Update Policy IDs. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = c.getNodeParameter('sort', i, '') as any;
	return await fc.contentUpdatePolicies.queryContentUpdatePolicies(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles queryContentUpdatePolicyMembers */
async function handleQueryContentUpdatePolicyMembers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries Content Update Policy member IDs. */
	const id = c.getNodeParameter('id', i, '') as string;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	return await fc.contentUpdatePolicies.queryContentUpdatePolicyMembers(id || undefined, filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles queryPinnableContentVersions */
async function handleQueryPinnableContentVersions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries pinnable content versions. */
	const category = c.getNodeParameter('category', i) as any;
	const sort = c.getNodeParameter('sort', i, '') as any;
	return await fc.contentUpdatePolicies.queryPinnableContentVersions(category, sort || undefined);
}

/** Handles setContentUpdatePoliciesPrecedence */
async function handleSetContentUpdatePoliciesPrecedence(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Sets Content Update Policies precedence. */
	return await fc.contentUpdatePolicies.setContentUpdatePoliciesPrecedence(parseJsonParam(c, i));
}

/** Handles updateContentUpdatePolicies */
async function handleUpdateContentUpdatePolicies(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates Content Update Policies. */
	return await fc.contentUpdatePolicies.updateContentUpdatePolicies(parseJsonParam(c, i));
}

/** Main execution handler for Content Update Policies operations. */
export async function executeContentUpdatePolicies(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createContentUpdatePolicies': return await handleCreateContentUpdatePolicies(this, index, falconClient);
		case 'deleteContentUpdatePolicies': return await handleDeleteContentUpdatePolicies(this, index, falconClient);
		case 'getContentUpdatePolicies': return await handleGetContentUpdatePolicies(this, index, falconClient);
		case 'performContentUpdatePoliciesAction': return await handlePerformContentUpdatePoliciesAction(this, index, falconClient);
		case 'queryCombinedContentUpdatePolicies': return await handleQueryCombinedContentUpdatePolicies(this, index, falconClient);
		case 'queryCombinedContentUpdatePolicyMembers': return await handleQueryCombinedContentUpdatePolicyMembers(this, index, falconClient);
		case 'queryContentUpdatePolicies': return await handleQueryContentUpdatePolicies(this, index, falconClient);
		case 'queryContentUpdatePolicyMembers': return await handleQueryContentUpdatePolicyMembers(this, index, falconClient);
		case 'queryPinnableContentVersions': return await handleQueryPinnableContentVersions(this, index, falconClient);
		case 'setContentUpdatePoliciesPrecedence': return await handleSetContentUpdatePoliciesPrecedence(this, index, falconClient);
		case 'updateContentUpdatePolicies': return await handleUpdateContentUpdatePolicies(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Content Update Policies.`);
	}
}
