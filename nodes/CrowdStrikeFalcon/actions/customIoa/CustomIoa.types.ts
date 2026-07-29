export interface ICustomIoaGenericParams {
	ids?: string[];
	ruleGroupId?: string;
	comment?: string;
	filter?: string;
	q?: string;
	sort?: string;
	limit?: number;
	offset?: string;
	body?: Record<string, any>;
}
