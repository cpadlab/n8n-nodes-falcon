export interface IReleaseNotesGenericParams {
	authorization?: string;
	xCSUSERNAME?: string;
	filter?: string;
	sort?: string;
	offset?: string;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
