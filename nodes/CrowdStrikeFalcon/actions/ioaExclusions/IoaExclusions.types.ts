export interface IIoaExclusionsGenericParams {
	ids?: string[];
	comment?: string;
	filter?: string;
	ifnRegex?: string;
	clRegex?: string;
	parentIfnRegex?: string;
	parentClRegex?: string;
	grandparentIfnRegex?: string;
	grandparentClRegex?: string;
	offset?: number;
	limit?: number;
	sort?: string;
	body?: Record<string, any>;
}
