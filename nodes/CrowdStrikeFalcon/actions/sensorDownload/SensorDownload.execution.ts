import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'downloadSensorInstallerById' operation.
 */
async function handleDownloadSensorInstallerById(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download sensor installer by SHA256 ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sensorDownload.downloadSensorInstallerById(id);
}

/**
 * Handles the 'downloadSensorInstallerByIdV2' operation.
 */
async function handleDownloadSensorInstallerByIdV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download sensor installer by SHA256 ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sensorDownload.downloadSensorInstallerByIdV2(id);
}

/**
 * Handles the 'downloadSensorInstallerByIdV3' operation.
 */
async function handleDownloadSensorInstallerByIdV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download sensor installer by SHA256 ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.sensorDownload.downloadSensorInstallerByIdV3(id);
}

/**
 * Handles the 'getCombinedSensorInstallersByQuery' operation.
 */
async function handleGetCombinedSensorInstallersByQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get sensor installer details by provided query. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.sensorDownload.getCombinedSensorInstallersByQuery(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'getCombinedSensorInstallersByQueryV2' operation.
 */
async function handleGetCombinedSensorInstallersByQueryV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get sensor installer details by provided query. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.sensorDownload.getCombinedSensorInstallersByQueryV2(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'getCombinedSensorInstallersByQueryV3' operation.
 */
async function handleGetCombinedSensorInstallersByQueryV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get sensor installer details by provided query. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.sensorDownload.getCombinedSensorInstallersByQueryV3(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'getSensorInstallersByQuery' operation.
 */
async function handleGetSensorInstallersByQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get sensor installer IDs by provided query. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.sensorDownload.getSensorInstallersByQuery(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'getSensorInstallersByQueryV2' operation.
 */
async function handleGetSensorInstallersByQueryV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get sensor installer IDs by provided query. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.sensorDownload.getSensorInstallersByQueryV2(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'getSensorInstallersByQueryV3' operation.
 */
async function handleGetSensorInstallersByQueryV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get sensor installer IDs by provided query. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.sensorDownload.getSensorInstallersByQueryV3(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'getSensorInstallersCCIDByQuery' operation.
 */
async function handleGetSensorInstallersCCIDByQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get CCID to use with sensor installers. */
	return await fc.sensorDownload.getSensorInstallersCCIDByQuery();
}

/**
 * Handles the 'getSensorInstallersEntities' operation.
 */
async function handleGetSensorInstallersEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get sensor installer details by provided SHA256 IDs. */
	return await fc.sensorDownload.getSensorInstallersEntities(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getSensorInstallersEntitiesV2' operation.
 */
async function handleGetSensorInstallersEntitiesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get sensor installer details by provided SHA256 IDs. */
	return await fc.sensorDownload.getSensorInstallersEntitiesV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getSensorInstallersEntitiesV3' operation.
 */
async function handleGetSensorInstallersEntitiesV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get sensor installer details by provided SHA256 IDs. */
	return await fc.sensorDownload.getSensorInstallersEntitiesV3(parseArrayParam(c, i, 'ids'));
}

/**
 * Main execution handler for CrowdStrike Falcon Sensor Download operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeSensorDownload(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'downloadSensorInstallerById': return await handleDownloadSensorInstallerById(this, index, falconClient);
		case 'downloadSensorInstallerByIdV2': return await handleDownloadSensorInstallerByIdV2(this, index, falconClient);
		case 'downloadSensorInstallerByIdV3': return await handleDownloadSensorInstallerByIdV3(this, index, falconClient);
		case 'getCombinedSensorInstallersByQuery': return await handleGetCombinedSensorInstallersByQuery(this, index, falconClient);
		case 'getCombinedSensorInstallersByQueryV2': return await handleGetCombinedSensorInstallersByQueryV2(this, index, falconClient);
		case 'getCombinedSensorInstallersByQueryV3': return await handleGetCombinedSensorInstallersByQueryV3(this, index, falconClient);
		case 'getSensorInstallersByQuery': return await handleGetSensorInstallersByQuery(this, index, falconClient);
		case 'getSensorInstallersByQueryV2': return await handleGetSensorInstallersByQueryV2(this, index, falconClient);
		case 'getSensorInstallersByQueryV3': return await handleGetSensorInstallersByQueryV3(this, index, falconClient);
		case 'getSensorInstallersCCIDByQuery': return await handleGetSensorInstallersCCIDByQuery(this, index, falconClient);
		case 'getSensorInstallersEntities': return await handleGetSensorInstallersEntities(this, index, falconClient);
		case 'getSensorInstallersEntitiesV2': return await handleGetSensorInstallersEntitiesV2(this, index, falconClient);
		case 'getSensorInstallersEntitiesV3': return await handleGetSensorInstallersEntitiesV3(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Sensor Download.`);
	}
}
