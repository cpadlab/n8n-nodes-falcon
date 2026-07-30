import type { INodeProperties } from 'n8n-workflow';

export const sensorUsageApiOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sensorUsageApi'],
			},
		},
		options: [
			{ name: 'Get Sensor Usage Hourly', value: 'getSensorUsageHourly', description: 'Fetches hourly average of unique AIDs for previous 28 days', action: 'Get sensor usage hourly' },
			{ name: 'Get Sensor Usage Weekly', value: 'getSensorUsageWeekly', description: 'Fetches weekly average of unique AIDs for previous 28 days', action: 'Get sensor usage weekly' },
		],
		default: 'getSensorUsageHourly',
	},
];

export const sensorUsageApiFields: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sensorUsageApi'],
				operation: ['getSensorUsageHourly', 'getSensorUsageWeekly'],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
];
