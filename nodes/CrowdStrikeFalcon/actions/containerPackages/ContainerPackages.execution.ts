import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Handles the 'readPackagesByFixableVulnCount' operation.
 */
async function handleReadPackagesByFixableVulnCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads packages by fixable vuln count. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerPackages.readPackagesByFixableVulnCount(filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readPackagesByImageCount' operation.
 */
async function handleReadPackagesByImageCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads packages by image count. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.containerPackages.readPackagesByImageCount(filter || undefined, limit || undefined);
}

/**
 * Handles the 'readPackagesByVulnCount' operation.
 */
async function handleReadPackagesByVulnCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads packages by vuln count. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerPackages.readPackagesByVulnCount(filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readPackagesCombined' operation.
 */
async function handleReadPackagesCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads packages combined. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerPackages.readPackagesCombined(filter || undefined, undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readPackagesCombinedExport' operation.
 */
async function handleReadPackagesCombinedExport(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads packages combined export. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerPackages.readPackagesCombinedExport(filter || undefined, undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readPackagesCombinedV2' operation.
 */
async function handleReadPackagesCombinedV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads packages combined V2. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerPackages.readPackagesCombinedV2(filter || undefined, undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readPackagesCountByZeroDay' operation.
 */
async function handleReadPackagesCountByZeroDay(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads packages count by zero day. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerPackages.readPackagesCountByZeroDay(filter || undefined);
}

/** Main execution handler for Container Packages operations. */
export async function executeContainerPackages(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'readPackagesByFixableVulnCount': return await handleReadPackagesByFixableVulnCount(this, index, falconClient);
		case 'readPackagesByImageCount': return await handleReadPackagesByImageCount(this, index, falconClient);
		case 'readPackagesByVulnCount': return await handleReadPackagesByVulnCount(this, index, falconClient);
		case 'readPackagesCombined': return await handleReadPackagesCombined(this, index, falconClient);
		case 'readPackagesCombinedExport': return await handleReadPackagesCombinedExport(this, index, falconClient);
		case 'readPackagesCombinedV2': return await handleReadPackagesCombinedV2(this, index, falconClient);
		case 'readPackagesCountByZeroDay': return await handleReadPackagesCountByZeroDay(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Container Packages.`);
	}
}
