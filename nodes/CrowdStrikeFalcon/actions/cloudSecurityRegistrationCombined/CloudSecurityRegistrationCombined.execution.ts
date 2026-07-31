import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'cloudRegistrationCrossProviderGetAccountAggregates' operation.
 */
async function handleCloudRegistrationCrossProviderGetAccountAggregates(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves cross-provider account aggregates by status. */
	const body = parseJsonParam(c, i);
	const bodyArray = Array.isArray(body) ? body : [body];
	return await fc.cloudSecurityRegistrationCombined.cloudRegistrationCrossProviderGetAccountAggregates(bodyArray);
}

/** Main execution handler for Cloud Security Registration Combined operations. */
export async function executeCloudSecurityRegistrationCombined(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'cloudRegistrationCrossProviderGetAccountAggregates': return await handleCloudRegistrationCrossProviderGetAccountAggregates(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Cloud Security Registration Combined.`);
	}
}
