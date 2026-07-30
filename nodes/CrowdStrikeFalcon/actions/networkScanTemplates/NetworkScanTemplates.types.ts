export interface INetworkScanTemplatesGenericParams {
	ids?: string[];
	xCSUSERUUID?: string;
	offset?: number;
	limit?: number;
	sort?: string;
	filter?: string;
	body?: Record<string, any> | Array<any>;
}
