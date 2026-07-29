import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function parseJsonParam(context: IExecuteFunctions, index: number, paramName = 'bodyJson'): any {
	const rawJson = context.getNodeParameter(paramName, index, '') as string;
	if (!rawJson) return {};
	try {
		return typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
	} catch (e) {
		throw new Error(`Invalid JSON in ${paramName}: ${(e as Error).message}`);
	}
}

/** Handles createOrUpdateAWSSettings */
async function handleCreateOrUpdateAWSSettings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates or updates AWS global settings. */
	return await fc.cloudConnectAws.createOrUpdateAWSSettings(parseJsonParam(c, i));
}

/** Handles deleteAWSAccounts */
async function handleDeleteAWSAccounts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes AWS accounts by IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudConnectAws.deleteAWSAccounts(ids);
}

/** Handles getAWSAccounts */
async function handleGetAWSAccounts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves AWS accounts by IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudConnectAws.getAWSAccounts(ids);
}

/** Handles getAWSSettings */
async function handleGetAWSSettings(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves AWS global settings. */
	return await fc.cloudConnectAws.getAWSSettings();
}

/** Handles provisionAWSAccounts */
async function handleProvisionAWSAccounts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provisions AWS accounts. */
	const mode = c.getNodeParameter('mode', i, '') as any;
	return await fc.cloudConnectAws.provisionAWSAccounts(parseJsonParam(c, i), mode || undefined);
}

/** Handles queryAWSAccounts */
async function handleQueryAWSAccounts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches for provisioned AWS accounts. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.cloudConnectAws.queryAWSAccounts(limit || undefined, offset || undefined, sort || undefined, filter || undefined);
}

/** Handles queryAWSAccountsForIDs */
async function handleQueryAWSAccountsForIDs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches for provisioned AWS account IDs. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.cloudConnectAws.queryAWSAccountsForIDs(limit || undefined, offset || undefined, sort || undefined, filter || undefined);
}

/** Handles updateAWSAccounts */
async function handleUpdateAWSAccounts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates AWS accounts. */
	return await fc.cloudConnectAws.updateAWSAccounts(parseJsonParam(c, i));
}

/** Handles verifyAWSAccountAccess */
async function handleVerifyAWSAccountAccess(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Verifies access to AWS accounts by IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudConnectAws.verifyAWSAccountAccess(ids);
}

/** Main execution handler for Cloud Connect AWS operations. */
export async function executeCloudConnectAws(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createOrUpdateAWSSettings': return await handleCreateOrUpdateAWSSettings(this, index, falconClient);
		case 'deleteAWSAccounts': return await handleDeleteAWSAccounts(this, index, falconClient);
		case 'getAWSAccounts': return await handleGetAWSAccounts(this, index, falconClient);
		case 'getAWSSettings': return await handleGetAWSSettings(this, index, falconClient);
		case 'provisionAWSAccounts': return await handleProvisionAWSAccounts(this, index, falconClient);
		case 'queryAWSAccounts': return await handleQueryAWSAccounts(this, index, falconClient);
		case 'queryAWSAccountsForIDs': return await handleQueryAWSAccountsForIDs(this, index, falconClient);
		case 'updateAWSAccounts': return await handleUpdateAWSAccounts(this, index, falconClient);
		case 'verifyAWSAccountAccess': return await handleVerifyAWSAccountAccess(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Cloud Connect AWS.`);
	}
}
