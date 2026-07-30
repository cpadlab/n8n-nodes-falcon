export interface IReconGenericParams {
	id?: string;
	ids?: string[];
	filter?: string;
	q?: string;
	sort?: string;
	secondarySort?: string;
	offset?: number;
	limit?: number;
	notificationsDeletionRequested?: boolean;
	body?: Record<string, any> | Array<any>;
}
