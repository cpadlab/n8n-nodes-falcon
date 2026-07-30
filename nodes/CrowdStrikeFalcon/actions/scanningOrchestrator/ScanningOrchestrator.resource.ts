import type { INodeProperties } from 'n8n-workflow';

export const scanningOrchestratorOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['scanningOrchestrator'],
			},
		},
		options: [
			{ name: 'Create Schedules', value: 'createSchedules', description: 'Create one or more scanning schedules', action: 'Create schedules' },
			{ name: 'Delete Schedules', value: 'deleteSchedules', description: 'Delete one or more scanning schedules by ID', action: 'Delete schedules' },
			{ name: 'Get Combined Schedules', value: 'getCombinedSchedules', description: 'Get schedules with pagination, sorting, and filtering', action: 'Get combined schedules' },
			{ name: 'Get Schedules', value: 'getSchedules', description: 'Get scanning schedules by their IDs', action: 'Get schedules' },
			{ name: 'Get Service Types', value: 'getServiceTypes', description: 'Returns list of service types available for scanning', action: 'Get service types' },
			{ name: 'Search Schedules', value: 'searchSchedules', description: 'Search schedules and return IDs with pagination, sorting, and filtering', action: 'Search schedules' },
			{ name: 'Trigger Scan by Schedule', value: 'triggerScanBySchedule', description: 'Triggers an immediate scan for given schedule IDs', action: 'Trigger scan by schedule' },
			{ name: 'Update Schedules', value: 'updateSchedules', description: 'Updates one or more scanning schedules', action: 'Update schedules' },
		],
		default: 'searchSchedules',
	},
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
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['scanningOrchestrator'],
				operation: ['deleteSchedules', 'getSchedules'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of schedule IDs',
	},
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
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['scanningOrchestrator'],
				operation: ['createSchedules', 'triggerScanBySchedule', 'updateSchedules'],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['scanningOrchestrator'],
				operation: ['getCombinedSchedules', 'searchSchedules'],
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
				resource: ['scanningOrchestrator'],
				operation: ['getCombinedSchedules', 'searchSchedules'],
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
				resource: ['scanningOrchestrator'],
				operation: ['getCombinedSchedules', 'searchSchedules'],
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
				resource: ['scanningOrchestrator'],
				operation: ['getCombinedSchedules', 'searchSchedules'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
