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

function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
	const str = (context.getNodeParameter(paramName, index, '') as string) || '';
	return str.split(',').map((id) => id.trim()).filter(Boolean);
}

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/** Handles apiPreemptProxyDeletePolicyRules */
async function handleApiPreemptProxyDeletePolicyRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete policy rules. */
	const setIds = new Set(parseArrayParam(c, i, 'ids'));
	return await fc.identityProtection.apiPreemptProxyDeletePolicyRules(setIds);
}

/** Handles apiPreemptProxyGetPolicyRules */
async function handleApiPreemptProxyGetPolicyRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get policy rules. */
	const setIds = new Set(parseArrayParam(c, i, 'ids'));
	return await fc.identityProtection.apiPreemptProxyGetPolicyRules(setIds);
}

/** Handles apiPreemptProxyGetPolicyRulesQuery */
async function handleApiPreemptProxyGetPolicyRulesQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query policy rule IDs. */
	const enabled = c.getNodeParameter('enabled', i, true) as boolean;
	const simulationMode = c.getNodeParameter('simulationMode', i, false) as boolean;
	const name = getStringParam(c, i, 'name', '');
	return await fc.identityProtection.apiPreemptProxyGetPolicyRulesQuery(enabled, simulationMode, name || undefined);
}

/** Handles apiPreemptProxyPostGraphql */
async function handleApiPreemptProxyPostGraphql(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Identity Protection GraphQL API. */
	return await fc.identityProtection.apiPreemptProxyPostGraphql(parseJsonParam(c, i));
}

/** Handles apiPreemptProxyPostPolicyRules */
async function handleApiPreemptProxyPostPolicyRules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create policy rule. */
	return await fc.identityProtection.apiPreemptProxyPostPolicyRules(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Identity Protection operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeIdentityProtection(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'apiPreemptProxyDeletePolicyRules': return await handleApiPreemptProxyDeletePolicyRules(this, index, falconClient);
		case 'apiPreemptProxyGetPolicyRules': return await handleApiPreemptProxyGetPolicyRules(this, index, falconClient);
		case 'apiPreemptProxyGetPolicyRulesQuery': return await handleApiPreemptProxyGetPolicyRulesQuery(this, index, falconClient);
		case 'apiPreemptProxyPostGraphql': return await handleApiPreemptProxyPostGraphql(this, index, falconClient);
		case 'apiPreemptProxyPostPolicyRules': return await handleApiPreemptProxyPostPolicyRules(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Identity Protection.`);
	}
}
