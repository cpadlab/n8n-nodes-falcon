import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Helper to parse a JSON parameter into an object or array safely.
 */
function parseJsonParam(context: IExecuteFunctions, index: number, paramName = 'bodyJson'): any {
	const rawJson = context.getNodeParameter(paramName, index, '') as string;
	if (!rawJson) return {};
	try {
		return typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
	} catch (e) {
		throw new Error(`Invalid JSON in ${paramName}: ${(e as Error).message}`);
	}
}

/**
 * Handles the 'executeCommand' operation.
 */
async function handleExecuteCommand(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Executes an integration command using an array of command resources.
	 */
	const resources = parseJsonParam(context, index);
	const resourcesArray = Array.isArray(resources) ? resources : [resources];

	return await falconClient.apiIntegrations.executeCommand(resourcesArray);
}

/**
 * Handles the 'executeCommandProxy' operation.
 */
async function handleExecuteCommandProxy(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Executes an integration command and proxies the raw response payload.
	 */
	const body = parseJsonParam(context, index);
	return await falconClient.apiIntegrations.executeCommandProxy(body);
}

/**
 * Handles the 'getCombinedPluginConfigs' operation.
 */
async function handleGetCombinedPluginConfigs(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Retrieves combined plugin configurations based on filter and pagination parameters.
	 */
	const filter = context.getNodeParameter('filter', index, '') as string;
	const limit = context.getNodeParameter('limit', index, 100) as number;
	const offset = context.getNodeParameter('offset', index, 0) as number;
	const sort = context.getNodeParameter('sort', index, '') as string;

	return await falconClient.apiIntegrations.getCombinedPluginConfigs(
		filter || undefined,
		limit || undefined,
		offset || undefined,
		sort || undefined,
	);
}

/**
 * Main execution handler for CrowdStrike Falcon API Integrations operations.
 * Delegates execution to internal functions to maintain low Cognitive Complexity.
 */
export async function executeApiIntegrations(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'executeCommand':
			return await handleExecuteCommand(this, index, falconClient);

		case 'executeCommandProxy':
			return await handleExecuteCommandProxy(this, index, falconClient);

		case 'getCombinedPluginConfigs':
			return await handleGetCombinedPluginConfigs(this, index, falconClient);

		default:
			throw new Error(`Operation ${operation} is not supported for API Integrations.`);
	}
}
