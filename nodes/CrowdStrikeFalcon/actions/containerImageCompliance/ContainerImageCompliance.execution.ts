import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/** Handles extAggregateClusterAssessments */
async function handleExtAggregateClusterAssessments(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets assessments for each cluster. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImageCompliance.extAggregateClusterAssessments(filter || undefined);
}

/** Handles extAggregateFailedContainersByRulesPath */
async function handleExtAggregateFailedContainersByRulesPath(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets containers grouped into rules on which they failed. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImageCompliance.extAggregateFailedContainersByRulesPath(filter || undefined);
}

/** Handles extAggregateFailedContainersCountBySeverity */
async function handleExtAggregateFailedContainersCountBySeverity(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets failed containers count grouped into severity levels. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImageCompliance.extAggregateFailedContainersCountBySeverity(filter || undefined);
}

/** Handles extAggregateFailedImagesByRulesPath */
async function handleExtAggregateFailedImagesByRulesPath(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets images grouped into rules on which they failed. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImageCompliance.extAggregateFailedImagesByRulesPath(filter || undefined);
}

/** Handles extAggregateFailedImagesCountBySeverity */
async function handleExtAggregateFailedImagesCountBySeverity(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets failed images count grouped into severity levels. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImageCompliance.extAggregateFailedImagesCountBySeverity(filter || undefined);
}

/** Handles extAggregateFailedRulesByClusters */
async function handleExtAggregateFailedRulesByClusters(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets failed rules for each cluster grouped into severity levels. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImageCompliance.extAggregateFailedRulesByClusters(filter || undefined);
}

/** Handles extAggregateFailedRulesByImages */
async function handleExtAggregateFailedRulesByImages(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets images with failed rules grouped by severity. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImageCompliance.extAggregateFailedRulesByImages(filter || undefined);
}

/** Handles extAggregateFailedRulesCountBySeverity */
async function handleExtAggregateFailedRulesCountBySeverity(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets failed rules count grouped into severity levels. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImageCompliance.extAggregateFailedRulesCountBySeverity(filter || undefined);
}

/** Handles extAggregateImageAssessments */
async function handleExtAggregateImageAssessments(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets assessments for each image. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, '100') as string;
	return await fc.containerImageCompliance.extAggregateImageAssessments(filter || undefined, undefined, limit || undefined);
}

/** Handles extAggregateRulesAssessments */
async function handleExtAggregateRulesAssessments(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets assessments for each rule. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImageCompliance.extAggregateRulesAssessments(filter || undefined);
}

/** Handles extAggregateRulesByStatus */
async function handleExtAggregateRulesByStatus(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets rules grouped by statuses. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImageCompliance.extAggregateRulesByStatus(filter || undefined);
}

/** Main execution handler for Container Image Compliance operations. */
export async function executeContainerImageCompliance(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'extAggregateClusterAssessments': return await handleExtAggregateClusterAssessments(this, index, falconClient);
		case 'extAggregateFailedContainersByRulesPath': return await handleExtAggregateFailedContainersByRulesPath(this, index, falconClient);
		case 'extAggregateFailedContainersCountBySeverity': return await handleExtAggregateFailedContainersCountBySeverity(this, index, falconClient);
		case 'extAggregateFailedImagesByRulesPath': return await handleExtAggregateFailedImagesByRulesPath(this, index, falconClient);
		case 'extAggregateFailedImagesCountBySeverity': return await handleExtAggregateFailedImagesCountBySeverity(this, index, falconClient);
		case 'extAggregateFailedRulesByClusters': return await handleExtAggregateFailedRulesByClusters(this, index, falconClient);
		case 'extAggregateFailedRulesByImages': return await handleExtAggregateFailedRulesByImages(this, index, falconClient);
		case 'extAggregateFailedRulesCountBySeverity': return await handleExtAggregateFailedRulesCountBySeverity(this, index, falconClient);
		case 'extAggregateImageAssessments': return await handleExtAggregateImageAssessments(this, index, falconClient);
		case 'extAggregateRulesAssessments': return await handleExtAggregateRulesAssessments(this, index, falconClient);
		case 'extAggregateRulesByStatus': return await handleExtAggregateRulesByStatus(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Container Image Compliance.`);
	}
}
