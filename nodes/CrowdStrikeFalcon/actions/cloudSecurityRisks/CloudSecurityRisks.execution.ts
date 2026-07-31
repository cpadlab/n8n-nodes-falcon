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

	if (operation === 'cloudSecurityTimelineRisksEnriched') {
		return await handleCloudSecurityTimelineRisksEnriched(this, index, falconClient);
	}
	throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported.`); as any)), `Operation ${operation} is not supported for Cloud Security Risks.`);
	}
}
