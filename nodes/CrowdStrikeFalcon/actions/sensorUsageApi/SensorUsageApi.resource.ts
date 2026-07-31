import type { INodeProperties } from 'n8n-workflow';

import { createFilterField, createOperationField } from '../common';

export const sensorUsageApiOperations: INodeProperties[] = [
	createOperationField('sensorUsageApi', [

			{ name: 'Get Sensor Usage Hourly', value: 'getSensorUsageHourly', description: 'Fetches hourly average of unique AIDs for previous 28 days', action: 'Get sensor usage hourly' },
			{ name: 'Get Sensor Usage Weekly', value: 'getSensorUsageWeekly', description: 'Fetches weekly average of unique AIDs for previous 28 days', action: 'Get sensor usage weekly' },
		
	], 'getSensorUsageHourly'),
];

export const sensorUsageApiFields: INodeProperties[] = [
	createFilterField('sensorUsageApi', ['getSensorUsageHourly', 'getSensorUsageWeekly']),
];
