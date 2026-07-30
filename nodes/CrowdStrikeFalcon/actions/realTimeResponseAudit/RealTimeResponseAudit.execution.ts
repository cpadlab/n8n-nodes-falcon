import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/** Handles rTRAuditSessions */
async function handleRTRAuditSessions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get all the RTR sessions created for a customer in a specified duration. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', 'created_at');
	const limit = getStringParam(c, i, 'limit', '100');
	const offset = getStringParam(c, i, 'offset', '0');
	const withCommandInfo = c.getNodeParameter('withCommandInfo', i, false) as boolean;
	return await fc.realTimeResponseAudit.rTRAuditSessions(filter || undefined, sort as any || undefined, limit || undefined, offset || undefined, withCommandInfo);
}

/**
 * Main execution handler for CrowdStrike Falcon Real-Time Response Audit operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeRealTimeResponseAudit(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'rTRAuditSessions': return await handleRTRAuditSessions(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Real-Time Response Audit.`);
	}
}
