import type { INodeProperties } from 'n8n-workflow';

import { createOperationField, createStandardPaginationFields } from '../common';

export const containerDetectionsOperations: INodeProperties[] = [
	createOperationField('containerDetections', [

			{ name: 'Read Combined Detections', value: 'readCombinedDetections', description: 'Retrieve image assessment detections identified by filter criteria', action: 'Read combined detections' },
			{ name: 'Read Detections', value: 'readDetections', description: 'Retrieve image assessment detection entities identified by filter criteria', action: 'Read detections' },
			{ name: 'Read Detections Count', value: 'readDetectionsCount', description: 'Aggregate count of detections', action: 'Read detections count' },
			{ name: 'Read Detections Count by Severity', value: 'readDetectionsCountBySeverity', description: 'Aggregate counts of detections by severity', action: 'Read detections count by severity' },
			{ name: 'Read Detections Count by Type', value: 'readDetectionsCountByType', description: 'Aggregate counts of detections by detection type', action: 'Read detections count by type' },
			{ name: 'Search Detections', value: 'searchDetections', description: 'Retrieve image assessment detection entities identified by filter criteria', action: 'Search detections' },
		
	], 'readCombinedDetections'),
];

export const containerDetectionsFields: INodeProperties[] = [
	...createStandardPaginationFields('containerDetections', ['readCombinedDetections', 'readDetections', 'readDetectionsCount', 'readDetectionsCountBySeverity', 'readDetectionsCountByType', 'searchDetections']),
];
