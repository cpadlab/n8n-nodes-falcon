import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'auditEventsQuery' operation.
 */
async function handleAuditEventsQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for audit events by providing an FQL filter and paging details. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.installationTokens.auditEventsQuery(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'auditEventsRead' operation.
 */
async function handleAuditEventsRead(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets the details of one or more audit events by ID. */
	return await fc.installationTokens.auditEventsRead(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'customerSettingsRead' operation.
 */
async function handleCustomerSettingsRead(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Check current installation token settings. */
	return await fc.installationTokens.customerSettingsRead();
}

/**
 * Handles the 'tokensCreate' operation.
 */
async function handleTokensCreate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates an installation token. */
	return await fc.installationTokens.tokensCreate(parseJsonParam(c, i));
}

/**
 * Handles the 'tokensDelete' operation.
 */
async function handleTokensDelete(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes a token immediately. */
	return await fc.installationTokens.tokensDelete(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'tokensQuery' operation.
 */
async function handleTokensQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for tokens by providing an FQL filter and paging details. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.installationTokens.tokensQuery(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'tokensRead' operation.
 */
async function handleTokensRead(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets the details of one or more tokens by ID. */
	return await fc.installationTokens.tokensRead(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'tokensUpdate' operation.
 */
async function handleTokensUpdate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates one or more tokens. */
	return await fc.installationTokens.tokensUpdate(parseArrayParam(c, i, 'ids'), parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Installation Tokens operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeInstallationTokens(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'auditEventsQuery': return await handleAuditEventsQuery(this, index, falconClient);
		case 'auditEventsRead': return await handleAuditEventsRead(this, index, falconClient);
		case 'customerSettingsRead': return await handleCustomerSettingsRead(this, index, falconClient);
		case 'tokensCreate': return await handleTokensCreate(this, index, falconClient);
		case 'tokensDelete': return await handleTokensDelete(this, index, falconClient);
		case 'tokensQuery': return await handleTokensQuery(this, index, falconClient);
		case 'tokensRead': return await handleTokensRead(this, index, falconClient);
		case 'tokensUpdate': return await handleTokensUpdate(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Installation Tokens.`);
	}
}
