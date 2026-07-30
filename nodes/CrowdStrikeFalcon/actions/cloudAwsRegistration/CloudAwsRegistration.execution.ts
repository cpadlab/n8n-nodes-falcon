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

/**
 * Handles the 'cloudRegistrationAwsCreateAccount' operation.
 */
async function handleCloudRegistrationAwsCreateAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new AWS account in CrowdStrike. */
	return await fc.cloudAwsRegistration.cloudRegistrationAwsCreateAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudRegistrationAwsDeleteAccount' operation.
 */
async function handleCloudRegistrationAwsDeleteAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes an existing AWS account or organization. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	const orgIdsString = c.getNodeParameter('organizationIds', i, '') as string;
	const organizationIds = orgIdsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await fc.cloudAwsRegistration.cloudRegistrationAwsDeleteAccount(ids.length ? ids : undefined, organizationIds.length ? organizationIds : undefined);
}

/**
 * Handles the 'cloudRegistrationAwsGetAccounts' operation.
 */
async function handleCloudRegistrationAwsGetAccounts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves existing AWS accounts by account or organization IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	const orgIdsString = c.getNodeParameter('organizationIds', i, '') as string;
	const organizationIds = orgIdsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await fc.cloudAwsRegistration.cloudRegistrationAwsGetAccounts(ids.length ? ids : undefined, organizationIds.length ? organizationIds : undefined);
}

/**
 * Handles the 'cloudRegistrationAwsQueryAccounts' operation.
 */
async function handleCloudRegistrationAwsQueryAccounts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves existing AWS accounts by query parameters. */
	const productsString = c.getNodeParameter('products', i, '') as string;
	const products = productsString.split(',').map((p) => p.trim()).filter(Boolean);
	const featuresString = c.getNodeParameter('features', i, '') as string;
	const features = featuresString.split(',').map((f) => f.trim()).filter(Boolean);
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;

	return await fc.cloudAwsRegistration.cloudRegistrationAwsQueryAccounts(products, features, undefined, undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'cloudRegistrationAwsTriggerHealthCheck' operation.
 */
async function handleCloudRegistrationAwsTriggerHealthCheck(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Triggers health check scan for AWS accounts. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const accountIds = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	const orgIdsString = c.getNodeParameter('organizationIds', i, '') as string;
	const organizationIds = orgIdsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await fc.cloudAwsRegistration.cloudRegistrationAwsTriggerHealthCheck(accountIds.length ? accountIds : undefined, organizationIds.length ? organizationIds : undefined);
}

/**
 * Handles the 'cloudRegistrationAwsUpdateAccount' operation.
 */
async function handleCloudRegistrationAwsUpdateAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Patches an existing AWS account. */
	return await fc.cloudAwsRegistration.cloudRegistrationAwsUpdateAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudRegistrationAwsValidateAccounts' operation.
 */
async function handleCloudRegistrationAwsValidateAccounts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Validates AWS account registration status. */
	const accountId = c.getNodeParameter('accountId', i, '') as string;
	const iamRoleArn = c.getNodeParameter('iamRoleArn', i, '') as string;
	const organizationId = c.getNodeParameter('organizationId', i, '') as string;

	return await fc.cloudAwsRegistration.cloudRegistrationAwsValidateAccounts(accountId || undefined, iamRoleArn || undefined, organizationId || undefined);
}

/** Main execution handler for Cloud AWS Registration operations. */
export async function executeCloudAwsRegistration(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'cloudRegistrationAwsCreateAccount': return await handleCloudRegistrationAwsCreateAccount(this, index, falconClient);
		case 'cloudRegistrationAwsDeleteAccount': return await handleCloudRegistrationAwsDeleteAccount(this, index, falconClient);
		case 'cloudRegistrationAwsGetAccounts': return await handleCloudRegistrationAwsGetAccounts(this, index, falconClient);
		case 'cloudRegistrationAwsQueryAccounts': return await handleCloudRegistrationAwsQueryAccounts(this, index, falconClient);
		case 'cloudRegistrationAwsTriggerHealthCheck': return await handleCloudRegistrationAwsTriggerHealthCheck(this, index, falconClient);
		case 'cloudRegistrationAwsUpdateAccount': return await handleCloudRegistrationAwsUpdateAccount(this, index, falconClient);
		case 'cloudRegistrationAwsValidateAccounts': return await handleCloudRegistrationAwsValidateAccounts(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Cloud AWS Registration.`);
	}
}
