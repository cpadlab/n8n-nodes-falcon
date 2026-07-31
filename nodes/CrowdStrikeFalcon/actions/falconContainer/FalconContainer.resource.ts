import type { INodeProperties } from 'n8n-workflow';

import { createOperationField } from '../common';

export const falconContainerOperations: INodeProperties[] = [
	createOperationField('falconContainer', [

			{ name: 'Get Credentials', value: 'getCredentials', description: 'Gets the registry credentials', action: 'Get credentials' },
		
	], 'getCredentials'),
];

export const falconContainerFields: INodeProperties[] = [];
