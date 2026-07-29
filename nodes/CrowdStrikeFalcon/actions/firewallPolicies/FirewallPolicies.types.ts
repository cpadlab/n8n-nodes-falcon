export interface IFirewallPoliciesGenericParams {
	id?: string;
	ids?: string[];
	actionName?: string;
	cloneId?: string;
	filter?: string;
	offset?: number;
	limit?: number;
	sort?: string;
	body?: Record<string, any>;
}
