import { FalconClient, FalconErrorExplain } from 'crowdstrike-falcon';
import type { FalconClientOptions } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';

/**
 * Initializes and configures the CrowdStrike Falcon SDK client (`FalconClient`).
 */
export async function getFalconClient(context: IExecuteFunctions): Promise<FalconClient> {
	
	const credentials = await context.getCredentials('crowdStrikeFalconApi');

	const clientId = credentials.clientId as string;
	const clientSecret = credentials.clientSecret as string;
	const cloud = credentials.cloud as FalconClientOptions['cloud'];
	const memberCid = (credentials.memberCid as string) || undefined;

	if (!clientId || !clientSecret) {
		throw new NodeOperationError(
			context.getNode(),
			'Client ID and Client Secret are required in CrowdStrike credentials.',
		);
	}

	return new FalconClient({
		fetchApi: fetch,
		cloud,
		clientId,
		clientSecret,
		memberCid,
	});
}

/**
 * Helper utility to handle and format errors using CrowdStrike's `FalconErrorExplain`.
 */
export async function handleFalconError(error: unknown): Promise<string> {
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