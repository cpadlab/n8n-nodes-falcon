export interface IMlExclusionsGenericParams {
	id?: string;
	ids?: string[];
	comment?: string;
	actionName?: string;
	filter?: string;
	sort?: string;
	offset?: number;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
