import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
	const str = (context.getNodeParameter(paramName, index, '') as string) || '';
	return str.split(',').map((id) => id.trim()).filter(Boolean);
}

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/**
 * Handles the 'getDeploymentsExternalV1' operation.
 */
async function handleGetDeploymentsExternalV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets deployments resources by IDs. */
	const authorization = getStringParam(c, i, 'authorization', '');
	const ids = parseArrayParam(c, i, 'ids');
	const xCSUSERNAME = getStringParam(c, i, 'xCSUSERNAME', '');
	return await fc.deployments.getDeploymentsExternalV1(authorization, ids, xCSUSERNAME || undefined);
}

/** Main execution handler for Deployments operations. */
export async function executeDeployments(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getDeploymentsExternalV1': return await handleGetDeploymentsExternalV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Deployments.`);
	}
}
