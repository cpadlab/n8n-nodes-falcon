import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'batchAdminCmd' operation.
 */
async function handleBatchAdminCmd(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Batch executes a RTR administrator command across the hosts mapped to the given batch ID. */
	return await fc.realTimeResponseAdmin.batchAdminCmd(parseJsonParam(c, i));
}

/**
 * Handles the 'rTRCheckAdminCommandStatus' operation.
 */
async function handleRTRCheckAdminCommandStatus(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get status of an executed RTR administrator command on a single host. */
	const cloudRequestId = getStringParam(c, i, 'cloudRequestId', '');
	const sequenceId = c.getNodeParameter('sequenceId', i, 0) as number;
	return await fc.realTimeResponseAdmin.rTRCheckAdminCommandStatus(cloudRequestId, sequenceId);
}

/**
 * Handles the 'rTRCreatePutFiles' operation.
 */
async function handleRTRCreatePutFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload a new put-file to use for the RTR put command. */
	const fileBlob = new Blob([]);
	return await fc.realTimeResponseAdmin.rTRCreatePutFiles(fileBlob, 'Put File Upload');
}

/**
 * Handles the 'rTRCreatePutFilesV2' operation.
 */
async function handleRTRCreatePutFilesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload a new put-file to use for the RTR put command V2. */
	const fileBlob = new Blob([]);
	return await fc.realTimeResponseAdmin.rTRCreatePutFilesV2(fileBlob, 'Put File Upload V2');
}

/**
 * Handles the 'rTRCreateScripts' operation.
 */
async function handleRTRCreateScripts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload a new custom-script to use for the RTR runscript command. */
	return await fc.realTimeResponseAdmin.rTRCreateScripts('RTR Script', 'private');
}

/**
 * Handles the 'rTRCreateScriptsV2' operation.
 */
async function handleRTRCreateScriptsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload a new custom-script to use for the RTR runscript command V2. */
	return await fc.realTimeResponseAdmin.rTRCreateScriptsV2('RTR Script V2', 'private');
}

/**
 * Handles the 'rTRDeletePutFiles' operation.
 */
async function handleRTRDeletePutFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a put-file based on the ID given. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.realTimeResponseAdmin.rTRDeletePutFiles(ids);
}

/**
 * Handles the 'rTRDeleteScripts' operation.
 */
async function handleRTRDeleteScripts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a custom-script based on the ID given. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.realTimeResponseAdmin.rTRDeleteScripts(ids);
}

/**
 * Handles the 'rTRExecuteAdminCommand' operation.
 */
async function handleRTRExecuteAdminCommand(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Execute a RTR administrator command on a single host. */
	return await fc.realTimeResponseAdmin.rTRExecuteAdminCommand(parseJsonParam(c, i));
}

/**
 * Handles the 'rTRGetFalconScripts' operation.
 */
async function handleRTRGetFalconScripts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Falcon scripts with metadata and content of script. */
	return await fc.realTimeResponseAdmin.rTRGetFalconScripts(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'rTRGetPutFileContents' operation.
 */
async function handleRTRGetPutFileContents(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get RTR put file contents for a given file ID. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.realTimeResponseAdmin.rTRGetPutFileContents(id);
}

/**
 * Handles the 'rTRGetPutFiles' operation.
 */
async function handleRTRGetPutFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get put-files based on the ID's given. */
	return await fc.realTimeResponseAdmin.rTRGetPutFiles(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'rTRGetPutFilesV2' operation.
 */
async function handleRTRGetPutFilesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get put-files based on the ID's given V2. */
	return await fc.realTimeResponseAdmin.rTRGetPutFilesV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'rTRGetScripts' operation.
 */
async function handleRTRGetScripts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get custom-scripts based on the ID's given. */
	return await fc.realTimeResponseAdmin.rTRGetScripts(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'rTRGetScriptsV2' operation.
 */
async function handleRTRGetScriptsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get custom-scripts based on the ID's given V2. */
	return await fc.realTimeResponseAdmin.rTRGetScriptsV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'rTRListFalconScripts' operation.
 */
async function handleRTRListFalconScripts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of Falcon script IDs available to the user to run. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.realTimeResponseAdmin.rTRListFalconScripts(filter || undefined, offset || undefined, limit || undefined, sort as any || undefined);
}

/**
 * Handles the 'rTRListPutFiles' operation.
 */
async function handleRTRListPutFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of put-file ID's that are available to the user for the put command. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.realTimeResponseAdmin.rTRListPutFiles(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'rTRListScripts' operation.
 */
async function handleRTRListScripts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a list of custom-script ID's that are available to the user for the runscript command. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = getStringParam(c, i, 'offset', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.realTimeResponseAdmin.rTRListScripts(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'rTRUpdateScripts' operation.
 */
async function handleRTRUpdateScripts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload a new scripts to replace an existing one. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.realTimeResponseAdmin.rTRUpdateScripts(id);
}

/**
 * Handles the 'rTRUpdateScriptsV2' operation.
 */
async function handleRTRUpdateScriptsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload a new scripts to replace an existing one V2. */
	const id = getStringParam(c, i, 'id', '');
	return await fc.realTimeResponseAdmin.rTRUpdateScriptsV2(id);
}

/**
 * Main execution handler for CrowdStrike Falcon Real-Time Response Admin operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeRealTimeResponseAdmin(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'batchAdminCmd': return await handleBatchAdminCmd(this, index, falconClient);
		case 'rTRCheckAdminCommandStatus': return await handleRTRCheckAdminCommandStatus(this, index, falconClient);
		case 'rTRCreatePutFiles': return await handleRTRCreatePutFiles(this, index, falconClient);
		case 'rTRCreatePutFilesV2': return await handleRTRCreatePutFilesV2(this, index, falconClient);
		case 'rTRCreateScripts': return await handleRTRCreateScripts(this, index, falconClient);
		case 'rTRCreateScriptsV2': return await handleRTRCreateScriptsV2(this, index, falconClient);
		case 'rTRDeletePutFiles': return await handleRTRDeletePutFiles(this, index, falconClient);
		case 'rTRDeleteScripts': return await handleRTRDeleteScripts(this, index, falconClient);
		case 'rTRExecuteAdminCommand': return await handleRTRExecuteAdminCommand(this, index, falconClient);
		case 'rTRGetFalconScripts': return await handleRTRGetFalconScripts(this, index, falconClient);
		case 'rTRGetPutFileContents': return await handleRTRGetPutFileContents(this, index, falconClient);
		case 'rTRGetPutFiles': return await handleRTRGetPutFiles(this, index, falconClient);
		case 'rTRGetPutFilesV2': return await handleRTRGetPutFilesV2(this, index, falconClient);
		case 'rTRGetScripts': return await handleRTRGetScripts(this, index, falconClient);
		case 'rTRGetScriptsV2': return await handleRTRGetScriptsV2(this, index, falconClient);
		case 'rTRListFalconScripts': return await handleRTRListFalconScripts(this, index, falconClient);
		case 'rTRListPutFiles': return await handleRTRListPutFiles(this, index, falconClient);
		case 'rTRListScripts': return await handleRTRListScripts(this, index, falconClient);
		case 'rTRUpdateScripts': return await handleRTRUpdateScripts(this, index, falconClient);
		case 'rTRUpdateScriptsV2': return await handleRTRUpdateScriptsV2(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Real-Time Response Admin.`);
	}
}
