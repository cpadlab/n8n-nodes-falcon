export interface IScheduledReportsGenericParams {
	ids?: string[];
	sort?: string;
	filter?: string;
	q?: string;
	offset?: string;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
