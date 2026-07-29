export interface IAspmGenericBodyParams {
	body: Record<string, any>;
}

export interface IAspmIdParam {
	iD: number;
}

export interface IAspmIdBodyParams {
	iD: number;
	body: Record<string, any>;
	category?: string;
}

export interface IAspmFieldParam {
	field: string;
}

export interface IAspmGetExecutorNodesParams {
	nodeType: string;
	integrationType?: number;
	offset?: number;
	limit?: number;
	orderBy?: string;
	direction?: string;
	executorNodeIds?: string[];
	executorNodeNames?: string[];
	executorNodeStates?: number[];
	executorNodeTypes?: string[];
}

export interface IAspmGetIntegrationTasksParams {
	integrationTaskType?: number;
	category?: string;
	offset?: number;
	limit?: number;
	orderBy?: string;
	direction?: string;
	integrationTaskTypes?: number;
	ids?: number;
	names?: string;
}

export interface IAspmGetIntegrationsParams {
	integrationType?: number;
	category?: string;
}

export interface IAspmGetServiceArtifactsParams {
	persistentSignature: string;
	optionalTime?: number;
	revisionId?: number;
	limit?: number;
	offset?: number;
	orderBy?: string[];
	direction?: string;
}

export interface IAspmGetTagsParams {
	isUnique?: boolean;
	tagName?: string;
	limit?: number;
	offset?: number;
	name?: string[];
}

export interface IAspmServiceNowParams {
	qlFilters?: string;
	excludeArtifacts?: boolean;
	limit?: number;
	offset?: number;
	orderBy?: string;
	direction?: string;
}

export interface IAspmExecuteFunctionDataCountParams {
	queryName: string;
	cloudProvider: string;
	awsLambdaArn?: string;
	gcpCloudFunctionUrl?: string;
	azureSiteSubscriptionId?: string;
	azureSiteResourceGroup?: string;
	azureFunctionAppName?: string;
}

export interface IAspmExecuteFunctionsCountParams {
	queryName: string;
	cloudProvider?: string[];
	cloudAccountId?: string[];
	region?: string[];
	cid?: string[];
}
