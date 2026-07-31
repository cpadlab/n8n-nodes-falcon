import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const falconCompleteDashboardOperations: INodeProperties[] = [
	createOperationField('falconCompleteDashboard', [

			{ name: 'Aggregate Alerts', value: 'aggregateAlerts', description: 'Retrieve aggregate EPP alerts values based on filter', action: 'Aggregate alerts' },
			{ name: 'Aggregate Allow List', value: 'aggregateAllowList', description: 'Retrieve aggregate allowlist ticket values based on filter', action: 'Aggregate allow list' },
			{ name: 'Aggregate Block List', value: 'aggregateBlockList', description: 'Retrieve aggregate blocklist ticket values based on filter', action: 'Aggregate block list' },
			{ name: 'Aggregate Device Count Collection', value: 'aggregateDeviceCountCollection', description: 'Retrieve aggregate host/device count based on filter', action: 'Aggregate device count collection' },
			{ name: 'Aggregate Escalations', value: 'aggregateEscalations', description: 'Retrieve aggregate escalation ticket values based on filter', action: 'Aggregate escalations' },
			{ name: 'Aggregate Prevention Policy', value: 'aggregatePreventionPolicy', description: 'Retrieve prevention policies aggregate values based on filter', action: 'Aggregate prevention policy' },
			{ name: 'Aggregate Remediations', value: 'aggregateRemediations', description: 'Retrieve aggregate remediation ticket values based on filter', action: 'Aggregate remediations' },
			{ name: 'Aggregate Sensor Update Policy', value: 'aggregateSensorUpdatePolicy', description: 'Retrieve sensor update policies aggregate values', action: 'Aggregate sensor update policy' },
			{ name: 'Aggregate Support Issues', value: 'aggregateSupportIssues', description: 'Retrieve aggregate support issue ticket values based on filter', action: 'Aggregate support issues' },
			{ name: 'Aggregate Total Device Counts', value: 'aggregateTotalDeviceCounts', description: 'Retrieve aggregate total host/devices based on filter', action: 'Aggregate total device counts' },
			{ name: 'Get Device Count Collection Queries by Filter', value: 'getDeviceCountCollectionQueriesByFilter', description: 'Retrieve device count collection IDs matching filter', action: 'Get device count collection queries by filter' },
			{ name: 'Query Alert IDs by Filter', value: 'queryAlertIdsByFilter', description: 'Retrieve Alert IDs for EPP matching filter', action: 'Query alert IDs by filter' },
			{ name: 'Query Alert IDs by Filter V2', value: 'queryAlertIdsByFilterV2', description: 'Retrieve Alert IDs for EPP, IDP and NGSIEM matching filter V2', action: 'Query alert IDs by filter v2' },
			{ name: 'Query Allow List Filter', value: 'queryAllowListFilter', description: 'Retrieve allowlist tickets matching filter', action: 'Query allow list filter' },
			{ name: 'Query Block List Filter', value: 'queryBlockListFilter', description: 'Retrieve block list tickets matching filter', action: 'Query block list filter' },
			{ name: 'Query Escalations Filter', value: 'queryEscalationsFilter', description: 'Retrieve escalation tickets matching filter', action: 'Query escalations filter' },
			{ name: 'Query Remediations Filter', value: 'queryRemediationsFilter', description: 'Retrieve remediation tickets matching filter', action: 'Query remediations filter' },
		
	], 'queryAlertIdsByFilterV2'),
];

export const falconCompleteDashboardFields: INodeProperties[] = [
	createBodyJsonField('falconCompleteDashboard', ['aggregateAlerts',
					'aggregateAllowList',
					'aggregateBlockList',
					'aggregateDeviceCountCollection',
					'aggregateEscalations',
					'aggregatePreventionPolicy',
					'aggregateRemediations',
					'aggregateSensorUpdatePolicy',
					'aggregateSupportIssues',
					'aggregateTotalDeviceCounts',]),
	...createStandardPaginationFields('falconCompleteDashboard', ['getDeviceCountCollectionQueriesByFilter',
					'queryAlertIdsByFilter',
					'queryAlertIdsByFilterV2',
					'queryAllowListFilter',
					'queryBlockListFilter',
					'queryEscalationsFilter',
					'queryRemediationsFilter',]),
];
