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

/** Handles cloudRegistrationCrossProviderGetAccountAggregates */
async function handleCloudRegistrationCrossProviderGetAccountAggregates(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves cross-provider account aggregates by status. */
	const body = parseJsonParam(c, i);
	const bodyArray = Array.isArray(body) ? body : [body];
	return await fc.cloudSecurityRegistrationCombined.cloudRegistrationCrossProviderGetAccountAggregates(bodyArray);
}

/** Main execution handler for Cloud Security Registration Combined operations. */
export async function executeCloudSecurityRegistrationCombined(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'cloudRegistrationCrossProviderGetAccountAggregates': return await handleCloudRegistrationCrossProviderGetAccountAggregates(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Cloud Security Registration Combined.`);
	}
}
