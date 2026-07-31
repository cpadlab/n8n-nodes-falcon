import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createFilterField, createIdsField, createLimitField, createOffsetField, createOperationField, createSortField } from '../common';

export const iocOperations: INodeProperties[] = [
	createOperationField('ioc', [

			{ name: 'Action Get V1', value: 'actionGetV1', description: 'Get Actions by IDs', action: 'Action get V1' },
			{ name: 'Action Query V1', value: 'actionQueryV1', description: 'Query Actions', action: 'Action query V1' },
			{ name: 'Get Indicators Report', value: 'getIndicatorsReport', description: 'Launch an indicators report creation job', action: 'Get indicators report' },
			{ name: 'Indicator Aggregate V1', value: 'indicatorAggregateV1', description: 'Get Indicators aggregates as specified via JSON', action: 'Indicator aggregate V1' },
			{ name: 'Indicator Combined V1', value: 'indicatorCombinedV1', description: 'Get Combined for Indicators', action: 'Indicator combined V1' },
			{ name: 'Indicator Create V1', value: 'indicatorCreateV1', description: 'Create Indicators', action: 'Indicator create V1' },
			{ name: 'Indicator Delete V1', value: 'indicatorDeleteV1', description: 'Delete Indicators by IDs', action: 'Indicator delete V1' },
			{ name: 'Indicator Get Device Count V1', value: 'indicatorGetDeviceCountV1', description: 'Get the number of devices the indicator has run on', action: 'Indicator get device count V1' },
			{ name: 'Indicator Get Devices Ran On V1', value: 'indicatorGetDevicesRanOnV1', description: 'Get the IDs of devices the indicator has run on', action: 'Indicator get devices ran on V1' },
			{ name: 'Indicator Get Processes Ran On V1', value: 'indicatorGetProcessesRanOnV1', description: 'Get the number of processes the indicator has run on', action: 'Indicator get processes ran on V1' },
			{ name: 'Indicator Get V1', value: 'indicatorGetV1', description: 'Get Indicators by IDs', action: 'Indicator get V1' },
			{ name: 'Indicator SDMF Query V1', value: 'indicatorSdmfQueryV1', description: 'Executes an SDMF data frame query against IOC indicators', action: 'Indicator SDMF query V1' },
			{ name: 'Indicator Search V1', value: 'indicatorSearchV1', description: 'Search for Indicators', action: 'Indicator search V1' },
			{ name: 'Indicator Update V1', value: 'indicatorUpdateV1', description: 'Update Indicators', action: 'Indicator update V1' },
			{ name: 'IOC Type Query V1', value: 'iocTypeQueryV1', description: 'Query IOC Types', action: 'IOC type query V1' },
			{ name: 'Platform Query V1', value: 'platformQueryV1', description: 'Query Platforms', action: 'Platform query V1' },
			{ name: 'Severity Query V1', value: 'severityQueryV1', description: 'Query Severities', action: 'Severity query V1' },
		
	], 'indicatorSearchV1'),
];

export const iocFields: INodeProperties[] = [
	createIdsField('ioc', ['actionGetV1', 'indicatorDeleteV1', 'indicatorGetV1']),
	{
		displayName: 'IOC Type',
		name: 'type',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ioc'],
				operation: [
					'indicatorGetDeviceCountV1',
					'indicatorGetDevicesRanOnV1',
					'indicatorGetProcessesRanOnV1',
				],
			},
		},
		default: '',
		required: true,
		description: 'IOC type (e.g. hash_md5, hash_sha256, domain, ipv4)',
	},
	{
		displayName: 'IOC Value',
		name: 'value',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ioc'],
				operation: [
					'indicatorGetDeviceCountV1',
					'indicatorGetDevicesRanOnV1',
					'indicatorGetProcessesRanOnV1',
				],
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
				resource: ['ioc'],
				operation: ['indicatorGetProcessesRanOnV1'],
			},
		},
		default: '',
		required: true,
		description: 'Target Device ID',
	},
	createBodyJsonField('ioc', ['getIndicatorsReport',
					'indicatorAggregateV1',
					'indicatorCreateV1',
					'indicatorSdmfQueryV1',
					'indicatorUpdateV1',]),
	createFilterField('ioc', ['indicatorAggregateV1',
					'indicatorCombinedV1',
					'indicatorDeleteV1',
					'indicatorSearchV1',]),
	{
		displayName: 'From Parent',
		name: 'fromParent',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['ioc'],
				operation: [
					'indicatorAggregateV1',
					'indicatorCombinedV1',
					'indicatorDeleteV1',
					'indicatorSearchV1',
				],
			},
		},
		default: false,
		description: 'Whether to include items from parent CID',
	},
	{
		displayName: 'Retrodetects',
		name: 'retrodetects',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['ioc'],
				operation: ['indicatorCreateV1', 'indicatorUpdateV1'],
			},
		},
		default: false,
		description: 'Whether to trigger retrodetects',
	},
	{
		displayName: 'Ignore Warnings',
		name: 'ignoreWarnings',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['ioc'],
				operation: ['indicatorCreateV1', 'indicatorUpdateV1'],
			},
		},
		default: false,
		description: 'Whether to ignore warnings',
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ioc'],
				operation: ['indicatorDeleteV1'],
			},
		},
		default: '',
		description: 'Comment explaining deletion',
	},
	createLimitField('ioc', ['actionQueryV1',
					'indicatorCombinedV1',
					'indicatorGetDevicesRanOnV1',
					'indicatorGetProcessesRanOnV1',
					'indicatorSearchV1',
					'iocTypeQueryV1',
					'platformQueryV1',
					'severityQueryV1',]),
	createOffsetField('ioc', ['actionQueryV1',
					'indicatorCombinedV1',
					'indicatorGetDevicesRanOnV1',
					'indicatorGetProcessesRanOnV1',
					'indicatorSearchV1',
					'iocTypeQueryV1',
					'platformQueryV1',
					'severityQueryV1',]),
	createSortField('ioc', ['indicatorCombinedV1', 'indicatorSearchV1']),
	{
		displayName: 'After',
		name: 'after',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ioc'],
				operation: ['indicatorCombinedV1', 'indicatorSearchV1'],
			},
		},
		default: '',
		description: 'Pagination token for next page',
	},
];
