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
 * Handles the 'batchActiveResponderCmd' operation.
 */
async function handleBatchActiveResponderCmd(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Batch executes a RTR active-responder command across the hosts mapped to the given batch ID. */
	return await fc.realTimeResponse.batchActiveResponderCmd(parseJsonParam(c, i));
}

/**
 * Handles the 'batchCmd' operation.
 */
async function handleBatchCmd(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Batch executes a RTR read-only command across the hosts mapped to the given batch ID. */
	return await fc.realTimeResponse.batchCmd(parseJsonParam(c, i));
}

/**
 * Handles the 'batchGetCmd' operation.
 */
async function handleBatchGetCmd(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Batch executes get command across hosts to retrieve files. */
	return await fc.realTimeResponse.batchGetCmd(parseJsonParam(c, i));
}

/**
 * Handles the 'batchGetCmdStatus' operation.
 */
async function handleBatchGetCmdStatus(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves the status of the specified batch get command. */
	const reqId = getStringParam(c, i, 'batchGetCmdReqId', '');
	return await fc.realTimeResponse.batchGetCmdStatus(reqId);
}

/**
 * Handles the 'batchInitSessions' operation.
 */
async function handleBatchInitSessions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Batch initialize a RTR session on multiple hosts. */
	return await fc.realTimeResponse.batchInitSessions(parseJsonParam(c, i));
}

/**
 * Handles the 'batchRefreshSessions' operation.
 */
async function handleBatchRefreshSessions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Batch refresh a RTR session on multiple hosts. */
	return await fc.realTimeResponse.batchRefreshSessions(parseJsonParam(c, i));
}

/**
 * Handles the 'rTRAggregateSessions' operation.
 */
async function handleRTRAggregateSessions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get aggregates on session data. */
	const body = parseJsonParam(c, i);
	return await fc.realTimeResponse.rTRAggregateSessions(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'rTRCheckActiveResponderCommandStatus' operation.
 */
async function handleRTRCheckActiveResponderCommandStatus(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get status of an executed active-responder command on a single host. */
	const cloudRequestId = getStringParam(c, i, 'cloudRequestId', '');
	const sequenceId = c.getNodeParameter('sequenceId', i, 0) as number;
	return await fc.realTimeResponse.rTRCheckActiveResponderCommandStatus(cloudRequestId, sequenceId);
}

/**
 * Handles the 'rTRCheckCommandStatus' operation.
 */
async function handleRTRCheckCommandStatus(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get status of an executed command on a single host. */
	const cloudRequestId = getStringParam(c, i, 'cloudRequestId', '');
	const sequenceId = c.getNodeParameter('sequenceId', i, 0) as number;
	return await fc.realTimeResponse.rTRCheckCommandStatus(cloudRequestId, sequenceId);
}

/**
 * Handles the 'rTRDeleteFile' operation.
 */
async function handleRTRDeleteFile(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a RTR session file. */
	const ids = getStringParam(c, i, 'id', '');
	const sessionId = getStringParam(c, i, 'sessionId', '');
	return await fc.realTimeResponse.rTRDeleteFile(ids, sessionId);
}

/**
 * Handles the 'rTRDeleteFileV2' operation.
 */
async function handleRTRDeleteFileV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a RTR session file V2. */
	const ids = getStringParam(c, i, 'id', '');
	const sessionId = getStringParam(c, i, 'sessionId', '');
	return await fc.realTimeResponse.rTRDeleteFileV2(ids, sessionId);
}

/**
 * Handles the 'rTRDeleteQueuedSession' operation.
 */
async function handleRTRDeleteQueuedSession(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a queued session command. */
	const sessionId = getStringParam(c, i, 'sessionId', '');
	const cloudRequestId = getStringParam(c, i, 'cloudRequestId', '');
	return await fc.realTimeResponse.rTRDeleteQueuedSession(sessionId, cloudRequestId);
}

/**
 * Handles the 'rTRDeleteSession' operation.
 */
async function handleRTRDeleteSession(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a session. */
	const sessionId = getStringParam(c, i, 'sessionId', '');
	return await fc.realTimeResponse.rTRDeleteSession(sessionId);
}

/**
 * Handles the 'rTRExecuteActiveResponderCommand' operation.
 */
async function handleRTRExecuteActiveResponderCommand(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Execute an active responder command on a single host. */
	return await fc.realTimeResponse.rTRExecuteActiveResponderCommand(parseJsonParam(c, i));
}

/**
 * Handles the 'rTRExecuteCommand' operation.
 */
async function handleRTRExecuteCommand(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Execute a command on a single host. */
	return await fc.realTimeResponse.rTRExecuteCommand(parseJsonParam(c, i));
}

/**
 * Handles the 'rTRGetExtractedFileContents' operation.
 */
async function handleRTRGetExtractedFileContents(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get RTR extracted file contents for specified session and sha256. */
	const sessionId = getStringParam(c, i, 'sessionId', '');
	const sha256 = getStringParam(c, i, 'sha256', '');
	return await fc.realTimeResponse.rTRGetExtractedFileContents(sessionId, sha256);
}

/**
 * Handles the 'rTRInitSession' operation.
 */
async function handleRTRInitSession(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Initialize a new session with the RTR cloud. */
	return await fc.realTimeResponse.rTRInitSession(parseJsonParam(c, i));
}

/**
 * Handles the 'rTRListAllSessions' operation.
 */
async function handleRTRListAllSessions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of session_ids. */
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.realTimeResponse.rTRListAllSessions(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'rTRListFiles' operation.
 */
async function handleRTRListFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of files for the specified RTR session. */
	const sessionId = getStringParam(c, i, 'sessionId', '');
	return await fc.realTimeResponse.rTRListFiles(sessionId);
}

/**
 * Handles the 'rTRListFilesV2' operation.
 */
async function handleRTRListFilesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of files for the specified RTR session V2. */
	const sessionId = getStringParam(c, i, 'sessionId', '');
	return await fc.realTimeResponse.rTRListFilesV2(sessionId);
}

/**
 * Handles the 'rTRListQueuedSessions' operation.
 */
async function handleRTRListQueuedSessions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get queued session metadata by session ID. */
	return await fc.realTimeResponse.rTRListQueuedSessions(parseJsonParam(c, i));
}

/**
 * Handles the 'rTRListSessions' operation.
 */
async function handleRTRListSessions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get session metadata by session id. */
	return await fc.realTimeResponse.rTRListSessions(parseJsonParam(c, i));
}

/**
 * Handles the 'rTRPulseSession' operation.
 */
async function handleRTRPulseSession(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Refresh a session timeout on a single host. */
	return await fc.realTimeResponse.rTRPulseSession(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon Real-Time Response operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeRealTimeResponse(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'batchActiveResponderCmd': return await handleBatchActiveResponderCmd(this, index, falconClient);
		case 'batchCmd': return await handleBatchCmd(this, index, falconClient);
		case 'batchGetCmd': return await handleBatchGetCmd(this, index, falconClient);
		case 'batchGetCmdStatus': return await handleBatchGetCmdStatus(this, index, falconClient);
		case 'batchInitSessions': return await handleBatchInitSessions(this, index, falconClient);
		case 'batchRefreshSessions': return await handleBatchRefreshSessions(this, index, falconClient);
		case 'rTRAggregateSessions': return await handleRTRAggregateSessions(this, index, falconClient);
		case 'rTRCheckActiveResponderCommandStatus': return await handleRTRCheckActiveResponderCommandStatus(this, index, falconClient);
		case 'rTRCheckCommandStatus': return await handleRTRCheckCommandStatus(this, index, falconClient);
		case 'rTRDeleteFile': return await handleRTRDeleteFile(this, index, falconClient);
		case 'rTRDeleteFileV2': return await handleRTRDeleteFileV2(this, index, falconClient);
		case 'rTRDeleteQueuedSession': return await handleRTRDeleteQueuedSession(this, index, falconClient);
		case 'rTRDeleteSession': return await handleRTRDeleteSession(this, index, falconClient);
		case 'rTRExecuteActiveResponderCommand': return await handleRTRExecuteActiveResponderCommand(this, index, falconClient);
		case 'rTRExecuteCommand': return await handleRTRExecuteCommand(this, index, falconClient);
		case 'rTRGetExtractedFileContents': return await handleRTRGetExtractedFileContents(this, index, falconClient);
		case 'rTRInitSession': return await handleRTRInitSession(this, index, falconClient);
		case 'rTRListAllSessions': return await handleRTRListAllSessions(this, index, falconClient);
		case 'rTRListFiles': return await handleRTRListFiles(this, index, falconClient);
		case 'rTRListFilesV2': return await handleRTRListFilesV2(this, index, falconClient);
		case 'rTRListQueuedSessions': return await handleRTRListQueuedSessions(this, index, falconClient);
		case 'rTRListSessions': return await handleRTRListSessions(this, index, falconClient);
		case 'rTRPulseSession': return await handleRTRPulseSession(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Real-Time Response.`);
	}
}
