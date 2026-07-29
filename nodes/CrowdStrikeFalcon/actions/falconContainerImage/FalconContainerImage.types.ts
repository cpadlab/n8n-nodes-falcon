export interface IFalconContainerImageGenericParams {
	id?: string;
	ids?: string | string[];
	uuid?: string;
	registry?: string;
	repository?: string;
	tag?: string;
	imageId?: string;
	digest?: string;
	architecture?: string;
	reportFormat?: string;
	filter?: string;
	limit?: number;
	offset?: number;
	sort?: string;
	body?: Record<string, any>;
}
