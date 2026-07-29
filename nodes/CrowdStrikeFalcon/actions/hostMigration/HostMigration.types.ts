export interface IHostMigrationGenericParams {
	id?: string;
	ids?: string[];
	actionName?: string;
	filter?: string;
	offset?: number;
	limit?: number;
	sort?: string;
	body?: Record<string, any>;
}
