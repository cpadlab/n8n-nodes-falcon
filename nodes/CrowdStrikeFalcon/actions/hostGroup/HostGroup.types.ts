export interface IHostGroupGenericParams {
	id?: string;
	ids?: string[];
	actionName?: string;
	disableHostnameCheck?: boolean;
	filter?: string;
	offset?: number;
	limit?: number;
	sort?: string;
	body?: Record<string, any>;
}
