export interface IIntelGenericParams {
	id?: string | number;
	ids?: string[];
	actorId?: string;
	type?: string;
	accept?: string;
	format?: string;
	filter?: string;
	offset?: string | number;
	limit?: number;
	sort?: string;
	q?: string;
	includeDeleted?: boolean;
	includeRelations?: boolean;
	body?: Record<string, any>;
}
