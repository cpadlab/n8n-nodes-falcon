import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Handles the 'readCombinedVulnerabilities' operation.
 */
async function handleReadCombinedVulnerabilities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads combined vulnerabilities. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	return await fc.containerVulnerabilities.readCombinedVulnerabilities(filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'readCombinedVulnerabilitiesDetails' operation.
 */
async function handleReadCombinedVulnerabilitiesDetails(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads combined vulnerabilities details. */
	const id = c.getNodeParameter('id', i) as string;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerVulnerabilities.readCombinedVulnerabilitiesDetails(id, filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readCombinedVulnerabilitiesInfo' operation.
 */
async function handleReadCombinedVulnerabilitiesInfo(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads combined vulnerabilities info. */
	const cveId = c.getNodeParameter('cveId', i) as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerVulnerabilities.readCombinedVulnerabilitiesInfo(cveId, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readVulnerabilitiesByImageCount' operation.
 */
async function handleReadVulnerabilitiesByImageCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads vulnerabilities by image count. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerVulnerabilities.readVulnerabilitiesByImageCount(filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readVulnerabilitiesPublicationDate' operation.
 */
async function handleReadVulnerabilitiesPublicationDate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads vulnerabilities publication date. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerVulnerabilities.readVulnerabilitiesPublicationDate(filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readVulnerabilityCount' operation.
 */
async function handleReadVulnerabilityCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads vulnerability count. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerVulnerabilities.readVulnerabilityCount(filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readVulnerabilityCountByActivelyExploited' operation.
 */
async function handleReadVulnerabilityCountByActivelyExploited(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads vulnerability count by actively exploited. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerVulnerabilities.readVulnerabilityCountByActivelyExploited(filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readVulnerabilityCountByCPSRating' operation.
 */
async function handleReadVulnerabilityCountByCPSRating(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads vulnerability count by CPS rating. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerVulnerabilities.readVulnerabilityCountByCPSRating(filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readVulnerabilityCountByCVSSScore' operation.
 */
async function handleReadVulnerabilityCountByCVSSScore(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads vulnerability count by CVSS score. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerVulnerabilities.readVulnerabilityCountByCVSSScore(filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readVulnerabilityCountBySeverity' operation.
 */
async function handleReadVulnerabilityCountBySeverity(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads vulnerability count by severity. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerVulnerabilities.readVulnerabilityCountBySeverity(filter || undefined, limit || undefined, offset || undefined);
}

/** Main execution handler for Container Vulnerabilities operations. */
export async function executeContainerVulnerabilities(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'readCombinedVulnerabilities': return await handleReadCombinedVulnerabilities(this, index, falconClient);
		case 'readCombinedVulnerabilitiesDetails': return await handleReadCombinedVulnerabilitiesDetails(this, index, falconClient);
		case 'readCombinedVulnerabilitiesInfo': return await handleReadCombinedVulnerabilitiesInfo(this, index, falconClient);
		case 'readVulnerabilitiesByImageCount': return await handleReadVulnerabilitiesByImageCount(this, index, falconClient);
		case 'readVulnerabilitiesPublicationDate': return await handleReadVulnerabilitiesPublicationDate(this, index, falconClient);
		case 'readVulnerabilityCount': return await handleReadVulnerabilityCount(this, index, falconClient);
		case 'readVulnerabilityCountByActivelyExploited': return await handleReadVulnerabilityCountByActivelyExploited(this, index, falconClient);
		case 'readVulnerabilityCountByCPSRating': return await handleReadVulnerabilityCountByCPSRating(this, index, falconClient);
		case 'readVulnerabilityCountByCVSSScore': return await handleReadVulnerabilityCountByCVSSScore(this, index, falconClient);
		case 'readVulnerabilityCountBySeverity': return await handleReadVulnerabilityCountBySeverity(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Container Vulnerabilities.`);
	}
}
