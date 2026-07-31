import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'cspmEvaluationsCombinedIomByRule' operation.
 */
async function handleCspmEvaluationsCombinedIomByRule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves IOMs grouped by rule. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cloudSecurityDetections.cspmEvaluationsCombinedIomByRule(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'cspmEvaluationsIomEntities' operation.
 */
async function handleCspmEvaluationsIomEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves IOM entities by IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudSecurityDetections.cspmEvaluationsIomEntities(ids.length ? ids : undefined);
}

/**
 * Handles the 'cspmEvaluationsIomEntitiesPost' operation.
 */
async function handleCspmEvaluationsIomEntitiesPost(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves IOM entities via POST body. */
	return await fc.cloudSecurityDetections.cspmEvaluationsIomEntitiesPost(parseJsonParam(c, i));
}

/**
 * Handles the 'cspmEvaluationsIomQueries' operation.
 */
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
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Cloud Security Detections.`);
	}
}
