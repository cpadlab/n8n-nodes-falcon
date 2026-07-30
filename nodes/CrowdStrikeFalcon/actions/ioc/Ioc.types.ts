export interface IIocGenericParams {
	id?: string;
	ids?: string[];
	type?: string;
	value?: string;
	deviceId?: string;
	filter?: string;
	offset?: string | number;
	limit?: number;
	sort?: string;
	after?: string;
	fromParent?: boolean;
	retrodetects?: boolean;
	ignoreWarnings?: boolean;
	comment?: string;
	body?: Record<string, any>;
}
