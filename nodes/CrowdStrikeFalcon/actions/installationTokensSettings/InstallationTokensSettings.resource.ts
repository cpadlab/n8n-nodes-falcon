import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField } from '../common';

export const installationTokensSettingsOperations: INodeProperties[] = [
	createOperationField('installationTokensSettings', [

			{ name: 'Customer Settings Update', value: 'customerSettingsUpdate', description: 'Update installation token settings', action: 'Customer settings update' },
		
	], 'customerSettingsUpdate'),
];

export const installationTokensSettingsFields: INodeProperties[] = [
	createBodyJsonField('installationTokensSettings', ['customerSettingsUpdate']),
];
