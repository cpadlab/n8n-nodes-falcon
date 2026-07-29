export interface IGetAllAPIClientIdsForCustomerParams {
	offset?: number;
	limit?: number;
	sort?: string;
}

export interface IGetAPIClientsParams {
	ids: string[];
}

export interface IDeleteAPIClientsParams {
	ids: string[];
}

export interface ICreateAPIClientParams {
	body: Record<string, any>;
}

export interface IUpdateAPIClientParams {
	id: string;
	body: Record<string, any>;
}

export interface IResetAPIClientSecretParams {
	ids: string[];
	actionName: string;
}
