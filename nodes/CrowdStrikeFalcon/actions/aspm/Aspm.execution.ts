import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'createExecutorNode' operation.
 */
async function handleCreateExecutorNode(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new relay node using body JSON payload. */
	return await fc.aspm.createExecutorNode(parseJsonParam(c, i));
}

/**
 * Handles the 'createIntegration' operation.
 */
async function handleCreateIntegration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new ASPM integration. */
	return await fc.aspm.createIntegration(parseJsonParam(c, i));
}

/**
 * Handles the 'createIntegrationTask' operation.
 */
async function handleCreateIntegrationTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new integration task. */
	return await fc.aspm.createIntegrationTask(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteExecutorNode' operation.
 */
async function handleDeleteExecutorNode(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes a relay node by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.deleteExecutorNode(iD);
}

/**
 * Handles the 'deleteGroupID09' operation.
 */
async function handleDeleteGroupID09(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes group by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.deleteGroupID09(iD);
}

/**
 * Handles the 'deleteIntegration' operation.
 */
async function handleDeleteIntegration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes an existing integration by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.deleteIntegration(iD);
}

/**
 * Handles the 'deleteIntegrationTask' operation.
 */
async function handleDeleteIntegrationTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes an existing integration task by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.deleteIntegrationTask(iD);
}

/**
 * Handles the 'deleteTags' operation.
 */
async function handleDeleteTags(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Removes existing tags. */
	return await fc.aspm.deleteTags(parseJsonParam(c, i));
}

/**
 * Handles the 'executeFunctionData' operation.
 */
async function handleExecuteFunctionData(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes function data query in MSA format. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionData(field);
}

/**
 * Handles the 'executeFunctionDataCount' operation.
 */
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

/**
 * Handles the 'executeFunctionDataQuery' operation.
 */
async function handleExecuteFunctionDataQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes function data query language. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionDataQuery(field);
}

/**
 * Handles the 'executeFunctionDataQueryCount' operation.
 */
async function handleExecuteFunctionDataQueryCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes function data count query. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionDataQueryCount(field);
}

/**
 * Handles the 'executeFunctions' operation.
 */
async function handleExecuteFunctions(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes functions services query. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctions(field);
}

/**
 * Handles the 'executeFunctionsCount' operation.
 */
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

/**
 * Handles the 'executeFunctionsOvertime' operation.
 */
async function handleExecuteFunctionsOvertime(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes functions overtime query. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionsOvertime(field);
}

/**
 * Handles the 'executeFunctionsQuery' operation.
 */
async function handleExecuteFunctionsQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes functions services query. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionsQuery(field);
}

/**
 * Handles the 'executeFunctionsQueryCount' operation.
 */
async function handleExecuteFunctionsQueryCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes functions query count. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionsQueryCount(field);
}

/**
 * Handles the 'executeFunctionsQueryOvertime' operation.
 */
async function handleExecuteFunctionsQueryOvertime(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes functions query overtime. */
	const field = c.getNodeParameter('field', i) as string;
	return await fc.aspm.executeFunctionsQueryOvertime(field);
}

/**
 * Handles the 'executeQuery' operation.
 */
async function handleExecuteQuery(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes query matching query page syntax. */
	return await fc.aspm.executeQuery(parseJsonParam(c, i));
}

/**
 * Handles the 'getCloudSecurityIntegrationState' operation.
 */
async function handleGetCloudSecurityIntegrationState(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves Cloud Security integration state. */
	return await fc.aspm.getCloudSecurityIntegrationState();
}

/**
 * Handles the 'getExecutorNodes' operation.
 */
async function handleGetExecutorNodes(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves all relay nodes. */
	const nodeType = c.getNodeParameter('nodeType', i) as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.aspm.getExecutorNodes(nodeType, undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'getExecutorNodesID09InstancesCsv' operation.
 */
async function handleGetExecutorNodesID09InstancesCsv(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves relay instances in CSV format. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.getExecutorNodesID09InstancesCsv(iD, parseJsonParam(c, i));
}

/**
 * Handles the 'getExecutorNodesMetadata' operation.
 */
async function handleGetExecutorNodesMetadata(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves metadata about all executor nodes. */
	return await fc.aspm.getExecutorNodesMetadata();
}

/**
 * Handles the 'getGroupID09V2' operation.
 */
async function handleGetGroupID09V2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves group details by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.getGroupID09V2(iD);
}

/**
 * Handles the 'getGroupsHierV2' operation.
 */
async function handleGetGroupsHierV2(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves group hierarchy V2. */
	return await fc.aspm.getGroupsHierV2();
}

/**
 * Handles the 'getGroupsListV2' operation.
 */
async function handleGetGroupsListV2(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves group list V2. */
	return await fc.aspm.getGroupsListV2();
}

/**
 * Handles the 'getIntegrationTasks' operation.
 */
async function handleGetIntegrationTasks(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integration tasks. */
	const category = c.getNodeParameter('category', i, '') as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.aspm.getIntegrationTasks(undefined, category || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'getIntegrationTasksAdmin' operation.
 */
async function handleGetIntegrationTasksAdmin(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integration tasks with admin scope. */
	const category = c.getNodeParameter('category', i, '') as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.aspm.getIntegrationTasksAdmin(undefined, category || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'getIntegrationTasksMetadata' operation.
 */
async function handleGetIntegrationTasksMetadata(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integration tasks metadata. */
	return await fc.aspm.getIntegrationTasksMetadata();
}

/**
 * Handles the 'getIntegrationTasksV2' operation.
 */
async function handleGetIntegrationTasksV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integration tasks V2. */
	const category = c.getNodeParameter('category', i, '') as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.aspm.getIntegrationTasksV2(undefined, category || undefined, offset || undefined, limit || undefined);
}

/**
 * Handles the 'getIntegrationTypes' operation.
 */
async function handleGetIntegrationTypes(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integration types. */
	return await fc.aspm.getIntegrationTypes();
}

/**
 * Handles the 'getIntegrations' operation.
 */
async function handleGetIntegrations(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integrations. */
	const category = c.getNodeParameter('category', i, '') as string;
	return await fc.aspm.getIntegrations(undefined, category || undefined);
}

/**
 * Handles the 'getIntegrationsV2' operation.
 */
async function handleGetIntegrationsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves integrations V2. */
	const category = c.getNodeParameter('category', i, '') as string;
	return await fc.aspm.getIntegrationsV2(undefined, category || undefined);
}

/**
 * Handles the 'getServiceArtifacts' operation.
 */
async function handleGetServiceArtifacts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves service artifacts. */
	const persistentSignature = c.getNodeParameter('persistentSignature', i) as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.aspm.getServiceArtifacts(persistentSignature, undefined, undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getServiceViolationTypes' operation.
 */
async function handleGetServiceViolationTypes(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves service violation types. */
	return await fc.aspm.getServiceViolationTypes(parseJsonParam(c, i));
}

/**
 * Handles the 'getServicesCount' operation.
 */
async function handleGetServicesCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves total count of services. */
	return await fc.aspm.getServicesCount(parseJsonParam(c, i));
}

/**
 * Handles the 'getTags' operation.
 */
async function handleGetTags(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves all tags. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.aspm.getTags(undefined, undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'getUsersV2' operation.
 */
async function handleGetUsersV2(_c: IExecuteFunctions, _i: number, fc: FalconClient): Promise<any> {
	/* Lists users V2. */
	return await fc.aspm.getUsersV2();
}

/**
 * Handles the 'postGroupID09UpdateDefault' operation.
 */
async function handlePostGroupID09UpdateDefault(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates default group. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.postGroupID09UpdateDefault(iD);
}

/**
 * Handles the 'postGroupID09V2' operation.
 */
async function handlePostGroupID09V2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates group V2. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.postGroupID09V2(iD, parseJsonParam(c, i));
}

/**
 * Handles the 'postGroupV2' operation.
 */
async function handlePostGroupV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates group V2. */
	return await fc.aspm.postGroupV2(parseJsonParam(c, i));
}

/**
 * Handles the 'runIntegrationTask' operation.
 */
async function handleRunIntegrationTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Runs integration task by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	const category = c.getNodeParameter('category', i, '') as string;
	return await fc.aspm.runIntegrationTask(iD, parseJsonParam(c, i), category || undefined);
}

/**
 * Handles the 'runIntegrationTaskAdmin' operation.
 */
async function handleRunIntegrationTaskAdmin(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Runs integration task by ID (admin scope). */
	const iD = c.getNodeParameter('iD', i) as number;
	const category = c.getNodeParameter('category', i, '') as string;
	return await fc.aspm.runIntegrationTaskAdmin(iD, parseJsonParam(c, i), category || undefined);
}

/**
 * Handles the 'runIntegrationTaskV2' operation.
 */
async function handleRunIntegrationTaskV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Runs integration task by ID V2. */
	const iD = c.getNodeParameter('iD', i) as number;
	const category = c.getNodeParameter('category', i, '') as string;
	return await fc.aspm.runIntegrationTaskV2(iD, parseJsonParam(c, i), category || undefined);
}

/**
 * Handles the 'serviceNowGetDeployments' operation.
 */
async function handleServiceNowGetDeployments(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves ServiceNow deployments. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.aspm.serviceNowGetDeployments(undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'serviceNowGetServices' operation.
 */
async function handleServiceNowGetServices(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves ServiceNow services. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.aspm.serviceNowGetServices(undefined, undefined, limit || undefined, offset || undefined);
}

/**
 * Handles the 'setCloudSecurityIntegrationState' operation.
 */
async function handleSetCloudSecurityIntegrationState(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Sets Cloud Security integration state. */
	return await fc.aspm.setCloudSecurityIntegrationState(parseJsonParam(c, i));
}

/**
 * Handles the 'updateExecutorNode' operation.
 */
async function handleUpdateExecutorNode(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates relay node. */
	return await fc.aspm.updateExecutorNode(parseJsonParam(c, i));
}

/**
 * Handles the 'updateIntegration' operation.
 */
async function handleUpdateIntegration(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates integration by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.updateIntegration(iD, parseJsonParam(c, i));
}

/**
 * Handles the 'updateIntegrationTask' operation.
 */
async function handleUpdateIntegrationTask(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates integration task by ID. */
	const iD = c.getNodeParameter('iD', i) as number;
	return await fc.aspm.updateIntegrationTask(iD, parseJsonParam(c, i));
}

/**
 * Handles the 'upsertBusinessApplications' operation.
 */
async function handleUpsertBusinessApplications(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates or updates business applications. */
	return await fc.aspm.upsertBusinessApplications(parseJsonParam(c, i));
}

/**
 * Handles the 'upsertTags' operation.
 */
async function handleUpsertTags(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates or updates tags. */
	return await fc.aspm.upsertTags(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon ASPM operations.
 */
const HANDLER_MAP: Record<string, (c: IExecuteFunctions, i: number, fc: FalconClient) => Promise<any>> = {
	'createExecutorNode': handleCreateExecutorNode,
	'createIntegration': handleCreateIntegration,
	'createIntegrationTask': handleCreateIntegrationTask,
	'deleteExecutorNode': handleDeleteExecutorNode,
	'deleteGroupID09': handleDeleteGroupID09,
	'deleteIntegration': handleDeleteIntegration,
	'deleteIntegrationTask': handleDeleteIntegrationTask,
	'deleteTags': handleDeleteTags,
	'executeFunctionData': handleExecuteFunctionData,
	'executeFunctionDataCount': handleExecuteFunctionDataCount,
	'executeFunctionDataQuery': handleExecuteFunctionDataQuery,
	'executeFunctionDataQueryCount': handleExecuteFunctionDataQueryCount,
	'executeFunctions': handleExecuteFunctions,
	'executeFunctionsCount': handleExecuteFunctionsCount,
	'executeFunctionsOvertime': handleExecuteFunctionsOvertime,
	'executeFunctionsQuery': handleExecuteFunctionsQuery,
	'executeFunctionsQueryCount': handleExecuteFunctionsQueryCount,
	'executeFunctionsQueryOvertime': handleExecuteFunctionsQueryOvertime,
	'executeQuery': handleExecuteQuery,
	'getCloudSecurityIntegrationState': handleGetCloudSecurityIntegrationState,
	'getExecutorNodes': handleGetExecutorNodes,
	'getExecutorNodesID09InstancesCsv': handleGetExecutorNodesID09InstancesCsv,
	'getExecutorNodesMetadata': handleGetExecutorNodesMetadata,
	'getGroupID09V2': handleGetGroupID09V2,
	'getGroupsHierV2': handleGetGroupsHierV2,
	'getGroupsListV2': handleGetGroupsListV2,
	'getIntegrationTasks': handleGetIntegrationTasks,
	'getIntegrationTasksAdmin': handleGetIntegrationTasksAdmin,
	'getIntegrationTasksMetadata': handleGetIntegrationTasksMetadata,
	'getIntegrationTasksV2': handleGetIntegrationTasksV2,
	'getIntegrationTypes': handleGetIntegrationTypes,
	'getIntegrations': handleGetIntegrations,
	'getIntegrationsV2': handleGetIntegrationsV2,
	'getServiceArtifacts': handleGetServiceArtifacts,
	'getServiceViolationTypes': handleGetServiceViolationTypes,
	'getServicesCount': handleGetServicesCount,
	'getTags': handleGetTags,
	'getUsersV2': handleGetUsersV2,
	'postGroupID09UpdateDefault': handlePostGroupID09UpdateDefault,
	'postGroupID09V2': handlePostGroupID09V2,
	'postGroupV2': handlePostGroupV2,
	'runIntegrationTask': handleRunIntegrationTask,
	'runIntegrationTaskAdmin': handleRunIntegrationTaskAdmin,
	'runIntegrationTaskV2': handleRunIntegrationTaskV2,
	'serviceNowGetDeployments': handleServiceNowGetDeployments,
	'serviceNowGetServices': handleServiceNowGetServices,
	'setCloudSecurityIntegrationState': handleSetCloudSecurityIntegrationState,
	'updateExecutorNode': handleUpdateExecutorNode,
	'updateIntegration': handleUpdateIntegration,
	'updateIntegrationTask': handleUpdateIntegrationTask,
	'upsertBusinessApplications': handleUpsertBusinessApplications,
	'upsertTags': handleUpsertTags,
};

export async function executeAspm(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	const handler = HANDLER_MAP[operation];
	if (handler) {
		return await handler(this, index, falconClient);
	}
	throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Aspm.`); as any)), `Operation ${operation} is not supported for ASPM.`);
	}
}
