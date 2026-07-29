import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/** Handles getEvaluationLogicMixin0 */
async function handleGetEvaluationLogicMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets evaluation logic items by finding IDs. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	return await fc.configurationAssessmentEvaluationLogic.getEvaluationLogicMixin0(ids);
}

/** Main execution handler for Configuration Assessment Evaluation Logic operations. */
export async function executeConfigurationAssessmentEvaluationLogic(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getEvaluationLogicMixin0': return await handleGetEvaluationLogicMixin0(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Configuration Assessment Evaluation Logic.`);
	}
}
