import type { INodeProperties } from 'n8n-workflow';

import { createOperationField, createStandardPaginationFields } from '../common';

export const containerVulnerabilitiesOperations: INodeProperties[] = [
	createOperationField('containerVulnerabilities', [

			{ name: 'Read Combined Vulnerabilities', value: 'readCombinedVulnerabilities', description: 'Retrieves a paginated list of vulnerabilities', action: 'Read combined vulnerabilities' },
			{ name: 'Read Combined Vulnerabilities Details', value: 'readCombinedVulnerabilitiesDetails', description: 'Retrieve vulnerability details related to an image', action: 'Read combined vulnerabilities details' },
			{ name: 'Read Combined Vulnerabilities Info', value: 'readCombinedVulnerabilitiesInfo', description: 'Retrieve vulnerability and package related info', action: 'Read combined vulnerabilities info' },
			{ name: 'Read Vulnerabilities by Image Count', value: 'readVulnerabilitiesByImageCount', description: 'Retrieve top x vulnerabilities with most impacted images', action: 'Read vulnerabilities by image count' },
			{ name: 'Read Vulnerabilities Publication Date', value: 'readVulnerabilitiesPublicationDate', description: 'Retrieve top x vulnerabilities with most recent publication date', action: 'Read vulnerabilities publication date' },
			{ name: 'Read Vulnerability Count', value: 'readVulnerabilityCount', description: 'Aggregate count of vulnerabilities', action: 'Read vulnerability count' },
			{ name: 'Read Vulnerability Count by Actively Exploited', value: 'readVulnerabilityCountByActivelyExploited', description: 'Aggregate count of vulnerabilities grouped by actively exploited', action: 'Read vulnerability count by actively exploited' },
			{ name: 'Read Vulnerability Count by CPS Rating', value: 'readVulnerabilityCountByCPSRating', description: 'Aggregate count of vulnerabilities grouped by csp_rating', action: 'Read vulnerability count by CPS rating' },
			{ name: 'Read Vulnerability Count by CVSS Score', value: 'readVulnerabilityCountByCVSSScore', description: 'Aggregate count of vulnerabilities grouped by CVSS score', action: 'Read vulnerability count by CVSS score' },
			{ name: 'Read Vulnerability Count by Severity', value: 'readVulnerabilityCountBySeverity', description: 'Aggregate count of vulnerabilities grouped by severity', action: 'Read vulnerability count by severity' },
		
	], 'readCombinedVulnerabilities'),
];

export const containerVulnerabilitiesFields: INodeProperties[] = [
	{
		displayName: 'Image ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['containerVulnerabilities'],
				operation: ['readCombinedVulnerabilitiesDetails'],
			},
		},
		default: '',
		required: true,
		description: 'Image ID',
	},
	{
		displayName: 'CVE ID',
		name: 'cveId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['containerVulnerabilities'],
				operation: ['readCombinedVulnerabilitiesInfo'],
			},
		},
		default: '',
		required: true,
		description: 'CVE ID',
	},
	...createStandardPaginationFields('containerVulnerabilities', ['readCombinedVulnerabilities',
					'readCombinedVulnerabilitiesDetails',
					'readVulnerabilitiesByImageCount',
					'readVulnerabilitiesPublicationDate',
					'readVulnerabilityCount',
					'readVulnerabilityCountByActivelyExploited',
					'readVulnerabilityCountByCPSRating',
					'readVulnerabilityCountByCVSSScore',
					'readVulnerabilityCountBySeverity',]),
];
