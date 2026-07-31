import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseJsonParam } from '../common';

/**
 * Handles the 'dismissAffectedEntityV3' operation.
 */
async function handleDismissAffectedEntityV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Preform dismiss to an affected entity in a security check. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.saasSecurity.dismissAffectedEntityV3(id, parseJsonParam(c, i));
}

/**
 * Handles the 'dismissSecurityCheckV3' operation.
 */
async function handleDismissSecurityCheckV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Perform dismiss to a security check. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.saasSecurity.dismissSecurityCheckV3(id, parseJsonParam(c, i));
}

/**
 * Handles the 'getActivityMonitorV3' operation.
 */
async function handleGetActivityMonitorV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of all events in monitor. */
	const integrationId = getStringParam(c, i, 'integrationId', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.saasSecurity.getActivityMonitorV3(integrationId || undefined, undefined, undefined, undefined, undefined, undefined, limit || undefined);
}

/**
 * Handles the 'getAlertsV3' operation.
 */
async function handleGetAlertsV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a data on a specific alert or get a list of all alerts. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const integrationId = getStringParam(c, i, 'integrationId', '');
	return await fc.saasSecurity.getAlertsV3(undefined, limit || undefined, offset || undefined, undefined, undefined, integrationId || undefined);
}

/**
 * Handles the 'getAppInventory' operation.
 */
async function handleGetAppInventory(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of all apps in the Applications inventory. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const integrationId = getStringParam(c, i, 'integrationId', '');
	return await fc.saasSecurity.getAppInventory(undefined, limit || undefined, offset || undefined, undefined, undefined, undefined, undefined, undefined, undefined, integrationId || undefined);
}

/**
 * Handles the 'getAppInventoryUsers' operation.
 */
async function handleGetAppInventoryUsers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get users associated with an app from the Applications Inventory. */
	const itemId = getStringParam(c, i, 'itemId', '');
	return await fc.saasSecurity.getAppInventoryUsers(itemId);
}

/**
 * Handles the 'getAssetInventoryV3' operation.
 */
async function handleGetAssetInventoryV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of all assets in the Data Inventory. */
	const integrationId = getStringParam(c, i, 'integrationId', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.saasSecurity.getAssetInventoryV3(integrationId || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getDeviceInventoryV3' operation.
 */
async function handleGetDeviceInventoryV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of all devices. */
	const integrationId = getStringParam(c, i, 'integrationId', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.saasSecurity.getDeviceInventoryV3(integrationId || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getIntegrationsV3' operation.
 */
async function handleGetIntegrationsV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of connected integrations in your account. */
	return await fc.saasSecurity.getIntegrationsV3();
}

/**
 * Handles the 'getMetricsV3' operation.
 */
async function handleGetMetricsV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get metrics on security checks. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const integrationId = getStringParam(c, i, 'integrationId', '');
	return await fc.saasSecurity.getMetricsV3(undefined, limit || undefined, offset || undefined, integrationId || undefined);
}

/**
 * Handles the 'getSecurityCheckAffectedV3' operation.
 */
async function handleGetSecurityCheckAffectedV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of affected entities. */
	const id = getStringParam(c, i, 'id', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.saasSecurity.getSecurityCheckAffectedV3(id, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getSecurityCheckComplianceV3' operation.
 */
async function handleGetSecurityCheckComplianceV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of compliance standards attached to a check. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.saasSecurity.getSecurityCheckComplianceV3(id);
}

/**
 * Handles the 'getSecurityChecksV3' operation.
 */
async function handleGetSecurityChecksV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a specific security check by ID or Get all security checks. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const integrationId = getStringParam(c, i, 'integrationId', '');
	return await fc.saasSecurity.getSecurityChecksV3(undefined, limit || undefined, offset || undefined, undefined, integrationId || undefined);
}

/**
 * Handles the 'getSupportedSaasV3' operation.
 */
async function handleGetSupportedSaasV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of supported integrations. */
	return await fc.saasSecurity.getSupportedSaasV3();
}

/**
 * Handles the 'getSystemLogsV3' operation.
 */
async function handleGetSystemLogsV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of all system logs. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.saasSecurity.getSystemLogsV3(undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getSystemUsersV3' operation.
 */
async function handleGetSystemUsersV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of system users. */
	return await fc.saasSecurity.getSystemUsersV3();
}

/**
 * Handles the 'getUserInventoryV3' operation.
 */
async function handleGetUserInventoryV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of all users. */
	const integrationId = getStringParam(c, i, 'integrationId', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.saasSecurity.getUserInventoryV3(integrationId || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'integrationBuilderEndTransactionV3' operation.
 */
async function handleIntegrationBuilderEndTransactionV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Make a close transaction call after uploading the data. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.saasSecurity.integrationBuilderEndTransactionV3(id);
}

/**
 * Handles the 'integrationBuilderGetStatusV3' operation.
 */
async function handleIntegrationBuilderGetStatusV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get transaction status for a custom integration. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.saasSecurity.integrationBuilderGetStatusV3(id);
}

/**
 * Handles the 'integrationBuilderResetV3' operation.
 */
async function handleIntegrationBuilderResetV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Make a reset call to a custom integration. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.saasSecurity.integrationBuilderResetV3(id);
}

/**
 * Handles the 'integrationBuilderUploadV3' operation.
 */
async function handleIntegrationBuilderUploadV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Send data to a specific source in a custom integration. */
	const id = getStringParam(c, i, 'id', '');
	const sourceId = getStringParam(c, i, 'sourceId', '');
	return await fc.saasSecurity.integrationBuilderUploadV3(id, sourceId, parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon SaaS Security operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeSaasSecurity(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'dismissAffectedEntityV3': return await handleDismissAffectedEntityV3(this, index, falconClient);
		case 'dismissSecurityCheckV3': return await handleDismissSecurityCheckV3(this, index, falconClient);
		case 'getActivityMonitorV3': return await handleGetActivityMonitorV3(this, index, falconClient);
		case 'getAlertsV3': return await handleGetAlertsV3(this, index, falconClient);
		case 'getAppInventory': return await handleGetAppInventory(this, index, falconClient);
		case 'getAppInventoryUsers': return await handleGetAppInventoryUsers(this, index, falconClient);
		case 'getAssetInventoryV3': return await handleGetAssetInventoryV3(this, index, falconClient);
		case 'getDeviceInventoryV3': return await handleGetDeviceInventoryV3(this, index, falconClient);
		case 'getIntegrationsV3': return await handleGetIntegrationsV3(this, index, falconClient);
		case 'getMetricsV3': return await handleGetMetricsV3(this, index, falconClient);
		case 'getSecurityCheckAffectedV3': return await handleGetSecurityCheckAffectedV3(this, index, falconClient);
		case 'getSecurityCheckComplianceV3': return await handleGetSecurityCheckComplianceV3(this, index, falconClient);
		case 'getSecurityChecksV3': return await handleGetSecurityChecksV3(this, index, falconClient);
		case 'getSupportedSaasV3': return await handleGetSupportedSaasV3(this, index, falconClient);
		case 'getSystemLogsV3': return await handleGetSystemLogsV3(this, index, falconClient);
		case 'getSystemUsersV3': return await handleGetSystemUsersV3(this, index, falconClient);
		case 'getUserInventoryV3': return await handleGetUserInventoryV3(this, index, falconClient);
		case 'integrationBuilderEndTransactionV3': return await handleIntegrationBuilderEndTransactionV3(this, index, falconClient);
		case 'integrationBuilderGetStatusV3': return await handleIntegrationBuilderGetStatusV3(this, index, falconClient);
		case 'integrationBuilderResetV3': return await handleIntegrationBuilderResetV3(this, index, falconClient);
		case 'integrationBuilderUploadV3': return await handleIntegrationBuilderUploadV3(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for SaaS Security.`);
	}
}
