import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'combinedQueryEvaluationLogic' operation.
 */
async function handleCombinedQueryEvaluationLogic(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for evaluation logic in your environment by providing a FQL filter and paging details. */
	const filter = getStringParam(c, i, 'filter', '');
	const after = getStringParam(c, i, 'after', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.spotlightEvaluationLogic.combinedQueryEvaluationLogic(filter, after || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'getEvaluationLogic' operation.
 */
async function handleGetEvaluationLogic(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get details on evaluation logic items by providing one or more IDs. */
	return await fc.spotlightEvaluationLogic.getEvaluationLogic(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'queryEvaluationLogic' operation.
 */
async function handleQueryEvaluationLogic(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for evaluation logic in your environment by providing a FQL filter and paging details. */
	const filter = getStringParam(c, i, 'filter', '');
	const after = getStringParam(c, i, 'after', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.spotlightEvaluationLogic.queryEvaluationLogic(filter, after || undefined, limit || undefined, sort || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Spotlight Evaluation Logic operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeSpotlightEvaluationLogic(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'combinedQueryEvaluationLogic': return await handleCombinedQueryEvaluationLogic(this, index, falconClient);
		case 'getEvaluationLogic': return await handleGetEvaluationLogic(this, index, falconClient);
		case 'queryEvaluationLogic': return await handleQueryEvaluationLogic(this, index, falconClient);
		default:
			throw new NodeOperationError(c.getNode(), `Operation ${operation} is not supported for Spotlight Evaluation Logic.`);
	}
}
