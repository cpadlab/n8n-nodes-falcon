import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'aggregateImageAssessmentHistory' operation.
 */
async function handleAggregateImageAssessmentHistory(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves image assessment history. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImages.aggregateImageAssessmentHistory(filter || undefined);
}

/**
 * Handles the 'aggregateImageCount' operation.
 */
async function handleAggregateImageCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves aggregate image count. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImages.aggregateImageCount(filter || undefined);
}

/**
 * Handles the 'aggregateImageCountByBaseOS' operation.
 */
async function handleAggregateImageCountByBaseOS(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves image count by base OS. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImages.aggregateImageCountByBaseOS(filter || undefined);
}

/**
 * Handles the 'aggregateImageCountByState' operation.
 */
async function handleAggregateImageCountByState(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves image count by state. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImages.aggregateImageCountByState(filter || undefined);
}

/**
 * Handles the 'combinedBaseImages' operation.
 */
async function handleCombinedBaseImages(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves combined base images. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerImages.combinedBaseImages(filter || undefined);
}

/**
 * Handles the 'combinedImageByVulnerabilityCount' operation.
 */
async function handleCombinedImageByVulnerabilityCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves top images by vulnerability count. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerImages.combinedImageByVulnerabilityCount(filter || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'combinedImageDetail' operation.
 */
async function handleCombinedImageDetail(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves combined image detail. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerImages.combinedImageDetail(filter || undefined, undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'combinedImageIssuesSummary' operation.
 */
async function handleCombinedImageIssuesSummary(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves combined image issues summary. */
	const cid = c.getNodeParameter('cid', i) as string;
	const registry = c.getNodeParameter('registry', i) as string;
	const repository = c.getNodeParameter('repository', i) as string;
	const tag = c.getNodeParameter('tag', i) as string;
	return await fc.containerImages.combinedImageIssuesSummary(cid, registry, repository, tag);
}

/**
 * Handles the 'combinedImageVulnerabilitySummary' operation.
 */
async function handleCombinedImageVulnerabilitySummary(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves combined image vulnerability summary. */
	const cid = c.getNodeParameter('cid', i) as string;
	const registry = c.getNodeParameter('registry', i) as string;
	const repository = c.getNodeParameter('repository', i) as string;
	const tag = c.getNodeParameter('tag', i) as string;
	return await fc.containerImages.combinedImageVulnerabilitySummary(cid, registry, repository, tag);
}

/**
 * Handles the 'createBaseImagesEntities' operation.
 */
async function handleCreateBaseImagesEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates base images entities. */
	return await fc.containerImages.createBaseImagesEntities(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteBaseImages' operation.
 */
async function handleDeleteBaseImages(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes base images by UUIDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.containerImages.deleteBaseImages(ids);
}

/**
 * Handles the 'getCombinedImages' operation.
 */
async function handleGetCombinedImages(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves combined images. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerImages.getCombinedImages(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'readCombinedImagesExport' operation.
 */
async function handleReadCombinedImagesExport(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads combined images export. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerImages.readCombinedImagesExport(filter || undefined, undefined, undefined, limit || undefined, offset || undefined, sort || undefined);
}

/** Main execution handler for Container Images operations. */
export async function executeContainerImages(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'aggregateImageAssessmentHistory': return await handleAggregateImageAssessmentHistory(this, index, falconClient);
		case 'aggregateImageCount': return await handleAggregateImageCount(this, index, falconClient);
		case 'aggregateImageCountByBaseOS': return await handleAggregateImageCountByBaseOS(this, index, falconClient);
		case 'aggregateImageCountByState': return await handleAggregateImageCountByState(this, index, falconClient);
		case 'combinedBaseImages': return await handleCombinedBaseImages(this, index, falconClient);
		case 'combinedImageByVulnerabilityCount': return await handleCombinedImageByVulnerabilityCount(this, index, falconClient);
		case 'combinedImageDetail': return await handleCombinedImageDetail(this, index, falconClient);
		case 'combinedImageIssuesSummary': return await handleCombinedImageIssuesSummary(this, index, falconClient);
		case 'combinedImageVulnerabilitySummary': return await handleCombinedImageVulnerabilitySummary(this, index, falconClient);
		case 'createBaseImagesEntities': return await handleCreateBaseImagesEntities(this, index, falconClient);
		case 'deleteBaseImages': return await handleDeleteBaseImages(this, index, falconClient);
		case 'getCombinedImages': return await handleGetCombinedImages(this, index, falconClient);
		case 'readCombinedImagesExport': return await handleReadCombinedImagesExport(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Container Images.`);
	}
}
