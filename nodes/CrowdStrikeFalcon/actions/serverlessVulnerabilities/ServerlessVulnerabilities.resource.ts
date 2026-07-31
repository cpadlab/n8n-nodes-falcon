import type { INodeProperties } from 'n8n-workflow';

import { createOperationField, createStandardPaginationFields } from '../common';

export const serverlessVulnerabilitiesOperations: INodeProperties[] = [
	createOperationField('serverlessVulnerabilities', [

			{ name: 'Get Combined Vulnerabilities SARIF', value: 'getCombinedVulnerabilitiesSARIF', description: 'Retrieve all lambda vulnerabilities matching query in SARIF format', action: 'Get combined vulnerabilities SARIF' },
		
	], 'getCombinedVulnerabilitiesSARIF'),
];

export const serverlessVulnerabilitiesFields: INodeProperties[] = [
	...createStandardPaginationFields('serverlessVulnerabilities', ['getCombinedVulnerabilitiesSARIF']),
];
