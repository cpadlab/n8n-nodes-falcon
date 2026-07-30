import type { INodeProperties } from 'n8n-workflow';

export const mobileEnrollmentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['mobileEnrollment'],
			},
		},
		options: [
			{ name: 'Request Device Enrollment V3', value: 'requestDeviceEnrollmentV3', description: 'Trigger onboarding process for mobile device V3', action: 'Request device enrollment V3' },
			{ name: 'Request Device Enrollment V4', value: 'requestDeviceEnrollmentV4', description: 'Trigger onboarding process for mobile device V4', action: 'Request device enrollment V4' },
		],
		default: 'requestDeviceEnrollmentV4',
	},
];

export const mobileEnrollmentFields: INodeProperties[] = [
	{
		displayName: 'Action Name',
		name: 'actionName',
		type: 'options',
		options: [
			{ name: 'Enroll', value: 'enroll' },
			{ name: 'Re-Enroll', value: 're-enroll' },
		],
		displayOptions: {
			show: {
				resource: ['mobileEnrollment'],
				operation: ['requestDeviceEnrollmentV3', 'requestDeviceEnrollmentV4'],
			},
		},
		default: 'enroll',
		description: 'Action name for enrollment request',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['mobileEnrollment'],
				operation: ['requestDeviceEnrollmentV3', 'requestDeviceEnrollmentV4'],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['mobileEnrollment'],
				operation: ['requestDeviceEnrollmentV3', 'requestDeviceEnrollmentV4'],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
];
