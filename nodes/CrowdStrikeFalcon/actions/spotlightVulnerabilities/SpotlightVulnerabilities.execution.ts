import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'combinedQueryVulnerabilities' operation.
 */
async function handleCombinedQueryVulnerabilities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Vulnerabilities in your environment by providing an FQL filter and paging details. */
	const filter = getStringParam(c, i, 'filter', '');
	const after = getStringParam(c, i, 'after', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const facet = parseArrayParam(c, i, 'facet');
	return await fc.spotlightVulnerabilities.combinedQueryVulnerabilities(filter, after || undefined, limit || undefined, sort || undefined, facet.length ? facet : undefined);
}

/**
 * Handles the 'getRemediationsV2' operation.
 */
async function handleGetRemediationsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get details on remediation by providing one or more IDs. */
	return await fc.spotlightVulnerabilities.getRemediationsV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getVulnerabilities' operation.
 */
async function handleGetVulnerabilities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get details on vulnerabilities by providing one or more IDs. */
	return await fc.spotlightVulnerabilities.getVulnerabilities(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'queryVulnerabilities' operation.
 */
async function handleQueryVulnerabilities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Vulnerabilities in your environment returning IDs. */
	const filter = getStringParam(c, i, 'filter', '');
	const after = getStringParam(c, i, 'after', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.spotlightVulnerabilities.queryVulnerabilities(filter, after || undefined, limit || undefined, sort || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Spotlight Vulnerabilities operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeSpotlightVulnerabilities(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'combinedQueryVulnerabilities': return await handleCombinedQueryVulnerabilities(this, index, falconClient);
		case 'getRemediationsV2': return await handleGetRemediationsV2(this, index, falconClient);
		case 'getVulnerabilities': return await handleGetVulnerabilities(this, index, falconClient);
		case 'queryVulnerabilities': return await handleQueryVulnerabilities(this, index, falconClient);
		default:
			throw new NodeOperationError(c.getNode(), `Operation ${operation} is not supported for Spotlight Vulnerabilities.`);
	}
}
