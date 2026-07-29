export interface IHostsGenericParams {
	ids?: string[];
	actionName?: string;
	disableHostnameCheck?: boolean;
	filter?: string;
	offset?: string | number;
	limit?: number;
	sort?: string;
	fields?: string;
	from?: string;
	to?: string;
	body?: Record<string, any>;
}
