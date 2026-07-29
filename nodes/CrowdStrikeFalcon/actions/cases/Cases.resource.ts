import type { INodeProperties } from 'n8n-workflow';

export const casesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cases'],
			},
		},
		options: [
			{
				name: 'Get Cases Query',
				value: 'queriesCasesGetV1',
				description: 'Retrieves all Case IDs matching a query filter',
				action: 'Get cases query',
			},
			{
				name: 'Get Cases by IDs',
				value: 'entitiesCasesPostV2',
				description: 'Retrieves full details for given Case IDs',
				action: 'Get cases by IDs',
			},
			{
				name: 'Create Case',
				value: 'entitiesCasesPutV2',
				description: 'Create a new Case',
				action: 'Create a case',
			},
		],
		default: 'queriesCasesGetV1',
	},
];

export const casesFields: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['queriesCasesGetV1'],
			},
		},
		default: '',
		description: 'FQL filter string (e.g., status:"closed")',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['queriesCasesGetV1'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Case IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesCasesPostV2'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Case IDs to retrieve',
	},
];