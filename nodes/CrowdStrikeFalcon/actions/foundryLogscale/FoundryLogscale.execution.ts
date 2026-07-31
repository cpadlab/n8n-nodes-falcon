import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseJsonParam } from '../common';

/**
 * Handles the 'createSavedSearchesDynamicExecuteAltV1' operation.
 */
async function handleCreateSavedSearchesDynamicExecuteAltV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Execute a dynamic saved search. */
	const body = parseJsonParam(c, i);
	const appId = getStringParam(c, i, 'appId', '');
	return await fc.foundryLogscale.createSavedSearchesDynamicExecuteAltV1(body, appId || undefined);
}

/**
 * Handles the 'createSavedSearchesExecuteAltV1' operation.
 */
async function handleCreateSavedSearchesExecuteAltV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Execute a saved search. */
	const body = parseJsonParam(c, i);
	const appId = getStringParam(c, i, 'appId', '');
	return await fc.foundryLogscale.createSavedSearchesExecuteAltV1(body, appId || undefined);
}

/**
 * Handles the 'createSavedSearchesIngestAltV1' operation.
 */
async function handleCreateSavedSearchesIngestAltV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Populate a saved search. */
	const appId = getStringParam(c, i, 'appId', '');
	return await fc.foundryLogscale.createSavedSearchesIngestAltV1(appId || undefined);
}

/**
 * Handles the 'downloadResults' operation.
 */
async function handleDownloadResults(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the results of a saved search as a file. */
	const jobId = getStringParam(c, i, 'jobId', '');
	return await fc.foundryLogscale.downloadResults(jobId);
}

/**
 * Handles the 'execute' operation.
 */
async function handleExecute(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Execute a saved search. */
	const body = parseJsonParam(c, i);
	const appId = getStringParam(c, i, 'appId', '');
	return await fc.foundryLogscale.execute(body, appId || undefined);
}

/**
 * Handles the 'executeDynamic' operation.
 */
async function handleExecuteDynamic(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Execute a dynamic saved search. */
	const body = parseJsonParam(c, i);
	const appId = getStringParam(c, i, 'appId', '');
	return await fc.foundryLogscale.executeDynamic(body, appId || undefined);
}

/**
 * Handles the 'getSavedSearchesExecuteAltV1' operation.
 */
async function handleGetSavedSearchesExecuteAltV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the results of a saved search. */
	const jobId = getStringParam(c, i, 'jobId', '');
	const appId = getStringParam(c, i, 'appId', '');
	return await fc.foundryLogscale.getSavedSearchesExecuteAltV1(jobId, appId || undefined);
}

/**
 * Handles the 'getSavedSearchesJobResultsDownloadAltV1' operation.
 */
async function handleGetSavedSearchesJobResultsDownloadAltV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the results of a saved search as a file. */
	const jobId = getStringParam(c, i, 'jobId', '');
	return await fc.foundryLogscale.getSavedSearchesJobResultsDownloadAltV1(jobId);
}

/**
 * Handles the 'getSearchResults' operation.
 */
async function handleGetSearchResults(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the results of a saved search. */
	const jobId = getStringParam(c, i, 'jobId', '');
	const appId = getStringParam(c, i, 'appId', '');
	return await fc.foundryLogscale.getSearchResults(jobId, appId || undefined);
}

/**
 * Handles the 'ingestData' operation.
 */
async function handleIngestData(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Synchronously ingest data into the application repository. */
	const dataContent = getStringParam(c, i, 'dataContent', '');
	return await fc.foundryLogscale.ingestData(dataContent || undefined);
}

/**
 * Handles the 'ingestDataAsyncV1' operation.
 */
async function handleIngestDataAsyncV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Asynchronously ingest data into the application repository. */
	const dataContent = getStringParam(c, i, 'dataContent', '');
	const repo = getStringParam(c, i, 'repo', '');
	return await fc.foundryLogscale.ingestDataAsyncV1(dataContent || undefined, undefined, repo || undefined);
}

/**
 * Handles the 'listRepos' operation.
 */
async function handleListRepos(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Lists available repositories. */
	const checkTestData = c.getNodeParameter('checkTestData', i, false) as boolean;
	return await fc.foundryLogscale.listRepos(checkTestData);
}

/**
 * Handles the 'listViews' operation.
 */
async function handleListViews(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* List available views. */
	const checkTestData = c.getNodeParameter('checkTestData', i, false) as boolean;
	return await fc.foundryLogscale.listViews(checkTestData);
}

/**
 * Handles the 'populate' operation.
 */
async function handlePopulate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Populate a saved search. */
	const appId = getStringParam(c, i, 'appId', '');
	return await fc.foundryLogscale.populate(appId || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Foundry Logscale operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeFoundryLogscale(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createSavedSearchesDynamicExecuteAltV1': return await handleCreateSavedSearchesDynamicExecuteAltV1(this, index, falconClient);
		case 'createSavedSearchesExecuteAltV1': return await handleCreateSavedSearchesExecuteAltV1(this, index, falconClient);
		case 'createSavedSearchesIngestAltV1': return await handleCreateSavedSearchesIngestAltV1(this, index, falconClient);
		case 'downloadResults': return await handleDownloadResults(this, index, falconClient);
		case 'execute': return await handleExecute(this, index, falconClient);
		case 'executeDynamic': return await handleExecuteDynamic(this, index, falconClient);
		case 'getSavedSearchesExecuteAltV1': return await handleGetSavedSearchesExecuteAltV1(this, index, falconClient);
		case 'getSavedSearchesJobResultsDownloadAltV1': return await handleGetSavedSearchesJobResultsDownloadAltV1(this, index, falconClient);
		case 'getSearchResults': return await handleGetSearchResults(this, index, falconClient);
		case 'ingestData': return await handleIngestData(this, index, falconClient);
		case 'ingestDataAsyncV1': return await handleIngestDataAsyncV1(this, index, falconClient);
		case 'listRepos': return await handleListRepos(this, index, falconClient);
		case 'listViews': return await handleListViews(this, index, falconClient);
		case 'populate': return await handlePopulate(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Foundry Logscale.`);
	}
}
