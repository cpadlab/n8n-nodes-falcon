export interface ICaseManagementGenericParams {
	ids?: string[];
	filter?: string;
	sort?: string;
	limit?: number;
	offset?: number;
	body?: Record<string, any>;
}
