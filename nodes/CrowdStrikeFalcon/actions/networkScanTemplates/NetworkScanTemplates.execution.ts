import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function parseJsonParam(context: IExecuteFunctions, index: number, paramName = 'bodyJson'): any {
	const rawJson = context.getNodeParameter(paramName, index, '') as string;
	if (!rawJson) return [];
	try {
		const parsed = typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
		return Array.isArray(parsed) ? parsed : [parsed];
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

/** Handles createTemplates */
async function handleCreateTemplates(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create templates using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanTemplates.createTemplates(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/** Handles deleteTemplates */
async function handleDeleteTemplates(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete templates by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanTemplates.deleteTemplates(ids, xCSUSERUUID || undefined);
}

/** Handles getTemplateConfigs */
async function handleGetTemplateConfigs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get details on network scan template configurations. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanTemplates.getTemplateConfigs(xCSUSERUUID || undefined);
}

/** Handles getTemplates */
async function handleGetTemplates(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get templates by their IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanTemplates.getTemplates(ids, xCSUSERUUID || undefined);
}

/** Handles queryTemplates */
async function handleQueryTemplates(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get templates IDs by filter. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.networkScanTemplates.queryTemplates(xCSUSERUUID || undefined, offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/** Handles updateTemplates */
async function handleUpdateTemplates(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update templates using provided specifications. */
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanTemplates.updateTemplates(parseJsonParam(c, i), xCSUSERUUID || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Network Scan Templates operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeNetworkScanTemplates(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createTemplates': return await handleCreateTemplates(this, index, falconClient);
		case 'deleteTemplates': return await handleDeleteTemplates(this, index, falconClient);
		case 'getTemplateConfigs': return await handleGetTemplateConfigs(this, index, falconClient);
		case 'getTemplates': return await handleGetTemplates(this, index, falconClient);
		case 'queryTemplates': return await handleQueryTemplates(this, index, falconClient);
		case 'updateTemplates': return await handleUpdateTemplates(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Network Scan Templates.`);
	}
}
