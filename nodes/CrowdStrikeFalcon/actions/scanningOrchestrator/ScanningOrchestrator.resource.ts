import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const scanningOrchestratorOperations: INodeProperties[] = [
	createOperationField('scanningOrchestrator', [

			{ name: 'Create Schedules', value: 'createSchedules', description: 'Create one or more scanning schedules', action: 'Create schedules' },
			{ name: 'Delete Schedules', value: 'deleteSchedules', description: 'Delete one or more scanning schedules by ID', action: 'Delete schedules' },
			{ name: 'Get Combined Schedules', value: 'getCombinedSchedules', description: 'Get schedules with pagination, sorting, and filtering', action: 'Get combined schedules' },
			{ name: 'Get Schedules', value: 'getSchedules', description: 'Get scanning schedules by their IDs', action: 'Get schedules' },
			{ name: 'Get Service Types', value: 'getServiceTypes', description: 'Returns list of service types available for scanning', action: 'Get service types' },
			{ name: 'Search Schedules', value: 'searchSchedules', description: 'Search schedules and return IDs with pagination, sorting, and filtering', action: 'Search schedules' },
			{ name: 'Trigger Scan by Schedule', value: 'triggerScanBySchedule', description: 'Triggers an immediate scan for given schedule IDs', action: 'Trigger scan by schedule' },
			{ name: 'Update Schedules', value: 'updateSchedules', description: 'Updates one or more scanning schedules', action: 'Update schedules' },
		
	], 'searchSchedules'),
];

export const scanningOrchestratorFields: INodeProperties[] = [
	{
		displayName: 'Authorization',
		name: 'authorization',
		type: 'string',
		typeOptions: {
			password: true,
		},
		displayOptions: {
			show: {
				resource: ['scanningOrchestrator'],
				operation: [
					'createSchedules',
					'deleteSchedules',
					'getCombinedSchedules',
					'getSchedules',
					'getServiceTypes',
					'searchSchedules',
					'triggerScanBySchedule',
					'updateSchedules',
				],
			},
		},
		default: '',
		description: 'Authorization token string',
	},
	createIdsField('scanningOrchestrator', ['deleteSchedules', 'getSchedules']),
	{
		displayName: 'Scan Product',
		name: 'scanProduct',
		type: 'options',
		options: [
			{ name: 'DSPM Scanning', value: 'dspm_scanning' },
			{ name: 'Vulnerability Scanning', value: 'vulnerability_scanning' },
		],
		displayOptions: {
			show: {
				resource: ['scanningOrchestrator'],
				operation: ['getServiceTypes'],
			},
		},
		default: 'vulnerability_scanning',
		required: true,
		description: 'Scan product type',
	},
	createBodyJsonField('scanningOrchestrator', ['createSchedules', 'triggerScanBySchedule', 'updateSchedules']),
	...createStandardPaginationFields('scanningOrchestrator', ['getCombinedSchedules', 'searchSchedules']),
];
