import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'combinedApplications' operation.
 */
async function handleCombinedApplications(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches combined applications. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.discover.combinedApplications(filter, undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'combinedHosts' operation.
 */
async function handleCombinedHosts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches combined hosts. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.discover.combinedHosts(filter, undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'getAccounts' operation.
 */
async function handleGetAccounts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets account details by IDs. */
	return await fc.discover.getAccounts(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getApplications' operation.
 */
async function handleGetApplications(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets application details by IDs. */
	return await fc.discover.getApplications(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getHosts' operation.
 */
async function handleGetHosts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets host details by IDs. */
	return await fc.discover.getHosts(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getLogins' operation.
 */
async function handleGetLogins(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets login details by IDs. */
	return await fc.discover.getLogins(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'queryAccounts' operation.
 */
async function handleQueryAccounts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries account IDs. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.discover.queryAccounts(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'queryApplications' operation.
 */
async function handleQueryApplications(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries application IDs. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.discover.queryApplications(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'queryHosts' operation.
 */
async function handleQueryHosts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries host IDs. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.discover.queryHosts(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'queryLogins' operation.
 */
async function handleQueryLogins(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries login IDs. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.discover.queryLogins(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/** Main execution handler for Discover operations. */
export async function executeDiscover(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'combinedApplications': return await handleCombinedApplications(this, index, falconClient);
		case 'combinedHosts': return await handleCombinedHosts(this, index, falconClient);
		case 'getAccounts': return await handleGetAccounts(this, index, falconClient);
		case 'getApplications': return await handleGetApplications(this, index, falconClient);
		case 'getHosts': return await handleGetHosts(this, index, falconClient);
		case 'getLogins': return await handleGetLogins(this, index, falconClient);
		case 'queryAccounts': return await handleQueryAccounts(this, index, falconClient);
		case 'queryApplications': return await handleQueryApplications(this, index, falconClient);
		case 'queryHosts': return await handleQueryHosts(this, index, falconClient);
		case 'queryLogins': return await handleQueryLogins(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Discover.`);
	}
}
