export interface IDataProtectionConfigurationGenericParams {
	id?: string;
	ids?: string[];
	platformName?: string;
	xCSUSERUUID?: string;
	filter?: string;
	type?: string;
	sort?: string;
	offset?: number;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
