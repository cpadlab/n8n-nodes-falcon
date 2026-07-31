import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam } from '../common';

/**
 * Handles the 'downloadFeedArchive' operation.
 */
async function handleDownloadFeedArchive(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Downloads the content as a zip archive for a given feed item ID. */
	const feedItemId = getStringParam(c, i, 'feedItemId', '');
	return await fc.intelligenceFeeds.downloadFeedArchive(feedItemId);
}

/**
 * Handles the 'listFeedTypes' operation.
 */
async function handleListFeedTypes(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Lists the accessible feed types for a given customer. */
	return await fc.intelligenceFeeds.listFeedTypes();
}

/**
 * Handles the 'queryFeedArchives' operation.
 */
async function handleQueryFeedArchives(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Queries the accessible feed types for a customer returning feed item IDs. */
	const feedName = getStringParam(c, i, 'feedName', '');
	const feedInterval = getStringParam(c, i, 'feedInterval', '');
	const since = getStringParam(c, i, 'since', '');
	return await fc.intelligenceFeeds.queryFeedArchives(feedName, feedInterval || undefined, since || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Intelligence Feeds operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeIntelligenceFeeds(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'downloadFeedArchive': return await handleDownloadFeedArchive(this, index, falconClient);
		case 'listFeedTypes': return await handleListFeedTypes(this, index, falconClient);
		case 'queryFeedArchives': return await handleQueryFeedArchives(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Intelligence Feeds.`);
	}
}
