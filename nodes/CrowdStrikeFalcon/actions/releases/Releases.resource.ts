import type { INodeProperties } from 'n8n-workflow';

export const releasesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['releases'],
			},
		},
		options: [
			{ name: 'Combined Releases V1', value: 'combinedReleasesV1Mixin0', description: 'Queries for releases resources and returns details', action: 'Combined releases V1' },
		],
		default: 'combinedReleasesV1Mixin0',
	},
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
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['releases'],
				operation: ['combinedReleasesV1Mixin0'],
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
				resource: ['releases'],
				operation: ['combinedReleasesV1Mixin0'],
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
				resource: ['releases'],
				operation: ['combinedReleasesV1Mixin0'],
			},
		},
		default: '',
		description: 'Starting index for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['releases'],
				operation: ['combinedReleasesV1Mixin0'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
