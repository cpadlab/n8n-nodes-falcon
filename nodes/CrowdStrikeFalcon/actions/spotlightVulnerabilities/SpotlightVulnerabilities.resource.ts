import type { INodeProperties } from 'n8n-workflow';

export const spotlightVulnerabilitiesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['spotlightVulnerabilities'],
			},
		},
		options: [
			{ name: 'Combined Query Vulnerabilities', value: 'combinedQueryVulnerabilities', description: 'Search vulnerabilities returning full entities', action: 'Combined query vulnerabilities' },
			{ name: 'Get Remediations V2', value: 'getRemediationsV2', description: 'Get details on remediation by IDs', action: 'Get remediations V2' },
			{ name: 'Get Vulnerabilities', value: 'getVulnerabilities', description: 'Get details on vulnerabilities by IDs', action: 'Get vulnerabilities' },
			{ name: 'Query Vulnerabilities', value: 'queryVulnerabilities', description: 'Search vulnerabilities returning IDs', action: 'Query vulnerabilities' },
		],
		default: 'combinedQueryVulnerabilities',
	},
];

export const spotlightVulnerabilitiesFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['spotlightVulnerabilities'],
				operation: ['getRemediationsV2', 'getVulnerabilities'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['spotlightVulnerabilities'],
				operation: ['combinedQueryVulnerabilities', 'queryVulnerabilities'],
			},
		},
		default: '',
		required: true,
		description: 'FQL filter string',
	},
	{
		displayName: 'After',
		name: 'after',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['spotlightVulnerabilities'],
				operation: ['combinedQueryVulnerabilities', 'queryVulnerabilities'],
			},
		},
		default: '',
		description: 'Paging cursor string',
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
				resource: ['spotlightVulnerabilities'],
				operation: ['combinedQueryVulnerabilities', 'queryVulnerabilities'],
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
				resource: ['spotlightVulnerabilities'],
				operation: ['combinedQueryVulnerabilities', 'queryVulnerabilities'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
	{
		displayName: 'Facet',
		name: 'facet',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['spotlightVulnerabilities'],
				operation: ['combinedQueryVulnerabilities'],
			},
		},
		default: '',
		description: 'Comma-separated list of facets to include',
	},
];
