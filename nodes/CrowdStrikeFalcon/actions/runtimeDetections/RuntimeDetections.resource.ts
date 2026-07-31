import type { INodeProperties } from 'n8n-workflow';

import { createOperationField, createStandardPaginationFields } from '../common';

export const runtimeDetectionsOperations: INodeProperties[] = [
	createOperationField('runtimeDetections', [

			{ name: 'Get Runtime Detections Combined V2', value: 'getRuntimeDetectionsCombinedV2', description: 'Retrieve container runtime detections by search criteria', action: 'Get runtime detections combined V2' },
		
	], 'getRuntimeDetectionsCombinedV2'),
];

export const runtimeDetectionsFields: INodeProperties[] = [
	...createStandardPaginationFields('runtimeDetections', ['getRuntimeDetectionsCombinedV2']),
];
