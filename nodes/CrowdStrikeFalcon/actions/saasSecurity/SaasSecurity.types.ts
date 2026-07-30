export interface ISaasSecurityGenericParams {
	id?: string;
	itemId?: string;
	sourceId?: string;
	integrationId?: string;
	saasId?: string;
	limit?: number;
	offset?: number;
	skip?: number;
	body?: Record<string, any> | Array<any>;
}
