export interface ID4cRegistrationGenericParams {
	tenantId?: string[];
	ids?: string[];
	idSingle?: string;
	scanType?: string;
	status?: string;
	limit?: number;
	offset?: number;
	sort?: string;
	region?: string;
	body?: Record<string, any>;
}
