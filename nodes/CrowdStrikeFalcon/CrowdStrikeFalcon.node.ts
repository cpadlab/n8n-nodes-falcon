import type { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';
import { getFalconClient, handleFalconError } from './GenericFunctions';
import { accessScopesFields, accessScopesOperations } from './actions/accessScopes/AccessScopes.resource';
import { casesFields, casesOperations } from './actions/cases/Cases.resource';
import { router } from './actions/router';

export class CrowdStrikeFalcon implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CrowdStrike Falcon',
		name: 'crowdStrikeFalcon',
		icon: 'file:falcon.svg',
		group: ['transform'],
		version: 1,
		description: 'Interact with CrowdStrike Falcon API',
		defaults: {
			name: 'CrowdStrike Falcon',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'crowdStrikeFalconApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Access Scope',
						value: 'accessScopes',
					},
					{
						name: 'Case',
						value: 'cases',
					},
				],
				default: 'cases',
			},
			...accessScopesOperations,
			...accessScopesFields,
			...casesOperations,
			...casesFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const falconClient = await getFalconClient(this);

		for (let i = 0; i < items.length; i++) {
			try {
				const response = await router.call(this, i, falconClient);
				if (Array.isArray(response)) {
					response.forEach((item) =>
						returnData.push({ json: item, pairedItem: { item: i } }),
					);
				} else if (response !== undefined) {
					returnData.push({ json: response, pairedItem: { item: i } });
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: await handleFalconError(error) },
						pairedItem: { item: i },
					});
					continue;
				}
				const errorMessage = await handleFalconError(error);
				throw new NodeOperationError(this.getNode(), errorMessage, { itemIndex: i });
			}
		}

		return [returnData];

	}
}