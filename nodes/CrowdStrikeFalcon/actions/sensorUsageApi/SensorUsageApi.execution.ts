import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam } from '../common';

/**
 * Handles the 'getSensorUsageHourly' operation.
 */
async function handleGetSensorUsageHourly(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Fetches hourly average. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.sensorUsageApi.getSensorUsageHourly(filter || undefined);
}

/**
 * Handles the 'getSensorUsageWeekly' operation.
 */
async function handleGetSensorUsageWeekly(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Fetches weekly average. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.sensorUsageApi.getSensorUsageWeekly(filter || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Sensor Usage API operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeSensorUsageApi(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getSensorUsageHourly': return await handleGetSensorUsageHourly(this, index, falconClient);
		case 'getSensorUsageWeekly': return await handleGetSensorUsageWeekly(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Sensor Usage API.`);
	}
}
