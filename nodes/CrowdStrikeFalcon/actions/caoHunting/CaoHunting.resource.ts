import type { INodeProperties } from 'n8n-workflow';

export const caoHuntingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['caoHunting'],
			},
		},
		options: [
			{ name: 'Aggregate Hunting Guides', value: 'aggregateHuntingGuides', description: 'Aggregate Hunting Guides', action: 'Aggregate hunting guides' },
			{ name: 'Aggregate Intelligence Queries', value: 'aggregateIntelligenceQueries', description: 'Aggregate intelligence queries', action: 'Aggregate intelligence queries' },
			{ name: 'Get Archive Export', value: 'getArchiveExport', description: 'Creates an Archive Export', action: 'Get archive export' },
			{ name: 'Get Hunting Guides', value: 'getHuntingGuides', description: 'Retrieves a list of Hunting Guides', action: 'Get hunting guides' },
			{ name: 'Get Intelligence Queries', value: 'getIntelligenceQueries', description: 'Retrieves details of Intelligence queries IDs', action: 'Get intelligence queries' },
			{ name: 'Search Hunting Guides', value: 'searchHuntingGuides', description: 'Search for Hunting Guides matching conditions', action: 'Search hunting guides' },
			{ name: 'Search Intelligence Queries', value: 'searchIntelligenceQueries', description: 'Search for intelligence queries IDs matching conditions', action: 'Search intelligence queries' },
		],
		default: 'searchHuntingGuides',
	},
];

export const caoHuntingFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                            getArchiveExport                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Language',
		name: 'language',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caoHunting'],
				operation: ['getArchiveExport'],
			},
		},
		default: 'en',
		required: true,
		description: 'Language code for export',
	},
	{
		displayName: 'Archive Type',
		name: 'archiveType',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caoHunting'],
				operation: ['getArchiveExport'],
			},
		},
		default: '',
		description: 'Archive type filter',
	},

	/* -------------------------------------------------------------------------- */
	/*                   getHuntingGuides / getIntelligenceQueries                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caoHunting'],
				operation: ['getHuntingGuides', 'getIntelligenceQueries'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},

	/* -------------------------------------------------------------------------- */
	/*                 aggregateHuntingGuides & Aggregates                        */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['caoHunting'],
				operation: ['aggregateHuntingGuides', 'aggregateIntelligenceQueries'],
			},
		},
		default: '',
		required: true,
		description: 'JSON array of aggregate query requests',
	},

	/* -------------------------------------------------------------------------- */
	/*                   searchHuntingGuides / searchIntelligenceQueries          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caoHunting'],
				operation: ['getArchiveExport', 'searchHuntingGuides', 'searchIntelligenceQueries'],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caoHunting'],
				operation: ['searchHuntingGuides', 'searchIntelligenceQueries'],
			},
		},
		default: '',
		description: 'Search string',
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
				resource: ['caoHunting'],
				operation: ['searchHuntingGuides', 'searchIntelligenceQueries'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caoHunting'],
				operation: ['searchHuntingGuides', 'searchIntelligenceQueries'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
