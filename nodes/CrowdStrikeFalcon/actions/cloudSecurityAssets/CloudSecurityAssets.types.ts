export interface ICloudSecurityAssetsGenericParams {
	type?: string;
	crn?: string;
	gcrn?: string;
	filter?: string;
	sort?: string;
	limit?: number;
	offset?: number;
	after?: string;
	includeFailingIomSeverityCounts?: boolean;
	ids?: string[];
	body?: Record<string, any>;
}
