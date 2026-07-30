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

/** Handles createOrchestratorDeploymentV1 */
async function handleCreateOrchestratorDeploymentV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create an orchestrator deployment. */
	return await fc.scanningOrchestrator.createOrchestratorDeploymentV1(parseJsonParam(c, i));
}

/** Handles deleteOrchestratorDeploymentV1 */
async function handleDeleteOrchestratorDeploymentV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete orchestrator deployments by IDs. */
	return await fc.scanningOrchestrator.deleteOrchestratorDeploymentV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getOrchestratorDeploymentV1 */
async function handleGetOrchestratorDeploymentV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get orchestrator deployments by IDs. */
	return await fc.scanningOrchestrator.getOrchestratorDeploymentV1(parseArrayParam(c, i, 'ids'));
}

/** Handles getOrchestratorDeploymentV2 */
async function handleGetOrchestratorDeploymentV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get orchestrator deployments by IDs V2. */
	return await fc.scanningOrchestrator.getOrchestratorDeploymentV2(parseArrayParam(c, i, 'ids'));
}

/** Handles queryOrchestratorDeploymentV1 */
async function handleQueryOrchestratorDeploymentV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query orchestrator deployments. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.scanningOrchestrator.queryOrchestratorDeploymentV1(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles queryOrchestratorDeploymentV2 */
async function handleQueryOrchestratorDeploymentV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query orchestrator deployments V2. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.scanningOrchestrator.queryOrchestratorDeploymentV2(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles updateOrchestratorDeploymentV1 */
async function handleUpdateOrchestratorDeploymentV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update an orchestrator deployment. */
	return await fc.scanningOrchestrator.updateOrchestratorDeploymentV1(parseJsonParam(c, i));
}

/** Handles updateOrchestratorDeploymentV2 */
async function handleUpdateOrchestratorDeploymentV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update an orchestrator deployment V2. */
	return await fc.scanningOrchestrator.updateOrchestratorDeploymentV2(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Scanning Orchestrator operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeScanningOrchestrator(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createOrchestratorDeploymentV1': return await handleCreateOrchestratorDeploymentV1(this, index, falconClient);
		case 'deleteOrchestratorDeploymentV1': return await handleDeleteOrchestratorDeploymentV1(this, index, falconClient);
		case 'getOrchestratorDeploymentV1': return await handleGetOrchestratorDeploymentV1(this, index, falconClient);
		case 'getOrchestratorDeploymentV2': return await handleGetOrchestratorDeploymentV2(this, index, falconClient);
		case 'queryOrchestratorDeploymentV1': return await handleQueryOrchestratorDeploymentV1(this, index, falconClient);
		case 'queryOrchestratorDeploymentV2': return await handleQueryOrchestratorDeploymentV2(this, index, falconClient);
		case 'updateOrchestratorDeploymentV1': return await handleUpdateOrchestratorDeploymentV1(this, index, falconClient);
		case 'updateOrchestratorDeploymentV2': return await handleUpdateOrchestratorDeploymentV2(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Scanning Orchestrator.`);
	}
}
