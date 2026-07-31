import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'createSVExclusionsV1' operation.
 */
async function handleCreateSVExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create the sensor visibility exclusions. */
	return await fc.sensorVisibilityExclusions.createSVExclusionsV1(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteSensorVisibilityExclusionsV1' operation.
 */
async function handleDeleteSensorVisibilityExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete the sensor visibility exclusions by id. */
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.sensorVisibilityExclusions.deleteSensorVisibilityExclusionsV1(parseArrayParam(c, i, 'ids'), comment || undefined);
}

/**
 * Handles the 'getSensorVisibilityExclusionsV1' operation.
 */
async function handleGetSensorVisibilityExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a set of Sensor Visibility Exclusions by specifying their IDs. */
	return await fc.sensorVisibilityExclusions.getSensorVisibilityExclusionsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'querySensorVisibilityExclusionsV1' operation.
 */
async function handleQuerySensorVisibilityExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for sensor visibility exclusions. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.sensorVisibilityExclusions.querySensorVisibilityExclusionsV1(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'updateSensorVisibilityExclusionsV1' operation.
 */
async function handleUpdateSensorVisibilityExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update the sensor visibility exclusions. */
	return await fc.sensorVisibilityExclusions.updateSensorVisibilityExclusionsV1(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Sensor Visibility Exclusions operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeSensorVisibilityExclusions(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createSVExclusionsV1': return await handleCreateSVExclusionsV1(this, index, falconClient);
		case 'deleteSensorVisibilityExclusionsV1': return await handleDeleteSensorVisibilityExclusionsV1(this, index, falconClient);
		case 'getSensorVisibilityExclusionsV1': return await handleGetSensorVisibilityExclusionsV1(this, index, falconClient);
		case 'querySensorVisibilityExclusionsV1': return await handleQuerySensorVisibilityExclusionsV1(this, index, falconClient);
		case 'updateSensorVisibilityExclusionsV1': return await handleUpdateSensorVisibilityExclusionsV1(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Sensor Visibility Exclusions.`);
	}
}
