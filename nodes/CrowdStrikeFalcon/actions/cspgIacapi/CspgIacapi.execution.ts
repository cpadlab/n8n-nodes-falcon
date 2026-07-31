import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Handles the 'combinedDetections' operation.
 */
async function handleCombinedDetections(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches IaC Detections using FQL. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	return await fc.cspgIacapi.combinedDetections(filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/**
 * Handles the 'getCredentialsMixin0' operation.
 */
async function handleGetCredentialsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets registry credentials. */
	return await fc.cspgIacapi.getCredentialsMixin0();
}

/** Main execution handler for CSPG IaC API operations. */
export async function executeCspgIacapi(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'combinedDetections': return await handleCombinedDetections(this, index, falconClient);
		case 'getCredentialsMixin0': return await handleGetCredentialsMixin0(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for CSPG IaC API.`);
	}
}
