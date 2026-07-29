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

/** Handles azureDownloadCertificate */
async function handleAzureDownloadCertificate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Downloads Azure certificate. */
	return await fc.cspmRegistration.azureDownloadCertificate(parseArrayParam(c, i, 'tenantIds'));
}

/** Handles azureRefreshCertificate */
async function handleAzureRefreshCertificate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Refreshes Azure certificate. */
	return await fc.cspmRegistration.azureRefreshCertificate(parseArrayParam(c, i, 'tenantIds'));
}

/** Handles connectCSPMGCPAccount */
async function handleConnectCSPMGCPAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Connects CSPM GCP account. */
	return await fc.cspmRegistration.connectCSPMGCPAccount(parseJsonParam(c, i));
}

/** Handles createCSPMAwsAccount */
async function handleCreateCSPMAwsAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates CSPM AWS account. */
	return await fc.cspmRegistration.createCSPMAwsAccount(parseJsonParam(c, i));
}

/** Handles createCSPMAzureAccount */
async function handleCreateCSPMAzureAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates CSPM Azure account. */
	return await fc.cspmRegistration.createCSPMAzureAccount(parseJsonParam(c, i));
}

/** Handles createCSPMAzureManagementGroup */
async function handleCreateCSPMAzureManagementGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates CSPM Azure management group. */
	return await fc.cspmRegistration.createCSPMAzureManagementGroup(parseJsonParam(c, i));
}

/** Handles createCSPMGCPAccount */
async function handleCreateCSPMGCPAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates CSPM GCP account. */
	return await fc.cspmRegistration.createCSPMGCPAccount(parseJsonParam(c, i));
}

/** Handles deleteCSPMAwsAccount */
async function handleDeleteCSPMAwsAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes CSPM AWS account. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.cspmRegistration.deleteCSPMAwsAccount(ids.length ? ids : undefined);
}

/** Handles deleteCSPMAzureAccount */
async function handleDeleteCSPMAzureAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes CSPM Azure account. */
	const ids = parseArrayParam(c, i, 'ids');
	const tenantIds = parseArrayParam(c, i, 'tenantIds');
	return await fc.cspmRegistration.deleteCSPMAzureAccount(ids.length ? ids : undefined, tenantIds.length ? tenantIds : undefined);
}

/** Handles deleteCSPMAzureManagementGroup */
async function handleDeleteCSPMAzureManagementGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes CSPM Azure management group. */
	const tenantIds = parseArrayParam(c, i, 'tenantIds');
	return await fc.cspmRegistration.deleteCSPMAzureManagementGroup(tenantIds.length ? tenantIds : undefined);
}

/** Handles deleteCSPMGCPAccount */
async function handleDeleteCSPMGCPAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes CSPM GCP account. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.cspmRegistration.deleteCSPMGCPAccount(ids.length ? ids : undefined);
}

/** Handles getBehaviorDetections */
async function handleGetBehaviorDetections(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets behavior detections. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.cspmRegistration.getBehaviorDetections(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, limit || undefined);
}

/** Handles getCSPMAwsAccount */
async function handleGetCSPMAwsAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM AWS account status. */
	const ids = parseArrayParam(c, i, 'ids');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cspmRegistration.getCSPMAwsAccount(undefined, ids.length ? ids : undefined, undefined, undefined, undefined, limit || undefined, undefined, undefined, offset || undefined);
}

/** Handles getCSPMAwsConsoleSetupURLs */
async function handleGetCSPMAwsConsoleSetupURLs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM AWS console setup URLs. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.cspmRegistration.getCSPMAwsConsoleSetupURLs(ids.length ? ids : undefined);
}

/** Handles getCSPMAzureAccount */
async function handleGetCSPMAzureAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM Azure account info. */
	const ids = parseArrayParam(c, i, 'ids');
	const tenantIds = parseArrayParam(c, i, 'tenantIds');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cspmRegistration.getCSPMAzureAccount(ids.length ? ids : undefined, tenantIds.length ? tenantIds : undefined, undefined, undefined, undefined, limit || undefined, offset || undefined);
}

/** Handles getCSPMAzureManagementGroup */
async function handleGetCSPMAzureManagementGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM Azure management group info. */
	const tenantIds = parseArrayParam(c, i, 'tenantIds');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cspmRegistration.getCSPMAzureManagementGroup(tenantIds.length ? tenantIds : undefined, limit || undefined, offset || undefined);
}

/** Handles getCSPMAzureUserScriptsAttachment */
async function handleGetCSPMAzureUserScriptsAttachment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets Azure user scripts attachment. */
	return await fc.cspmRegistration.getCSPMAzureUserScriptsAttachment();
}

/** Handles getCSPMGCPAccount */
async function handleGetCSPMGCPAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM GCP account status. */
	const ids = parseArrayParam(c, i, 'ids');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	return await fc.cspmRegistration.getCSPMGCPAccount(undefined, ids.length ? ids : undefined, undefined, undefined, limit || undefined, offset || undefined, sort || undefined);
}

/** Handles getCSPMGCPServiceAccountsExt */
async function handleGetCSPMGCPServiceAccountsExt(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM GCP service accounts ext. */
	const id = c.getNodeParameter('idSingle', i, '') as string;
	return await fc.cspmRegistration.getCSPMGCPServiceAccountsExt(id || undefined);
}

/** Handles getCSPMGCPUserScriptsAttachment */
async function handleGetCSPMGCPUserScriptsAttachment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets GCP user scripts attachment. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.cspmRegistration.getCSPMGCPUserScriptsAttachment(undefined, ids.length ? ids : undefined);
}

/** Handles getCSPMGCPValidateAccountsExt */
async function handleGetCSPMGCPValidateAccountsExt(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Runs GCP validate accounts ext. */
	return await fc.cspmRegistration.getCSPMGCPValidateAccountsExt(parseJsonParam(c, i));
}

/** Handles getCSPMPoliciesDetails */
async function handleGetCSPMPoliciesDetails(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM policies details. */
	const policyIdsString = c.getNodeParameter('policyIds', i, '') as string;
	const ids = policyIdsString.split(',').map((id) => Number(id.trim())).filter((n) => !isNaN(n));
	return await fc.cspmRegistration.getCSPMPoliciesDetails(ids);
}

/** Handles getCSPMPolicy */
async function handleGetCSPMPolicy(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM policy. */
	const ids = c.getNodeParameter('policyIdNum', i) as number;
	return await fc.cspmRegistration.getCSPMPolicy(ids);
}

/** Handles getCSPMPolicySettings */
async function handleGetCSPMPolicySettings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM policy settings. */
	return await fc.cspmRegistration.getCSPMPolicySettings();
}

/** Handles getCSPMScanSchedule */
async function handleGetCSPMScanSchedule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM scan schedule. */
	return await fc.cspmRegistration.getCSPMScanSchedule();
}

/** Handles getCloudEventIDs */
async function handleGetCloudEventIDs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets cloud event IDs. */
	const xCSUSERUUID = c.getNodeParameter('xCSUSERUUID', i) as string;
	const id = c.getNodeParameter('eventId', i) as string;
	return await fc.cspmRegistration.getCloudEventIDs(xCSUSERUUID, id);
}

/** Handles getConfigurationDetectionEntities */
async function handleGetConfigurationDetectionEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets configuration detection entities. */
	return await fc.cspmRegistration.getConfigurationDetectionEntities(parseArrayParam(c, i, 'ids'));
}

/** Handles getConfigurationDetectionIDsV2 */
async function handleGetConfigurationDetectionIDsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets configuration detection IDs V2. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cspmRegistration.getConfigurationDetectionIDsV2(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles getConfigurationDetections */
async function handleGetConfigurationDetections(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets configuration detections (deprecated). */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.cspmRegistration.getConfigurationDetections(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, limit || undefined);
}

/** Handles patchCSPMAwsAccount */
async function handlePatchCSPMAwsAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Patches CSPM AWS account. */
	return await fc.cspmRegistration.patchCSPMAwsAccount(parseJsonParam(c, i));
}

/** Handles updateCSPMAzureAccount */
async function handleUpdateCSPMAzureAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates CSPM Azure account. */
	return await fc.cspmRegistration.updateCSPMAzureAccount(parseJsonParam(c, i));
}

/** Handles updateCSPMAzureAccountClientID */
async function handleUpdateCSPMAzureAccountClientID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates CSPM Azure account client ID. */
	const id = c.getNodeParameter('idSingle', i) as string;
	return await fc.cspmRegistration.updateCSPMAzureAccountClientID(id);
}

/** Handles updateCSPMAzureTenantDefaultSubscriptionID */
async function handleUpdateCSPMAzureTenantDefaultSubscriptionID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates Azure tenant default subscription ID. */
	const subscriptionId = c.getNodeParameter('subscriptionId', i) as string;
	return await fc.cspmRegistration.updateCSPMAzureTenantDefaultSubscriptionID(subscriptionId);
}

/** Handles updateCSPMGCPAccount */
async function handleUpdateCSPMGCPAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates CSPM GCP account. */
	return await fc.cspmRegistration.updateCSPMGCPAccount(parseJsonParam(c, i));
}

/** Handles updateCSPMGCPServiceAccountsExt */
async function handleUpdateCSPMGCPServiceAccountsExt(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates CSPM GCP service accounts ext. */
	return await fc.cspmRegistration.updateCSPMGCPServiceAccountsExt(parseJsonParam(c, i));
}

/** Handles updateCSPMPolicySettings */
async function handleUpdateCSPMPolicySettings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates CSPM policy settings. */
	return await fc.cspmRegistration.updateCSPMPolicySettings(parseJsonParam(c, i));
}

/** Handles updateCSPMScanSchedule */
async function handleUpdateCSPMScanSchedule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates CSPM scan schedule. */
	return await fc.cspmRegistration.updateCSPMScanSchedule(parseJsonParam(c, i));
}

/** Handles validateCSPMGCPServiceAccountExt */
async function handleValidateCSPMGCPServiceAccountExt(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Validates CSPM GCP service account ext. */
	return await fc.cspmRegistration.validateCSPMGCPServiceAccountExt(parseJsonParam(c, i));
}

/** Main execution handler for CSPM Registration operations. */
export async function executeCspmRegistration(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'azureDownloadCertificate': return await handleAzureDownloadCertificate(this, index, falconClient);
		case 'azureRefreshCertificate': return await handleAzureRefreshCertificate(this, index, falconClient);
		case 'connectCSPMGCPAccount': return await handleConnectCSPMGCPAccount(this, index, falconClient);
		case 'createCSPMAwsAccount': return await handleCreateCSPMAwsAccount(this, index, falconClient);
		case 'createCSPMAzureAccount': return await handleCreateCSPMAzureAccount(this, index, falconClient);
		case 'createCSPMAzureManagementGroup': return await handleCreateCSPMAzureManagementGroup(this, index, falconClient);
		case 'createCSPMGCPAccount': return await handleCreateCSPMGCPAccount(this, index, falconClient);
		case 'deleteCSPMAwsAccount': return await handleDeleteCSPMAwsAccount(this, index, falconClient);
		case 'deleteCSPMAzureAccount': return await handleDeleteCSPMAzureAccount(this, index, falconClient);
		case 'deleteCSPMAzureManagementGroup': return await handleDeleteCSPMAzureManagementGroup(this, index, falconClient);
		case 'deleteCSPMGCPAccount': return await handleDeleteCSPMGCPAccount(this, index, falconClient);
		case 'getBehaviorDetections': return await handleGetBehaviorDetections(this, index, falconClient);
		case 'getCSPMAwsAccount': return await handleGetCSPMAwsAccount(this, index, falconClient);
		case 'getCSPMAwsConsoleSetupURLs': return await handleGetCSPMAwsConsoleSetupURLs(this, index, falconClient);
		case 'getCSPMAzureAccount': return await handleGetCSPMAzureAccount(this, index, falconClient);
		case 'getCSPMAzureManagementGroup': return await handleGetCSPMAzureManagementGroup(this, index, falconClient);
		case 'getCSPMAzureUserScriptsAttachment': return await handleGetCSPMAzureUserScriptsAttachment(this, index, falconClient);
		case 'getCSPMGCPAccount': return await handleGetCSPMGCPAccount(this, index, falconClient);
		case 'getCSPMGCPServiceAccountsExt': return await handleGetCSPMGCPServiceAccountsExt(this, index, falconClient);
		case 'getCSPMGCPUserScriptsAttachment': return await handleGetCSPMGCPUserScriptsAttachment(this, index, falconClient);
		case 'getCSPMGCPValidateAccountsExt': return await handleGetCSPMGCPValidateAccountsExt(this, index, falconClient);
		case 'getCSPMPoliciesDetails': return await handleGetCSPMPoliciesDetails(this, index, falconClient);
		case 'getCSPMPolicy': return await handleGetCSPMPolicy(this, index, falconClient);
		case 'getCSPMPolicySettings': return await handleGetCSPMPolicySettings(this, index, falconClient);
		case 'getCSPMScanSchedule': return await handleGetCSPMScanSchedule(this, index, falconClient);
		case 'getCloudEventIDs': return await handleGetCloudEventIDs(this, index, falconClient);
		case 'getConfigurationDetectionEntities': return await handleGetConfigurationDetectionEntities(this, index, falconClient);
		case 'getConfigurationDetectionIDsV2': return await handleGetConfigurationDetectionIDsV2(this, index, falconClient);
		case 'getConfigurationDetections': return await handleGetConfigurationDetections(this, index, falconClient);
		case 'patchCSPMAwsAccount': return await handlePatchCSPMAwsAccount(this, index, falconClient);
		case 'updateCSPMAzureAccount': return await handleUpdateCSPMAzureAccount(this, index, falconClient);
		case 'updateCSPMAzureAccountClientID': return await handleUpdateCSPMAzureAccountClientID(this, index, falconClient);
		case 'updateCSPMAzureTenantDefaultSubscriptionID': return await handleUpdateCSPMAzureTenantDefaultSubscriptionID(this, index, falconClient);
		case 'updateCSPMGCPAccount': return await handleUpdateCSPMGCPAccount(this, index, falconClient);
		case 'updateCSPMGCPServiceAccountsExt': return await handleUpdateCSPMGCPServiceAccountsExt(this, index, falconClient);
		case 'updateCSPMPolicySettings': return await handleUpdateCSPMPolicySettings(this, index, falconClient);
		case 'updateCSPMScanSchedule': return await handleUpdateCSPMScanSchedule(this, index, falconClient);
		case 'validateCSPMGCPServiceAccountExt': return await handleValidateCSPMGCPServiceAccountExt(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for CSPM Registration.`);
	}
}
