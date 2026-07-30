export interface IItAutomationGenericParams {
	id?: string;
	ids?: string[];
	platform?: string;
	filter?: string;
	sort?: string;
	offset?: number;
	limit?: number;
	body?: Record<string, any>;
}
