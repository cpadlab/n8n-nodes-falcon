import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField } from '../common';

export const maintenanceTokenOperations: INodeProperties[] = [
	createOperationField('maintenanceToken', [

			{ name: 'Increment Uninstall Token', value: 'incrementUninstallToken', description: 'Increments a bulk maintenance token', action: 'Increment uninstall token' },
		
	], 'incrementUninstallToken'),
];

export const maintenanceTokenFields: INodeProperties[] = [
	createBodyJsonField('maintenanceToken', ['incrementUninstallToken']),
];
