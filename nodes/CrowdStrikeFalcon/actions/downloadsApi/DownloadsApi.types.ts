export interface IDownloadsApiGenericParams {
	fileName?: string;
	fileVersion?: string;
	platform?: string;
	os?: string;
	arch?: string;
	category?: string;
	filter?: string;
	sort?: string;
	limit?: number;
	offset?: number;
}
