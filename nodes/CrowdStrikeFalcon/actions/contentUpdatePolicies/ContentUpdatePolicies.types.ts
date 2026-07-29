export interface IContentUpdatePoliciesGenericParams {
	ids?: string[];
	id?: string;
	actionName?: string;
	category?: string;
	filter?: string;
	limit?: number;
	offset?: number;
	sort?: string;
	body?: Record<string, any>;
}
