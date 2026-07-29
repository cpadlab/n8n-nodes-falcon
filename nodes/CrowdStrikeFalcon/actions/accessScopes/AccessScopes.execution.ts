import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Handles the 'queryAccessScopesExternal' operation to query access scope IDs.
 */
async function handleQueryAccessScopesExternal(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Queries access scopes based on filter, sort, limit, and offset parameters.
	 */
	const filter = context.getNodeParameter('filter', index, '') as string;
	const sort = context.getNodeParameter('sort', index, '') as string;
	const offset = context.getNodeParameter('offset', index, 0) as number;
	const limit = context.getNodeParameter('limit', index, 100) as number;

	return await falconClient.accessScopes.queryAccessScopesExternal(
		filter || undefined,
		sort || undefined,
		offset || undefined,
		limit || undefined,
	);
}

/**
 * Handles the 'listAccessScopesExternal' operation to retrieve access scope details by IDs.
 */
async function handleListAccessScopesExternal(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Retrieves access scope details for a given list of access scope IDs.
	 */
	const idsString = context.getNodeParameter('ids', index, '') as string;
	const ids = idsString ? idsString.split(',').map((id) => id.trim()).filter(Boolean) : undefined;

	return await falconClient.accessScopes.listAccessScopesExternal(ids);
}

/**
 * Main execution handler for CrowdStrike Falcon Access Scopes operations.
 * Delegates execution to internal functions to maintain low cognitive complexity.
 */
export async function executeAccessScopes(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'queryAccessScopesExternal':
			return await handleQueryAccessScopesExternal(this, index, falconClient);

		case 'listAccessScopesExternal':
			return await handleListAccessScopesExternal(this, index, falconClient);

		default:
			throw new Error(`Operation ${operation} is not supported for Access Scopes.`);
	}
}
