export interface ICloudSnapshotsGenericParams {
	ids?: string[];
	filter?: string;
	limit?: number;
	offset?: number;
	sort?: string;
	body?: Record<string, any>;
}
