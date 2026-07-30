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

/** Handles reportExecutionsDownloadGet */
async function handleReportExecutionsDownloadGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get report entity download. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.reportExecutions.reportExecutionsDownloadGet(id);
}

/** Handles reportExecutionsGet */
async function handleReportExecutionsGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve report details for the provided report IDs. */
	return await fc.reportExecutions.reportExecutionsGet(parseArrayParam(c, i, 'ids'));
}

/** Handles reportExecutionsQuery */
async function handleReportExecutionsQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Find all report execution IDs matching the query with filter. */
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	const q = getStringParam(c, i, 'q', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.reportExecutions.reportExecutionsQuery(sort || undefined, filter || undefined, q || undefined, offset || undefined, limit || undefined);
}

/** Handles reportExecutionsRetry */
async function handleReportExecutionsRetry(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retry report executions. */
	const body = parseJsonParam(c, i);
	return await fc.reportExecutions.reportExecutionsRetry(Array.isArray(body) ? body : [body]);
}

/**
 * Main execution handler for CrowdStrike Falcon Report Executions operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeReportExecutions(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'reportExecutionsDownloadGet': return await handleReportExecutionsDownloadGet(this, index, falconClient);
		case 'reportExecutionsGet': return await handleReportExecutionsGet(this, index, falconClient);
		case 'reportExecutionsQuery': return await handleReportExecutionsQuery(this, index, falconClient);
		case 'reportExecutionsRetry': return await handleReportExecutionsRetry(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Report Executions.`);
	}
}
