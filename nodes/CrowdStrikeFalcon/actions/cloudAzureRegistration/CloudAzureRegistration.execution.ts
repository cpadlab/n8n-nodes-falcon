import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'cloudRegistrationAzureCreateRegistration' operation.
 */
async function handleCloudRegistrationAzureCreateRegistration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates an Azure registration. */
	return await fc.cloudAzureRegistration.cloudRegistrationAzureCreateRegistration(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudRegistrationAzureCreateSuppressions' operation.
 */
async function handleCloudRegistrationAzureCreateSuppressions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates Azure issue suppression rules. */
	return await fc.cloudAzureRegistration.cloudRegistrationAzureCreateSuppressions(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudRegistrationAzureDeleteLegacySubscription' operation.
 */
async function handleCloudRegistrationAzureDeleteLegacySubscription(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes legacy Azure subscriptions. */
	return await fc.cloudAzureRegistration.cloudRegistrationAzureDeleteLegacySubscription(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudRegistrationAzureDeleteRegistration' operation.
 */
async function handleCloudRegistrationAzureDeleteRegistration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes Azure registrations by tenant IDs. */
	const tenantIdsString = c.getNodeParameter('tenantIds', i, '') as string;
	const tenantIds = tenantIdsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudAzureRegistration.cloudRegistrationAzureDeleteRegistration(tenantIds);
}

/**
 * Handles the 'cloudRegistrationAzureDeleteSuppressions' operation.
 */
async function handleCloudRegistrationAzureDeleteSuppressions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes Azure suppression rules. */
	return await fc.cloudAzureRegistration.cloudRegistrationAzureDeleteSuppressions(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudRegistrationAzureDownloadScript' operation.
 */
async function handleCloudRegistrationAzureDownloadScript(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Downloads Azure provision script. */
	return await fc.cloudAzureRegistration.cloudRegistrationAzureDownloadScript(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudRegistrationAzureGetIssueSuppressionValuesByField' operation.
 */
async function handleCloudRegistrationAzureGetIssueSuppressionValuesByField(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets issue suppression values by field. */
	const registrationId = c.getNodeParameter('registrationId', i) as string;
	const field = c.getNodeParameter('field', i) as any;
	return await fc.cloudAzureRegistration.cloudRegistrationAzureGetIssueSuppressionValuesByField(registrationId, field);
}

/**
 * Handles the 'cloudRegistrationAzureGetIssueValuesByField' operation.
 */
async function handleCloudRegistrationAzureGetIssueValuesByField(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets issue values by field. */
	const registrationId = c.getNodeParameter('registrationId', i) as string;
	const field = c.getNodeParameter('field', i) as any;
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.cloudAzureRegistration.cloudRegistrationAzureGetIssueValuesByField(registrationId, field, filter || undefined);
}

/**
 * Handles the 'cloudRegistrationAzureGetIssues' operation.
 */
async function handleCloudRegistrationAzureGetIssues(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves Azure issues. */
	const registrationId = c.getNodeParameter('registrationId', i) as string;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cloudAzureRegistration.cloudRegistrationAzureGetIssues(registrationId, filter || undefined, undefined, undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'cloudRegistrationAzureGetRegistration' operation.
 */
async function handleCloudRegistrationAzureGetRegistration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves Azure registration. */
	const tenantId = c.getNodeParameter('tenantId', i, '') as string;
	const registrationId = c.getNodeParameter('registrationId', i, '') as string;
	return await fc.cloudAzureRegistration.cloudRegistrationAzureGetRegistration(tenantId || undefined, registrationId || undefined);
}

/**
 * Handles the 'cloudRegistrationAzureGetScript' operation.
 */
async function handleCloudRegistrationAzureGetScript(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Downloads Azure deployment script. */
	const tenantId = c.getNodeParameter('tenantId', i) as string;
	return await fc.cloudAzureRegistration.cloudRegistrationAzureGetScript(tenantId);
}

/**
 * Handles the 'cloudRegistrationAzureGetScriptVersions' operation.
 */
async function handleCloudRegistrationAzureGetScriptVersions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves available Azure script versions. */
	const deploymentMethod = c.getNodeParameter('deploymentMethod', i) as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cloudAzureRegistration.cloudRegistrationAzureGetScriptVersions(deploymentMethod, undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'cloudRegistrationAzureGetSuppressions' operation.
 */
async function handleCloudRegistrationAzureGetSuppressions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves Azure suppressions. */
	const registrationId = c.getNodeParameter('registrationId', i) as string;
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cloudAzureRegistration.cloudRegistrationAzureGetSuppressions(registrationId, filter || undefined, undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'cloudRegistrationAzureTriggerHealthCheck' operation.
 */
async function handleCloudRegistrationAzureTriggerHealthCheck(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Triggers health check scan for Azure. */
	const tenantIdsString = c.getNodeParameter('tenantIds', i, '') as string;
	const tenantIds = tenantIdsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudAzureRegistration.cloudRegistrationAzureTriggerHealthCheck(tenantIds.length ? tenantIds : undefined);
}

/**
 * Handles the 'cloudRegistrationAzureUpdateRegistration' operation.
 */
async function handleCloudRegistrationAzureUpdateRegistration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates Azure registration. */
	return await fc.cloudAzureRegistration.cloudRegistrationAzureUpdateRegistration(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudRegistrationAzureUpdateSuppressions' operation.
 */
async function handleCloudRegistrationAzureUpdateSuppressions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates Azure suppression rules. */
	return await fc.cloudAzureRegistration.cloudRegistrationAzureUpdateSuppressions(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudRegistrationAzureValidateRegistration' operation.
 */
async function handleCloudRegistrationAzureValidateRegistration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Validates Azure registration status. */
	const tenantId = c.getNodeParameter('tenantId', i) as string;
	return await fc.cloudAzureRegistration.cloudRegistrationAzureValidateRegistration(tenantId);
}

/** Main execution handler for Cloud Azure Registration operations. */
export async function executeCloudAzureRegistration(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'cloudRegistrationAzureCreateRegistration': return await handleCloudRegistrationAzureCreateRegistration(this, index, falconClient);
		case 'cloudRegistrationAzureCreateSuppressions': return await handleCloudRegistrationAzureCreateSuppressions(this, index, falconClient);
		case 'cloudRegistrationAzureDeleteLegacySubscription': return await handleCloudRegistrationAzureDeleteLegacySubscription(this, index, falconClient);
		case 'cloudRegistrationAzureDeleteRegistration': return await handleCloudRegistrationAzureDeleteRegistration(this, index, falconClient);
		case 'cloudRegistrationAzureDeleteSuppressions': return await handleCloudRegistrationAzureDeleteSuppressions(this, index, falconClient);
		case 'cloudRegistrationAzureDownloadScript': return await handleCloudRegistrationAzureDownloadScript(this, index, falconClient);
		case 'cloudRegistrationAzureGetIssueSuppressionValuesByField': return await handleCloudRegistrationAzureGetIssueSuppressionValuesByField(this, index, falconClient);
		case 'cloudRegistrationAzureGetIssueValuesByField': return await handleCloudRegistrationAzureGetIssueValuesByField(this, index, falconClient);
		case 'cloudRegistrationAzureGetIssues': return await handleCloudRegistrationAzureGetIssues(this, index, falconClient);
		case 'cloudRegistrationAzureGetRegistration': return await handleCloudRegistrationAzureGetRegistration(this, index, falconClient);
		case 'cloudRegistrationAzureGetScript': return await handleCloudRegistrationAzureGetScript(this, index, falconClient);
		case 'cloudRegistrationAzureGetScriptVersions': return await handleCloudRegistrationAzureGetScriptVersions(this, index, falconClient);
		case 'cloudRegistrationAzureGetSuppressions': return await handleCloudRegistrationAzureGetSuppressions(this, index, falconClient);
		case 'cloudRegistrationAzureTriggerHealthCheck': return await handleCloudRegistrationAzureTriggerHealthCheck(this, index, falconClient);
		case 'cloudRegistrationAzureUpdateRegistration': return await handleCloudRegistrationAzureUpdateRegistration(this, index, falconClient);
		case 'cloudRegistrationAzureUpdateSuppressions': return await handleCloudRegistrationAzureUpdateSuppressions(this, index, falconClient);
		case 'cloudRegistrationAzureValidateRegistration': return await handleCloudRegistrationAzureValidateRegistration(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Cloud Azure Registration.`);
	}
}
