import { NodeOperationError, type IExecuteFunctions } from 'n8n-workflow';

/**
 * Safely extracts a string parameter from the n8n execution context.
 */
export function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
	const val = context.getNodeParameter(paramName, index, fallback);
	return val !== undefined && val !== null ? String(val) : String(fallback);
}

/**
 * Safely extracts and splits a comma-separated string parameter into a cleaned array.
 */
export function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
	const str = getStringParam(context, index, paramName, '');
	return str ? str.split(',').map((item) => item.trim()).filter(Boolean) : [];
}

/**
 * Safely extracts and parses a JSON parameter object from the n8n execution context.
 */
export function parseJsonParam<T = any>(context: IExecuteFunctions, index: number, paramName = 'bodyJson'): T {
	const val = context.getNodeParameter(paramName, index, '{}');
	if (!val) return {} as T;
	if (typeof val === 'object') return val as T;
	try {
		return JSON.parse(String(val)) as T;
	} catch (e) {
		throw new NodeOperationError(context.getNode(), `Invalid JSON in parameter '${paramName}': ${(e as Error).message}`);
	}
}

/**
 * Extracts standard pagination and query parameters (filter, limit, offset, sort).
 */
export function getQueryParams(context: IExecuteFunctions, index: number): { filter?: string; limit?: number; offset?: number; sort?: string } {
	const filter = getStringParam(context, index, 'filter', '');
	const sort = getStringParam(context, index, 'sort', '');
	const limit = context.getNodeParameter('limit', index, 100) as number;
	const offset = context.getNodeParameter('offset', index, 0) as number;

	return {
		filter: filter || undefined,
		sort: sort || undefined,
		limit: limit || undefined,
		offset: offset || undefined,
	};
}
