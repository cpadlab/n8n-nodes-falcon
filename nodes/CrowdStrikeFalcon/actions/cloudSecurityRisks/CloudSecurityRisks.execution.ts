import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Handles the 'cloudSecurityTimelineRisksEnriched' operation.
 */
async function handleCloudSecurityTimelineRisksEnriched(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves enriched asset timeline. */
	const id = c.getNodeParameter('id', i) as string;
	return await fc.cloudSecurityRisks.cloudSecurityTimelineRisksEnriched(id);
}

/** Main execution handler for Cloud Security Risks operations. */
export async function executeCloudSecurityRisks(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'cloudSecurityTimelineRisksEnriched': return await handleCloudSecurityTimelineRisksEnriched(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Cloud Security Risks.`);
	}
}
