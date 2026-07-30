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
 * Handles the 'downloadExportFileMixin0' operation.
 */
async function handleDownloadExportFileMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download an export file. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.serverlessExports.downloadExportFileMixin0(id);
}

/**
 * Handles the 'launchExportJobMixin0' operation.
 */
async function handleLaunchExportJobMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Launch an export job of a Lambda Security resource. */
	return await fc.serverlessExports.launchExportJobMixin0(parseJsonParam(c, i));
}

/**
 * Handles the 'queryExportJobsMixin0' operation.
 */
async function handleQueryExportJobsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query export jobs entities. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.serverlessExports.queryExportJobsMixin0(filter || undefined);
}

/**
 * Handles the 'readExportJobsMixin0' operation.
 */
async function handleReadExportJobsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Read export jobs entities. */
	return await fc.serverlessExports.readExportJobsMixin0(parseArrayParam(c, i, 'ids'));
}

/**
 * Main execution handler for CrowdStrike Falcon Serverless Exports operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeServerlessExports(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'downloadExportFileMixin0': return await handleDownloadExportFileMixin0(this, index, falconClient);
		case 'launchExportJobMixin0': return await handleLaunchExportJobMixin0(this, index, falconClient);
		case 'queryExportJobsMixin0': return await handleQueryExportJobsMixin0(this, index, falconClient);
		case 'readExportJobsMixin0': return await handleReadExportJobsMixin0(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Serverless Exports.`);
	}
}
