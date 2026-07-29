export interface ICspmRegistrationGenericParams {
	tenantId?: string[];
	ids?: string[];
	idsNumber?: number[];
	idSingleNumber?: number;
	idSingleString?: string;
	filter?: string;
	sort?: string;
	limit?: number;
	offset?: number;
	body?: Record<string, any>;
}
