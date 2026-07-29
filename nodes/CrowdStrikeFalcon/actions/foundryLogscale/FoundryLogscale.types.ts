export interface IFoundryLogscaleGenericParams {
	appId?: string;
	jobId?: string;
	dataContent?: string;
	tagSource?: string;
	testData?: boolean;
	checkTestData?: boolean;
	repo?: string;
	inferJsonTypes?: boolean;
	resultFormat?: string;
	detailed?: boolean;
	jobStatusOnly?: boolean;
	limit?: string;
	offset?: string;
	body?: Record<string, any>;
}
