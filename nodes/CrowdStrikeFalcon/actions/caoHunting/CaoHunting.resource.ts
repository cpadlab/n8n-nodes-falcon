import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createFilterField, createIdsField, createLimitField, createOperationField, createSortField } from '../common';

export const caoHuntingOperations: INodeProperties[] = [
	createOperationField('caoHunting', [

			{ name: 'Aggregate Hunting Guides', value: 'aggregateHuntingGuides', description: 'Aggregate Hunting Guides', action: 'Aggregate hunting guides' },
			{ name: 'Aggregate Intelligence Queries', value: 'aggregateIntelligenceQueries', description: 'Aggregate intelligence queries', action: 'Aggregate intelligence queries' },
			{ name: 'Get Archive Export', value: 'getArchiveExport', description: 'Creates an Archive Export', action: 'Get archive export' },
			{ name: 'Get Hunting Guides', value: 'getHuntingGuides', description: 'Retrieves a list of Hunting Guides', action: 'Get hunting guides' },
			{ name: 'Get Intelligence Queries', value: 'getIntelligenceQueries', description: 'Retrieves details of Intelligence queries IDs', action: 'Get intelligence queries' },
			{ name: 'Search Hunting Guides', value: 'searchHuntingGuides', description: 'Search for Hunting Guides matching conditions', action: 'Search hunting guides' },
			{ name: 'Search Intelligence Queries', value: 'searchIntelligenceQueries', description: 'Search for intelligence queries IDs matching conditions', action: 'Search intelligence queries' },
		
	], 'searchHuntingGuides'),
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
	createIdsField('caoHunting', ['getHuntingGuides', 'getIntelligenceQueries']),

	/* -------------------------------------------------------------------------- */
	/*                 aggregateHuntingGuides & Aggregates                        */
	/* -------------------------------------------------------------------------- */
	createBodyJsonField('caoHunting', ['aggregateHuntingGuides', 'aggregateIntelligenceQueries']),

	/* -------------------------------------------------------------------------- */
	/*                   searchHuntingGuides / searchIntelligenceQueries          */
	/* -------------------------------------------------------------------------- */
	createFilterField('caoHunting', ['getArchiveExport', 'searchHuntingGuides', 'searchIntelligenceQueries']),
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
	createLimitField('caoHunting', ['searchHuntingGuides', 'searchIntelligenceQueries']),
	createSortField('caoHunting', ['searchHuntingGuides', 'searchIntelligenceQueries']),
];
