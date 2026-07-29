export interface ICorrelationRulesGenericParams {
	ids?: string[];
	ruleIds?: string[];
	filter?: string;
	q?: string;
	sort?: string;
	limit?: number;
	offset?: number;
	body?: Record<string, any>;
}
