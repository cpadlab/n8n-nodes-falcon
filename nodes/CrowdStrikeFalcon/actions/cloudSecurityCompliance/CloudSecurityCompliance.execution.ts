import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/** Handles cloudComplianceFrameworkPostureSummaries */
async function handleCloudComplianceFrameworkPostureSummaries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves framework posture summaries. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.cloudSecurityCompliance.cloudComplianceFrameworkPostureSummaries(ids, filter || undefined);
}

/** Handles cloudComplianceRulePostureSummaries */
async function handleCloudComplianceRulePostureSummaries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves rule posture summaries. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.cloudSecurityCompliance.cloudComplianceRulePostureSummaries(ids, filter || undefined);
}

/** Main execution handler for Cloud Security Compliance operations. */
export async function executeCloudSecurityCompliance(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'cloudComplianceFrameworkPostureSummaries': return await handleCloudComplianceFrameworkPostureSummaries(this, index, falconClient);
		case 'cloudComplianceRulePostureSummaries': return await handleCloudComplianceRulePostureSummaries(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Cloud Security Compliance.`);
	}
}
