import type { INodeProperties } from 'n8n-workflow';

/**
 * Generates common filter parameter field property.
 */
export function getFilterField(displayOptions: INodeProperties['displayOptions']): INodeProperties {
	return {
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		default: '',
		description: 'FQL query to filter resources',
		displayOptions,
	};
}

/**
 * Generates common pagination limit field property.
 */
export function getLimitField(displayOptions: INodeProperties['displayOptions'], defaultLimit = 100): INodeProperties {
	return {
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: { minValue: 1 },
		default: defaultLimit,
		description: 'Maximum number of results to return',
		displayOptions,
	};
}

/**
 * Generates common pagination offset field property.
 */
export function getOffsetField(displayOptions: INodeProperties['displayOptions']): INodeProperties {
	return {
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		typeOptions: { minValue: 0 },
		default: 0,
		description: 'Starting index for pagination',
		displayOptions,
	};
}

/**
 * Generates common sort parameter field property.
 */
export function getSortField(displayOptions: INodeProperties['displayOptions']): INodeProperties {
	return {
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		default: '',
		description: 'Property and direction to sort by (e.g. created_timestamp.desc)',
		displayOptions,
	};
}

/**
 * Generates common IDs parameter field property.
 */
export function getIdsField(displayOptions: INodeProperties['displayOptions'], description = 'Comma-separated IDs'): INodeProperties {
	return {
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		default: '',
		required: true,
		description,
		displayOptions,
	};
}

/**
 * Generates common JSON body parameter field property.
 */
export function getBodyJsonField(displayOptions: INodeProperties['displayOptions'], displayName = 'Body (JSON)', description = 'Raw JSON object'): INodeProperties {
	return {
		displayName,
		name: 'bodyJson',
		type: 'json',
		default: '{}',
		description,
		displayOptions,
	};
}
