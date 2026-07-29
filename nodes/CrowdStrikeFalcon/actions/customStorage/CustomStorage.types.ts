export interface ICustomStorageGenericParams {
	collectionName: string;
	collectionVersion?: string;
	schemaVersion?: string;
	objectKey?: string;
	names?: string[];
	filter?: string;
	sort?: string;
	limit?: number;
	offset?: number;
	start?: string;
	end?: string;
	dryRun?: boolean;
}
