import type { INodeProperties } from 'n8n-workflow';

import { createFilterField, createIdsField, createLimitField, createOperationField, createSortField } from '../common';

export const spotlightVulnerabilitiesOperations: INodeProperties[] = [
	createOperationField('spotlightVulnerabilities', [

			{ name: 'Combined Query Vulnerabilities', value: 'combinedQueryVulnerabilities', description: 'Search vulnerabilities returning full entities', action: 'Combined query vulnerabilities' },
			{ name: 'Get Remediations V2', value: 'getRemediationsV2', description: 'Get details on remediation by IDs', action: 'Get remediations V2' },
			{ name: 'Get Vulnerabilities', value: 'getVulnerabilities', description: 'Get details on vulnerabilities by IDs', action: 'Get vulnerabilities' },
			{ name: 'Query Vulnerabilities', value: 'queryVulnerabilities', description: 'Search vulnerabilities returning IDs', action: 'Query vulnerabilities' },
		
	], 'combinedQueryVulnerabilities'),
];

export const spotlightVulnerabilitiesFields: INodeProperties[] = [
	createIdsField('spotlightVulnerabilities', ['getRemediationsV2', 'getVulnerabilities']),
	createFilterField('spotlightVulnerabilities', ['combinedQueryVulnerabilities', 'queryVulnerabilities']),
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
	createLimitField('spotlightVulnerabilities', ['combinedQueryVulnerabilities', 'queryVulnerabilities']),
	createSortField('spotlightVulnerabilities', ['combinedQueryVulnerabilities', 'queryVulnerabilities']),
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
