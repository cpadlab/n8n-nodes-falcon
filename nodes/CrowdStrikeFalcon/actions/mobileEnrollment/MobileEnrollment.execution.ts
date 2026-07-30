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

/**
 * Handles the 'requestDeviceEnrollmentV3' operation.
 */
async function handleRequestDeviceEnrollmentV3(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Trigger on-boarding process for a mobile device. */
	const actionName = getStringParam(c, i, 'actionName', '') as any;
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.mobileEnrollment.requestDeviceEnrollmentV3(parseJsonParam(c, i), actionName || undefined, filter || undefined);
}

/**
 * Handles the 'requestDeviceEnrollmentV4' operation.
 */
async function handleRequestDeviceEnrollmentV4(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Trigger on-boarding process for a mobile device. */
	const actionName = getStringParam(c, i, 'actionName', '') as any;
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.mobileEnrollment.requestDeviceEnrollmentV4(parseJsonParam(c, i), actionName || undefined, filter || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Mobile Enrollment operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeMobileEnrollment(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'requestDeviceEnrollmentV3': return await handleRequestDeviceEnrollmentV3(this, index, falconClient);
		case 'requestDeviceEnrollmentV4': return await handleRequestDeviceEnrollmentV4(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Mobile Enrollment.`);
	}
}
