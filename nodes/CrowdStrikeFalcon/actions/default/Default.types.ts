export interface IDefaultGenericParams {
	after?: string;
	limit?: number | string;
	filter?: string;
	sort?: string;
	ids?: string[];
	id?: string;
	platform?: string;
	aids?: string[];
	ffcids?: string[];
	states?: string[];
	offset?: string;
	collectionTag?: string;
	selfDestruct?: boolean;
	body?: Record<string, any>;
}
