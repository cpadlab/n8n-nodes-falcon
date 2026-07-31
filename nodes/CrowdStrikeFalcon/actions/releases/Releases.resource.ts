import type { INodeProperties } from 'n8n-workflow';

import { createOperationField, createStandardPaginationFields } from '../common';

export const releasesOperations: INodeProperties[] = [
	createOperationField('releases', [

			{ name: 'Combined Releases V1', value: 'combinedReleasesV1Mixin0', description: 'Queries for releases resources and returns details', action: 'Combined releases V1' },
		
	], 'combinedReleasesV1Mixin0'),
];

export const releasesFields: INodeProperties[] = [
	{
		displayName: 'Authorization',
		name: 'authorization',
		type: 'string',
		typeOptions: {
			password: true,
		},
		displayOptions: {
			show: {
				resource: ['releases'],
				operation: ['combinedReleasesV1Mixin0'],
			},
		},
		default: '',
		description: 'Authorization token string',
	},
	...createStandardPaginationFields('releases', ['combinedReleasesV1Mixin0']),
];
