export interface IKnowledgeBaseFilesGenericParams {
	knowledgeBaseId?: string;
	id?: string;
	ids?: string[];
	fileDescription?: string;
	file?: any;
	offset?: number;
	limit?: number;
	filter?: string;
	includeDeleted?: boolean;
}
