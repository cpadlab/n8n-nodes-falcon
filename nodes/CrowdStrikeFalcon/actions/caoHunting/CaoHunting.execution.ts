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

/** Handles aggregateHuntingGuides */
async function handleAggregateHuntingGuides(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Aggregates hunting guides. */
	const body = parseJsonParam(c, i);
	const bodyArray = Array.isArray(body) ? body : [body];
	return await fc.caoHunting.aggregateHuntingGuides(bodyArray);
}

/** Handles aggregateIntelligenceQueries */
async function handleAggregateIntelligenceQueries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Aggregates intelligence queries. */
	const body = parseJsonParam(c, i);
	const bodyArray = Array.isArray(body) ? body : [body];
	return await fc.caoHunting.aggregateIntelligenceQueries(bodyArray);
}

/** Handles getArchiveExport */
async function handleGetArchiveExport(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates archive export. */
	const language = c.getNodeParameter('language', i) as string;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const archiveType = c.getNodeParameter('archiveType', i, '') as string;
	return await fc.caoHunting.getArchiveExport(language, filter || undefined, archiveType || undefined);
}

/** Handles getHuntingGuides */
async function handleGetHuntingGuides(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves hunting guides by IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.caoHunting.getHuntingGuides(ids);
}

/** Handles getIntelligenceQueries */
async function handleGetIntelligenceQueries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves intelligence queries by IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.caoHunting.getIntelligenceQueries(ids);
}

/** Handles searchHuntingGuides */
async function handleSearchHuntingGuides(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches hunting guides matching parameters. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const q = c.getNodeParameter('q', i, '') as string;
	return await fc.caoHunting.searchHuntingGuides(undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/** Handles searchIntelligenceQueries */
async function handleSearchIntelligenceQueries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches intelligence queries matching parameters. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const q = c.getNodeParameter('q', i, '') as string;
	return await fc.caoHunting.searchIntelligenceQueries(undefined, limit || undefined, sort || undefined, filter || undefined, q || undefined);
}

/** Main execution handler for CAO Hunting operations. */
export async function executeCaoHunting(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateHuntingGuides': return await handleAggregateHuntingGuides(this, index, falconClient);
		case 'aggregateIntelligenceQueries': return await handleAggregateIntelligenceQueries(this, index, falconClient);
		case 'getArchiveExport': return await handleGetArchiveExport(this, index, falconClient);
		case 'getHuntingGuides': return await handleGetHuntingGuides(this, index, falconClient);
		case 'getIntelligenceQueries': return await handleGetIntelligenceQueries(this, index, falconClient);
		case 'searchHuntingGuides': return await handleSearchHuntingGuides(this, index, falconClient);
		case 'searchIntelligenceQueries': return await handleSearchIntelligenceQueries(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for CAO Hunting.`);
	}
}
