import type { INodeProperties } from 'n8n-workflow';

import { createLimitField, createOffsetField, createOperationField } from '../common';

export const iocsOperations: INodeProperties[] = [
	createOperationField('iocs', [

			{ name: 'Devices Count', value: 'devicesCount', description: 'Number of hosts in your customer account that have observed a given custom IOC', action: 'Devices count' },
			{ name: 'Devices Ran On', value: 'devicesRanOn', description: 'Find hosts that have observed a given custom IOC', action: 'Devices ran on' },
			{ name: 'Entities Processes', value: 'entitiesProcesses', description: 'For the provided ProcessID retrieve the process details', action: 'Entities processes' },
			{ name: 'Processes Ran On', value: 'processesRanOn', description: 'Search for processes associated with a custom IOC', action: 'Processes ran on' },
		
	], 'devicesCount'),
];

export const iocsFields: INodeProperties[] = [
	{
		displayName: 'IOC Type',
		name: 'type',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['iocs'],
				operation: ['devicesCount', 'devicesRanOn', 'processesRanOn'],
			},
		},
		default: '',
		required: true,
		description: 'IOC type (e.g. sha256, md5, domain, ipv4)',
	},
	{
		displayName: 'IOC Value',
		name: 'value',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['iocs'],
				operation: ['devicesCount', 'devicesRanOn', 'processesRanOn'],
			},
		},
		default: '',
		required: true,
		description: 'IOC value string',
	},
	{
		displayName: 'Device ID',
		name: 'deviceId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['iocs'],
				operation: ['processesRanOn'],
			},
		},
		default: '',
		required: true,
		description: 'Target Device ID',
	},
	{
		displayName: 'Process IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['iocs'],
				operation: ['entitiesProcesses'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Process IDs',
	},
	createLimitField('iocs', ['devicesRanOn', 'processesRanOn']),
	createOffsetField('iocs', ['devicesRanOn', 'processesRanOn']),
];
