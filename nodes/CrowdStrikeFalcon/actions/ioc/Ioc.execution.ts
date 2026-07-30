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

/**
 * Handles the 'actionGetV1' operation.
 */
async function handleActionGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Actions by IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.ioc.actionGetV1(ids.length > 0 ? ids : undefined);
}

/**
 * Handles the 'actionQueryV1' operation.
 */
async function handleActionQueryV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query Actions. */
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.ioc.actionQueryV1(offset || undefined, limit || undefined);
}

/**
 * Handles the 'getIndicatorsReport' operation.
 */
async function handleGetIndicatorsReport(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Launch an indicators report creation job. */
	return await fc.ioc.getIndicatorsReport(parseJsonParam(c, i));
}

/**
 * Handles the 'indicatorAggregateV1' operation.
 */
async function handleIndicatorAggregateV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Indicators aggregates as specified via JSON. */
	const body = parseJsonParam(c, i);
	const filter = getStringParam(c, i, 'filter', '');
	const fromParent = c.getNodeParameter('fromParent', i, false) as boolean;
	return await fc.ioc.indicatorAggregateV1(body, filter || undefined, fromParent);
}

/**
 * Handles the 'indicatorCombinedV1' operation.
 */
async function handleIndicatorCombinedV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Combined for Indicators. */
	const filter = getStringParam(c, i, 'filter', '');
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	const after = getStringParam(c, i, 'after', '');
	const fromParent = c.getNodeParameter('fromParent', i, false) as boolean;
	return await fc.ioc.indicatorCombinedV1(filter || undefined, offset, limit || undefined, sort || undefined, after || undefined, fromParent);
}

/**
 * Handles the 'indicatorCreateV1' operation.
 */
async function handleIndicatorCreateV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Indicators. */
	const body = parseJsonParam(c, i);
	const retrodetects = c.getNodeParameter('retrodetects', i, false) as boolean;
	const ignoreWarnings = c.getNodeParameter('ignoreWarnings', i, false) as boolean;
	return await fc.ioc.indicatorCreateV1(body, retrodetects, ignoreWarnings);
}

/**
 * Handles the 'indicatorDeleteV1' operation.
 */
async function handleIndicatorDeleteV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete Indicators by IDs. */
	const filter = getStringParam(c, i, 'filter', '');
	const ids = parseArrayParam(c, i, 'ids');
	const comment = getStringParam(c, i, 'comment', '');
	const fromParent = c.getNodeParameter('fromParent', i, false) as boolean;
	return await fc.ioc.indicatorDeleteV1(filter || undefined, ids.length > 0 ? ids : undefined, comment || undefined, fromParent);
}

/**
 * Handles the 'indicatorGetDeviceCountV1' operation.
 */
async function handleIndicatorGetDeviceCountV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the number of devices the indicator has run on. */
	const type = getStringParam(c, i, 'type', '');
	const value = getStringParam(c, i, 'value', '');
	return await fc.ioc.indicatorGetDeviceCountV1(type, value);
}

/**
 * Handles the 'indicatorGetDevicesRanOnV1' operation.
 */
async function handleIndicatorGetDevicesRanOnV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the IDs of devices the indicator has run on. */
	const type = getStringParam(c, i, 'type', '');
	const value = getStringParam(c, i, 'value', '');
	const limit = getStringParam(c, i, 'limit', '');
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.ioc.indicatorGetDevicesRanOnV1(type, value, limit || undefined, offset || undefined);
}

/**
 * Handles the 'indicatorGetProcessesRanOnV1' operation.
 */
async function handleIndicatorGetProcessesRanOnV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the number of processes the indicator has run on. */
	const type = getStringParam(c, i, 'type', '');
	const value = getStringParam(c, i, 'value', '');
	const deviceId = getStringParam(c, i, 'deviceId', '');
	const limit = getStringParam(c, i, 'limit', '');
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.ioc.indicatorGetProcessesRanOnV1(type, value, deviceId, limit || undefined, offset || undefined);
}

/**
 * Handles the 'indicatorGetV1' operation.
 */
async function handleIndicatorGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Indicators by IDs. */
	return await fc.ioc.indicatorGetV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'indicatorSdmfQueryV1' operation.
 */
async function handleIndicatorSdmfQueryV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes an SDMF data frame query against IOC indicators. */
	return await fc.ioc.indicatorSdmfQueryV1(parseJsonParam(c, i));
}

/**
 * Handles the 'indicatorSearchV1' operation.
 */
async function handleIndicatorSearchV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Indicators. */
	const filter = getStringParam(c, i, 'filter', '');
	const offsetStr = getStringParam(c, i, 'offset', '');
	const offset = offsetStr ? parseInt(offsetStr, 10) : undefined;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	const after = getStringParam(c, i, 'after', '');
	const fromParent = c.getNodeParameter('fromParent', i, false) as boolean;
	return await fc.ioc.indicatorSearchV1(filter || undefined, offset, limit || undefined, sort || undefined, after || undefined, fromParent);
}

/**
 * Handles the 'indicatorUpdateV1' operation.
 */
async function handleIndicatorUpdateV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Indicators. */
	const body = parseJsonParam(c, i);
	const retrodetects = c.getNodeParameter('retrodetects', i, false) as boolean;
	const ignoreWarnings = c.getNodeParameter('ignoreWarnings', i, false) as boolean;
	return await fc.ioc.indicatorUpdateV1(body, retrodetects, ignoreWarnings);
}

/**
 * Handles the 'iocTypeQueryV1' operation.
 */
async function handleIocTypeQueryV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query IOC Types. */
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.ioc.iocTypeQueryV1(offset || undefined, limit || undefined);
}

/**
 * Handles the 'platformQueryV1' operation.
 */
async function handlePlatformQueryV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query Platforms. */
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.ioc.platformQueryV1(offset || undefined, limit || undefined);
}

/**
 * Handles the 'severityQueryV1' operation.
 */
async function handleSeverityQueryV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query Severities. */
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.ioc.severityQueryV1(offset || undefined, limit || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon IOC operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeIoc(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'actionGetV1': return await handleActionGetV1(this, index, falconClient);
		case 'actionQueryV1': return await handleActionQueryV1(this, index, falconClient);
		case 'getIndicatorsReport': return await handleGetIndicatorsReport(this, index, falconClient);
		case 'indicatorAggregateV1': return await handleIndicatorAggregateV1(this, index, falconClient);
		case 'indicatorCombinedV1': return await handleIndicatorCombinedV1(this, index, falconClient);
		case 'indicatorCreateV1': return await handleIndicatorCreateV1(this, index, falconClient);
		case 'indicatorDeleteV1': return await handleIndicatorDeleteV1(this, index, falconClient);
		case 'indicatorGetDeviceCountV1': return await handleIndicatorGetDeviceCountV1(this, index, falconClient);
		case 'indicatorGetDevicesRanOnV1': return await handleIndicatorGetDevicesRanOnV1(this, index, falconClient);
		case 'indicatorGetProcessesRanOnV1': return await handleIndicatorGetProcessesRanOnV1(this, index, falconClient);
		case 'indicatorGetV1': return await handleIndicatorGetV1(this, index, falconClient);
		case 'indicatorSdmfQueryV1': return await handleIndicatorSdmfQueryV1(this, index, falconClient);
		case 'indicatorSearchV1': return await handleIndicatorSearchV1(this, index, falconClient);
		case 'indicatorUpdateV1': return await handleIndicatorUpdateV1(this, index, falconClient);
		case 'iocTypeQueryV1': return await handleIocTypeQueryV1(this, index, falconClient);
		case 'platformQueryV1': return await handlePlatformQueryV1(this, index, falconClient);
		case 'severityQueryV1': return await handleSeverityQueryV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for IOC.`);
	}
}
