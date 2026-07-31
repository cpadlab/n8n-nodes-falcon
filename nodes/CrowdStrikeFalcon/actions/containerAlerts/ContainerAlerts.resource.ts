import type { INodeProperties } from 'n8n-workflow';

import { createOperationField, createStandardPaginationFields } from '../common';

export const containerAlertsOperations: INodeProperties[] = [
	createOperationField('containerAlerts', [

			{ name: 'Read Container Alerts Count', value: 'readContainerAlertsCount', description: 'Search Container Alerts count by search criteria', action: 'Read container alerts count' },
			{ name: 'Read Container Alerts Count by Severity', value: 'readContainerAlertsCountBySeverity', description: 'Get Container Alerts counts by severity', action: 'Read container alerts count by severity' },
			{ name: 'Search and Read Container Alerts', value: 'searchAndReadContainerAlerts', description: 'Search Container Alerts by search criteria', action: 'Search and read container alerts' },
		
	], 'searchAndReadContainerAlerts'),
];

export const containerAlertsFields: INodeProperties[] = [
	...createStandardPaginationFields('containerAlerts', ['readContainerAlertsCount', 'readContainerAlertsCountBySeverity', 'searchAndReadContainerAlerts']),
];
