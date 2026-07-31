import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

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
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Deployments.`);
	}
}
