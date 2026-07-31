import type { INodeProperties } from 'n8n-workflow';

import { createOperationField, createStandardPaginationFields } from '../common';

export const cspgIacapiOperations: INodeProperties[] = [
	createOperationField('cspgIacapi', [

			{ name: 'Combined Detections', value: 'combinedDetections', description: 'Search IaC Detections using FQL query', action: 'Combined detections' },
			{ name: 'Get Credentials', value: 'getCredentialsMixin0', description: 'Gets the registry credentials', action: 'Get credentials' },
		
	], 'combinedDetections'),
];

export const cspgIacapiFields: INodeProperties[] = [
	...createStandardPaginationFields('cspgIacapi', ['combinedDetections']),
];
