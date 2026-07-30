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

/**
 * Handles the 'getDefaultDeviceControlSettings' operation.
 */
async function handleGetDefaultDeviceControlSettings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets default device control settings. */
	return await fc.deviceControlWithBluetooth.getDefaultDeviceControlSettings();
}

/**
 * Handles the 'getDeviceControlPoliciesV2' operation.
 */
async function handleGetDeviceControlPoliciesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets device control policies V2. */
	return await fc.deviceControlWithBluetooth.getDeviceControlPoliciesV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'patchDeviceControlPoliciesClassesV1' operation.
 */
async function handlePatchDeviceControlPoliciesClassesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Patches device control policy classes V1. */
	return await fc.deviceControlWithBluetooth.patchDeviceControlPoliciesClassesV1(parseJsonParam(c, i));
}

/**
 * Handles the 'patchDeviceControlPoliciesV2' operation.
 */
async function handlePatchDeviceControlPoliciesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Patches device control policy base V2. */
	return await fc.deviceControlWithBluetooth.patchDeviceControlPoliciesV2(parseJsonParam(c, i));
}

/**
 * Handles the 'postDeviceControlPoliciesV2' operation.
 */
async function handlePostDeviceControlPoliciesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Posts device control policy V2. */
	return await fc.deviceControlWithBluetooth.postDeviceControlPoliciesV2(parseJsonParam(c, i));
}

/**
 * Handles the 'updateDefaultDeviceControlSettings' operation.
 */
async function handleUpdateDefaultDeviceControlSettings(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates default device control settings. */
	return await fc.deviceControlWithBluetooth.updateDefaultDeviceControlSettings(parseJsonParam(c, i));
}

/** Main execution handler for Device Control with Bluetooth operations. */
export async function executeDeviceControlWithBluetooth(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getDefaultDeviceControlSettings': return await handleGetDefaultDeviceControlSettings(this, index, falconClient);
		case 'getDeviceControlPoliciesV2': return await handleGetDeviceControlPoliciesV2(this, index, falconClient);
		case 'patchDeviceControlPoliciesClassesV1': return await handlePatchDeviceControlPoliciesClassesV1(this, index, falconClient);
		case 'patchDeviceControlPoliciesV2': return await handlePatchDeviceControlPoliciesV2(this, index, falconClient);
		case 'postDeviceControlPoliciesV2': return await handlePostDeviceControlPoliciesV2(this, index, falconClient);
		case 'updateDefaultDeviceControlSettings': return await handleUpdateDefaultDeviceControlSettings(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Device Control with Bluetooth.`);
	}
}
