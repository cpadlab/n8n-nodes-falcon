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

function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
	const str = (context.getNodeParameter(paramName, index, '') as string) || '';
	return str.split(',').map((id) => id.trim()).filter(Boolean);
}

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/**
 * Handles the 'createIOAExclusionsV1' operation.
 */
async function handleCreateIOAExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create the IOA exclusions V1. */
	return await fc.ioaExclusions.createIOAExclusionsV1(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteIOAExclusionsV1' operation.
 */
async function handleDeleteIOAExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete the IOA exclusions by ID V1. */
	const ids = parseArrayParam(c, i, 'ids');
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.ioaExclusions.deleteIOAExclusionsV1(ids, comment || undefined);
}

/**
 * Handles the 'getIOAExclusionsV1' operation.
 */
async function handleGetIOAExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a set of IOA Exclusions by specifying their IDs V1. */
	return await fc.ioaExclusions.getIOAExclusionsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'queryIOAExclusionsV1' operation.
 */
async function handleQueryIOAExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for IOA exclusions V1. */
	const filter = getStringParam(c, i, 'filter', '');
	const ifnRegex = getStringParam(c, i, 'ifnRegex', '');
	const clRegex = getStringParam(c, i, 'clRegex', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.ioaExclusions.queryIOAExclusionsV1(
		filter || undefined,
		ifnRegex || undefined,
		clRegex || undefined,
		offset || undefined,
		limit || undefined,
		sort || undefined,
	);
}

/**
 * Handles the 'ssIoaExclusionsAggregatesV2' operation.
 */
async function handleSsIoaExclusionsAggregatesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Self Service IOA Exclusion aggregates as specified via JSON. */
	const body = parseJsonParam(c, i);
	const ifnRegex = getStringParam(c, i, 'ifnRegex', '');
	const clRegex = getStringParam(c, i, 'clRegex', '');
	const parentIfnRegex = getStringParam(c, i, 'parentIfnRegex', '');
	const parentClRegex = getStringParam(c, i, 'parentClRegex', '');
	const grandparentIfnRegex = getStringParam(c, i, 'grandparentIfnRegex', '');
	const grandparentClRegex = getStringParam(c, i, 'grandparentClRegex', '');
	return await fc.ioaExclusions.ssIoaExclusionsAggregatesV2(
		body,
		ifnRegex || undefined,
		clRegex || undefined,
		parentIfnRegex || undefined,
		parentClRegex || undefined,
		grandparentIfnRegex || undefined,
		grandparentClRegex || undefined,
	);
}

/**
 * Handles the 'ssIoaExclusionsCreateV2' operation.
 */
async function handleSsIoaExclusionsCreateV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create new Self Service IOA Exclusions V2. */
	return await fc.ioaExclusions.ssIoaExclusionsCreateV2(parseJsonParam(c, i));
}

/**
 * Handles the 'ssIoaExclusionsDeleteV2' operation.
 */
async function handleSsIoaExclusionsDeleteV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete Self Service IOA Exclusions rule by ID V2. */
	const ids = parseArrayParam(c, i, 'ids');
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.ioaExclusions.ssIoaExclusionsDeleteV2(ids, comment || undefined);
}

/**
 * Handles the 'ssIoaExclusionsGetReportsV2' operation.
 */
async function handleSsIoaExclusionsGetReportsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create a report of Self Service IOA Exclusions. */
	return await fc.ioaExclusions.ssIoaExclusionsGetReportsV2(parseJsonParam(c, i));
}

/**
 * Handles the 'ssIoaExclusionsGetV2' operation.
 */
async function handleSsIoaExclusionsGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Self Service IOA Exclusions rules by ID V2. */
	return await fc.ioaExclusions.ssIoaExclusionsGetV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'ssIoaExclusionsMatchedRuleV2' operation.
 */
async function handleSsIoaExclusionsMatchedRuleV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Self Service IOA Exclusions rules for matched IFN/CLI. */
	return await fc.ioaExclusions.ssIoaExclusionsMatchedRuleV2(parseJsonParam(c, i));
}

/**
 * Handles the 'ssIoaExclusionsNewRulesV2' operation.
 */
async function handleSsIoaExclusionsNewRulesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get defaults for Self Service IOA Exclusions based on IFN/CLI. */
	return await fc.ioaExclusions.ssIoaExclusionsNewRulesV2(parseJsonParam(c, i));
}

/**
 * Handles the 'ssIoaExclusionsSearchV2' operation.
 */
async function handleSsIoaExclusionsSearchV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Self Service IOA Exclusions V2. */
	const filter = getStringParam(c, i, 'filter', '');
	const ifnRegex = getStringParam(c, i, 'ifnRegex', '');
	const clRegex = getStringParam(c, i, 'clRegex', '');
	const parentIfnRegex = getStringParam(c, i, 'parentIfnRegex', '');
	const parentClRegex = getStringParam(c, i, 'parentClRegex', '');
	const grandparentIfnRegex = getStringParam(c, i, 'grandparentIfnRegex', '');
	const grandparentClRegex = getStringParam(c, i, 'grandparentClRegex', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.ioaExclusions.ssIoaExclusionsSearchV2(
		filter || undefined,
		ifnRegex || undefined,
		clRegex || undefined,
		parentIfnRegex || undefined,
		parentClRegex || undefined,
		grandparentIfnRegex || undefined,
		grandparentClRegex || undefined,
		offset || undefined,
		limit || undefined,
		sort || undefined,
	);
}

/**
 * Handles the 'ssIoaExclusionsUpdateV2' operation.
 */
async function handleSsIoaExclusionsUpdateV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Self Service IOA Exclusions rule by ID V2. */
	return await fc.ioaExclusions.ssIoaExclusionsUpdateV2(parseJsonParam(c, i));
}

/**
 * Handles the 'updateIOAExclusionsV1' operation.
 */
async function handleUpdateIOAExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update the IOA exclusions V1. */
	return await fc.ioaExclusions.updateIOAExclusionsV1(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon IOA Exclusions operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeIoaExclusions(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createIOAExclusionsV1': return await handleCreateIOAExclusionsV1(this, index, falconClient);
		case 'deleteIOAExclusionsV1': return await handleDeleteIOAExclusionsV1(this, index, falconClient);
		case 'getIOAExclusionsV1': return await handleGetIOAExclusionsV1(this, index, falconClient);
		case 'queryIOAExclusionsV1': return await handleQueryIOAExclusionsV1(this, index, falconClient);
		case 'ssIoaExclusionsAggregatesV2': return await handleSsIoaExclusionsAggregatesV2(this, index, falconClient);
		case 'ssIoaExclusionsCreateV2': return await handleSsIoaExclusionsCreateV2(this, index, falconClient);
		case 'ssIoaExclusionsDeleteV2': return await handleSsIoaExclusionsDeleteV2(this, index, falconClient);
		case 'ssIoaExclusionsGetReportsV2': return await handleSsIoaExclusionsGetReportsV2(this, index, falconClient);
		case 'ssIoaExclusionsGetV2': return await handleSsIoaExclusionsGetV2(this, index, falconClient);
		case 'ssIoaExclusionsMatchedRuleV2': return await handleSsIoaExclusionsMatchedRuleV2(this, index, falconClient);
		case 'ssIoaExclusionsNewRulesV2': return await handleSsIoaExclusionsNewRulesV2(this, index, falconClient);
		case 'ssIoaExclusionsSearchV2': return await handleSsIoaExclusionsSearchV2(this, index, falconClient);
		case 'ssIoaExclusionsUpdateV2': return await handleSsIoaExclusionsUpdateV2(this, index, falconClient);
		case 'updateIOAExclusionsV1': return await handleUpdateIOAExclusionsV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for IOA Exclusions.`);
	}
}
