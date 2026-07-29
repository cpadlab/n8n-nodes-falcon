export interface ICloudOciRegistrationGenericParams {
	ids?: string[];
	filter?: string;
	sort?: string;
	nextToken?: string;
	limit?: number;
	offset?: number;
	body?: Record<string, any>;
}
