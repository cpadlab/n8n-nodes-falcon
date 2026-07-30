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
 * Handles the 'bulkCreateDashboardsFromTemplate' operation.
 */
async function handleBulkCreateDashboardsFromTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Multiple Dashboards from YAML Templates. */
	return await fc.ngsiem.bulkCreateDashboardsFromTemplate(parseJsonParam(c, i));
}

/**
 * Handles the 'bulkCreateLookupFiles' operation.
 */
async function handleBulkCreateLookupFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Multiple Lookup Files. */
	return await fc.ngsiem.bulkCreateLookupFiles(parseJsonParam(c, i));
}

/**
 * Handles the 'bulkCreateSavedQueriesFromTemplate' operation.
 */
async function handleBulkCreateSavedQueriesFromTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Multiple Saved Queries from LogScale YAML Templates. */
	return await fc.ngsiem.bulkCreateSavedQueriesFromTemplate(parseJsonParam(c, i));
}

/**
 * Handles the 'bulkGetLookupFiles' operation.
 */
async function handleBulkGetLookupFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve Multiple Lookup Files by Filenames in NGSIEM. */
	const filename = parseArrayParam(c, i, 'filename');
	return await fc.ngsiem.bulkGetLookupFiles(filename);
}

/**
 * Handles the 'bulkInstallParsers' operation.
 */
async function handleBulkInstallParsers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Installs multiple CrowdStrike-managed OOTB parsers. */
	return await fc.ngsiem.bulkInstallParsers(parseJsonParam(c, i));
}

/**
 * Handles the 'bulkUpdateDashboardsFromTemplate' operation.
 */
async function handleBulkUpdateDashboardsFromTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Multiple Dashboards from YAML Templates. */
	return await fc.ngsiem.bulkUpdateDashboardsFromTemplate(parseJsonParam(c, i));
}

/**
 * Handles the 'bulkUpdateLookupFiles' operation.
 */
async function handleBulkUpdateLookupFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Multiple Lookup Files. */
	return await fc.ngsiem.bulkUpdateLookupFiles(parseJsonParam(c, i));
}

/**
 * Handles the 'bulkUpdateSavedQueriesFromTemplate' operation.
 */
async function handleBulkUpdateSavedQueriesFromTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Multiple Saved Queries from LogScale YAML Templates. */
	return await fc.ngsiem.bulkUpdateSavedQueriesFromTemplate(parseJsonParam(c, i));
}

/**
 * Handles the 'cloneParser' operation.
 */
async function handleCloneParser(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Clone an existing parser with a new name. */
	return await fc.ngsiem.cloneParser(parseJsonParam(c, i));
}

/**
 * Handles the 'createDashboardFromTemplate' operation.
 */
async function handleCreateDashboardFromTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Dashboard from LogScale YAML Template in NGSIEM. */
	return await fc.ngsiem.createDashboardFromTemplate();
}

/**
 * Handles the 'createLookupFile' operation.
 */
async function handleCreateLookupFile(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Lookup File in NGSIEM. */
	return await fc.ngsiem.createLookupFile();
}

/**
 * Handles the 'createParser' operation.
 */
async function handleCreateParser(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Parser in NGSIEM (Deprecated). */
	return await fc.ngsiem.createParser(parseJsonParam(c, i));
}

/**
 * Handles the 'createParserExtension' operation.
 */
async function handleCreateParserExtension(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create a Parser extension in NGSIEM for provided base parser. */
	return await fc.ngsiem.createParserExtension(parseJsonParam(c, i));
}

/**
 * Handles the 'createParserFromTemplate' operation.
 */
async function handleCreateParserFromTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Parser from LogScale YAML Template in NGSIEM. */
	return await fc.ngsiem.createParserFromTemplate();
}

/**
 * Handles the 'createSavedQuery' operation.
 */
async function handleCreateSavedQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create Saved Query from LogScale YAML Template in NGSIEM. */
	return await fc.ngsiem.createSavedQuery();
}

/**
 * Handles the 'deleteDashboard' operation.
 */
async function handleDeleteDashboard(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete Dashboard in NGSIEM. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.ngsiem.deleteDashboard(ids.length ? ids : undefined);
}

/**
 * Handles the 'deleteLookupFile' operation.
 */
async function handleDeleteLookupFile(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete Lookup File in NGSIEM. */
	const filename = parseArrayParam(c, i, 'filename');
	return await fc.ngsiem.deleteLookupFile(filename.length ? filename : undefined);
}

/**
 * Handles the 'deleteParser' operation.
 */
async function handleDeleteParser(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete Parser in NGSIEM. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.deleteParser(ids || undefined);
}

/**
 * Handles the 'deleteSavedQuery' operation.
 */
async function handleDeleteSavedQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete Saved Query in NGSIEM. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.ngsiem.deleteSavedQuery(ids.length ? ids : undefined);
}

/**
 * Handles the 'externalCreateConnectorConfig' operation.
 */
async function handleExternalCreateConnectorConfig(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create a new configuration for a data connector. */
	return await fc.ngsiem.externalCreateConnectorConfig(parseJsonParam(c, i));
}

/**
 * Handles the 'externalCreateDataConnection' operation.
 */
async function handleExternalCreateDataConnection(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create a new data connection. */
	return await fc.ngsiem.externalCreateDataConnection(parseJsonParam(c, i));
}

/**
 * Handles the 'externalDeleteConnectorConfigs' operation.
 */
async function handleExternalDeleteConnectorConfigs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete data connection config. */
	const connectorId = getStringParam(c, i, 'id', '');
	const ids = new Set(parseArrayParam(c, i, 'ids'));
	return await fc.ngsiem.externalDeleteConnectorConfigs(connectorId, ids);
}

/**
 * Handles the 'externalDeleteDataConnection' operation.
 */
async function handleExternalDeleteDataConnection(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete a data connection. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.externalDeleteDataConnection(ids);
}

/**
 * Handles the 'externalGetDataConnectionByID' operation.
 */
async function handleExternalGetDataConnectionByID(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get data connection by ID. */
	return await fc.ngsiem.externalGetDataConnectionByID(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'externalGetDataConnectionStatus' operation.
 */
async function handleExternalGetDataConnectionStatus(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get data connection provisioning status. */
	return await fc.ngsiem.externalGetDataConnectionStatus(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'externalGetDataConnectionToken' operation.
 */
async function handleExternalGetDataConnectionToken(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get Ingest token for data connection. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.externalGetDataConnectionToken(ids);
}

/**
 * Handles the 'externalListConnectorConfigs' operation.
 */
async function handleExternalListConnectorConfigs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* List configurations for a data connector. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.externalListConnectorConfigs(ids);
}

/**
 * Handles the 'externalListDataConnections' operation.
 */
async function handleExternalListDataConnections(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* List and search data connections. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 50) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.ngsiem.externalListDataConnections(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'externalListDataConnectors' operation.
 */
async function handleExternalListDataConnectors(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* List available data connectors. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 50) as number;
	const sort = getStringParam(c, i, 'sort', '');
	return await fc.ngsiem.externalListDataConnectors(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'externalPatchConnectorConfig' operation.
 */
async function handleExternalPatchConnectorConfig(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Patch configurations for a data connector. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.externalPatchConnectorConfig(ids, parseJsonParam(c, i));
}

/**
 * Handles the 'externalRegenerateDataConnectionToken' operation.
 */
async function handleExternalRegenerateDataConnectionToken(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Regenerate Ingest token for data connection. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.externalRegenerateDataConnectionToken(ids);
}

/**
 * Handles the 'externalUpdateDataConnection' operation.
 */
async function handleExternalUpdateDataConnection(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update a data connection. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.externalUpdateDataConnection(ids, parseJsonParam(c, i));
}

/**
 * Handles the 'externalUpdateDataConnectionStatus' operation.
 */
async function handleExternalUpdateDataConnectionStatus(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update data connection status. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.externalUpdateDataConnectionStatus(ids, parseJsonParam(c, i));
}

/**
 * Handles the 'getDashboardTemplate' operation.
 */
async function handleGetDashboardTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve Dashboard(s) in NGSIEM as LogScale YAML Template. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.ngsiem.getDashboardTemplate(ids.length ? ids : undefined);
}

/**
 * Handles the 'getLookupFile' operation.
 */
async function handleGetLookupFile(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve Lookup File in NGSIEM. */
	const filename = getStringParam(c, i, 'filename', '');
	return await fc.ngsiem.getLookupFile(filename || undefined);
}

/**
 * Handles the 'getLookupFromPackageV1' operation.
 */
async function handleGetLookupFromPackageV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download lookup file in package from NGSIEM. */
	const repository = getStringParam(c, i, 'repository', '');
	const _package = getStringParam(c, i, '_package', '');
	const filename = getStringParam(c, i, 'filename', '');
	return await fc.ngsiem.getLookupFromPackageV1(repository, _package, filename);
}

/**
 * Handles the 'getLookupFromPackageWithNamespaceV1' operation.
 */
async function handleGetLookupFromPackageWithNamespaceV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download lookup file in namespaced package from NGSIEM. */
	const repository = getStringParam(c, i, 'repository', '');
	const namespace = getStringParam(c, i, 'namespace', '');
	const _package = getStringParam(c, i, '_package', '');
	const filename = getStringParam(c, i, 'filename', '');
	return await fc.ngsiem.getLookupFromPackageWithNamespaceV1(repository, namespace, _package, filename);
}

/**
 * Handles the 'getLookupV1' operation.
 */
async function handleGetLookupV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Download lookup file from NGSIEM. */
	const repository = getStringParam(c, i, 'repository', '');
	const filename = getStringParam(c, i, 'filename', '');
	return await fc.ngsiem.getLookupV1(repository, filename);
}

/**
 * Handles the 'getParser' operation.
 */
async function handleGetParser(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve Parser in NGSIEM (Deprecated). */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.getParser(ids || undefined);
}

/**
 * Handles the 'getParserTemplate' operation.
 */
async function handleGetParserTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve Parser in NGSIEM as LogScale YAML Template. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.getParserTemplate(ids || undefined);
}

/**
 * Handles the 'getSavedQueryTemplate' operation.
 */
async function handleGetSavedQueryTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve Saved Quer(ies) in NGSIEM as LogScale YAML Template. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.ngsiem.getSavedQueryTemplate(ids.length ? ids : undefined);
}

/**
 * Handles the 'getSearchStatusV1' operation.
 */
async function handleGetSearchStatusV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get status of search. */
	const repository = getStringParam(c, i, 'repository', '');
	const id = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.getSearchStatusV1(repository, id);
}

/**
 * Handles the 'installParser' operation.
 */
async function handleInstallParser(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Installs a CrowdStrike-managed OOTB parser. */
	return await fc.ngsiem.installParser(parseJsonParam(c, i));
}

/**
 * Handles the 'listDashboards' operation.
 */
async function handleListDashboards(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* List Dashboards in NGSIEM with Pagination and Filtering. */
	const limit = getStringParam(c, i, 'limit', '50');
	const offset = getStringParam(c, i, 'offset', '0');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.ngsiem.listDashboards(limit || undefined, offset || undefined, filter || undefined);
}

/**
 * Handles the 'listLookupFiles' operation.
 */
async function handleListLookupFiles(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* List Lookup Files in NGSIEM with Pagination and Filtering. */
	const limit = getStringParam(c, i, 'limit', '50');
	const offset = getStringParam(c, i, 'offset', '0');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.ngsiem.listLookupFiles(limit || undefined, offset || undefined, filter || undefined);
}

/**
 * Handles the 'listParsers' operation.
 */
async function handleListParsers(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* List Parsers in NGSIEM. */
	const limit = getStringParam(c, i, 'limit', '50');
	const offset = getStringParam(c, i, 'offset', '0');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.ngsiem.listParsers(limit || undefined, offset || undefined, filter || undefined);
}

/**
 * Handles the 'listSavedQueries' operation.
 */
async function handleListSavedQueries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* List Saved Queries in NGSIEM with Pagination and Filtering. */
	const limit = getStringParam(c, i, 'limit', '50');
	const offset = getStringParam(c, i, 'offset', '0');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.ngsiem.listSavedQueries(limit || undefined, offset || undefined, filter || undefined);
}

/**
 * Handles the 'startSearchV1' operation.
 */
async function handleStartSearchV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Initiate search. */
	const repository = getStringParam(c, i, 'repository', '');
	return await fc.ngsiem.startSearchV1(repository, parseJsonParam(c, i));
}

/**
 * Handles the 'stopSearchV1' operation.
 */
async function handleStopSearchV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Stop search. */
	const repository = getStringParam(c, i, 'repository', '');
	const id = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.stopSearchV1(repository, id);
}

/**
 * Handles the 'testParserFromTemplate' operation.
 */
async function handleTestParserFromTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Test Parser from LogScale YAML Template in NGSIEM. */
	return await fc.ngsiem.testParserFromTemplate();
}

/**
 * Handles the 'updateDashboardFromTemplate' operation.
 */
async function handleUpdateDashboardFromTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Dashboard from LogScale YAML Template in NGSIEM. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.updateDashboardFromTemplate(undefined, ids || undefined);
}

/**
 * Handles the 'updateLookupFile' operation.
 */
async function handleUpdateLookupFile(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update an entire Lookup File in NGSIEM. */
	const filename = getStringParam(c, i, 'filename', '');
	return await fc.ngsiem.updateLookupFile(undefined, filename || undefined);
}

/**
 * Handles the 'updateLookupFileEntries' operation.
 */
async function handleUpdateLookupFileEntries(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update entries in an existing Lookup File in NGSIEM. */
	const filename = getStringParam(c, i, 'filename', '');
	return await fc.ngsiem.updateLookupFileEntries(undefined, filename || undefined);
}

/**
 * Handles the 'updateParser' operation.
 */
async function handleUpdateParser(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Parser in NGSIEM (Deprecated). */
	return await fc.ngsiem.updateParser(parseJsonParam(c, i));
}

/**
 * Handles the 'updateParserAutoUpdatePolicy' operation.
 */
async function handleUpdateParserAutoUpdatePolicy(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates a parser auto update policy. */
	return await fc.ngsiem.updateParserAutoUpdatePolicy(parseJsonParam(c, i));
}

/**
 * Handles the 'updateParserExtension' operation.
 */
async function handleUpdateParserExtension(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update an existing Parser extension in NGSIEM. */
	return await fc.ngsiem.updateParserExtension(parseJsonParam(c, i));
}

/**
 * Handles the 'updateParserFromTemplate' operation.
 */
async function handleUpdateParserFromTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Parser in NGSIEM from YAML Template. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.updateParserFromTemplate(undefined, ids || undefined);
}

/**
 * Handles the 'updateSavedQueryFromTemplate' operation.
 */
async function handleUpdateSavedQueryFromTemplate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update Saved Query from LogScale YAML Template in NGSIEM. */
	const ids = getStringParam(c, i, 'id', '');
	return await fc.ngsiem.updateSavedQueryFromTemplate(undefined, ids || undefined);
}

/**
 * Handles the 'uploadLookupV1' operation.
 */
async function handleUploadLookupV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Upload file to NGSIEM. */
	const repository = getStringParam(c, i, 'repository', '');
	const fileBlob = new Blob([]);
	return await fc.ngsiem.uploadLookupV1(repository, fileBlob);
}

/**
 * Main execution handler for CrowdStrike Falcon NGSIEM operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeNgsiem(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'bulkCreateDashboardsFromTemplate': return await handleBulkCreateDashboardsFromTemplate(this, index, falconClient);
		case 'bulkCreateLookupFiles': return await handleBulkCreateLookupFiles(this, index, falconClient);
		case 'bulkCreateSavedQueriesFromTemplate': return await handleBulkCreateSavedQueriesFromTemplate(this, index, falconClient);
		case 'bulkGetLookupFiles': return await handleBulkGetLookupFiles(this, index, falconClient);
		case 'bulkInstallParsers': return await handleBulkInstallParsers(this, index, falconClient);
		case 'bulkUpdateDashboardsFromTemplate': return await handleBulkUpdateDashboardsFromTemplate(this, index, falconClient);
		case 'bulkUpdateLookupFiles': return await handleBulkUpdateLookupFiles(this, index, falconClient);
		case 'bulkUpdateSavedQueriesFromTemplate': return await handleBulkUpdateSavedQueriesFromTemplate(this, index, falconClient);
		case 'cloneParser': return await handleCloneParser(this, index, falconClient);
		case 'createDashboardFromTemplate': return await handleCreateDashboardFromTemplate(this, index, falconClient);
		case 'createLookupFile': return await handleCreateLookupFile(this, index, falconClient);
		case 'createParser': return await handleCreateParser(this, index, falconClient);
		case 'createParserExtension': return await handleCreateParserExtension(this, index, falconClient);
		case 'createParserFromTemplate': return await handleCreateParserFromTemplate(this, index, falconClient);
		case 'createSavedQuery': return await handleCreateSavedQuery(this, index, falconClient);
		case 'deleteDashboard': return await handleDeleteDashboard(this, index, falconClient);
		case 'deleteLookupFile': return await handleDeleteLookupFile(this, index, falconClient);
		case 'deleteParser': return await handleDeleteParser(this, index, falconClient);
		case 'deleteSavedQuery': return await handleDeleteSavedQuery(this, index, falconClient);
		case 'externalCreateConnectorConfig': return await handleExternalCreateConnectorConfig(this, index, falconClient);
		case 'externalCreateDataConnection': return await handleExternalCreateDataConnection(this, index, falconClient);
		case 'externalDeleteConnectorConfigs': return await handleExternalDeleteConnectorConfigs(this, index, falconClient);
		case 'externalDeleteDataConnection': return await handleExternalDeleteDataConnection(this, index, falconClient);
		case 'externalGetDataConnectionByID': return await handleExternalGetDataConnectionByID(this, index, falconClient);
		case 'externalGetDataConnectionStatus': return await handleExternalGetDataConnectionStatus(this, index, falconClient);
		case 'externalGetDataConnectionToken': return await handleExternalGetDataConnectionToken(this, index, falconClient);
		case 'externalListConnectorConfigs': return await handleExternalListConnectorConfigs(this, index, falconClient);
		case 'externalListDataConnections': return await handleExternalListDataConnections(this, index, falconClient);
		case 'externalListDataConnectors': return await handleExternalListDataConnectors(this, index, falconClient);
		case 'externalPatchConnectorConfig': return await handleExternalPatchConnectorConfig(this, index, falconClient);
		case 'externalRegenerateDataConnectionToken': return await handleExternalRegenerateDataConnectionToken(this, index, falconClient);
		case 'externalUpdateDataConnection': return await handleExternalUpdateDataConnection(this, index, falconClient);
		case 'externalUpdateDataConnectionStatus': return await handleExternalUpdateDataConnectionStatus(this, index, falconClient);
		case 'getDashboardTemplate': return await handleGetDashboardTemplate(this, index, falconClient);
		case 'getLookupFile': return await handleGetLookupFile(this, index, falconClient);
		case 'getLookupFromPackageV1': return await handleGetLookupFromPackageV1(this, index, falconClient);
		case 'getLookupFromPackageWithNamespaceV1': return await handleGetLookupFromPackageWithNamespaceV1(this, index, falconClient);
		case 'getLookupV1': return await handleGetLookupV1(this, index, falconClient);
		case 'getParser': return await handleGetParser(this, index, falconClient);
		case 'getParserTemplate': return await handleGetParserTemplate(this, index, falconClient);
		case 'getSavedQueryTemplate': return await handleGetSavedQueryTemplate(this, index, falconClient);
		case 'getSearchStatusV1': return await handleGetSearchStatusV1(this, index, falconClient);
		case 'installParser': return await handleInstallParser(this, index, falconClient);
		case 'listDashboards': return await handleListDashboards(this, index, falconClient);
		case 'listLookupFiles': return await handleListLookupFiles(this, index, falconClient);
		case 'listParsers': return await handleListParsers(this, index, falconClient);
		case 'listSavedQueries': return await handleListSavedQueries(this, index, falconClient);
		case 'startSearchV1': return await handleStartSearchV1(this, index, falconClient);
		case 'stopSearchV1': return await handleStopSearchV1(this, index, falconClient);
		case 'testParserFromTemplate': return await handleTestParserFromTemplate(this, index, falconClient);
		case 'updateDashboardFromTemplate': return await handleUpdateDashboardFromTemplate(this, index, falconClient);
		case 'updateLookupFile': return await handleUpdateLookupFile(this, index, falconClient);
		case 'updateLookupFileEntries': return await handleUpdateLookupFileEntries(this, index, falconClient);
		case 'updateParser': return await handleUpdateParser(this, index, falconClient);
		case 'updateParserAutoUpdatePolicy': return await handleUpdateParserAutoUpdatePolicy(this, index, falconClient);
		case 'updateParserExtension': return await handleUpdateParserExtension(this, index, falconClient);
		case 'updateParserFromTemplate': return await handleUpdateParserFromTemplate(this, index, falconClient);
		case 'updateSavedQueryFromTemplate': return await handleUpdateSavedQueryFromTemplate(this, index, falconClient);
		case 'uploadLookupV1': return await handleUploadLookupV1(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for NGSIEM.`);
	}
}
