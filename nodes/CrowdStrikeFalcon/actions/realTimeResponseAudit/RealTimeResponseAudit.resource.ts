import type { INodeProperties } from 'n8n-workflow';

export const realTimeResponseAuditOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['realTimeResponseAudit'],
			},
		},
		options: [
			{ name: 'RTR Audit Sessions', value: 'rTRAuditSessions', description: 'Get all RTR sessions created for customer in specified duration', action: 'RTR audit sessions' },
		],
		default: 'rTRAuditSessions',
	},
];

export const realTimeResponseAuditFields: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponseAudit'],
				operation: ['rTRAuditSessions'],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponseAudit'],
				operation: ['rTRAuditSessions'],
			},
		},
		default: '100',
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponseAudit'],
				operation: ['rTRAuditSessions'],
			},
		},
		default: '0',
		description: 'Starting index for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		options: [
			{ name: 'Created At', value: 'created_at' },
			{ name: 'Updated At', value: 'updated_at' },
			{ name: 'Deleted At', value: 'deleted_at' },
		],
		displayOptions: {
			show: {
				resource: ['realTimeResponseAudit'],
				operation: ['rTRAuditSessions'],
			},
		},
		default: 'created_at',
		description: 'Sort criteria',
	},
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
