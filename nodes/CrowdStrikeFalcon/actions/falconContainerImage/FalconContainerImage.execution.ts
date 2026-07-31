import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'createRegistryEntities' operation.
 */
async function handleCreateRegistryEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create a new registry entity. */
	return await fc.falconContainerImage.createRegistryEntities(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteRegistryEntities' operation.
 */
async function handleDeleteRegistryEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete registry entity by UUID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.falconContainerImage.deleteRegistryEntities(id);
}

/**
 * Handles the 'downloadExportFile' operation.
 */
async function handleDownloadExportFile(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download export file by ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.falconContainerImage.downloadExportFile(id);
}

/**
 * Handles the 'getReportByReference' operation.
 */
async function handleGetReportByReference(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get image assessment scan report by image reference (v2). */
	const registry = getStringParam(c, i, 'registry', '');
	const architecture = getStringParam(c, i, 'architecture', '');
	const reportFormat = getStringParam(c, i, 'reportFormat', '');
	return await fc.falconContainerImage.getReportByReference(
		registry || undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		architecture || undefined,
		reportFormat || undefined,
	);
}

/**
 * Handles the 'getReportByScanID' operation.
 */
async function handleGetReportByScanID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get image assessment scan report by scan UUID (v2). */
	const uuid = getStringParam(c, i, 'id', '');
	const reportFormat = getStringParam(c, i, 'reportFormat', '');
	return await fc.falconContainerImage.getReportByScanID(uuid, reportFormat || undefined);
}

/**
 * Handles the 'headImageScanInventory' operation.
 */
async function handleHeadImageScanInventory(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get headers for POST request for image scan inventory. */
	return await fc.falconContainerImage.headImageScanInventory();
}

/**
 * Handles the 'launchExportJob' operation.
 */
async function handleLaunchExportJob(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Launch an export job of a Container Security resource. */
	return await fc.falconContainerImage.launchExportJob(parseJsonParam(c, i));
}

/**
 * Handles the 'policyChecks' operation.
 */
async function handlePolicyChecks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Check image prevention policies. */
	const repository = getStringParam(c, i, 'repository', '');
	const tag = getStringParam(c, i, 'tag', '');
	const registry = getStringParam(c, i, 'registry', '');
	const architecture = getStringParam(c, i, 'architecture', '');
	return await fc.falconContainerImage.policyChecks(repository, tag, registry || undefined, architecture || undefined);
}

/**
 * Handles the 'postImageScanInventory' operation.
 */
async function handlePostImageScanInventory(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Post image scan inventory. */
	return await fc.falconContainerImage.postImageScanInventory(parseJsonParam(c, i));
}

/**
 * Handles the 'queryExportJobs' operation.
 */
async function handleQueryExportJobs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query export jobs entities. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.falconContainerImage.queryExportJobs(filter || undefined);
}

/**
 * Handles the 'readExportJobs' operation.
 */
async function handleReadExportJobs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Read export jobs entities. */
	return await fc.falconContainerImage.readExportJobs(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'readRegistryEntities' operation.
 */
async function handleReadRegistryEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves a list of registry entities identified by customer ID. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.falconContainerImage.readRegistryEntities(limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'readRegistryEntitiesByUUID' operation.
 */
async function handleReadRegistryEntitiesByUUID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves a list of registry entities by provided UUIDs. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.falconContainerImage.readRegistryEntitiesByUUID(ids);
}

/**
 * Handles the 'updateRegistryEntities' operation.
 */
async function handleUpdateRegistryEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update registry entity identified by entity UUID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.falconContainerImage.updateRegistryEntities(id, parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Container Image operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeFalconContainerImage(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createRegistryEntities': return await handleCreateRegistryEntities(this, index, falconClient);
		case 'deleteRegistryEntities': return await handleDeleteRegistryEntities(this, index, falconClient);
		case 'downloadExportFile': return await handleDownloadExportFile(this, index, falconClient);
		case 'getReportByReference': return await handleGetReportByReference(this, index, falconClient);
		case 'getReportByScanID': return await handleGetReportByScanID(this, index, falconClient);
		case 'headImageScanInventory': return await handleHeadImageScanInventory(this, index, falconClient);
		case 'launchExportJob': return await handleLaunchExportJob(this, index, falconClient);
		case 'policyChecks': return await handlePolicyChecks(this, index, falconClient);
		case 'postImageScanInventory': return await handlePostImageScanInventory(this, index, falconClient);
		case 'queryExportJobs': return await handleQueryExportJobs(this, index, falconClient);
		case 'readExportJobs': return await handleReadExportJobs(this, index, falconClient);
		case 'readRegistryEntities': return await handleReadRegistryEntities(this, index, falconClient);
		case 'readRegistryEntitiesByUUID': return await handleReadRegistryEntitiesByUUID(this, index, falconClient);
		case 'updateRegistryEntities': return await handleUpdateRegistryEntities(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Falcon Container Image.`);
	}
}
