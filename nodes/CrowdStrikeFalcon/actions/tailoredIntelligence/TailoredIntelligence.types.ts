export interface ITailoredIntelligenceGenericParams {
	id?: string;
	authorization?: string;
	offset?: string;
	limit?: number;
	sort?: string;
	filter?: string;
	q?: string;
	body?: Record<string, any> | Array<any>;
}
