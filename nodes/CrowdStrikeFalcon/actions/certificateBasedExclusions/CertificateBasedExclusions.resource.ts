import type { INodeProperties } from 'n8n-workflow';

export const certificateBasedExclusionsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['certificateBasedExclusions'],
			},
		},
		options: [
			{ name: 'Create Certificate Based Exclusion', value: 'cbExclusionsCreateV1', description: 'Create new Certificate Based Exclusions', action: 'Create certificate based exclusion' },
			{ name: 'Delete Certificate Based Exclusions', value: 'cbExclusionsDeleteV1', description: 'Delete the exclusions by ID', action: 'Delete certificate based exclusions' },
			{ name: 'Get Certificate Based Exclusions', value: 'cbExclusionsGetV1', description: 'Find all exclusion IDs matching query with filter', action: 'Get certificate based exclusions' },
			{ name: 'Query Certificate Based Exclusions', value: 'cbExclusionsQueryV1', description: 'Search for cert-based exclusions', action: 'Query certificate based exclusions' },
			{ name: 'Update Certificate Based Exclusion', value: 'cbExclusionsUpdateV1', description: 'Updates existing Certificate Based Exclusions', action: 'Update certificate based exclusion' },
			{ name: 'Get Certificate Information', value: 'certificatesGetV1', description: 'Retrieves certificate signing information for a file', action: 'Get certificate information' },
		],
		default: 'cbExclusionsQueryV1',
	},
];

export const certificateBasedExclusionsFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                   IDs                                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['certificateBasedExclusions'],
				operation: ['cbExclusionsDeleteV1', 'cbExclusionsGetV1', 'certificatesGetV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['certificateBasedExclusions'],
				operation: ['cbExclusionsDeleteV1'],
			},
		},
		default: '',
		description: 'Audit log comment for deletion',
	},

	/* -------------------------------------------------------------------------- */
	/*                                Body JSON                                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['certificateBasedExclusions'],
				operation: ['cbExclusionsCreateV1', 'cbExclusionsUpdateV1'],
			},
		},
		default: '',
		required: true,
		description: 'JSON body payload for exclusion creation or update',
	},

	/* -------------------------------------------------------------------------- */
	/*                            Pagination & Filters                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['certificateBasedExclusions'],
				operation: ['cbExclusionsQueryV1'],
			},
		},
		default: '',
		description: 'FQL filter string',
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
				resource: ['certificateBasedExclusions'],
				operation: ['cbExclusionsQueryV1'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		typeOptions: {
			minValue: 0,
		},
		displayOptions: {
			show: {
				resource: ['certificateBasedExclusions'],
				operation: ['cbExclusionsQueryV1'],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['certificateBasedExclusions'],
				operation: ['cbExclusionsQueryV1'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
