export interface ISampleUploadsGenericParams {
	ids?: string[];
	id?: string;
	sha256?: string;
	fileName?: string;
	comment?: string;
	isLive?: boolean;
	password?: string;
	body?: Record<string, any> | Array<any>;
}
