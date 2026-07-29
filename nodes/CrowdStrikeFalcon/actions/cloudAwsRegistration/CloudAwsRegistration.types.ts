export interface ICloudAwsRegistrationGenericParams {
	ids?: string[];
	organizationIds?: string[];
	accountIds?: string[];
	accountId?: string;
	iamRoleArn?: string;
	organizationId?: string;
	products?: string[];
	features?: string[];
	accountStatus?: string;
	groupBy?: string;
	limit?: number;
	offset?: number;
	body?: Record<string, any>;
}
