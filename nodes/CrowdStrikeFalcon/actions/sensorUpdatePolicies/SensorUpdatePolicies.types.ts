export interface ISensorUpdatePoliciesGenericParams {
	id?: string;
	ids?: string[];
	actionName?: string;
	platform?: string;
	stage?: string[];
	distinctField?: string;
	filter?: string;
	sort?: string;
	offset?: number;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
