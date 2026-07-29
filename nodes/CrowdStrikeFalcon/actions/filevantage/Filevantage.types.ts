export interface IFilevantageGenericParams {
	id?: string;
	ids?: string[];
	ruleGroupId?: string;
	policyId?: string;
	action?: string;
	type?: string;
	after?: string;
	offset?: number;
	limit?: number;
	sort?: string;
	filter?: string;
	body?: Record<string, any>;
}
