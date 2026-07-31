import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField } from '../common';

export const falconContainerCliOperations: INodeProperties[] = [
	createOperationField('falconContainerCli', [

			{ name: 'Read Image Vulnerabilities', value: 'readImageVulnerabilities', description: 'Retrieve known vulnerabilities for the provided image', action: 'Read image vulnerabilities' },
		
	], 'readImageVulnerabilities'),
];

export const falconContainerCliFields: INodeProperties[] = [
	createBodyJsonField('falconContainerCli', ['readImageVulnerabilities']),
];
