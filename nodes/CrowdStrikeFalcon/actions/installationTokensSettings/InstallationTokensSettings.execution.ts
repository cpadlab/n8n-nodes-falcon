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

/** Handles customerSettingsUpdate */
async function handleCustomerSettingsUpdate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update installation token settings. */
	return await fc.installationTokensSettings.customerSettingsUpdate(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Installation Tokens Settings operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeInstallationTokensSettings(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'customerSettingsUpdate': return await handleCustomerSettingsUpdate(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Installation Tokens Settings.`);
	}
}
