export interface IExposureManagementGenericParams {
	assetId?: string;
	hash?: string;
	ids?: string[];
	offset?: number | string;
	limit?: number;
	filter?: string;
	sort?: string;
	versionId?: string;
	after?: string;
	body?: Record<string, any>;
}
