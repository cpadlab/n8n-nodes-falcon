import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'azureDownloadCertificate' operation.
 */
async function handleAzureDownloadCertificate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Downloads Azure certificate. */
	return await fc.cspmRegistration.azureDownloadCertificate(parseArrayParam(c, i, 'tenantIds'));
}

/**
 * Handles the 'azureRefreshCertificate' operation.
 */
async function handleAzureRefreshCertificate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Refreshes Azure certificate. */
	return await fc.cspmRegistration.azureRefreshCertificate(parseArrayParam(c, i, 'tenantIds'));
}

/**
 * Handles the 'connectCSPMGCPAccount' operation.
 */
async function handleConnectCSPMGCPAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Connects CSPM GCP account. */
	return await fc.cspmRegistration.connectCSPMGCPAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'createCSPMAwsAccount' operation.
 */
async function handleCreateCSPMAwsAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates CSPM AWS account. */
	return await fc.cspmRegistration.createCSPMAwsAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'createCSPMAzureAccount' operation.
 */
async function handleCreateCSPMAzureAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates CSPM Azure account. */
	return await fc.cspmRegistration.createCSPMAzureAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'createCSPMAzureManagementGroup' operation.
 */
async function handleCreateCSPMAzureManagementGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates CSPM Azure management group. */
	return await fc.cspmRegistration.createCSPMAzureManagementGroup(parseJsonParam(c, i));
}

/**
 * Handles the 'createCSPMGCPAccount' operation.
 */
async function handleCreateCSPMGCPAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates CSPM GCP account. */
	return await fc.cspmRegistration.createCSPMGCPAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteCSPMAwsAccount' operation.
 */
async function handleDeleteCSPMAwsAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes CSPM AWS account. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.cspmRegistration.deleteCSPMAwsAccount(ids.length ? ids : undefined);
}

/**
 * Handles the 'deleteCSPMAzureAccount' operation.
 */
async function handleDeleteCSPMAzureAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes CSPM Azure account. */
	const ids = parseArrayParam(c, i, 'ids');
	const tenantIds = parseArrayParam(c, i, 'tenantIds');
	return await fc.cspmRegistration.deleteCSPMAzureAccount(ids.length ? ids : undefined, tenantIds.length ? tenantIds : undefined);
}

/**
 * Handles the 'deleteCSPMAzureManagementGroup' operation.
 */
async function handleDeleteCSPMAzureManagementGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes CSPM Azure management group. */
	const tenantIds = parseArrayParam(c, i, 'tenantIds');
	return await fc.cspmRegistration.deleteCSPMAzureManagementGroup(tenantIds.length ? tenantIds : undefined);
}

/**
 * Handles the 'deleteCSPMGCPAccount' operation.
 */
async function handleDeleteCSPMGCPAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes CSPM GCP account. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.cspmRegistration.deleteCSPMGCPAccount(ids.length ? ids : undefined);
}

/**
 * Handles the 'getBehaviorDetections' operation.
 */
async function handleGetBehaviorDetections(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets behavior detections. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.cspmRegistration.getBehaviorDetections(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, limit || undefined);
}

/**
 * Handles the 'getCSPMAwsAccount' operation.
 */
async function handleGetCSPMAwsAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM AWS account status. */
	const ids = parseArrayParam(c, i, 'ids');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cspmRegistration.getCSPMAwsAccount(undefined, ids.length ? ids : undefined, undefined, undefined, undefined, limit || undefined, undefined, undefined, offset || undefined);
}

/**
 * Handles the 'getCSPMAwsConsoleSetupURLs' operation.
 */
async function handleGetCSPMAwsConsoleSetupURLs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM AWS console setup URLs. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.cspmRegistration.getCSPMAwsConsoleSetupURLs(ids.length ? ids : undefined);
}

/**
 * Handles the 'getCSPMAzureAccount' operation.
 */
async function handleGetCSPMAzureAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM Azure account info. */
	const ids = parseArrayParam(c, i, 'ids');
	const tenantIds = parseArrayParam(c, i, 'tenantIds');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cspmRegistration.getCSPMAzureAccount(ids.length ? ids : undefined, tenantIds.length ? tenantIds : undefined, undefined, undefined, undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getCSPMAzureManagementGroup' operation.
 */
async function handleGetCSPMAzureManagementGroup(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM Azure management group info. */
	const tenantIds = parseArrayParam(c, i, 'tenantIds');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cspmRegistration.getCSPMAzureManagementGroup(tenantIds.length ? tenantIds : undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getCSPMAzureUserScriptsAttachment' operation.
 */
async function handleGetCSPMAzureUserScriptsAttachment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets Azure user scripts attachment. */
	return await fc.cspmRegistration.getCSPMAzureUserScriptsAttachment();
}

/**
 * Handles the 'getCSPMGCPAccount' operation.
 */
async function handleGetCSPMGCPAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM GCP account status. */
	const ids = parseArrayParam(c, i, 'ids');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	return await fc.cspmRegistration.getCSPMGCPAccount(undefined, ids.length ? ids : undefined, undefined, undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'getCSPMGCPServiceAccountsExt' operation.
 */
async function handleGetCSPMGCPServiceAccountsExt(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM GCP service accounts ext. */
	const id = c.getNodeParameter('idSingle', i, '') as string;
	return await fc.cspmRegistration.getCSPMGCPServiceAccountsExt(id || undefined);
}

/**
 * Handles the 'getCSPMGCPUserScriptsAttachment' operation.
 */
async function handleGetCSPMGCPUserScriptsAttachment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets GCP user scripts attachment. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.cspmRegistration.getCSPMGCPUserScriptsAttachment(undefined, ids.length ? ids : undefined);
}

/**
 * Handles the 'getCSPMGCPValidateAccountsExt' operation.
 */
async function handleGetCSPMGCPValidateAccountsExt(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Runs GCP validate accounts ext. */
	return await fc.cspmRegistration.getCSPMGCPValidateAccountsExt(parseJsonParam(c, i));
}

/**
 * Handles the 'getCSPMPoliciesDetails' operation.
 */
async function handleGetCSPMPoliciesDetails(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM policies details. */
	const policyIdsString = c.getNodeParameter('policyIds', i, '') as string;
	const ids = policyIdsString.split(',').map((id) => Number(id.trim())).filter((n) => !Number.isNaN(n));
	return await fc.cspmRegistration.getCSPMPoliciesDetails(ids);
}

/**
 * Handles the 'getCSPMPolicy' operation.
 */
async function handleGetCSPMPolicy(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM policy. */
	const ids = c.getNodeParameter('policyIdNum', i) as number;
	return await fc.cspmRegistration.getCSPMPolicy(ids);
}

/**
 * Handles the 'getCSPMPolicySettings' operation.
 */
async function handleGetCSPMPolicySettings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM policy settings. */
	return await fc.cspmRegistration.getCSPMPolicySettings();
}

/**
 * Handles the 'getCSPMScanSchedule' operation.
 */
async function handleGetCSPMScanSchedule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets CSPM scan schedule. */
	return await fc.cspmRegistration.getCSPMScanSchedule();
}

/**
 * Handles the 'getCloudEventIDs' operation. // NOSONAR
 */
async function handleGetCloudEventIDs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets cloud event IDs. */
	const xCSUSERUUID = c.getNodeParameter('xCSUSERUUID', i) as string;
	const id = c.getNodeParameter('eventId', i) as string;
	return await fc.cspmRegistration.getCloudEventIDs(xCSUSERUUID, id); // NOSONAR
}

/**
 * Handles the 'getConfigurationDetectionEntities' operation.
 */
async function handleGetConfigurationDetectionEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets configuration detection entities. */
	return await fc.cspmRegistration.getConfigurationDetectionEntities(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getConfigurationDetectionIDsV2' operation.
 */
async function handleGetConfigurationDetectionIDsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets configuration detection IDs V2. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cspmRegistration.getConfigurationDetectionIDsV2(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getConfigurationDetections' operation. // NOSONAR
 */
async function handleGetConfigurationDetections(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets configuration detections (deprecated). */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.cspmRegistration.getConfigurationDetections(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, limit || undefined); // NOSONAR
}

/**
 * Handles the 'patchCSPMAwsAccount' operation.
 */
async function handlePatchCSPMAwsAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Patches CSPM AWS account. */
	return await fc.cspmRegistration.patchCSPMAwsAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'updateCSPMAzureAccount' operation.
 */
async function handleUpdateCSPMAzureAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates CSPM Azure account. */
	return await fc.cspmRegistration.updateCSPMAzureAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'updateCSPMAzureAccountClientID' operation.
 */
async function handleUpdateCSPMAzureAccountClientID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates CSPM Azure account client ID. */
	const id = c.getNodeParameter('idSingle', i) as string;
	return await fc.cspmRegistration.updateCSPMAzureAccountClientID(id);
}

/**
 * Handles the 'updateCSPMAzureTenantDefaultSubscriptionID' operation.
 */
async function handleUpdateCSPMAzureTenantDefaultSubscriptionID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates Azure tenant default subscription ID. */
	const subscriptionId = c.getNodeParameter('subscriptionId', i) as string;
	return await fc.cspmRegistration.updateCSPMAzureTenantDefaultSubscriptionID(subscriptionId);
}

/**
 * Handles the 'updateCSPMGCPAccount' operation.
 */
async function handleUpdateCSPMGCPAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates CSPM GCP account. */
	return await fc.cspmRegistration.updateCSPMGCPAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'updateCSPMGCPServiceAccountsExt' operation.
 */
async function handleUpdateCSPMGCPServiceAccountsExt(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates CSPM GCP service accounts ext. */
	return await fc.cspmRegistration.updateCSPMGCPServiceAccountsExt(parseJsonParam(c, i));
}

/**
 * Handles the 'updateCSPMPolicySettings' operation.
 */
async function handleUpdateCSPMPolicySettings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates CSPM policy settings. */
	return await fc.cspmRegistration.updateCSPMPolicySettings(parseJsonParam(c, i));
}

/**
 * Handles the 'updateCSPMScanSchedule' operation.
 */
async function handleUpdateCSPMScanSchedule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates CSPM scan schedule. */
	return await fc.cspmRegistration.updateCSPMScanSchedule(parseJsonParam(c, i));
}

/**
 * Handles the 'validateCSPMGCPServiceAccountExt' operation.
 */
async function handleValidateCSPMGCPServiceAccountExt(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Validates CSPM GCP service account ext. */
	return await fc.cspmRegistration.validateCSPMGCPServiceAccountExt(parseJsonParam(c, i));
}

/** Main execution handler for CSPM Registration operations. */
const HANDLER_MAP: Record<string, (c: IExecuteFunctions, i: number, fc: FalconClient) => Promise<any>> = {
	'azureDownloadCertificate': handleAzureDownloadCertificate,
	'azureRefreshCertificate': handleAzureRefreshCertificate,
	'connectCSPMGCPAccount': handleConnectCSPMGCPAccount,
	'createCSPMAwsAccount': handleCreateCSPMAwsAccount,
	'createCSPMAzureAccount': handleCreateCSPMAzureAccount,
	'createCSPMAzureManagementGroup': handleCreateCSPMAzureManagementGroup,
	'createCSPMGCPAccount': handleCreateCSPMGCPAccount,
	'deleteCSPMAwsAccount': handleDeleteCSPMAwsAccount,
	'deleteCSPMAzureAccount': handleDeleteCSPMAzureAccount,
	'deleteCSPMAzureManagementGroup': handleDeleteCSPMAzureManagementGroup,
	'deleteCSPMGCPAccount': handleDeleteCSPMGCPAccount,
	'getBehaviorDetections': handleGetBehaviorDetections,
	'getCSPMAwsAccount': handleGetCSPMAwsAccount,
	'getCSPMAwsConsoleSetupURLs': handleGetCSPMAwsConsoleSetupURLs,
	'getCSPMAzureAccount': handleGetCSPMAzureAccount,
	'getCSPMAzureManagementGroup': handleGetCSPMAzureManagementGroup,
	'getCSPMAzureUserScriptsAttachment': handleGetCSPMAzureUserScriptsAttachment,
	'getCSPMGCPAccount': handleGetCSPMGCPAccount,
	'getCSPMGCPServiceAccountsExt': handleGetCSPMGCPServiceAccountsExt,
	'getCSPMGCPUserScriptsAttachment': handleGetCSPMGCPUserScriptsAttachment,
	'getCSPMGCPValidateAccountsExt': handleGetCSPMGCPValidateAccountsExt,
	'getCSPMPoliciesDetails': handleGetCSPMPoliciesDetails,
	'getCSPMPolicy': handleGetCSPMPolicy,
	'getCSPMPolicySettings': handleGetCSPMPolicySettings,
	'getCSPMScanSchedule': handleGetCSPMScanSchedule,
	'getCloudEventIDs': handleGetCloudEventIDs, // NOSONAR
	'getConfigurationDetectionEntities': handleGetConfigurationDetectionEntities,
	'getConfigurationDetectionIDsV2': handleGetConfigurationDetectionIDsV2,
	'getConfigurationDetections': handleGetConfigurationDetections, // NOSONAR
	'patchCSPMAwsAccount': handlePatchCSPMAwsAccount,
	'updateCSPMAzureAccount': handleUpdateCSPMAzureAccount,
	'updateCSPMAzureAccountClientID': handleUpdateCSPMAzureAccountClientID,
	'updateCSPMAzureTenantDefaultSubscriptionID': handleUpdateCSPMAzureTenantDefaultSubscriptionID,
	'updateCSPMGCPAccount': handleUpdateCSPMGCPAccount,
	'updateCSPMGCPServiceAccountsExt': handleUpdateCSPMGCPServiceAccountsExt,
	'updateCSPMPolicySettings': handleUpdateCSPMPolicySettings,
	'updateCSPMScanSchedule': handleUpdateCSPMScanSchedule,
	'validateCSPMGCPServiceAccountExt': handleValidateCSPMGCPServiceAccountExt,
};

export async function executeCspmRegistration(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	const handler = HANDLER_MAP[operation];
	if (handler) {
		return await handler(this, index, falconClient);
	}
	throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for CspmRegistration.`); as any)), `Operation ${operation} is not supported for CSPM Registration.`);
	}
}
