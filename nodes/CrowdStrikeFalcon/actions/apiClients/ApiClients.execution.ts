import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'getAllAPIClientIdsForCustomer' operation.
 */
async function handleGetAllAPIClientIdsForCustomer(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Retrieves all API Client IDs for the customer based on pagination parameters.
	 */
	const offset = context.getNodeParameter('offset', index, 0) as number;
	const limit = context.getNodeParameter('limit', index, 100) as number;
	const sort = context.getNodeParameter('sort', index, '') as string;

	return await falconClient.apiClients.getAllAPIClientIdsForCustomer(
		offset || undefined,
		limit || undefined,
		sort || undefined,
	);
}

/**
 * Handles the 'getAPIClients' operation.
 */
async function handleGetAPIClients(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Retrieves API client details for specified API Client IDs.
	 */
	const idsString = context.getNodeParameter('ids', index, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await falconClient.apiClients.getAPIClients(ids);
}

/**
 * Handles the 'getAccessibleScopes' operation.
 */
async function handleGetAccessibleScopes(
	_context: IExecuteFunctions,
	_index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Retrieves all available API permissions and scopes for the customer CID.
	 */
	return await falconClient.apiClients.getAccessibleScopes();
}

/**
 * Handles the 'createAPIClient' operation.
 */
async function handleCreateAPIClient(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Creates a new API client using the specified JSON configuration body.
	 */
	const body = parseJsonParam(context, index);
	return await falconClient.apiClients.createAPIClient(body);
}

/**
 * Handles the 'updateAPIClient' operation.
 */
async function handleUpdateAPIClient(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Updates existing API client properties by ID.
	 */
	const id = context.getNodeParameter('id', index) as string;
	const body = parseJsonParam(context, index);

	return await falconClient.apiClients.updateAPIClient(id, body);
}

/**
 * Handles the 'deleteAPIClients' operation.
 */
async function handleDeleteAPIClients(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Deletes specified API clients by IDs.
	 */
	const idsString = context.getNodeParameter('ids', index, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await falconClient.apiClients.deleteAPIClients(ids);
}

/**
 * Handles the 'resetAPIClientSecret' operation.
 */
async function handleResetAPIClientSecret(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Resets API client secrets for specified client IDs.
	 */
	const idsString = context.getNodeParameter('ids', index, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	const actionName = context.getNodeParameter('actionName', index, 'reset_secret') as string;

	return await falconClient.apiClients.resetAPIClientSecret(ids, actionName);
}

/**
 * Main execution handler for CrowdStrike Falcon API Clients operations.
 * Delegates execution to internal functions to maintain low Cognitive Complexity.
 */
export async function executeApiClients(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {

	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getAllAPIClientIdsForCustomer':
			return await handleGetAllAPIClientIdsForCustomer(this, index, falconClient);
		case 'getAPIClients':
			return await handleGetAPIClients(this, index, falconClient);
		case 'getAccessibleScopes':
			return await handleGetAccessibleScopes(this, index, falconClient);
		case 'createAPIClient':
			return await handleCreateAPIClient(this, index, falconClient);
		case 'updateAPIClient':
			return await handleUpdateAPIClient(this, index, falconClient);
		case 'deleteAPIClients':
			return await handleDeleteAPIClients(this, index, falconClient);
		case 'resetAPIClientSecret':
			return await handleResetAPIClientSecret(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for API Clients.`);
	}
	
}
