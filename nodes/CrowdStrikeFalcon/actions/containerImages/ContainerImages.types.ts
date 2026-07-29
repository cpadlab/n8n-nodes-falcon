export interface IContainerImagesGenericParams {
	filter?: string;
	sort?: string;
	limit?: number;
	offset?: number;
	cid?: string;
	registry?: string;
	repository?: string;
	tag?: string;
	ids?: string[];
	body?: Record<string, any>;
}
