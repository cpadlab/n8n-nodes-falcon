export interface IQuarantineGenericParams {
	filter?: string;
	q?: string;
	sort?: string;
	offset?: string;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
