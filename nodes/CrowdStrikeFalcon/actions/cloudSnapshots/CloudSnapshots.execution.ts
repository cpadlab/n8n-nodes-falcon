import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'createDeploymentEntity' operation.
 */
async function handleCreateDeploymentEntity(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Launches a snapshot scan for a cloud asset. */
	return await fc.cloudSnapshots.createDeploymentEntity(parseJsonParam(c, i));
}

/**
 * Handles the 'getCredentialsMixin0Mixin60' operation.
 */
async function handleGetCredentialsMixin0Mixin60(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets registry credentials. */
	return await fc.cloudSnapshots.getCredentialsMixin0Mixin60();
}

/**
 * Handles the 'getScanReport' operation.
 */
async function handleGetScanReport(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves scan report for instance IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudSnapshots.getScanReport(ids);
}

/**
 * Handles the 'readDeploymentsCombined' operation.
 */
async function handleReadDeploymentsCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves snapshot jobs matching criteria. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	return await fc.cloudSnapshots.readDeploymentsCombined(filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'readDeploymentsEntities' operation.
 */
async function handleReadDeploymentsEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves snapshot jobs by IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudSnapshots.readDeploymentsEntities(ids.length ? ids : undefined);
}

/**
 * Handles the 'register' operation.
 */
async function handleRegister(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Registers cloud account for snapshot scanning. */
	return await fc.cloudSnapshots.register(parseJsonParam(c, i));
}

/** Main execution handler for Cloud Snapshots operations. */
export async function executeCloudSnapshots(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createDeploymentEntity': return await handleCreateDeploymentEntity(this, index, falconClient);
		case 'getCredentialsMixin0Mixin60': return await handleGetCredentialsMixin0Mixin60(this, index, falconClient);
		case 'getScanReport': return await handleGetScanReport(this, index, falconClient);
		case 'readDeploymentsCombined': return await handleReadDeploymentsCombined(this, index, falconClient);
		case 'readDeploymentsEntities': return await handleReadDeploymentsEntities(this, index, falconClient);
		case 'register': return await handleRegister(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Cloud Snapshots.`);
	}
}
