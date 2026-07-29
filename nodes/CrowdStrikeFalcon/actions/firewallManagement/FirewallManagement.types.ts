export interface IFirewallManagementGenericParams {
	id?: string;
	ids?: string[];
	cloneId?: string;
	library?: string;
	comment?: string;
	addFwRules?: boolean;
	platformId?: string;
	sort?: string;
	filter?: string;
	q?: string;
	offset?: string;
	after?: string;
	limit?: number;
	body?: Record<string, any>;
}
