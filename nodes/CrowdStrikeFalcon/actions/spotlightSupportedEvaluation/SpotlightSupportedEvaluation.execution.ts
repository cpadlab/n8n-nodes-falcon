import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'combinedSupportedEvaluationExt' operation.
 */
async function handleCombinedSupportedEvaluationExt(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Performs a combined query and get operation for retrieving RiskSupportedEvaluation entities. */
	const filter = getStringParam(c, i, 'filter', '');
	const after = getStringParam(c, i, 'after', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const riskProvider = parseArrayParam(c, i, 'riskProvider');
	return await fc.spotlightSupportedEvaluation.combinedSupportedEvaluationExt(filter, after || undefined, offset || undefined, limit || undefined, sort || undefined, riskProvider.length ? riskProvider : undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Spotlight Supported Evaluation operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeSpotlightSupportedEvaluation(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	if (operation === 'combinedSupportedEvaluationExt') {
		return await handleCombinedSupportedEvaluationExt(this, index, falconClient);
	}
	throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported.`); as any)), `Operation ${operation} is not supported for Spotlight Supported Evaluation.`);
	}
}
