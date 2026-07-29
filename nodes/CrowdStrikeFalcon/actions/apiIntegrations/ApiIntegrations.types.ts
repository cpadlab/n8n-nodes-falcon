export interface IExecuteCommandParams {
	resources: Record<string, any>[];
}

export interface IExecuteCommandProxyParams {
	body: Record<string, any>;
}

export interface IGetCombinedPluginConfigsParams {
	filter?: string;
	limit?: number;
	offset?: number;
	sort?: string;
}
