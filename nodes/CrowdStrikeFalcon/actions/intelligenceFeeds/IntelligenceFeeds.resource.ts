import type { INodeProperties } from 'n8n-workflow';

export const intelligenceFeedsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['intelligenceFeeds'],
			},
		},
		options: [
			{ name: 'Download Feed Archive', value: 'downloadFeedArchive', description: 'Downloads the content as a zip archive for a given feed item ID', action: 'Download feed archive' },
			{ name: 'List Feed Types', value: 'listFeedTypes', description: 'Lists the accessible feed types for a given customer', action: 'List feed types' },
			{ name: 'Query Feed Archives', value: 'queryFeedArchives', description: 'Queries the accessible feed types for a customer and returns feed item IDs', action: 'Query feed archives' },
		],
		default: 'listFeedTypes',
	},
];

export const intelligenceFeedsFields: INodeProperties[] = [
	{
		displayName: 'Feed Item ID',
		name: 'feedItemId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['intelligenceFeeds'],
				operation: ['downloadFeedArchive'],
			},
		},
		default: '',
		required: true,
		description: 'Unique feed item ID',
	},
	{
		displayName: 'Feed Name',
		name: 'feedName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['intelligenceFeeds'],
				operation: ['queryFeedArchives'],
			},
		},
		default: '',
		required: true,
		description: 'Name of the feed',
	},
	{
		displayName: 'Feed Interval',
		name: 'feedInterval',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['intelligenceFeeds'],
				operation: ['queryFeedArchives'],
			},
		},
		default: '',
		description: 'Interval for the feed archive query',
	},
	{
		displayName: 'Since',
		name: 'since',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['intelligenceFeeds'],
				operation: ['queryFeedArchives'],
			},
		},
		default: '',
		description: 'Filter feeds created since a timestamp (ISO string)',
	},
];
