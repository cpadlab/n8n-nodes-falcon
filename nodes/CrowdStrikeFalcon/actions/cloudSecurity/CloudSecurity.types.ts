export interface ICloudSecurityGenericParams {
	ids?: string[];
	filter?: string;
	sort?: string;
	limit?: number;
	offset?: number;
	body?: Record<string, any>;
	group?: Record<string, any>;
}
