export interface IBaseResourceParams {
	id?: string;
	ids?: string[];
	actionName?: string;
	filter?: string;
	sort?: string;
	offset?: number;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
