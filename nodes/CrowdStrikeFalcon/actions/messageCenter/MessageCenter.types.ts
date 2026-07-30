export interface IMessageCenterGenericParams {
	id?: string;
	caseId?: string;
	userUuid?: string;
	filter?: string;
	sort?: string;
	offset?: number;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
