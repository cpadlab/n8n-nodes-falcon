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
 * Handles the 'caoIncidentsAggregatesV1' operation.
 */
async function handleCaoIncidentsAggregatesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Perform statistical aggregations over incident data. */
	const body = parseJsonParam(c, i);
	return await fc.intel.caoIncidentsAggregatesV1(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'caoIncidentsEntitiesV1' operation.
 */
async function handleCaoIncidentsEntitiesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve full details for adversary incidents by IDs. */
	return await fc.intel.caoIncidentsEntitiesV1(parseJsonParam(c, i));
}

/**
 * Handles the 'caoIncidentsQueriesV1' operation.
 */
async function handleCaoIncidentsQueriesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for adversary incidents using FQL criteria. */
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.intel.caoIncidentsQueriesV1(sort || undefined, filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getIntelActorEntities' operation.
 */
async function handleGetIntelActorEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve specific actors using their actor IDs. */
	return await fc.intel.getIntelActorEntities(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getIntelIndicatorEntities' operation.
 */
async function handleGetIntelIndicatorEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve specific indicators using their indicator IDs. */
	return await fc.intel.getIntelIndicatorEntities(parseJsonParam(c, i));
}

/**
 * Handles the 'getIntelReportEntities' operation.
 */
async function handleGetIntelReportEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve specific reports using their report IDs. */
	return await fc.intel.getIntelReportEntities(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getIntelReportPDF' operation.
 */
async function handleGetIntelReportPDF(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Return a Report PDF attachment. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.intel.getIntelReportPDF(id || undefined);
}

/**
 * Handles the 'getIntelRuleEntities' operation.
 */
async function handleGetIntelRuleEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve details for rule sets for specified IDs. */
	return await fc.intel.getIntelRuleEntities(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getIntelRuleFile' operation.
 */
async function handleGetIntelRuleFile(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download earlier rule sets. */
	const idStr = getStringParam(c, i, 'id', '0');
	const id = parseInt(idStr, 10) || 0;
	return await fc.intel.getIntelRuleFile(id);
}

/**
 * Handles the 'getLatestIntelRuleFile' operation.
 */
async function handleGetLatestIntelRuleFile(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download the latest rule set. */
	const type = getStringParam(c, i, 'type', '');
	return await fc.intel.getLatestIntelRuleFile(type);
}

/**
 * Handles the 'getMalwareEntities' operation.
 */
async function handleGetMalwareEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get malware entities for specified IDs. */
	return await fc.intel.getMalwareEntities(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getMalwareMitreReport' operation.
 */
async function handleGetMalwareMitreReport(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Export MITRE ATT&CK information for a malware family. */
	const id = getStringParam(c, i, 'id', '');
	const format = getStringParam(c, i, 'format', 'json');
	return await fc.intel.getMalwareMitreReport(id, format);
}

/**
 * Handles the 'getMitreReport' operation.
 */
async function handleGetMitreReport(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Export MITRE ATT&CK information for an actor. */
	const actorId = getStringParam(c, i, 'actorId', '');
	const format = getStringParam(c, i, 'format', 'json');
	return await fc.intel.getMitreReport(actorId, format);
}

/**
 * Handles the 'getVulnerabilities' operation.
 */
async function handleGetVulnerabilities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get vulnerabilities by providing IDs in body. */
	return await fc.intel.getVulnerabilities(parseJsonParam(c, i));
}

/**
 * Handles the 'postMitreAttacks' operation.
 */
async function handlePostMitreAttacks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves report and observable IDs associated with actor and attacks. */
	return await fc.intel.postMitreAttacks(parseJsonParam(c, i));
}

/**
 * Handles the 'queryIntelActorEntities' operation.
 */
async function handleQueryIntelActorEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get info about actors matching provided FQL filters. */
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.intel.queryIntelActorEntities(offset, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'queryIntelActorIds' operation.
 */
async function handleQueryIntelActorIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get actor IDs matching provided FQL filters. */
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.intel.queryIntelActorIds(offset, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'queryIntelIndicatorEntities' operation.
 */
async function handleQueryIntelIndicatorEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get info about indicators matching FQL filters. */
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.intel.queryIntelIndicatorEntities(offset, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'queryIntelIndicatorIds' operation.
 */
async function handleQueryIntelIndicatorIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get indicator IDs matching FQL filters. */
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.intel.queryIntelIndicatorIds(offset, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'queryIntelReportEntities' operation.
 */
async function handleQueryIntelReportEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get info about reports matching FQL filters. */
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.intel.queryIntelReportEntities(offset, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'queryIntelReportIds' operation.
 */
async function handleQueryIntelReportIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get report IDs matching FQL filters. */
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.intel.queryIntelReportIds(offset, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'queryIntelRuleIds' operation.
 */
async function handleQueryIntelRuleIds(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for rule IDs matching provided filter criteria. */
	const type = getStringParam(c, i, 'type', '');
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.intel.queryIntelRuleIds(type, offset, limit || undefined, sort || undefined, undefined, undefined, undefined, undefined, undefined, q || undefined);
}

/**
 * Handles the 'queryMalware' operation.
 */
async function handleQueryMalware(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get malware family names matching FQL filters. */
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.intel.queryMalware(offset, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'queryMalwareEntities' operation.
 */
async function handleQueryMalwareEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get malware entities matching FQL filters. */
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.intel.queryMalwareEntities(offset, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Handles the 'queryMitreAttacks' operation.
 */
async function handleQueryMitreAttacks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets MITRE tactics and techniques for given actor. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.intel.queryMitreAttacks(id || undefined);
}

/**
 * Handles the 'queryMitreAttacksForMalware' operation.
 */
async function handleQueryMitreAttacksForMalware(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets MITRE tactics and techniques for given malware. */
	return await fc.intel.queryMitreAttacksForMalware(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'queryVulnerabilities' operation.
 */
async function handleQueryVulnerabilities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get vulnerability IDs matching FQL filters. */
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	return await fc.intel.queryVulnerabilities(offset || undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Intel operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeIntel(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'caoIncidentsAggregatesV1': return await handleCaoIncidentsAggregatesV1(this, index, falconClient);
		case 'caoIncidentsEntitiesV1': return await handleCaoIncidentsEntitiesV1(this, index, falconClient);
		case 'caoIncidentsQueriesV1': return await handleCaoIncidentsQueriesV1(this, index, falconClient);
		case 'getIntelActorEntities': return await handleGetIntelActorEntities(this, index, falconClient);
		case 'getIntelIndicatorEntities': return await handleGetIntelIndicatorEntities(this, index, falconClient);
		case 'getIntelReportEntities': return await handleGetIntelReportEntities(this, index, falconClient);
		case 'getIntelReportPDF': return await handleGetIntelReportPDF(this, index, falconClient);
		case 'getIntelRuleEntities': return await handleGetIntelRuleEntities(this, index, falconClient);
		case 'getIntelRuleFile': return await handleGetIntelRuleFile(this, index, falconClient);
		case 'getLatestIntelRuleFile': return await handleGetLatestIntelRuleFile(this, index, falconClient);
		case 'getMalwareEntities': return await handleGetMalwareEntities(this, index, falconClient);
		case 'getMalwareMitreReport': return await handleGetMalwareMitreReport(this, index, falconClient);
		case 'getMitreReport': return await handleGetMitreReport(this, index, falconClient);
		case 'getVulnerabilities': return await handleGetVulnerabilities(this, index, falconClient);
		case 'postMitreAttacks': return await handlePostMitreAttacks(this, index, falconClient);
		case 'queryIntelActorEntities': return await handleQueryIntelActorEntities(this, index, falconClient);
		case 'queryIntelActorIds': return await handleQueryIntelActorIds(this, index, falconClient);
		case 'queryIntelIndicatorEntities': return await handleQueryIntelIndicatorEntities(this, index, falconClient);
		case 'queryIntelIndicatorIds': return await handleQueryIntelIndicatorIds(this, index, falconClient);
		case 'queryIntelReportEntities': return await handleQueryIntelReportEntities(this, index, falconClient);
		case 'queryIntelReportIds': return await handleQueryIntelReportIds(this, index, falconClient);
		case 'queryIntelRuleIds': return await handleQueryIntelRuleIds(this, index, falconClient);
		case 'queryMalware': return await handleQueryMalware(this, index, falconClient);
		case 'queryMalwareEntities': return await handleQueryMalwareEntities(this, index, falconClient);
		case 'queryMitreAttacks': return await handleQueryMitreAttacks(this, index, falconClient);
		case 'queryMitreAttacksForMalware': return await handleQueryMitreAttacksForMalware(this, index, falconClient);
		case 'queryVulnerabilities': return await handleQueryVulnerabilities(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Intel.`);
	}
}
