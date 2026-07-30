export interface IOdsGenericParams {
	ids?: string[];
	filter?: string;
	sort?: string;
	offset?: number;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
