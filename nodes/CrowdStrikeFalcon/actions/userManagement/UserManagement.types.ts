export interface IUserManagementGenericParams {
	userUuid?: string;
	cid?: string;
	directOnly?: boolean;
	validateOnly?: boolean;
	action?: string;
	ids?: string[];
	uid?: string[];
	filter?: string;
	sort?: string;
	offset?: number;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
