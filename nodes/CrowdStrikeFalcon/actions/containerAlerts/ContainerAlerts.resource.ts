import type { INodeProperties } from 'n8n-workflow';

export const containerAlertsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['containerAlerts'],
			},
		},
		options: [
			{ name: 'Read Container Alerts Count', value: 'readContainerAlertsCount', description: 'Search Container Alerts count by search criteria', action: 'Read container alerts count' },
			{ name: 'Read Container Alerts Count by Severity', value: 'readContainerAlertsCountBySeverity', description: 'Get Container Alerts counts by severity', action: 'Read container alerts count by severity' },
			{ name: 'Search and Read Container Alerts', value: 'searchAndReadContainerAlerts', description: 'Search Container Alerts by search criteria', action: 'Search and read container alerts' },
		],
		default: 'searchAndReadContainerAlerts',
	},
];

export const containerAlertsFields: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['containerAlerts'],
				operation: ['readContainerAlertsCount', 'readContainerAlertsCountBySeverity', 'searchAndReadContainerAlerts'],
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
				resource: ['containerAlerts'],
				operation: ['searchAndReadContainerAlerts'],
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
				resource: ['containerAlerts'],
				operation: ['searchAndReadContainerAlerts'],
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
				resource: ['containerAlerts'],
				operation: ['searchAndReadContainerAlerts'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
