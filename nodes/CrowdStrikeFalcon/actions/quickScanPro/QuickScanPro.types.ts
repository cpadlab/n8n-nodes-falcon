export interface IQuickScanProGenericParams {
	ids?: string[];
	filter?: string;
	sort?: string;
	offset?: number;
	limit?: number;
	fileName?: string;
	password?: string;
	scan?: boolean;
	body?: Record<string, any> | Array<any>;
}
