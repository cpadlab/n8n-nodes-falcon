export interface IKnowledgeBaseAuditEventsGenericParams {
	knowledgeBaseId?: string;
	ids?: string[];
	offset?: number;
	limit?: number;
	sort?: string;
	filter?: string;
	includeDeleted?: boolean;
	body?: Record<string, any>;
}
