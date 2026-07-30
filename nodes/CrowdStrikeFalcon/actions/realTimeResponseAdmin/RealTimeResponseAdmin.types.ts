export interface IRealTimeResponseAdminGenericParams {
	id?: string;
	ids?: string[];
	cloudRequestId?: string;
	sequenceId?: number;
	filter?: string;
	sort?: string;
	offset?: string | number;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
