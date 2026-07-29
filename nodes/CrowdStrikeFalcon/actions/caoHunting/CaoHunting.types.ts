export interface ICaoHuntingAggregateParams {
	body: Record<string, any>[];
}

export interface ICaoHuntingGetArchiveExportParams {
	language: string;
	filter?: string;
	archiveType?: string;
}

export interface ICaoHuntingGetByIdsParams {
	ids: string[];
	includeTranslatedContent?: string[];
}

export interface ICaoHuntingSearchParams {
	offset?: string;
	limit?: number;
	sort?: string;
	filter?: string;
	q?: string;
}
