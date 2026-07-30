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
 * Handles the 'incrementUninstallToken' operation.
 */
async function handleIncrementUninstallToken(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Increments a bulk maintenance token. */
	return await fc.maintenanceToken.incrementUninstallToken(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Maintenance Token operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeMaintenanceToken(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'incrementUninstallToken': return await handleIncrementUninstallToken(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Maintenance Token.`);
	}
}
