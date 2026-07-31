import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam } from '../common';

/**
 * Handles the 'aggregateAssessmentsGroupedByClustersV2' operation.
 */
async function handleAggregateAssessmentsGroupedByClustersV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns cluster details along with aggregated assessment results organized by cluster. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesContainerCompliance.aggregateAssessmentsGroupedByClustersV2(offset || undefined, limit || undefined, filter || undefined);
}

/**
 * Handles the 'aggregateAssessmentsGroupedByRulesV2' operation.
 */
async function handleAggregateAssessmentsGroupedByRulesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns rule details along with aggregated assessment results organized by compliance rule. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesContainerCompliance.aggregateAssessmentsGroupedByRulesV2(offset || undefined, limit || undefined, filter || undefined);
}

/**
 * Handles the 'aggregateComplianceByAssetType' operation.
 */
async function handleAggregateComplianceByAssetType(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provides aggregated compliance assessment metrics organized by asset type. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesContainerCompliance.aggregateComplianceByAssetType(filter || undefined);
}

/**
 * Handles the 'aggregateComplianceByClusterType' operation.
 */
async function handleAggregateComplianceByClusterType(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provides aggregated compliance assessment metrics organized by cluster type. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesContainerCompliance.aggregateComplianceByClusterType(filter || undefined);
}

/**
 * Handles the 'aggregateComplianceByFramework' operation.
 */
async function handleAggregateComplianceByFramework(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provides aggregated compliance assessment metrics organized by framework. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesContainerCompliance.aggregateComplianceByFramework(filter || undefined);
}

/**
 * Handles the 'aggregateFailedRulesByClustersV3' operation.
 */
async function handleAggregateFailedRulesByClustersV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the most non-compliant clusters ranked by failed compliance rules. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.kubernetesContainerCompliance.aggregateFailedRulesByClustersV3(filter || undefined, limit || undefined);
}

/**
 * Handles the 'aggregateTopFailedImages' operation.
 */
async function handleAggregateTopFailedImages(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the most non-compliant container images ranked by failed assessments. */
	const filter = getStringParam(c, i, 'filter', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.kubernetesContainerCompliance.aggregateTopFailedImages(filter || undefined, limit || undefined);
}

/**
 * Handles the 'combinedImagesFindings' operation.
 */
async function handleCombinedImagesFindings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns detailed compliance assessment results for container images. */
	const filter = getStringParam(c, i, 'filter', '');
	const after = getStringParam(c, i, 'after', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.kubernetesContainerCompliance.combinedImagesFindings(filter || undefined, after || undefined, limit || undefined);
}

/**
 * Handles the 'combinedNodesFindings' operation.
 */
async function handleCombinedNodesFindings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns detailed compliance assessment results for kubernetes nodes. */
	const filter = getStringParam(c, i, 'filter', '');
	const after = getStringParam(c, i, 'after', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.kubernetesContainerCompliance.combinedNodesFindings(filter || undefined, after || undefined, limit || undefined);
}

/**
 * Handles the 'getRulesMetadataByID' operation.
 */
async function handleGetRulesMetadataByID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve detailed compliance rule information by specifying rule identifiers. */
	return await fc.kubernetesContainerCompliance.getRulesMetadataByID(parseArrayParam(c, i, 'ids'));
}

/**
 * Main execution handler for CrowdStrike Falcon Kubernetes Container Compliance operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeKubernetesContainerCompliance(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateAssessmentsGroupedByClustersV2': return await handleAggregateAssessmentsGroupedByClustersV2(this, index, falconClient);
		case 'aggregateAssessmentsGroupedByRulesV2': return await handleAggregateAssessmentsGroupedByRulesV2(this, index, falconClient);
		case 'aggregateComplianceByAssetType': return await handleAggregateComplianceByAssetType(this, index, falconClient);
		case 'aggregateComplianceByClusterType': return await handleAggregateComplianceByClusterType(this, index, falconClient);
		case 'aggregateComplianceByFramework': return await handleAggregateComplianceByFramework(this, index, falconClient);
		case 'aggregateFailedRulesByClustersV3': return await handleAggregateFailedRulesByClustersV3(this, index, falconClient);
		case 'aggregateTopFailedImages': return await handleAggregateTopFailedImages(this, index, falconClient);
		case 'combinedImagesFindings': return await handleCombinedImagesFindings(this, index, falconClient);
		case 'combinedNodesFindings': return await handleCombinedNodesFindings(this, index, falconClient);
		case 'getRulesMetadataByID': return await handleGetRulesMetadataByID(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Kubernetes Container Compliance.`);
	}
}
