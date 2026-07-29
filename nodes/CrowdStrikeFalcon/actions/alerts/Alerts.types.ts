export interface IQueryV2Params {
	includeHidden?: boolean;
	offset?: number;
	limit?: number;
	sort?: string;
	filter?: string;
	q?: string;
}

export interface IGetV2Params {
	compositeIds: string[];
	includeHidden?: boolean;
}

export interface IUpdateV3Params {
	body: Record<string, any>;
	includeHidden?: boolean;
}

export interface IPostCombinedAlertsV1Params {
	body: Record<string, any>;
}

export interface IGetAggregateV2Params {
	body: Record<string, any>[];
	includeHidden?: boolean;
}

export interface IGetQueriesAlertsV1Params {
	offset?: number;
	limit?: number;
	sort?: string;
	filter?: string;
	q?: string;
}

export interface IPatchEntitiesAlertsV2Params {
	body: Record<string, any>;
}

export interface IPostAggregatesAlertsV1Params {
	body: Record<string, any>[];
}

export interface IPostEntitiesAlertsV1Params {
	body: Record<string, any>;
}
