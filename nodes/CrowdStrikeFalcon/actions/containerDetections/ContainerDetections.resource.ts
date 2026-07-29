import type { INodeProperties } from 'n8n-workflow';

export const containerDetectionsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['containerDetections'],
			},
		},
		options: [
			{ name: 'Read Combined Detections', value: 'readCombinedDetections', description: 'Retrieve image assessment detections identified by filter criteria', action: 'Read combined detections' },
			{ name: 'Read Detections', value: 'readDetections', description: 'Retrieve image assessment detection entities identified by filter criteria', action: 'Read detections' },
			{ name: 'Read Detections Count', value: 'readDetectionsCount', description: 'Aggregate count of detections', action: 'Read detections count' },
			{ name: 'Read Detections Count by Severity', value: 'readDetectionsCountBySeverity', description: 'Aggregate counts of detections by severity', action: 'Read detections count by severity' },
			{ name: 'Read Detections Count by Type', value: 'readDetectionsCountByType', description: 'Aggregate counts of detections by detection type', action: 'Read detections count by type' },
			{ name: 'Search Detections', value: 'searchDetections', description: 'Retrieve image assessment detection entities identified by filter criteria', action: 'Search detections' },
		],
		default: 'readCombinedDetections',
	},
];

export const containerDetectionsFields: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['containerDetections'],
				operation: ['readCombinedDetections', 'readDetections', 'readDetectionsCount', 'readDetectionsCountBySeverity', 'readDetectionsCountByType', 'searchDetections'],
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
				resource: ['containerDetections'],
				operation: ['readCombinedDetections', 'readDetections', 'searchDetections'],
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
				resource: ['containerDetections'],
				operation: ['readCombinedDetections', 'readDetections', 'searchDetections'],
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
				resource: ['containerDetections'],
				operation: ['readCombinedDetections'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
