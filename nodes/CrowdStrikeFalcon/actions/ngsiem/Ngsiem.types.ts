export interface INgsiemGenericParams {
	id?: string;
	ids?: string[];
	filename?: string[];
	repository?: string;
	namespace?: string;
	_package?: string;
	connectorId?: string;
	searchDomain?: string;
	filter?: string;
	offset?: string | number;
	limit?: string | number;
	sort?: string;
	body?: Record<string, any> | Array<any>;
}
