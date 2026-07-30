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

function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
	const str = context.getNodeParameter(paramName, index, '') as string;
	return str.split(',').map((id) => id.trim()).filter(Boolean);
}

/**
 * Handles the 'connectD4CGCPAccount' operation.
 */
async function handleConnectD4CGCPAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Connects D4C GCP account. */
	return await fc.d4cRegistration.connectD4CGCPAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'createD4CAwsAccount' operation.
 */
async function handleCreateD4CAwsAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates D4C AWS account. */
	return await fc.d4cRegistration.createD4CAwsAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'createD4CGcpAccount' operation.
 */
async function handleCreateD4CGcpAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates D4C GCP account. */
	return await fc.d4cRegistration.createD4CGcpAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'createDiscoverCloudAzureAccount' operation.
 */
async function handleCreateDiscoverCloudAzureAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates Discover Cloud Azure account. */
	return await fc.d4cRegistration.createDiscoverCloudAzureAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteD4CAwsAccount' operation.
 */
async function handleDeleteD4CAwsAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes D4C AWS account. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.d4cRegistration.deleteD4CAwsAccount(ids.length ? ids : undefined);
}

/**
 * Handles the 'deleteD4CGCPAccount' operation.
 */
async function handleDeleteD4CGCPAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes D4C GCP account. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.d4cRegistration.deleteD4CGCPAccount(ids.length ? ids : undefined);
}

/**
 * Handles the 'getD4CAWSAccountScriptsAttachment' operation.
 */
async function handleGetD4CAWSAccountScriptsAttachment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets D4C AWS account scripts attachment. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.d4cRegistration.getD4CAWSAccountScriptsAttachment(ids.length ? ids : undefined);
}

/**
 * Handles the 'getD4CAwsAccount' operation.
 */
async function handleGetD4CAwsAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets D4C AWS account status. */
	const ids = parseArrayParam(c, i, 'ids');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.d4cRegistration.getD4CAwsAccount(undefined, ids.length ? ids : undefined, undefined, undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getD4CAwsConsoleSetupURLs' operation.
 */
async function handleGetD4CAwsConsoleSetupURLs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets D4C AWS console setup URLs. */
	return await fc.d4cRegistration.getD4CAwsConsoleSetupURLs();
}

/**
 * Handles the 'getD4CGCPServiceAccountsExt' operation.
 */
async function handleGetD4CGCPServiceAccountsExt(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets D4C GCP service accounts ext. */
	const id = c.getNodeParameter('idSingle', i, '') as string;
	return await fc.d4cRegistration.getD4CGCPServiceAccountsExt(id || undefined);
}

/**
 * Handles the 'getD4CGCPUserScriptsAttachment' operation.
 */
async function handleGetD4CGCPUserScriptsAttachment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets D4C GCP user scripts attachment. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.d4cRegistration.getD4CGCPUserScriptsAttachment(undefined, ids.length ? ids : undefined);
}

/**
 * Handles the 'getD4CGcpAccount' operation.
 */
async function handleGetD4CGcpAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets D4C GCP account status. */
	const ids = parseArrayParam(c, i, 'ids');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	return await fc.d4cRegistration.getD4CGcpAccount(undefined, ids.length ? ids : undefined, undefined, undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'getD4CGcpUserScripts' operation.
 */
async function handleGetD4CGcpUserScripts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets D4C GCP user scripts. */
	return await fc.d4cRegistration.getD4CGcpUserScripts();
}

/**
 * Handles the 'getDiscoverCloudAzureAccount' operation.
 */
async function handleGetDiscoverCloudAzureAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets Discover Cloud Azure account info. */
	const ids = parseArrayParam(c, i, 'ids');
	const tenantIds = parseArrayParam(c, i, 'tenantIds');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.d4cRegistration.getDiscoverCloudAzureAccount(ids.length ? ids : undefined, tenantIds.length ? tenantIds : undefined, undefined, undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getDiscoverCloudAzureTenantIDs' operation.
 */
async function handleGetDiscoverCloudAzureTenantIDs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets Discover Cloud Azure tenant IDs. */
	return await fc.d4cRegistration.getDiscoverCloudAzureTenantIDs();
}

/**
 * Handles the 'getDiscoverCloudAzureUserScripts' operation.
 */
async function handleGetDiscoverCloudAzureUserScripts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets Discover Cloud Azure user scripts. */
	return await fc.d4cRegistration.getDiscoverCloudAzureUserScripts();
}

/**
 * Handles the 'getDiscoverCloudAzureUserScriptsAttachment' operation.
 */
async function handleGetDiscoverCloudAzureUserScriptsAttachment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets Discover Cloud Azure user scripts attachment. */
	const tenantId = parseArrayParam(c, i, 'tenantIds');
	return await fc.d4cRegistration.getDiscoverCloudAzureUserScriptsAttachment(tenantId);
}

/**
 * Handles the 'getHorizonD4CScripts' operation.
 */
async function handleGetHorizonD4CScripts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets Horizon D4C scripts. */
	return await fc.d4cRegistration.getHorizonD4CScripts();
}

/**
 * Handles the 'updateD4CGCPServiceAccountsExt' operation.
 */
async function handleUpdateD4CGCPServiceAccountsExt(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates D4C GCP service accounts ext. */
	return await fc.d4cRegistration.updateD4CGCPServiceAccountsExt(parseJsonParam(c, i));
}

/**
 * Handles the 'updateDiscoverCloudAzureAccountClientID' operation.
 */
async function handleUpdateDiscoverCloudAzureAccountClientID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates Discover Cloud Azure account client ID. */
	const id = c.getNodeParameter('idSingle', i) as string;
	return await fc.d4cRegistration.updateDiscoverCloudAzureAccountClientID(id);
}

/** Main execution handler for D4C Registration operations. */
export async function executeD4cRegistration(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'connectD4CGCPAccount': return await handleConnectD4CGCPAccount(this, index, falconClient);
		case 'createD4CAwsAccount': return await handleCreateD4CAwsAccount(this, index, falconClient);
		case 'createD4CGcpAccount': return await handleCreateD4CGcpAccount(this, index, falconClient);
		case 'createDiscoverCloudAzureAccount': return await handleCreateDiscoverCloudAzureAccount(this, index, falconClient);
		case 'deleteD4CAwsAccount': return await handleDeleteD4CAwsAccount(this, index, falconClient);
		case 'deleteD4CGCPAccount': return await handleDeleteD4CGCPAccount(this, index, falconClient);
		case 'getD4CAWSAccountScriptsAttachment': return await handleGetD4CAWSAccountScriptsAttachment(this, index, falconClient);
		case 'getD4CAwsAccount': return await handleGetD4CAwsAccount(this, index, falconClient);
		case 'getD4CAwsConsoleSetupURLs': return await handleGetD4CAwsConsoleSetupURLs(this, index, falconClient);
		case 'getD4CGCPServiceAccountsExt': return await handleGetD4CGCPServiceAccountsExt(this, index, falconClient);
		case 'getD4CGCPUserScriptsAttachment': return await handleGetD4CGCPUserScriptsAttachment(this, index, falconClient);
		case 'getD4CGcpAccount': return await handleGetD4CGcpAccount(this, index, falconClient);
		case 'getD4CGcpUserScripts': return await handleGetD4CGcpUserScripts(this, index, falconClient);
		case 'getDiscoverCloudAzureAccount': return await handleGetDiscoverCloudAzureAccount(this, index, falconClient);
		case 'getDiscoverCloudAzureTenantIDs': return await handleGetDiscoverCloudAzureTenantIDs(this, index, falconClient);
		case 'getDiscoverCloudAzureUserScripts': return await handleGetDiscoverCloudAzureUserScripts(this, index, falconClient);
		case 'getDiscoverCloudAzureUserScriptsAttachment': return await handleGetDiscoverCloudAzureUserScriptsAttachment(this, index, falconClient);
		case 'getHorizonD4CScripts': return await handleGetHorizonD4CScripts(this, index, falconClient);
		case 'updateD4CGCPServiceAccountsExt': return await handleUpdateD4CGCPServiceAccountsExt(this, index, falconClient);
		case 'updateDiscoverCloudAzureAccountClientID': return await handleUpdateDiscoverCloudAzureAccountClientID(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for D4C Registration.`);
	}
}
