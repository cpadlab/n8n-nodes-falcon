import { FalconClient, FalconErrorExplain } from 'crowdstrike-falcon';
import type { FalconClientOptions } from 'crowdstrike-falcon';
import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';


/**
 * Initializes and configures the official CrowdStrike Falcon SDK client (`FalconClient`).
 *
 * @param context - Execution context provided by n8n (`IExecuteFunctions`).
 * @returns A promise that resolves to a configured {@link FalconClient} instance.
 *
 * @throws {@link NodeOperationError}
 * Thrown if `clientId` or `clientSecret` are missing in the configured credentials.
 */
async function getFalconClient(context: IExecuteFunctions): Promise<FalconClient> {
	
	const credentials = await context.getCredentials('crowdStrikeFalconApi');

	const clientId = credentials.clientId as string;
	const clientSecret = credentials.clientSecret as string;
	const cloud = credentials.cloud as FalconClientOptions['cloud'];

	if (!clientId || !clientSecret) {
		throw new NodeOperationError(
			context.getNode(),
			'Client ID and Client Secret are required in CrowdStrike credentials.',
		);
	}

	return new FalconClient({
		fetchApi: globalThis.fetch,
		cloud,
		clientId,
		clientSecret,
	});

}


/**
 * Helper utility to handle and format errors using CrowdStrike's `FalconErrorExplain`.
 *
 * @param error - The caught exception from the SDK call.
 * @returns A user-friendly error message string.
 */
async function handleFalconError(error: unknown): Promise<string> {
	try {
        
		if (error instanceof Response) {
			return await FalconErrorExplain(error);
		}

		if (
			typeof error === 'object' &&
			error !== null &&
			'response' in error &&
			(error as { response: unknown }).response instanceof Response
		) {
			return await FalconErrorExplain((error as { response: Response }).response);
		}

		if (error instanceof Error) {
			return error.message;
		}

		return 'An unknown CrowdStrike API error occurred';

	} catch {
		return (error as Error).message || 'An unknown CrowdStrike API error occurred';
	}
}


/**
 * n8n Node for CrowdStrike Falcon platform integration.
 *
 * @implements {INodeType}
 */
export class CrowdStrikeFalcon implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CrowdStrike Falcon',
		name: 'crowdStrikeFalcon',
		icon: 'file:crowdstrike.svg',
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
		properties: [],
	};
}