export interface IFalconxSandboxGenericParams {
	id?: string;
	ids?: string | string[];
	name?: string;
	acceptEncoding?: string;
	passwordProtected?: boolean;
	filter?: string;
	offset?: string;
	limit?: number;
	sort?: string;
	aid?: string;
	comment?: string;
	isConfidential?: boolean;
	fileName?: string;
	body?: Record<string, any>;
}
