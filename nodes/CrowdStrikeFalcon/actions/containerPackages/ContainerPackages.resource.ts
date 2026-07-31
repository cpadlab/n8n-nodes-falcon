import type { INodeProperties } from 'n8n-workflow';

import { createOperationField, createStandardPaginationFields } from '../common';

export const containerPackagesOperations: INodeProperties[] = [
	createOperationField('containerPackages', [

			{ name: 'Read Packages by Fixable Vuln Count', value: 'readPackagesByFixableVulnCount', description: 'Retrieve top x packages with most fixable vulnerabilities', action: 'Read packages by fixable vuln count' },
			{ name: 'Read Packages by Image Count', value: 'readPackagesByImageCount', description: 'Retrieves N most frequently used packages across images', action: 'Read packages by image count' },
			{ name: 'Read Packages by Vuln Count', value: 'readPackagesByVulnCount', description: 'Retrieve top x packages with most vulnerabilities', action: 'Read packages by vuln count' },
			{ name: 'Read Packages Combined', value: 'readPackagesCombined', description: 'Retrieve packages identified by filter criteria', action: 'Read packages combined' },
			{ name: 'Read Packages Combined Export', value: 'readPackagesCombinedExport', description: 'Retrieves a paginated list of packages for export', action: 'Read packages combined export' },
			{ name: 'Read Packages Combined V2', value: 'readPackagesCombinedV2', description: 'Retrieve packages identified by filter criteria V2', action: 'Read packages combined v2' },
			{ name: 'Read Packages Count by Zero Day', value: 'readPackagesCountByZeroDay', description: 'Retrieve packages count affected by zero day vulnerabilities', action: 'Read packages count by zero day' },
		
	], 'readPackagesCombined'),
];

export const containerPackagesFields: INodeProperties[] = [
	...createStandardPaginationFields('containerPackages', ['readPackagesByFixableVulnCount',
					'readPackagesByImageCount',
					'readPackagesByVulnCount',
					'readPackagesCombined',
					'readPackagesCombinedExport',
					'readPackagesCombinedV2',
					'readPackagesCountByZeroDay',]),
];
