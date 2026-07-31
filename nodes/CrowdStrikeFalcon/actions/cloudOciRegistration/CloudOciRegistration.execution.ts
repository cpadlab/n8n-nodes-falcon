import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'cloudSecurityRegistrationOciCreateAccount' operation.
 */
async function handleCloudSecurityRegistrationOciCreateAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates OCI tenancy account in CSPM. */
	return await fc.cloudOciRegistration.cloudSecurityRegistrationOciCreateAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudSecurityRegistrationOciDeleteAccount' operation.
 */
async function handleCloudSecurityRegistrationOciDeleteAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes OCI tenancy account. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.cloudOciRegistration.cloudSecurityRegistrationOciDeleteAccount(ids.length ? ids : undefined);
}

/**
 * Handles the 'cloudSecurityRegistrationOciDownloadScript' operation.
 */
async function handleCloudSecurityRegistrationOciDownloadScript(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Downloads OCI provision script. */
	return await fc.cloudOciRegistration.cloudSecurityRegistrationOciDownloadScript(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudSecurityRegistrationOciGetAccount' operation.
 */
async function handleCloudSecurityRegistrationOciGetAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves OCI tenancy list. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.cloudOciRegistration.cloudSecurityRegistrationOciGetAccount(filter || undefined, sort || undefined, undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'cloudSecurityRegistrationOciRotateKey' operation.
 */
async function handleCloudSecurityRegistrationOciRotateKey(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Rotates OCI tenancy key. */
	return await fc.cloudOciRegistration.cloudSecurityRegistrationOciRotateKey(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudSecurityRegistrationOciUpdateAccount' operation.
 */
async function handleCloudSecurityRegistrationOciUpdateAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates OCI tenancy account. */
	return await fc.cloudOciRegistration.cloudSecurityRegistrationOciUpdateAccount(parseJsonParam(c, i));
}

/**
 * Handles the 'cloudSecurityRegistrationOciValidateTenancy' operation.
 */
async function handleCloudSecurityRegistrationOciValidateTenancy(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Validates OCI tenancy in CSPM. */
	return await fc.cloudOciRegistration.cloudSecurityRegistrationOciValidateTenancy(parseJsonParam(c, i));
}

/** Main execution handler for Cloud OCI Registration operations. */
export async function executeCloudOciRegistration(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'cloudSecurityRegistrationOciCreateAccount': return await handleCloudSecurityRegistrationOciCreateAccount(this, index, falconClient);
		case 'cloudSecurityRegistrationOciDeleteAccount': return await handleCloudSecurityRegistrationOciDeleteAccount(this, index, falconClient);
		case 'cloudSecurityRegistrationOciDownloadScript': return await handleCloudSecurityRegistrationOciDownloadScript(this, index, falconClient);
		case 'cloudSecurityRegistrationOciGetAccount': return await handleCloudSecurityRegistrationOciGetAccount(this, index, falconClient);
		case 'cloudSecurityRegistrationOciRotateKey': return await handleCloudSecurityRegistrationOciRotateKey(this, index, falconClient);
		case 'cloudSecurityRegistrationOciUpdateAccount': return await handleCloudSecurityRegistrationOciUpdateAccount(this, index, falconClient);
		case 'cloudSecurityRegistrationOciValidateTenancy': return await handleCloudSecurityRegistrationOciValidateTenancy(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Cloud OCI Registration.`);
	}
}
