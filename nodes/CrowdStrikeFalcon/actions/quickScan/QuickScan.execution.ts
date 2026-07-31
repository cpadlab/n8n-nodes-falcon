import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'getScans' operation.
 */
async function handleGetScans(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Check the status of a volume scan. */
	return await fc.quickScan.getScans(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'getScansAggregates' operation.
 */
async function handleGetScansAggregates(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get scans aggregations as specified via json in request body. */
	return await fc.quickScan.getScansAggregates(parseJsonParam(c, i));
}

/**
 * Handles the 'querySubmissionsMixin0' operation.
 */
async function handleQuerySubmissionsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Find IDs for submitted scans by providing an FQL filter and paging details. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.quickScan.querySubmissionsMixin0(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'scanSamples' operation.
 */
async function handleScanSamples(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Submit a volume of files for ml scanning. */
	return await fc.quickScan.scanSamples(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Quick Scan operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeQuickScan(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getScans': return await handleGetScans(this, index, falconClient);
		case 'getScansAggregates': return await handleGetScansAggregates(this, index, falconClient);
		case 'querySubmissionsMixin0': return await handleQuerySubmissionsMixin0(this, index, falconClient);
		case 'scanSamples': return await handleScanSamples(this, index, falconClient);
		default:
			throw new NodeOperationError(this.getNode(), `Operation ${operation} is not supported for Quick Scan.`);
	}
}
