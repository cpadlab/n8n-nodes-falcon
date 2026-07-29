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

/** Handles cloudRegistrationGcpCreateRegistration */
async function handleCloudRegistrationGcpCreateRegistration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a Google Cloud Registration. */
	return await fc.cloudGoogleCloudRegistration.cloudRegistrationGcpCreateRegistration(parseJsonParam(c, i));
}

/** Handles cloudRegistrationGcpDeleteRegistration */
async function handleCloudRegistrationGcpDeleteRegistration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes a Google Cloud Registration by ID. */
	const ids = c.getNodeParameter('ids', i) as string;
	return await fc.cloudGoogleCloudRegistration.cloudRegistrationGcpDeleteRegistration(ids);
}

/** Handles cloudRegistrationGcpGetEntities */
async function handleCloudRegistrationGcpGetEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves GCP entities with filtering and pagination. */
	const idsString = c.getNodeParameter('idsArray', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;

	return await fc.cloudGoogleCloudRegistration.cloudRegistrationGcpGetEntities(ids.length ? ids : undefined, filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles cloudRegistrationGcpGetRegistration */
async function handleCloudRegistrationGcpGetRegistration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves a Google Cloud Registration by ID. */
	const ids = c.getNodeParameter('ids', i) as string;
	return await fc.cloudGoogleCloudRegistration.cloudRegistrationGcpGetRegistration(ids);
}

/** Handles cloudRegistrationGcpPostTerraformScript */
async function handleCloudRegistrationGcpPostTerraformScript(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Generates GCP Terraform deployment scripts. */
	return await fc.cloudGoogleCloudRegistration.cloudRegistrationGcpPostTerraformScript(parseJsonParam(c, i));
}

/** Handles cloudRegistrationGcpPutRegistration */
async function handleCloudRegistrationGcpPutRegistration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates or updates a Google Cloud Registration. */
	return await fc.cloudGoogleCloudRegistration.cloudRegistrationGcpPutRegistration(parseJsonParam(c, i));
}

/** Handles cloudRegistrationGcpTriggerHealthCheck */
async function handleCloudRegistrationGcpTriggerHealthCheck(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Triggers health check scan for GCP. */
	const idsString = c.getNodeParameter('idsArray', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await fc.cloudGoogleCloudRegistration.cloudRegistrationGcpTriggerHealthCheck(ids.length ? ids : undefined);
}

/** Handles cloudRegistrationGcpUpdateRegistration */
async function handleCloudRegistrationGcpUpdateRegistration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates a Google Cloud Registration by ID. */
	const ids = c.getNodeParameter('ids', i) as string;
	return await fc.cloudGoogleCloudRegistration.cloudRegistrationGcpUpdateRegistration(ids, parseJsonParam(c, i));
}

/** Main execution handler for Cloud Google Cloud Registration operations. */
export async function executeCloudGoogleCloudRegistration(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'cloudRegistrationGcpCreateRegistration': return await handleCloudRegistrationGcpCreateRegistration(this, index, falconClient);
		case 'cloudRegistrationGcpDeleteRegistration': return await handleCloudRegistrationGcpDeleteRegistration(this, index, falconClient);
		case 'cloudRegistrationGcpGetEntities': return await handleCloudRegistrationGcpGetEntities(this, index, falconClient);
		case 'cloudRegistrationGcpGetRegistration': return await handleCloudRegistrationGcpGetRegistration(this, index, falconClient);
		case 'cloudRegistrationGcpPostTerraformScript': return await handleCloudRegistrationGcpPostTerraformScript(this, index, falconClient);
		case 'cloudRegistrationGcpPutRegistration': return await handleCloudRegistrationGcpPutRegistration(this, index, falconClient);
		case 'cloudRegistrationGcpTriggerHealthCheck': return await handleCloudRegistrationGcpTriggerHealthCheck(this, index, falconClient);
		case 'cloudRegistrationGcpUpdateRegistration': return await handleCloudRegistrationGcpUpdateRegistration(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Cloud Google Cloud Registration.`);
	}
}
