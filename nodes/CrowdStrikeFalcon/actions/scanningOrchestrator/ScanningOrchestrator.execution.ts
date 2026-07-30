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

/** Handles createSchedules */
async function handleCreateSchedules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create one or more scanning schedules. */
	const authorization = getStringParam(c, i, 'authorization', '');
	return await fc.scanningOrchestrator.createSchedules(authorization, parseJsonParam(c, i));
}

/** Handles deleteSchedules */
async function handleDeleteSchedules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete one or more scanning schedules by ID. */
	const authorization = getStringParam(c, i, 'authorization', '');
	return await fc.scanningOrchestrator.deleteSchedules(authorization, parseArrayParam(c, i, 'ids'));
}

/** Handles getCombinedSchedules */
async function handleGetCombinedSchedules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get schedules with pagination, sorting, and filtering. */
	const authorization = getStringParam(c, i, 'authorization', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.scanningOrchestrator.getCombinedSchedules(authorization, limit || undefined, offset || undefined, sort || undefined, filter || undefined);
}

/** Handles getSchedules */
async function handleGetSchedules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scanning schedules by their IDs. */
	const authorization = getStringParam(c, i, 'authorization', '');
	return await fc.scanningOrchestrator.getSchedules(authorization, parseArrayParam(c, i, 'ids'));
}

/** Handles getServiceTypes */
async function handleGetServiceTypes(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns the list of service types available for scanning. */
	const authorization = getStringParam(c, i, 'authorization', '');
	const scanProduct = getStringParam(c, i, 'scanProduct', 'vulnerability_scanning');
	return await fc.scanningOrchestrator.getServiceTypes(authorization, scanProduct as any);
}

/** Handles searchSchedules */
async function handleSearchSchedules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search schedules and return IDs with pagination, sorting, and filtering. */
	const authorization = getStringParam(c, i, 'authorization', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.scanningOrchestrator.searchSchedules(authorization, limit || undefined, offset || undefined, sort || undefined, filter || undefined);
}

/** Handles triggerScanBySchedule */
async function handleTriggerScanBySchedule(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Triggers an immediate scan for the given schedule IDs. */
	const authorization = getStringParam(c, i, 'authorization', '');
	return await fc.scanningOrchestrator.triggerScanBySchedule(authorization, parseJsonParam(c, i));
}

/** Handles updateSchedules */
async function handleUpdateSchedules(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates one or more scanning schedules. */
	const authorization = getStringParam(c, i, 'authorization', '');
	return await fc.scanningOrchestrator.updateSchedules(authorization, parseJsonParam(c, i));
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
		case 'createSchedules': return await handleCreateSchedules(this, index, falconClient);
		case 'deleteSchedules': return await handleDeleteSchedules(this, index, falconClient);
		case 'getCombinedSchedules': return await handleGetCombinedSchedules(this, index, falconClient);
		case 'getSchedules': return await handleGetSchedules(this, index, falconClient);
		case 'getServiceTypes': return await handleGetServiceTypes(this, index, falconClient);
		case 'searchSchedules': return await handleSearchSchedules(this, index, falconClient);
		case 'triggerScanBySchedule': return await handleTriggerScanBySchedule(this, index, falconClient);
		case 'updateSchedules': return await handleUpdateSchedules(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Scanning Orchestrator.`);
	}
}
