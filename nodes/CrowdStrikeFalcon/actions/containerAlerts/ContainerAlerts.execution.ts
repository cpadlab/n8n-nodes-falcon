import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Handles the 'readContainerAlertsCount' operation.
 */
async function handleReadContainerAlertsCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads container alerts count. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerAlerts.readContainerAlertsCount(filter || undefined);
}

/**
 * Handles the 'readContainerAlertsCountBySeverity' operation.
 */
async function handleReadContainerAlertsCountBySeverity(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads container alerts count by severity. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerAlerts.readContainerAlertsCountBySeverity(filter || undefined);
}

/**
 * Handles the 'searchAndReadContainerAlerts' operation.
 */
async function handleSearchAndReadContainerAlerts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches and reads container alerts. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = c.getNodeParameter('sort', i, '') as string;
	return await fc.containerAlerts.searchAndReadContainerAlerts(filter || undefined, limit || undefined, offset || undefined, sort || undefined);
}

/** Main execution handler for Container Alerts operations. */
export async function executeContainerAlerts(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'readContainerAlertsCount': return await handleReadContainerAlertsCount(this, index, falconClient);
		case 'readContainerAlertsCountBySeverity': return await handleReadContainerAlertsCountBySeverity(this, index, falconClient);
		case 'searchAndReadContainerAlerts': return await handleSearchAndReadContainerAlerts(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Container Alerts.`);
	}
}
