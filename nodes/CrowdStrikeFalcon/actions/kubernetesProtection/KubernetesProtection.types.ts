export interface IKubernetesProtectionGenericParams {
	id?: string;
	ids?: string[];
	clusterId?: string[];
	containerId?: string[];
	deploymentId?: string[];
	nodeName?: string[];
	podId?: string[];
	subscriptionId?: string[];
	clusterNames?: string[];
	accountIds?: string[];
	locations?: string[];
	clouds?: string[];
	clusterName?: string;
	clientId?: string;
	region?: string;
	scanType?: string;
	isSelfManagedCluster?: boolean;
	underAssessment?: boolean;
	includeCounts?: boolean;
	filter?: string;
	sort?: string;
	offset?: number;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
