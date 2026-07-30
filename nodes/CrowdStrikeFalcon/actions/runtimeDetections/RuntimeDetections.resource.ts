import type { INodeProperties } from 'n8n-workflow';

export const runtimeDetectionsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['runtimeDetections'],
			},
		},
		options: [
			{ name: 'Get Runtime Detections Combined V2', value: 'getRuntimeDetectionsCombinedV2', description: 'Retrieve container runtime detections by search criteria', action: 'Get runtime detections combined V2' },
		],
		default: 'getRuntimeDetectionsCombinedV2',
	},
];

export const runtimeDetectionsFields: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['runtimeDetections'],
				operation: ['getRuntimeDetectionsCombinedV2'],
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
				resource: ['runtimeDetections'],
				operation: ['getRuntimeDetectionsCombinedV2'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		typeOptions: {
			minValue: 0,
		},
		displayOptions: {
			show: {
				resource: ['runtimeDetections'],
				operation: ['getRuntimeDetectionsCombinedV2'],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['runtimeDetections'],
				operation: ['getRuntimeDetectionsCombinedV2'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
