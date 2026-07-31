import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam } from '../common';

/**
 * Handles the 'getScanRunReports' operation.
 */
async function handleGetScanRunReports(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Downloads scan run report in CSV format. */
	const id = getStringParam(c, i, 'id', '');
	const xCSUSERUUID = getStringParam(c, i, 'xCSUSERUUID', '');
	return await fc.networkScanScanRunReports.getScanRunReports(id, xCSUSERUUID || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Network Scan Scan Run Reports operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeNetworkScanScanRunReports(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getScanRunReports': return await handleGetScanRunReports(this, index, falconClient);
		default:
			throw new NodeOperationError(c.getNode(), `Operation ${operation} is not supported for Network Scan Scan Run Reports.`);
	}
}
