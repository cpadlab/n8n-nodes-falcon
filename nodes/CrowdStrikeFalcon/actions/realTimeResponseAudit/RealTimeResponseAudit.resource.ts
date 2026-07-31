import type { INodeProperties } from 'n8n-workflow';

import { createOperationField, createStandardPaginationFields } from '../common';

export const realTimeResponseAuditOperations: INodeProperties[] = [
	createOperationField('realTimeResponseAudit', [

			{ name: 'RTR Audit Sessions', value: 'rTRAuditSessions', description: 'Get all RTR sessions created for customer in specified duration', action: 'RTR audit sessions' },
		
	], 'rTRAuditSessions'),
];

export const realTimeResponseAuditFields: INodeProperties[] = [
	...createStandardPaginationFields('realTimeResponseAudit', ['rTRAuditSessions']),
	{
		displayName: 'With Command Info',
		name: 'withCommandInfo',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['realTimeResponseAudit'],
				operation: ['rTRAuditSessions'],
			},
		},
		default: false,
		description: 'Whether to include command info in audit response',
	},
];
