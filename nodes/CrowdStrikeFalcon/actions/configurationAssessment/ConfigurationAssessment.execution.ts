import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Handles the 'getCombinedAssessmentsQuery' operation.
 */
async function handleGetCombinedAssessmentsQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches for assessments by FQL filter. */
	const filter = c.getNodeParameter('filter', i) as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	return await fc.configurationAssessment.getCombinedAssessmentsQuery(filter, undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'getRuleDetails' operation.
 */
async function handleGetRuleDetails(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets rule details by rule IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.configurationAssessment.getRuleDetails(ids);
}

/** Main execution handler for Configuration Assessment operations. */
export async function executeConfigurationAssessment(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getCombinedAssessmentsQuery': return await handleGetCombinedAssessmentsQuery(this, index, falconClient);
		case 'getRuleDetails': return await handleGetRuleDetails(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Configuration Assessment.`);
	}
}
