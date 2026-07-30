export interface IRealTimeResponseGenericParams {
	id?: string;
	ids?: string[];
	sessionId?: string;
	sha256?: string;
	batchGetCmdReqId?: string;
	cloudRequestId?: string;
	sequenceId?: number;
	filter?: string;
	sort?: string;
	offset?: string;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
