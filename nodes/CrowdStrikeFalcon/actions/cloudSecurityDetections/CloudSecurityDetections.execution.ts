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

/** Handles cspmEvaluationsCombinedIomByRule */
async function handleCspmEvaluationsCombinedIomByRule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves IOMs grouped by rule. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cloudSecurityDetections.cspmEvaluationsCombinedIomByRule(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles cspmEvaluationsIomEntities */
async function handleCspmEvaluationsIomEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves IOM entities by IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudSecurityDetections.cspmEvaluationsIomEntities(ids.length ? ids : undefined);
}

/** Handles cspmEvaluationsIomEntitiesPost */
async function handleCspmEvaluationsIomEntitiesPost(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves IOM entities via POST body. */
	return await fc.cloudSecurityDetections.cspmEvaluationsIomEntitiesPost(parseJsonParam(c, i));
}

/** Handles cspmEvaluationsIomQueries */
async function handleCspmEvaluationsIomQueries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries IOM IDs. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cloudSecurityDetections.cspmEvaluationsIomQueries(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Main execution handler for Cloud Security Detections operations. */
export async function executeCloudSecurityDetections(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'cspmEvaluationsCombinedIomByRule': return await handleCspmEvaluationsCombinedIomByRule(this, index, falconClient);
		case 'cspmEvaluationsIomEntities': return await handleCspmEvaluationsIomEntities(this, index, falconClient);
		case 'cspmEvaluationsIomEntitiesPost': return await handleCspmEvaluationsIomEntitiesPost(this, index, falconClient);
		case 'cspmEvaluationsIomQueries': return await handleCspmEvaluationsIomQueries(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Cloud Security Detections.`);
	}
}
