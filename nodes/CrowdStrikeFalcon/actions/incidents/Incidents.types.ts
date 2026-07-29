export interface IIncidentsGenericParams {
	filter?: string;
	offset?: number;
	limit?: number;
	sort?: string;
	updateDetects?: boolean;
	overwriteDetects?: boolean;
	body?: Record<string, any>;
}
