import type { INodeProperties } from 'n8n-workflow';

export const deviceControlWithBluetoothOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['deviceControlWithBluetooth'],
			},
		},
		options: [
			{ name: 'Get Default Settings', value: 'getDefaultDeviceControlSettings', description: 'Get default device control settings (USB and Bluetooth)', action: 'Get default device control settings' },
			{ name: 'Get Policies V2', value: 'getDeviceControlPoliciesV2', description: 'Get device control policies for filter criteria (USB and Bluetooth)', action: 'Get device control policies v2' },
			{ name: 'Patch Policies Classes V1', value: 'patchDeviceControlPoliciesClassesV1', description: 'Update device control policy classes (USB and Bluetooth)', action: 'Patch device control policies classes v1' },
			{ name: 'Patch Policies V2', value: 'patchDeviceControlPoliciesV2', description: 'Update device control policy base (USB and Bluetooth)', action: 'Patch device control policies v2' },
			{ name: 'Post Policies V2', value: 'postDeviceControlPoliciesV2', description: 'Create/clone a device control policy (USB and Bluetooth)', action: 'Post device control policies v2' },
			{ name: 'Update Default Settings', value: 'updateDefaultDeviceControlSettings', description: 'Update configuration for Default Device Control Settings', action: 'Update default device control settings' },
		],
		default: 'getDefaultDeviceControlSettings',
	},
];

export const deviceControlWithBluetoothFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['deviceControlWithBluetooth'],
				operation: ['getDeviceControlPoliciesV2'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of policy IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['deviceControlWithBluetooth'],
				operation: [
					'patchDeviceControlPoliciesClassesV1',
					'patchDeviceControlPoliciesV2',
					'postDeviceControlPoliciesV2',
					'updateDefaultDeviceControlSettings',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
];
