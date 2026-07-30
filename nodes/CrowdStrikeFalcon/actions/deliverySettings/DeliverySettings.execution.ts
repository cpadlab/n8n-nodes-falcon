import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

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
 * Handles the 'getDeliverySettings' operation.
 */
async function handleGetDeliverySettings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets delivery settings. */
	return await fc.deliverySettings.getDeliverySettings();
}

/**
 * Handles the 'postDeliverySettings' operation.
 */
async function handlePostDeliverySettings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Posts delivery settings. */
	return await fc.deliverySettings.postDeliverySettings(parseJsonParam(c, i));
}

/** Main execution handler for Delivery Settings operations. */
export async function executeDeliverySettings(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getDeliverySettings': return await handleGetDeliverySettings(this, index, falconClient);
		case 'postDeliverySettings': return await handlePostDeliverySettings(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Delivery Settings.`);
	}
}
