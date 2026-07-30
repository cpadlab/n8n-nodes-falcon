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

/** Handles deleteFile */
async function handleDeleteFile(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes file by its sha256 identifier. */
	return await fc.quickScanPro.deleteFile(parseArrayParam(c, i, 'ids'));
}

/** Handles deleteScanResult */
async function handleDeleteScanResult(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes the result of an QuickScan Pro scan. */
	return await fc.quickScanPro.deleteScanResult(parseArrayParam(c, i, 'ids'));
}

/** Handles getScanResult */
async function handleGetScanResult(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets the result of an QuickScan Pro scan. */
	return await fc.quickScanPro.getScanResult(parseArrayParam(c, i, 'ids'));
}

/** Handles launchScan */
async function handleLaunchScan(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Starts scanning a file uploaded through QuickScan Pro. */
	return await fc.quickScanPro.launchScan(parseJsonParam(c, i));
}

/** Handles queryScanResults */
async function handleQueryScanResults(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* FQL query specifying the filter parameters. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.quickScanPro.queryScanResults(filter, offset || undefined, limit || undefined, sort || undefined);
}

/** Handles uploadFileQuickScanPro */
async function handleUploadFileQuickScanPro(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Uploads a file to be further analyzed with QuickScan Pro. */
	const fileBlob = new Blob([]);
	return await fc.quickScanPro.uploadFileQuickScanPro(fileBlob);
}

/**
 * Main execution handler for CrowdStrike Falcon Quick Scan Pro operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeQuickScanPro(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'deleteFile': return await handleDeleteFile(this, index, falconClient);
		case 'deleteScanResult': return await handleDeleteScanResult(this, index, falconClient);
		case 'getScanResult': return await handleGetScanResult(this, index, falconClient);
		case 'launchScan': return await handleLaunchScan(this, index, falconClient);
		case 'queryScanResults': return await handleQueryScanResults(this, index, falconClient);
		case 'uploadFileQuickScanPro': return await handleUploadFileQuickScanPro(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Quick Scan Pro.`);
	}
}
