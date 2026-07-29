export interface ICloudPoliciesGenericParams {
	ids?: string;
	idsArray?: string[];
	sectionName?: string;
	domain?: string;
	subdomain?: string;
	resourceType?: string;
	cloudProvider?: string;
	enriched?: boolean;
	filter?: string;
	limit?: number;
	offset?: number;
	sort?: string;
	body?: Record<string, any>;
}
