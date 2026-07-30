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

/** Handles clusterCombined */
async function handleClusterCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve kubernetes clusters identified by filter criteria. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.clusterCombined(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles clusterCount */
async function handleClusterCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve cluster counts. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.clusterCount(filter || undefined);
}

/** Handles clusterEnrichment */
async function handleClusterEnrichment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve cluster enrichment data. */
	const clusterId = parseArrayParam(c, i, 'ids');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.clusterEnrichment(clusterId, filter || undefined);
}

/** Handles clustersByDateRangeCount */
async function handleClustersByDateRangeCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve clusters by date range counts. */
	return await fc.kubernetesProtection.clustersByDateRangeCount();
}

/** Handles clustersByKubernetesVersionCount */
async function handleClustersByKubernetesVersionCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Bucket clusters by kubernetes version. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.clustersByKubernetesVersionCount(filter || undefined);
}

/** Handles clustersByStatusCount */
async function handleClustersByStatusCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Bucket clusters by status. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.clustersByStatusCount(filter || undefined);
}

/** Handles containerCombined */
async function handleContainerCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves a paginated list of containers identified by filter criteria. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.containerCombined(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles containerCount */
async function handleContainerCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve container counts. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.containerCount(filter || undefined);
}

/** Handles containerCountByRegistry */
async function handleContainerCountByRegistry(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves a list with the top container image registries. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.containerCountByRegistry(undefined, limit || undefined, filter || undefined);
}

/** Handles containerEnrichment */
async function handleContainerEnrichment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve container enrichment data. */
	const containerId = parseArrayParam(c, i, 'ids');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.containerEnrichment(containerId, filter || undefined);
}

/** Handles containerImageDetectionsCountByDate */
async function handleContainerImageDetectionsCountByDate(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve count of image assessment detections on running containers. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.containerImageDetectionsCountByDate(filter || undefined);
}

/** Handles containerImagesByMostUsed */
async function handleContainerImagesByMostUsed(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Bucket container by image-digest. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.containerImagesByMostUsed(filter || undefined);
}

/** Handles containerImagesByState */
async function handleContainerImagesByState(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve count of image states running on containers. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.containerImagesByState(filter || undefined);
}

/** Handles containerVulnerabilitiesBySeverityCount */
async function handleContainerVulnerabilitiesBySeverityCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve container vulnerabilities by severity counts. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.containerVulnerabilitiesBySeverityCount(filter || undefined);
}

/** Handles containersByDateRangeCount */
async function handleContainersByDateRangeCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve containers by date range counts. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.containersByDateRangeCount(filter || undefined);
}

/** Handles containersSensorCoverage */
async function handleContainersSensorCoverage(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Bucket containers by agent type and calculate sensor coverage. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.containersSensorCoverage(filter || undefined);
}

/** Handles createAWSAccount */
async function handleCreateAWSAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new AWS account in system and generates installation script. */
	return await fc.kubernetesProtection.createAWSAccount(parseJsonParam(c, i));
}

/** Handles createAzureSubscription */
async function handleCreateAzureSubscription(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates a new Azure Subscription in system. */
	return await fc.kubernetesProtection.createAzureSubscription(parseJsonParam(c, i));
}

/** Handles deleteAWSAccountsMixin0 */
async function handleDeleteAWSAccountsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete AWS accounts. */
	return await fc.kubernetesProtection.deleteAWSAccountsMixin0(parseArrayParam(c, i, 'ids'));
}

/** Handles deleteAzureSubscription */
async function handleDeleteAzureSubscription(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes Azure Subscriptions in system. */
	return await fc.kubernetesProtection.deleteAzureSubscription(parseArrayParam(c, i, 'ids'));
}

/** Handles deploymentCombined */
async function handleDeploymentCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve kubernetes deployments identified by filter criteria. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.deploymentCombined(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles deploymentCount */
async function handleDeploymentCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve deployment counts. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.deploymentCount(filter || undefined);
}

/** Handles deploymentEnrichment */
async function handleDeploymentEnrichment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve deployment enrichment data. */
	const deploymentId = parseArrayParam(c, i, 'ids');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.deploymentEnrichment(deploymentId, filter || undefined);
}

/** Handles deploymentsByDateRangeCount */
async function handleDeploymentsByDateRangeCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve deployments by date range counts. */
	return await fc.kubernetesProtection.deploymentsByDateRangeCount();
}

/** Handles distinctContainerImageCount */
async function handleDistinctContainerImageCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve count of distinct images running on containers. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.distinctContainerImageCount(filter || undefined);
}

/** Handles findContainersByContainerRunTimeVersion */
async function handleFindContainersByContainerRunTimeVersion(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve containers by container_runtime_version. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const sort = getStringParam(c, i, 'sort', '');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.findContainersByContainerRunTimeVersion(limit || undefined, offset || undefined, sort || undefined, filter || undefined);
}

/** Handles findContainersCountAffectedByZeroDayVulnerabilities */
async function handleFindContainersCountAffectedByZeroDayVulnerabilities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve containers count affected by zero day vulnerabilities. */
	return await fc.kubernetesProtection.findContainersCountAffectedByZeroDayVulnerabilities();
}

/** Handles getAWSAccountsMixin0 */
async function handleGetAWSAccountsMixin0(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provides a list of AWS accounts. */
	const ids = parseArrayParam(c, i, 'ids');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.getAWSAccountsMixin0(ids.length ? ids : undefined, undefined, undefined, limit || undefined, offset || undefined);
}

/** Handles getAzureInstallScript */
async function handleGetAzureInstallScript(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provides script to run for given tenant ID and subscription IDs. */
	const id = getStringParam(c, i, 'id', '');
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.kubernetesProtection.getAzureInstallScript(id || undefined, ids.length ? ids : undefined);
}

/** Handles getAzureTenantConfig */
async function handleGetAzureTenantConfig(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets the Azure tenant Config. */
	const ids = parseArrayParam(c, i, 'ids');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.getAzureTenantConfig(ids.length ? ids : undefined, limit || undefined, offset || undefined);
}

/** Handles getAzureTenantIDs */
async function handleGetAzureTenantIDs(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provides all azure subscriptions and tenants. */
	const ids = parseArrayParam(c, i, 'ids');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.getAzureTenantIDs(ids.length ? ids : undefined, undefined, limit || undefined, offset || undefined);
}

/** Handles getClusters */
async function handleGetClusters(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provides clusters acknowledged by Kubernetes Protection service. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.getClusters(undefined, undefined, undefined, undefined, undefined, limit || undefined, offset || undefined);
}

/** Handles getCombinedCloudClusters */
async function handleGetCombinedCloudClusters(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns combined list of provisioned cloud accounts and clusters. */
	const ids = parseArrayParam(c, i, 'ids');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.getCombinedCloudClusters(undefined, ids.length ? ids : undefined, undefined, undefined, limit || undefined, offset || undefined);
}

/** Handles getHelmValuesYaml */
async function handleGetHelmValuesYaml(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provides sample Helm values.yaml file for agent Helm chart. */
	const clusterName = getStringParam(c, i, 'clusterName', '');
	return await fc.kubernetesProtection.getHelmValuesYaml(clusterName);
}

/** Handles getLocations */
async function handleGetLocations(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provides cloud locations acknowledged by Kubernetes Protection. */
	return await fc.kubernetesProtection.getLocations();
}

/** Handles getStaticScripts */
async function handleGetStaticScripts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets static bash scripts used during registration. */
	return await fc.kubernetesProtection.getStaticScripts();
}

/** Handles groupContainersByManaged */
async function handleGroupContainersByManaged(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Group the containers by Managed. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.groupContainersByManaged(filter || undefined);
}

/** Handles kubernetesIomByDateRange */
async function handleKubernetesIomByDateRange(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns count of Kubernetes IOMs by date range. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.kubernetesIomByDateRange(filter || undefined);
}

/** Handles kubernetesIomCount */
async function handleKubernetesIomCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Returns total count of Kubernetes IOMs. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.kubernetesIomCount(filter || undefined);
}

/** Handles kubernetesIomEntities */
async function handleKubernetesIomEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve Kubernetes IOM entities by IDs. */
	const ids = parseArrayParam(c, i, 'ids');
	return await fc.kubernetesProtection.kubernetesIomEntities(ids.length ? ids : undefined);
}

/** Handles kubernetesIomEntitiesCombined */
async function handleKubernetesIomEntitiesCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves list of Kubernetes IOMs by search criteria. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.kubernetesIomEntitiesCombined(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles listAzureAccounts */
async function handleListAzureAccounts(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Provides azure subscriptions registered to Kubernetes Protection. */
	const ids = parseArrayParam(c, i, 'ids');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.listAzureAccounts(ids.length ? ids : undefined, undefined, undefined, undefined, limit || undefined, offset || undefined);
}

/** Handles nodeCombined */
async function handleNodeCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve kubernetes nodes identified by filter criteria. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.nodeCombined(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles nodeCount */
async function handleNodeCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve node counts. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.nodeCount(filter || undefined);
}

/** Handles nodeEnrichment */
async function handleNodeEnrichment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve node enrichment data. */
	const nodeName = parseArrayParam(c, i, 'ids');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.nodeEnrichment(nodeName, filter || undefined);
}

/** Handles nodesByCloudCount */
async function handleNodesByCloudCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Bucket nodes by cloud providers. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.nodesByCloudCount(filter || undefined);
}

/** Handles nodesByContainerEngineVersionCount */
async function handleNodesByContainerEngineVersionCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Bucket nodes by container engine version. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.nodesByContainerEngineVersionCount(filter || undefined);
}

/** Handles nodesByDateRangeCount */
async function handleNodesByDateRangeCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve nodes by date range counts. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.nodesByDateRangeCount(filter || undefined);
}

/** Handles patchAzureServicePrincipal */
async function handlePatchAzureServicePrincipal(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Adds client ID for given tenant ID to system. */
	const id = getStringParam(c, i, 'id', '');
	const clientId = getStringParam(c, i, 'clientId', '');
	return await fc.kubernetesProtection.patchAzureServicePrincipal(id, clientId);
}

/** Handles podCombined */
async function handlePodCombined(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve kubernetes pods identified by filter criteria. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.podCombined(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles podCount */
async function handlePodCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve pod counts. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.podCount(filter || undefined);
}

/** Handles podEnrichment */
async function handlePodEnrichment(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve pod enrichment data. */
	const podId = parseArrayParam(c, i, 'ids');
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.podEnrichment(podId, filter || undefined);
}

/** Handles podsByDateRangeCount */
async function handlePodsByDateRangeCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve pods by date range counts. */
	return await fc.kubernetesProtection.podsByDateRangeCount();
}

/** Handles postAggregatesPods */
async function handlePostAggregatesPods(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get aggregate query result for pods. */
	const body = parseJsonParam(c, i);
	return await fc.kubernetesProtection.postAggregatesPods(Array.isArray(body) ? body : [body]);
}

/** Handles postSearchKubernetesIOMEntities */
async function handlePostSearchKubernetesIOMEntities(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for Kubernetes IOMs with filtering options. */
	const body = parseJsonParam(c, i);
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.kubernetesProtection.postSearchKubernetesIOMEntities(body, filter || undefined, sort || undefined, limit || undefined);
}

/** Handles queryKubernetesIoms */
async function handleQueryKubernetesIoms(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search Kubernetes IOMs returning list of UUIDs. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.queryKubernetesIoms(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles readClusterCombinedV2 */
async function handleReadClusterCombinedV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve Kubernetes cluster data V2. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.readClusterCombinedV2(filter || undefined, sort || undefined, undefined, limit || undefined, offset || undefined);
}

/** Handles readNamespaceCount */
async function handleReadNamespaceCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve namespace counts. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.readNamespaceCount(filter || undefined);
}

/** Handles readNamespacesByDateRangeCount */
async function handleReadNamespacesByDateRangeCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve namespaces by date range counts. */
	return await fc.kubernetesProtection.readNamespacesByDateRangeCount();
}

/** Handles regenerateAPIKey */
async function handleRegenerateAPIKey(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Regenerate API key for docker registry integrations. */
	return await fc.kubernetesProtection.regenerateAPIKey();
}

/** Handles runningContainerImages */
async function handleRunningContainerImages(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve images on running containers. */
	const filter = getStringParam(c, i, 'filter', '');
	const sort = getStringParam(c, i, 'sort', '');
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.kubernetesProtection.runningContainerImages(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles triggerScan */
async function handleTriggerScan(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Triggers dry run or full scan of kubernetes footprint. */
	const scanType = getStringParam(c, i, 'scanType', 'full') as any;
	return await fc.kubernetesProtection.triggerScan(scanType);
}

/** Handles updateAWSAccount */
async function handleUpdateAWSAccount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates AWS account per query parameters. */
	const ids = parseArrayParam(c, i, 'ids');
	const region = getStringParam(c, i, 'region', '');
	return await fc.kubernetesProtection.updateAWSAccount(ids, region || undefined);
}

/** Handles vulnerableContainerImageCount */
async function handleVulnerableContainerImageCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieve count of vulnerable images running on containers. */
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.kubernetesProtection.vulnerableContainerImageCount(filter || undefined);
}

/**
 * Main execution handler for CrowdStrike Falcon Kubernetes Protection operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeKubernetesProtection(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'clusterCombined': return await handleClusterCombined(this, index, falconClient);
		case 'clusterCount': return await handleClusterCount(this, index, falconClient);
		case 'clusterEnrichment': return await handleClusterEnrichment(this, index, falconClient);
		case 'clustersByDateRangeCount': return await handleClustersByDateRangeCount(this, index, falconClient);
		case 'clustersByKubernetesVersionCount': return await handleClustersByKubernetesVersionCount(this, index, falconClient);
		case 'clustersByStatusCount': return await handleClustersByStatusCount(this, index, falconClient);
		case 'containerCombined': return await handleContainerCombined(this, index, falconClient);
		case 'containerCount': return await handleContainerCount(this, index, falconClient);
		case 'containerCountByRegistry': return await handleContainerCountByRegistry(this, index, falconClient);
		case 'containerEnrichment': return await handleContainerEnrichment(this, index, falconClient);
		case 'containerImageDetectionsCountByDate': return await handleContainerImageDetectionsCountByDate(this, index, falconClient);
		case 'containerImagesByMostUsed': return await handleContainerImagesByMostUsed(this, index, falconClient);
		case 'containerImagesByState': return await handleContainerImagesByState(this, index, falconClient);
		case 'containerVulnerabilitiesBySeverityCount': return await handleContainerVulnerabilitiesBySeverityCount(this, index, falconClient);
		case 'containersByDateRangeCount': return await handleContainersByDateRangeCount(this, index, falconClient);
		case 'containersSensorCoverage': return await handleContainersSensorCoverage(this, index, falconClient);
		case 'createAWSAccount': return await handleCreateAWSAccount(this, index, falconClient);
		case 'createAzureSubscription': return await handleCreateAzureSubscription(this, index, falconClient);
		case 'deleteAWSAccountsMixin0': return await handleDeleteAWSAccountsMixin0(this, index, falconClient);
		case 'deleteAzureSubscription': return await handleDeleteAzureSubscription(this, index, falconClient);
		case 'deploymentCombined': return await handleDeploymentCombined(this, index, falconClient);
		case 'deploymentCount': return await handleDeploymentCount(this, index, falconClient);
		case 'deploymentEnrichment': return await handleDeploymentEnrichment(this, index, falconClient);
		case 'deploymentsByDateRangeCount': return await handleDeploymentsByDateRangeCount(this, index, falconClient);
		case 'distinctContainerImageCount': return await handleDistinctContainerImageCount(this, index, falconClient);
		case 'findContainersByContainerRunTimeVersion': return await handleFindContainersByContainerRunTimeVersion(this, index, falconClient);
		case 'findContainersCountAffectedByZeroDayVulnerabilities': return await handleFindContainersCountAffectedByZeroDayVulnerabilities(this, index, falconClient);
		case 'getAWSAccountsMixin0': return await handleGetAWSAccountsMixin0(this, index, falconClient);
		case 'getAzureInstallScript': return await handleGetAzureInstallScript(this, index, falconClient);
		case 'getAzureTenantConfig': return await handleGetAzureTenantConfig(this, index, falconClient);
		case 'getAzureTenantIDs': return await handleGetAzureTenantIDs(this, index, falconClient);
		case 'getClusters': return await handleGetClusters(this, index, falconClient);
		case 'getCombinedCloudClusters': return await handleGetCombinedCloudClusters(this, index, falconClient);
		case 'getHelmValuesYaml': return await handleGetHelmValuesYaml(this, index, falconClient);
		case 'getLocations': return await handleGetLocations(this, index, falconClient);
		case 'getStaticScripts': return await handleGetStaticScripts(this, index, falconClient);
		case 'groupContainersByManaged': return await handleGroupContainersByManaged(this, index, falconClient);
		case 'kubernetesIomByDateRange': return await handleKubernetesIomByDateRange(this, index, falconClient);
		case 'kubernetesIomCount': return await handleKubernetesIomCount(this, index, falconClient);
		case 'kubernetesIomEntities': return await handleKubernetesIomEntities(this, index, falconClient);
		case 'kubernetesIomEntitiesCombined': return await handleKubernetesIomEntitiesCombined(this, index, falconClient);
		case 'listAzureAccounts': return await handleListAzureAccounts(this, index, falconClient);
		case 'nodeCombined': return await handleNodeCombined(this, index, falconClient);
		case 'nodeCount': return await handleNodeCount(this, index, falconClient);
		case 'nodeEnrichment': return await handleNodeEnrichment(this, index, falconClient);
		case 'nodesByCloudCount': return await handleNodesByCloudCount(this, index, falconClient);
		case 'nodesByContainerEngineVersionCount': return await handleNodesByContainerEngineVersionCount(this, index, falconClient);
		case 'nodesByDateRangeCount': return await handleNodesByDateRangeCount(this, index, falconClient);
		case 'patchAzureServicePrincipal': return await handlePatchAzureServicePrincipal(this, index, falconClient);
		case 'podCombined': return await handlePodCombined(this, index, falconClient);
		case 'podCount': return await handlePodCount(this, index, falconClient);
		case 'podEnrichment': return await handlePodEnrichment(this, index, falconClient);
		case 'podsByDateRangeCount': return await handlePodsByDateRangeCount(this, index, falconClient);
		case 'postAggregatesPods': return await handlePostAggregatesPods(this, index, falconClient);
		case 'postSearchKubernetesIOMEntities': return await handlePostSearchKubernetesIOMEntities(this, index, falconClient);
		case 'queryKubernetesIoms': return await handleQueryKubernetesIoms(this, index, falconClient);
		case 'readClusterCombinedV2': return await handleReadClusterCombinedV2(this, index, falconClient);
		case 'readNamespaceCount': return await handleReadNamespaceCount(this, index, falconClient);
		case 'readNamespacesByDateRangeCount': return await handleReadNamespacesByDateRangeCount(this, index, falconClient);
		case 'regenerateAPIKey': return await handleRegenerateAPIKey(this, index, falconClient);
		case 'runningContainerImages': return await handleRunningContainerImages(this, index, falconClient);
		case 'triggerScan': return await handleTriggerScan(this, index, falconClient);
		case 'updateAWSAccount': return await handleUpdateAWSAccount(this, index, falconClient);
		case 'vulnerableContainerImageCount': return await handleVulnerableContainerImageCount(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Kubernetes Protection.`);
	}
}
