import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'getAssessmentV1' operation.
 */
async function handleGetAssessmentV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Zero Trust Assessment data for one or more hosts by providing agent IDs (AID). */
	return await fc.zeroTrustAssessment.getAssessmentV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getAssessmentsByScoreV1' operation.
 */
async function handleGetAssessmentsByScoreV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Zero Trust Assessment data for one or more hosts by providing a range of scores. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const after = getStringParam(c, i, 'after', '');
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.zeroTrustAssessment.getAssessmentsByScoreV1(filter, limit || undefined, after || undefined, sort || undefined);
}

/**
 * Handles the 'getAuditV1' operation.
 */
async function handleGetAuditV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the Zero Trust Assessment audit report for one customer ID (CID). */
	return await fc.zeroTrustAssessment.getAuditV1();
}

/**
 * Main execution handler for CrowdStrike Falcon Zero Trust Assessment operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeZeroTrustAssessment(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getAssessmentV1': return await handleGetAssessmentV1(this, index, falconClient);
		case 'getAssessmentsByScoreV1': return await handleGetAssessmentsByScoreV1(this, index, falconClient);
		case 'getAuditV1': return await handleGetAuditV1(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Zero Trust Assessment.`);
	}
}
