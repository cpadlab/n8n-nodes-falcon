import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createFilterField, createOperationField } from '../common';

export const mobileEnrollmentOperations: INodeProperties[] = [
	createOperationField('mobileEnrollment', [

			{ name: 'Request Device Enrollment V3', value: 'requestDeviceEnrollmentV3', description: 'Trigger onboarding process for mobile device V3', action: 'Request device enrollment V3' },
			{ name: 'Request Device Enrollment V4', value: 'requestDeviceEnrollmentV4', description: 'Trigger onboarding process for mobile device V4', action: 'Request device enrollment V4' },
		
	], 'requestDeviceEnrollmentV4'),
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
	createFilterField('mobileEnrollment', ['requestDeviceEnrollmentV3', 'requestDeviceEnrollmentV4']),
	createBodyJsonField('mobileEnrollment', ['requestDeviceEnrollmentV3', 'requestDeviceEnrollmentV4']),
];
