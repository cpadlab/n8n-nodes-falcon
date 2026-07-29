export interface ICloudAzureRegistrationGenericParams {
	tenantIds?: string[];
	tenantId?: string;
	registrationId?: string;
	field?: string;
	filter?: string;
	sort?: string;
	groupBy?: string;
	limit?: number;
	offset?: number;
	deploymentMethod?: string;
	stackName?: string;
	body?: Record<string, any>;
}
