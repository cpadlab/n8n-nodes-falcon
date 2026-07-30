import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/**
 * Handles the 'getCombinedVulnerabilitiesSARIF' operation.
 */
async function handleGetCombinedVulnerabilitiesSARIF(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve all lambda vulnerabilities that match the given query and return in the SARIF format. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.serverlessVulnerabilities.getCombinedVulnerabilitiesSARIF(filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Serverless Vulnerabilities operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeServerlessVulnerabilities(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getCombinedVulnerabilitiesSARIF': return await handleGetCombinedVulnerabilitiesSARIF(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Serverless Vulnerabilities.`);
	}
}
