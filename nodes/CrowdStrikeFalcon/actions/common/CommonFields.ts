import type { INodeProperties } from 'n8n-workflow';

/**
 * Helper to construct displayOptions for resource and operations
 */
export function makeDisplayOptions(resource: string, operations: string[]): INodeProperties['displayOptions'] {
	return {
		show: {
			resource: [resource],
			operation: operations,
		},
	};
}

/**
 * Generates an Operation selection dropdown field for a resource
 */
export function createOperationField(
	resource: string,
	options: Array<{ name: string; value: string; description?: string; action?: string }>,
	defaultOp?: string,
): INodeProperties {
	return {
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [resource],
			},
		},
		options,
		default: defaultOp || (options[0] ? options[0].value : ''),
	};
}
export const getOperationField = createOperationField;

/**
 * Generates a Filter field for specified resource and operations
 */
export function createFilterField(resource: string, operations: string[], description = 'FQL query to filter resources'): INodeProperties {
	return {
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		default: '',
		description,
		displayOptions: makeDisplayOptions(resource, operations),
	};
}
export const getFilterField = createFilterField;

/**
 * Generates a Limit field for specified resource and operations
 */
export function createLimitField(resource: string, operations: string[], defaultLimit = 100, description = 'Maximum number of records to return'): INodeProperties {
	return {
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: { minValue: 1 },
		default: defaultLimit,
		description,
		displayOptions: makeDisplayOptions(resource, operations),
	};
}
export const getLimitField = createLimitField;

/**
 * Generates an Offset field for specified resource and operations
 */
export function createOffsetField(resource: string, operations: string[], description = 'Starting index for pagination'): INodeProperties {
	return {
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		typeOptions: { minValue: 0 },
		default: 0,
		description,
		displayOptions: makeDisplayOptions(resource, operations),
	};
}
export const getOffsetField = createOffsetField;

/**
 * Generates a Sort field for specified resource and operations
 */
export function createSortField(resource: string, operations: string[], description = 'Property and direction to sort by (e.g. created_timestamp.desc)'): INodeProperties {
	return {
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		default: '',
		description,
		displayOptions: makeDisplayOptions(resource, operations),
	};
}
export const getSortField = createSortField;

/**
 * Generates standard pagination fields (filter, limit, offset, sort) for a resource
 */
export function createStandardPaginationFields(resource: string, operations: string[]): INodeProperties[] {
	return [
		createFilterField(resource, operations),
		createLimitField(resource, operations),
		createOffsetField(resource, operations),
		createSortField(resource, operations),
	];
}
export const getStandardPaginationFields = createStandardPaginationFields;

/**
 * Generates an IDs field for specified resource and operations
 */
export function createIdsField(resource: string, operations: string[], displayName = 'IDs', name = 'ids', description = 'Comma-separated list of IDs'): INodeProperties {
	return {
		displayName,
		name,
		type: 'string',
		default: '',
		required: true,
		description,
		displayOptions: makeDisplayOptions(resource, operations),
	};
}
export const getIdsField = createIdsField;

export function createIdField(resource: string, operations: string[], displayName = 'ID', name = 'id', description = 'Resource ID'): INodeProperties {
	return createIdsField(resource, operations, displayName, name, description);
}
export const getIdField = createIdField;

/**
 * Generates a Body (JSON) field for specified resource and operations
 */
export function createBodyJsonField(resource: string, operations: string[], displayName = 'Body (JSON)', description = 'JSON request body payload'): INodeProperties {
	return {
		displayName,
		name: 'bodyJson',
		type: 'json',
		default: '{}',
		description,
		displayOptions: makeDisplayOptions(resource, operations),
	};
}
export const getBodyJsonField = createBodyJsonField;

/**
 * Generates a Query (q) field for specified resource and operations
 */
export function createQueryField(resource: string, operations: string[], displayName = 'Query', name = 'q', description = 'Search query string'): INodeProperties {
	return {
		displayName,
		name,
		type: 'string',
		default: '',
		description,
		displayOptions: makeDisplayOptions(resource, operations),
	};
}
export const getQueryField = createQueryField;
