export interface IMsspGenericParams {
	id?: string;
	ids?: string[];
	cidGroupIds?: string[];
	userGroupIds?: string[];
	cid?: string;
	name?: string;
	userGroupId?: string;
	cidGroupId?: string;
	roleId?: string;
	userUuid?: string;
	filter?: string;
	sort?: string;
	offset?: number;
	limit?: number;
	body?: Record<string, any>;
}
