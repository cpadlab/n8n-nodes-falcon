export interface IGetCasesQueryParams {
	limit?: number;
	offset?: number;
	sort?: string;
	filter?: string;
	q?: string;
}

export interface IGetCasesByIDsParams {
	ids: string[];
}

export interface ICreateCaseParams {
	name?: string;
	title?: string;
	description?: string;
	priority?: number;
	status?: string;
	user_id?: string;
	group_id?: string;
	[key: string]: any;
}

export interface IUpdateCaseParams {
	id: string;
	name?: string;
	title?: string;
	description?: string;
	priority?: number;
	status?: string;
	user_id?: string;
	group_id?: string;
	[key: string]: any;
}

export interface IAddAlertEvidenceParams {
	id: string;
	composite_ids?: string[];
	[key: string]: any;
}

export interface IAddEventEvidenceParams {
	id: string;
	event_ids?: string[];
	[key: string]: any;
}

export interface IAddTagsParams {
	id: string;
	tags: string[];
	[key: string]: any;
}

export interface IRemoveTagsParams {
	id: string;
	tag: string[];
}

export interface IMergeCasesParams {
	source_id: string;
	destination_id: string;
	[key: string]: any;
}
