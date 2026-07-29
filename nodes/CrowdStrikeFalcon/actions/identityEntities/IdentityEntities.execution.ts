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

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/** Handles getSensorAggregates */
async function handleGetSensorAggregates(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get sensor aggregates as specified via JSON in request body. */
	return await fc.identityEntities.getSensorAggregates(parseJsonParam(c, i));
}

/** Handles getSensorDetails */
async function handleGetSensorDetails(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get details on one or more sensors by providing device IDs in body. */
	return await fc.identityEntities.getSensorDetails(parseJsonParam(c, i));
}

/** Handles querySensorsByFilter */
async function handleQuerySensorsByFilter(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for sensors by hostname, IP, and other criteria. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.identityEntities.querySensorsByFilter(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Identity Entities operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeIdentityEntities(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getSensorAggregates': return await handleGetSensorAggregates(this, index, falconClient);
		case 'getSensorDetails': return await handleGetSensorDetails(this, index, falconClient);
		case 'querySensorsByFilter': return await handleQuerySensorsByFilter(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Identity Entities.`);
	}
}
