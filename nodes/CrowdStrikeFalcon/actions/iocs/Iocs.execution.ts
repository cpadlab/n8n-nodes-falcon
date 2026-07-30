import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
	const str = (context.getNodeParameter(paramName, index, '') as string) || '';
	return str.split(',').map((id) => id.trim()).filter(Boolean);
}

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/** Handles devicesCount */
async function handleDevicesCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Number of hosts in your customer account that have observed a given custom IOC. */
	const type = getStringParam(c, i, 'type', '');
	const value = getStringParam(c, i, 'value', '');
	return await fc.iocs.devicesCount(type, value);
}

/** Handles devicesRanOn */
async function handleDevicesRanOn(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Find hosts that have observed a given custom IOC. */
	const type = getStringParam(c, i, 'type', '');
	const value = getStringParam(c, i, 'value', '');
	const limit = getStringParam(c, i, 'limit', '');
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.iocs.devicesRanOn(type, value, limit || undefined, offset || undefined);
}

/** Handles entitiesProcesses */
async function handleEntitiesProcesses(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* For the provided ProcessID retrieve the process details. */
	return await fc.iocs.entitiesProcesses(parseArrayParam(c, i, 'ids'));
}

/** Handles processesRanOn */
async function handleProcessesRanOn(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for processes associated with a custom IOC. */
	const type = getStringParam(c, i, 'type', '');
	const value = getStringParam(c, i, 'value', '');
	const deviceId = getStringParam(c, i, 'deviceId', '');
	const limit = getStringParam(c, i, 'limit', '');
	const offset = getStringParam(c, i, 'offset', '');
	return await fc.iocs.processesRanOn(type, value, deviceId, limit || undefined, offset || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon IOCs operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeIocs(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'devicesCount': return await handleDevicesCount(this, index, falconClient);
		case 'devicesRanOn': return await handleDevicesRanOn(this, index, falconClient);
		case 'entitiesProcesses': return await handleEntitiesProcesses(this, index, falconClient);
		case 'processesRanOn': return await handleProcessesRanOn(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for IOCs.`);
	}
}
