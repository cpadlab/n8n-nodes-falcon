import type { INodeProperties } from 'n8n-workflow';

export const hostsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['hosts'],
			},
		},
		options: [
			{ name: 'Combined Devices by Filter', value: 'combinedDevicesByFilter', description: 'Search for hosts returning full device records', action: 'Combined devices by filter' },
			{ name: 'Combined Hidden Devices by Filter', value: 'combinedHiddenDevicesByFilter', description: 'Search for hidden hosts returning full device records', action: 'Combined hidden devices by filter' },
			{ name: 'Devices Actions Delete V1', value: 'devicesActionsDeleteV1', description: 'Permanently delete hosts from the system', action: 'Devices actions delete v1' },
			{ name: 'Entities Perform Action', value: 'entitiesPerformAction', description: 'Performs specified action on provided group IDs', action: 'Entities perform action' },
			{ name: 'Get Device Details V2', value: 'getDeviceDetailsV2', description: 'Get details on one or more hosts by host IDs', action: 'Get device details v2' },
			{ name: 'Get Online State V1', value: 'getOnlineStateV1', description: 'Get online status for one or more hosts by unique ID', action: 'Get online state v1' },
			{ name: 'Perform Action V2', value: 'performActionV2', description: 'Take various actions on hosts (contain, hide, etc.)', action: 'Perform action v2' },
			{ name: 'Post Device Details V2', value: 'postDeviceDetailsV2', description: 'Get details on one or more hosts by host IDs in POST body', action: 'Post device details v2' },
			{ name: 'Query Device Login History', value: 'queryDeviceLoginHistory', description: 'Retrieve details about recent login sessions for devices', action: 'Query device login history' },
			{ name: 'Query Device Login History V2', value: 'queryDeviceLoginHistoryV2', description: 'Retrieve interactive login sessions powered by Host Timeline', action: 'Query device login history v2' },
			{ name: 'Query Devices by Filter', value: 'queryDevicesByFilter', description: 'Search for hosts in your environment by FQL filter', action: 'Query devices by filter' },
			{ name: 'Query Devices by Filter Scroll', value: 'queryDevicesByFilterScroll', description: 'Search for hosts with continuous scroll pagination', action: 'Query devices by filter scroll' },
			{ name: 'Query Get Network Address History V1', value: 'queryGetNetworkAddressHistoryV1', description: 'Retrieve history of IP and MAC addresses of devices', action: 'Query get network address history v1' },
			{ name: 'Query Hidden Devices', value: 'queryHiddenDevices', description: 'Retrieve hidden hosts matching filter criteria', action: 'Query hidden devices' },
			{ name: 'Update Device Tags', value: 'updateDeviceTags', description: 'Append or remove Falcon Grouping Tags on hosts', action: 'Update device tags' },
		],
		default: 'queryDevicesByFilter',
	},
];

export const hostsFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['hosts'],
				operation: ['entitiesPerformAction', 'getDeviceDetailsV2', 'getOnlineStateV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of host or group IDs',
	},
	{
		displayName: 'Action Name',
		name: 'actionNameEntities',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['hosts'],
				operation: ['entitiesPerformAction'],
			},
		},
		options: [
			{ name: 'Add Group Member', value: 'add_group_member' },
			{ name: 'Remove All', value: 'remove_all' },
			{ name: 'Remove Group Member', value: 'remove_group_member' },
		],
		default: 'add_group_member',
		description: 'Action to perform on group IDs',
	},
	{
		displayName: 'Action Name String',
		name: 'actionName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['hosts'],
				operation: ['performActionV2'],
			},
		},
		default: '',
		required: true,
		description: 'Action name string (e.g. contain, lift_containment, hide, unhide)',
	},
	{
		displayName: 'Disable Hostname Check',
		name: 'disableHostnameCheck',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['hosts'],
				operation: ['entitiesPerformAction'],
			},
		},
		default: false,
		description: 'Whether to disable hostname checking',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['hosts'],
				operation: [
					'devicesActionsDeleteV1',
					'entitiesPerformAction',
					'performActionV2',
					'postDeviceDetailsV2',
					'queryDeviceLoginHistory',
					'queryDeviceLoginHistoryV2',
					'queryGetNetworkAddressHistoryV1',
					'updateDeviceTags',
				],
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
				resource: ['hosts'],
				operation: [
					'combinedDevicesByFilter',
					'combinedHiddenDevicesByFilter',
					'queryDevicesByFilter',
					'queryDevicesByFilterScroll',
					'queryHiddenDevices',
				],
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
			maxValue: 5000,
		},
		displayOptions: {
			show: {
				resource: ['hosts'],
				operation: [
					'combinedDevicesByFilter',
					'combinedHiddenDevicesByFilter',
					'queryDeviceLoginHistoryV2',
					'queryDevicesByFilter',
					'queryDevicesByFilterScroll',
					'queryHiddenDevices',
				],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['hosts'],
				operation: [
					'combinedDevicesByFilter',
					'combinedHiddenDevicesByFilter',
					'queryDevicesByFilter',
					'queryDevicesByFilterScroll',
					'queryHiddenDevices',
				],
			},
		},
		default: '',
		description: 'Starting index or scroll offset token',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['hosts'],
				operation: [
					'combinedDevicesByFilter',
					'combinedHiddenDevicesByFilter',
					'queryDevicesByFilter',
					'queryDevicesByFilterScroll',
					'queryHiddenDevices',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
