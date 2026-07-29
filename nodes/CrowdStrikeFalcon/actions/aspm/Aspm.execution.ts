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

/** Handles createExecutorNode */
async function handleCreateExecutorNode(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new relay node using body JSON payload. */
	return await fc.aspm.createExecutorNode(parseJsonParam(c, i));
}

/** Handles createIntegration */
async function handleCreateIntegration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new ASPM integration. */
	return await fc.aspm.createIntegration(parseJsonParam(c, i));
}

/** Handles createIntegrationTask */
async function handleCreateIntegrationTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new integration task. */
	return await fc.aspm.createIntegrationTask(parseJsonParam(c, i));
}

/** Handles deleteExecutorNode */
async function handleDeleteExecutorNode(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes a relay node by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.deleteExecutorNode(iD);
}

/** Handles deleteGroupID09 */
async function handleDeleteGroupID09(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes group by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.deleteGroupID09(iD);
}

/** Handles deleteIntegration */
async function handleDeleteIntegration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes an existing integration by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.deleteIntegration(iD);
}

/** Handles deleteIntegrationTask */
async function handleDeleteIntegrationTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes an existing integration task by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.deleteIntegrationTask(iD);
}

/** Handles deleteTags */
async function handleDeleteTags(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Removes existing tags. */
	return await fc.aspm.deleteTags(parseJsonParam(c, i));
}

/** Handles executeFunctionData */
async function handleExecuteFunctionData(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes function data query in MSA format. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionData(field);
}

/** Handles executeFunctionDataCount */
async function handleExecuteFunctionDataCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes function data count query. */
	const body = parseJsonParam(c, i);
	return await fc.aspm.executeFunctionDataCount(
		body.queryName,
		body.cloudProvider,
		body.awsLambdaArn,
		body.gcpCloudFunctionUrl,
		body.azureSiteSubscriptionId,
		body.azureSiteResourceGroup,
		body.azureFunctionAppName,
	);
}

/** Handles executeFunctionDataQuery */
async function handleExecuteFunctionDataQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes function data query language. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionDataQuery(field);
}

/** Handles executeFunctionDataQueryCount */
async function handleExecuteFunctionDataQueryCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes function data count query. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionDataQueryCount(field);
}

/** Handles executeFunctions */
async function handleExecuteFunctions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes functions services query. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctions(field);
}

/** Handles executeFunctionsCount */
async function handleExecuteFunctionsCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes functions count query. */
	const body = parseJsonParam(c, i);
	return await fc.aspm.executeFunctionsCount(
		body.queryName,
		body.cloudProvider,
		body.cloudAccountId,
		body.region,
		body.cid,
	);
}

/** Handles executeFunctionsOvertime */
async function handleExecuteFunctionsOvertime(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes functions overtime query. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionsOvertime(field);
}

/** Handles executeFunctionsQuery */
async function handleExecuteFunctionsQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes functions services query. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionsQuery(field);
}

/** Handles executeFunctionsQueryCount */
async function handleExecuteFunctionsQueryCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes functions query count. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionsQueryCount(field);
}

/** Handles executeFunctionsQueryOvertime */
async function handleExecuteFunctionsQueryOvertime(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes functions query overtime. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionsQueryOvertime(field);
}

/** Handles executeQuery */
async function handleExecuteQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes query matching query page syntax. */
	return await fc.aspm.executeQuery(parseJsonParam(c, i));
}

/** Handles getCloudSecurityIntegrationState */
async function handleGetCloudSecurityIntegrationState(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves Cloud Security integration state. */
	return await fc.aspm.getCloudSecurityIntegrationState();
}

/** Handles getExecutorNodes */
async function handleGetExecutorNodes(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves all relay nodes. */
	const nodeType = c.getNodeParameter('nodeType', i) as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.aspm.getExecutorNodes(nodeType, undefined, offset || undefined, limit || undefined);
}

/** Handles getExecutorNodesID09InstancesCsv */
async function handleGetExecutorNodesID09InstancesCsv(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves relay instances in CSV format. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.getExecutorNodesID09InstancesCsv(iD, parseJsonParam(c, i));
}

/** Handles getExecutorNodesMetadata */
async function handleGetExecutorNodesMetadata(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves metadata about all executor nodes. */
	return await fc.aspm.getExecutorNodesMetadata();
}

/** Handles getGroupID09V2 */
async function handleGetGroupID09V2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves group details by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.getGroupID09V2(iD);
}

/** Handles getGroupsHierV2 */
async function handleGetGroupsHierV2(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves group hierarchy V2. */
	return await fc.aspm.getGroupsHierV2();
}

/** Handles getGroupsListV2 */
async function handleGetGroupsListV2(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves group list V2. */
	return await fc.aspm.getGroupsListV2();
}

/** Handles getIntegrationTasks */
async function handleGetIntegrationTasks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integration tasks. */
	const category = c.getNodeParameter('category', i, '') as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.aspm.getIntegrationTasks(undefined, category || undefined, offset || undefined, limit || undefined);
}

/** Handles getIntegrationTasksAdmin */
async function handleGetIntegrationTasksAdmin(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integration tasks with admin scope. */
	const category = c.getNodeParameter('category', i, '') as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.aspm.getIntegrationTasksAdmin(undefined, category || undefined, offset || undefined, limit || undefined);
}

/** Handles getIntegrationTasksMetadata */
async function handleGetIntegrationTasksMetadata(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integration tasks metadata. */
	return await fc.aspm.getIntegrationTasksMetadata();
}

/** Handles getIntegrationTasksV2 */
async function handleGetIntegrationTasksV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integration tasks V2. */
	const category = c.getNodeParameter('category', i, '') as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.aspm.getIntegrationTasksV2(undefined, category || undefined, offset || undefined, limit || undefined);
}

/** Handles getIntegrationTypes */
async function handleGetIntegrationTypes(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integration types. */
	return await fc.aspm.getIntegrationTypes();
}

/** Handles getIntegrations */
async function handleGetIntegrations(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integrations. */
	const category = c.getNodeParameter('category', i, '') as string;
	return await fc.aspm.getIntegrations(undefined, category || undefined);
}

/** Handles getIntegrationsV2 */
async function handleGetIntegrationsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integrations V2. */
	const category = c.getNodeParameter('category', i, '') as string;
	return await fc.aspm.getIntegrationsV2(undefined, category || undefined);
}

/** Handles getServiceArtifacts */
async function handleGetServiceArtifacts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves service artifacts. */
	const persistentSignature = c.getNodeParameter('persistentSignature', i) as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.aspm.getServiceArtifacts(persistentSignature, undefined, undefined, limit || undefined, offset || undefined);
}

/** Handles getServiceViolationTypes */
async function handleGetServiceViolationTypes(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves service violation types. */
	return await fc.aspm.getServiceViolationTypes(parseJsonParam(c, i));
}

/** Handles getServicesCount */
async function handleGetServicesCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves total count of services. */
	return await fc.aspm.getServicesCount(parseJsonParam(c, i));
}

/** Handles getTags */
async function handleGetTags(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves all tags. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.aspm.getTags(undefined, undefined, limit || undefined, offset || undefined);
}

/** Handles getUsersV2 */
async function handleGetUsersV2(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Lists users V2. */
	return await fc.aspm.getUsersV2();
}

/** Handles postGroupID09UpdateDefault */
async function handlePostGroupID09UpdateDefault(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates default group. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.postGroupID09UpdateDefault(iD);
}

/** Handles postGroupID09V2 */
async function handlePostGroupID09V2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates group V2. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.postGroupID09V2(iD, parseJsonParam(c, i));
}

/** Handles postGroupV2 */
async function handlePostGroupV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates group V2. */
	return await fc.aspm.postGroupV2(parseJsonParam(c, i));
}

/** Handles runIntegrationTask */
async function handleRunIntegrationTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Runs integration task by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	const category = c.getNodeParameter('category', i, '') as string;
	return await fc.aspm.runIntegrationTask(iD, parseJsonParam(c, i), category || undefined);
}

/** Handles runIntegrationTaskAdmin */
async function handleRunIntegrationTaskAdmin(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Runs integration task by ID (admin scope). */
	const iD = c.getNodeParameter('iD', i) as number;
	const category = c.getNodeParameter('category', i, '') as string;
	return await fc.aspm.runIntegrationTaskAdmin(iD, parseJsonParam(c, i), category || undefined);
}

/** Handles runIntegrationTaskV2 */
async function handleRunIntegrationTaskV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Runs integration task by ID V2. */
	const iD = c.getNodeParameter('iD', i) as number;
	const category = c.getNodeParameter('category', i, '') as string;
	return await fc.aspm.runIntegrationTaskV2(iD, parseJsonParam(c, i), category || undefined);
}

/** Handles serviceNowGetDeployments */
async function handleServiceNowGetDeployments(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves ServiceNow deployments. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.aspm.serviceNowGetDeployments(undefined, limit || undefined, offset || undefined);
}

/** Handles serviceNowGetServices */
async function handleServiceNowGetServices(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves ServiceNow services. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.aspm.serviceNowGetServices(undefined, undefined, limit || undefined, offset || undefined);
}

/** Handles setCloudSecurityIntegrationState */
async function handleSetCloudSecurityIntegrationState(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Sets Cloud Security integration state. */
	return await fc.aspm.setCloudSecurityIntegrationState(parseJsonParam(c, i));
}

/** Handles updateExecutorNode */
async function handleUpdateExecutorNode(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates relay node. */
	return await fc.aspm.updateExecutorNode(parseJsonParam(c, i));
}

/** Handles updateIntegration */
async function handleUpdateIntegration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates integration by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.updateIntegration(iD, parseJsonParam(c, i));
}

/** Handles updateIntegrationTask */
async function handleUpdateIntegrationTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates integration task by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.updateIntegrationTask(iD, parseJsonParam(c, i));
}

/** Handles upsertBusinessApplications */
async function handleUpsertBusinessApplications(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates or updates business applications. */
	return await fc.aspm.upsertBusinessApplications(parseJsonParam(c, i));
}

/** Handles upsertTags */
async function handleUpsertTags(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates or updates tags. */
	return await fc.aspm.upsertTags(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon ASPM operations.
 */
export async function executeAspm(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createExecutorNode': return await handleCreateExecutorNode(this, index, falconClient);
		case 'createIntegration': return await handleCreateIntegration(this, index, falconClient);
		case 'createIntegrationTask': return await handleCreateIntegrationTask(this, index, falconClient);
		case 'deleteExecutorNode': return await handleDeleteExecutorNode(this, index, falconClient);
		case 'deleteGroupID09': return await handleDeleteGroupID09(this, index, falconClient);
		case 'deleteIntegration': return await handleDeleteIntegration(this, index, falconClient);
		case 'deleteIntegrationTask': return await handleDeleteIntegrationTask(this, index, falconClient);
		case 'deleteTags': return await handleDeleteTags(this, index, falconClient);
		case 'executeFunctionData': return await handleExecuteFunctionData(this, index, falconClient);
		case 'executeFunctionDataCount': return await handleExecuteFunctionDataCount(this, index, falconClient);
		case 'executeFunctionDataQuery': return await handleExecuteFunctionDataQuery(this, index, falconClient);
		case 'executeFunctionDataQueryCount': return await handleExecuteFunctionDataQueryCount(this, index, falconClient);
		case 'executeFunctions': return await handleExecuteFunctions(this, index, falconClient);
		case 'executeFunctionsCount': return await handleExecuteFunctionsCount(this, index, falconClient);
		case 'executeFunctionsOvertime': return await handleExecuteFunctionsOvertime(this, index, falconClient);
		case 'executeFunctionsQuery': return await handleExecuteFunctionsQuery(this, index, falconClient);
		case 'executeFunctionsQueryCount': return await handleExecuteFunctionsQueryCount(this, index, falconClient);
		case 'executeFunctionsQueryOvertime': return await handleExecuteFunctionsQueryOvertime(this, index, falconClient);
		case 'executeQuery': return await handleExecuteQuery(this, index, falconClient);
		case 'getCloudSecurityIntegrationState': return await handleGetCloudSecurityIntegrationState(this, index, falconClient);
		case 'getExecutorNodes': return await handleGetExecutorNodes(this, index, falconClient);
		case 'getExecutorNodesID09InstancesCsv': return await handleGetExecutorNodesID09InstancesCsv(this, index, falconClient);
		case 'getExecutorNodesMetadata': return await handleGetExecutorNodesMetadata(this, index, falconClient);
		case 'getGroupID09V2': return await handleGetGroupID09V2(this, index, falconClient);
		case 'getGroupsHierV2': return await handleGetGroupsHierV2(this, index, falconClient);
		case 'getGroupsListV2': return await handleGetGroupsListV2(this, index, falconClient);
		case 'getIntegrationTasks': return await handleGetIntegrationTasks(this, index, falconClient);
		case 'getIntegrationTasksAdmin': return await handleGetIntegrationTasksAdmin(this, index, falconClient);
		case 'getIntegrationTasksMetadata': return await handleGetIntegrationTasksMetadata(this, index, falconClient);
		case 'getIntegrationTasksV2': return await handleGetIntegrationTasksV2(this, index, falconClient);
		case 'getIntegrationTypes': return await handleGetIntegrationTypes(this, index, falconClient);
		case 'getIntegrations': return await handleGetIntegrations(this, index, falconClient);
		case 'getIntegrationsV2': return await handleGetIntegrationsV2(this, index, falconClient);
		case 'getServiceArtifacts': return await handleGetServiceArtifacts(this, index, falconClient);
		case 'getServiceViolationTypes': return await handleGetServiceViolationTypes(this, index, falconClient);
		case 'getServicesCount': return await handleGetServicesCount(this, index, falconClient);
		case 'getTags': return await handleGetTags(this, index, falconClient);
		case 'getUsersV2': return await handleGetUsersV2(this, index, falconClient);
		case 'postGroupID09UpdateDefault': return await handlePostGroupID09UpdateDefault(this, index, falconClient);
		case 'postGroupID09V2': return await handlePostGroupID09V2(this, index, falconClient);
		case 'postGroupV2': return await handlePostGroupV2(this, index, falconClient);
		case 'runIntegrationTask': return await handleRunIntegrationTask(this, index, falconClient);
		case 'runIntegrationTaskAdmin': return await handleRunIntegrationTaskAdmin(this, index, falconClient);
		case 'runIntegrationTaskV2': return await handleRunIntegrationTaskV2(this, index, falconClient);
		case 'serviceNowGetDeployments': return await handleServiceNowGetDeployments(this, index, falconClient);
		case 'serviceNowGetServices': return await handleServiceNowGetServices(this, index, falconClient);
		case 'setCloudSecurityIntegrationState': return await handleSetCloudSecurityIntegrationState(this, index, falconClient);
		case 'updateExecutorNode': return await handleUpdateExecutorNode(this, index, falconClient);
		case 'updateIntegration': return await handleUpdateIntegration(this, index, falconClient);
		case 'updateIntegrationTask': return await handleUpdateIntegrationTask(this, index, falconClient);
		case 'upsertBusinessApplications': return await handleUpsertBusinessApplications(this, index, falconClient);
		case 'upsertTags': return await handleUpsertTags(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for ASPM.`);
	}
}
