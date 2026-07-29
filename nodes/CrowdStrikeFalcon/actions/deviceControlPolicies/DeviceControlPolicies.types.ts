export interface IDeviceControlPoliciesGenericParams {
	ids?: string[];
	id?: string;
	actionName?: string;
	filter?: string;
	offset?: number;
	limit?: number;
	sort?: string;
	body?: Record<string, any>;
}
