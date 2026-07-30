import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/** Handles oauth2AccessToken */
async function handleOauth2AccessToken(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Generate an OAuth2 access token. */
	const clientId = getStringParam(c, i, 'clientId', '');
	const clientSecret = getStringParam(c, i, 'clientSecret', '');
	const memberCid = getStringParam(c, i, 'memberCid', '');
	return await fc.oauth2.oauth2AccessToken(clientId, clientSecret, memberCid || undefined);
}

/** Handles oauth2RevokeToken */
async function handleOauth2RevokeToken(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Revoke a previously issued OAuth2 access token. */
	const token = getStringParam(c, i, 'token', '');
	const clientId = getStringParam(c, i, 'clientId', '');
	return await fc.oauth2.oauth2RevokeToken(token, clientId || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon OAuth2 operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeOauth2(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'oauth2AccessToken': return await handleOauth2AccessToken(this, index, falconClient);
		case 'oauth2RevokeToken': return await handleOauth2RevokeToken(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for OAuth2.`);
	}
}
