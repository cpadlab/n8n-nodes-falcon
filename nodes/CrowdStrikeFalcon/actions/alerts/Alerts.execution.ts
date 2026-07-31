import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'queryV2' operation to query alert IDs.
 */
async function handleQueryV2(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Retrieves alert IDs matching filter, pagination, sort, and hidden criteria.
	 */
	const includeHidden = context.getNodeParameter('includeHidden', index, false) as boolean;
	const offset = context.getNodeParameter('offset', index, 0) as number;
	const limit = context.getNodeParameter('limit', index, 100) as number;
	const sort = context.getNodeParameter('sort', index, '') as string;
	const filter = context.getNodeParameter('filter', index, '') as string;
	const q = context.getNodeParameter('q', index, '') as string;

	return await falconClient.alerts.queryV2(
		includeHidden,
		offset || undefined,
		limit || undefined,
		sort || undefined,
		filter || undefined,
		q || undefined,
	);
}

/**
 * Handles the 'getV2' operation to retrieve full alert details by composite IDs.
 */
async function handleGetV2(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Fetches alert entities for the provided composite IDs.
	 */
	const compositeIdsString = context.getNodeParameter('compositeIds', index, '') as string;
	const composite_ids = compositeIdsString.split(',').map((id) => id.trim()).filter(Boolean);
	const includeHidden = context.getNodeParameter('includeHidden', index, false) as boolean;

	return await falconClient.alerts.getV2(
		{ composite_ids } as any,
		includeHidden,
	);
}

/**
 * Handles the 'updateV3' operation to update alert entities.
 */
async function handleUpdateV3(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Performs actions/updates on alert entities identified by composite IDs.
	 */
	const body = parseJsonParam(context, index);
	const includeHidden = context.getNodeParameter('includeHidden', index, false) as boolean;

	return await falconClient.alerts.updateV3(body, includeHidden);
}

/**
 * Handles the 'postCombinedAlertsV1' operation for combined alerts retrieval.
 */
async function handlePostCombinedAlertsV1(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Retrieves all Alerts matching an FQL filter using pagination token.
	 */
	const body = parseJsonParam(context, index);
	return await falconClient.alerts.postCombinedAlertsV1(body);
}

/**
 * Handles the 'getAggregateV2' operation for alert aggregation.
 */
async function handleGetAggregateV2(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Retrieves aggregate metrics across CIDs for alert entities.
	 */
	const body = parseJsonParam(context, index);
	const includeHidden = context.getNodeParameter('includeHidden', index, false) as boolean;

	return await falconClient.alerts.getAggregateV2(body, includeHidden);
}

/**
 * Handles the deprecated 'getQueriesAlertsV1' operation.
 */
async function handleGetQueriesAlertsV1(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Queries alert IDs using V1 endpoint.
	 */
	const offset = context.getNodeParameter('offset', index, 0) as number;
	const limit = context.getNodeParameter('limit', index, 100) as number;
	const sort = context.getNodeParameter('sort', index, '') as string;
	const filter = context.getNodeParameter('filter', index, '') as string;
	const q = context.getNodeParameter('q', index, '') as string;

	return await falconClient.alerts.getQueriesAlertsV1(
		offset || undefined,
		limit || undefined,
		sort || undefined,
		filter || undefined,
		q || undefined,
	);
}

/**
 * Handles the deprecated 'patchEntitiesAlertsV2' operation.
 */
async function handlePatchEntitiesAlertsV2(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Patches alert entities using V2 endpoint.
	 */
	const body = parseJsonParam(context, index);
	return await falconClient.alerts.patchEntitiesAlertsV2(body);
}

/**
 * Handles the deprecated 'postAggregatesAlertsV1' operation.
 */
async function handlePostAggregatesAlertsV1(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Posts aggregate queries using V1 endpoint.
	 */
	const body = parseJsonParam(context, index);
	return await falconClient.alerts.postAggregatesAlertsV1(body);
}

/**
 * Handles the deprecated 'postEntitiesAlertsV1' operation.
 */
async function handlePostEntitiesAlertsV1(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Retrieves alert entities using V1 endpoint.
	 */
	const body = parseJsonParam(context, index);
	return await falconClient.alerts.postEntitiesAlertsV1(body);
}

/**
 * Main execution handler for CrowdStrike Falcon Alerts operations.
 * Delegates execution to internal functions to maintain low Cognitive Complexity.
 */
export async function executeAlerts(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'queryV2':
			return await handleQueryV2(this, index, falconClient);
		case 'getV2':
			return await handleGetV2(this, index, falconClient);
		case 'updateV3':
			return await handleUpdateV3(this, index, falconClient);
		case 'postCombinedAlertsV1':
			return await handlePostCombinedAlertsV1(this, index, falconClient);
		case 'getAggregateV2':
			return await handleGetAggregateV2(this, index, falconClient);
		case 'getQueriesAlertsV1':
			return await handleGetQueriesAlertsV1(this, index, falconClient);
		case 'patchEntitiesAlertsV2':
			return await handlePatchEntitiesAlertsV2(this, index, falconClient);
		case 'postAggregatesAlertsV1':
			return await handlePostAggregatesAlertsV1(this, index, falconClient);
		case 'postEntitiesAlertsV1':
			return await handlePostEntitiesAlertsV1(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Alerts.`);
	}

}
