import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
	const str = (context.getNodeParameter(paramName, index, '') as string) || '';
	return str.split(',').map((id) => id.trim()).filter(Boolean);
}

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/**
 * Handles the 'combinedEdgesGet' operation.
 */
async function handleCombinedEdgesGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve edges for a given vertex id. One edge type must be specified. */
	const id = getStringParam(c, i, 'id', '');
	const edgeType = getStringParam(c, i, 'edgeType', 'parent_process') as any;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = getStringParam(c, i, 'offset', '');
	const direction = getStringParam(c, i, 'direction', '');
	const scope = getStringParam(c, i, 'scope', '') as any;
	const nano = c.getNodeParameter('nano', i, false) as boolean;
	return await fc.threatgraph.combinedEdgesGet(id, edgeType, limit || undefined, offset || undefined, direction || undefined, scope || undefined, nano || undefined);
}

/**
 * Handles the 'combinedRanOnGet' operation.
 */
async function handleCombinedRanOnGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Look up instances of indicators such as hashes, domain names, and ip addresses. */
	const value = getStringParam(c, i, 'value', '');
	const type = getStringParam(c, i, 'type', 'sha256') as any;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = getStringParam(c, i, 'offset', '');
	const nano = c.getNodeParameter('nano', i, false) as boolean;
	return await fc.threatgraph.combinedRanOnGet(value, type, limit || undefined, offset || undefined, nano || undefined);
}

/**
 * Handles the 'combinedSummaryGet' operation.
 */
async function handleCombinedSummaryGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve summary for a given vertex ID. */
	const vertexType = getStringParam(c, i, 'vertexType', 'process') as any;
	const ids = parseArrayParam(c, i, 'ids');
	const scope = getStringParam(c, i, 'scope', '') as any;
	const nano = c.getNodeParameter('nano', i, false) as boolean;
	return await fc.threatgraph.combinedSummaryGet(vertexType, ids, scope || undefined, nano || undefined);
}

/**
 * Handles the 'entitiesVerticesGet' operation.
 */
async function handleEntitiesVerticesGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve metadata for a given vertex ID (Legacy). */
	const vertexType = getStringParam(c, i, 'vertexType', 'process') as any;
	const ids = parseArrayParam(c, i, 'ids');
	const scope = getStringParam(c, i, 'scope', '') as any;
	const nano = c.getNodeParameter('nano', i, false) as boolean;
	return await fc.threatgraph.entitiesVerticesGet(vertexType, ids, scope || undefined, nano || undefined);
}

/**
 * Handles the 'entitiesVerticesGetv2' operation.
 */
async function handleEntitiesVerticesGetv2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve metadata for a given vertex ID V2. */
	const vertexType = getStringParam(c, i, 'vertexType', 'process') as any;
	const ids = parseArrayParam(c, i, 'ids');
	const scope = getStringParam(c, i, 'scope', '') as any;
	const nano = c.getNodeParameter('nano', i, false) as boolean;
	return await fc.threatgraph.entitiesVerticesGetv2(vertexType, ids, scope || undefined, nano || undefined);
}

/**
 * Handles the 'queriesEdgetypesGet' operation.
 */
async function handleQueriesEdgetypesGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Show all available edge types. */
	return await fc.threatgraph.queriesEdgetypesGet();
}

/**
 * Main execution handler for CrowdStrike Falcon Threatgraph operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeThreatgraph(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'combinedEdgesGet': return await handleCombinedEdgesGet(this, index, falconClient);
		case 'combinedRanOnGet': return await handleCombinedRanOnGet(this, index, falconClient);
		case 'combinedSummaryGet': return await handleCombinedSummaryGet(this, index, falconClient);
		case 'entitiesVerticesGet': return await handleEntitiesVerticesGet(this, index, falconClient);
		case 'entitiesVerticesGetv2': return await handleEntitiesVerticesGetv2(this, index, falconClient);
		case 'queriesEdgetypesGet': return await handleQueriesEdgetypesGet(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Threatgraph.`);
	}
}
