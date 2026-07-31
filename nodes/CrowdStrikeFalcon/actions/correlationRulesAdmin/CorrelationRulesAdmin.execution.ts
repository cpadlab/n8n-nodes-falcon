import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'entitiesRulesOwnershipPutV1' operation.
 */
async function handleEntitiesRulesOwnershipPutV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Changes the owner of a Correlation Rule. */
	return await fc.correlationRulesAdmin.entitiesRulesOwnershipPutV1(parseJsonParam(c, i));
}

/**
 * Handles the 'entitiesRulesOwnershipPutV2' operation.
 */
async function handleEntitiesRulesOwnershipPutV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Bulk changes the owner of Correlation Rules. */
	return await fc.correlationRulesAdmin.entitiesRulesOwnershipPutV2(parseJsonParam(c, i));
}

/** Main execution handler for Correlation Rules Admin operations. */
export async function executeCorrelationRulesAdmin(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'entitiesRulesOwnershipPutV1': return await handleEntitiesRulesOwnershipPutV1(this, index, falconClient);
		case 'entitiesRulesOwnershipPutV2': return await handleEntitiesRulesOwnershipPutV2(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Correlation Rules Admin.`);
	}
}
