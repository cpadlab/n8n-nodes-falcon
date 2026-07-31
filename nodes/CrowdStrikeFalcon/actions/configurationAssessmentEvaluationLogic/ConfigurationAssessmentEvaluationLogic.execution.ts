import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Handles the 'getEvaluationLogicMixin0' operation.
 */
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

	if (operation === 'getEvaluationLogicMixin0') {
		return await handleGetEvaluationLogicMixin0(this, index, falconClient);
	}
	throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported.`); as any)), `Operation ${operation} is not supported for Configuration Assessment Evaluation Logic.`);
	}
}
