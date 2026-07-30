import type { INodeProperties } from 'n8n-workflow';

export const knowledgeBaseAuditEventsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['knowledgeBaseAuditEvents'],
			},
		},
		options: [
			{ name: 'Aggregates Knowledge Base Audit Events V1', value: 'aggregatesKnowledgeBaseAuditEventsV1', description: 'Aggregate knowledge base audit events based on MSA criteria', action: 'Aggregates knowledge base audit events V1' },
			{ name: 'Combined Knowledge Base Audit Events V1', value: 'combinedKnowledgeBaseAuditEventsV1', description: 'Get knowledge base audit events with full details and pagination', action: 'Combined knowledge base audit events V1' },
			{ name: 'Entities Knowledge Base Audit Events V1', value: 'entitiesKnowledgeBaseAuditEventsV1', description: 'Retrieve knowledge base audit event entities by their IDs', action: 'Entities knowledge base audit events V1' },
			{ name: 'Queries Knowledge Base Audit Events V1', value: 'queriesKnowledgeBaseAuditEventsV1', description: 'Query knowledge base audit event IDs with pagination and filtering', action: 'Queries knowledge base audit events V1' },
		],
		default: 'queriesKnowledgeBaseAuditEventsV1',
	},
];

export const knowledgeBaseAuditEventsFields: INodeProperties[] = [
	{
		displayName: 'Knowledge Base ID',
		name: 'knowledgeBaseId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['knowledgeBaseAuditEvents'],
				operation: [
					'combinedKnowledgeBaseAuditEventsV1',
					'entitiesKnowledgeBaseAuditEventsV1',
					'queriesKnowledgeBaseAuditEventsV1',
				],
			},
		},
		default: '',
		required: true,
		description: 'Target Knowledge Base ID',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['knowledgeBaseAuditEvents'],
				operation: ['entitiesKnowledgeBaseAuditEventsV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Audit Event IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['knowledgeBaseAuditEvents'],
				operation: ['aggregatesKnowledgeBaseAuditEventsV1'],
			},
		},
		default: '',
		required: true,
		description: 'JSON array of MSA aggregate query requests',
	},
	{
		displayName: 'Include Deleted',
		name: 'includeDeleted',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['knowledgeBaseAuditEvents'],
				operation: [
					'aggregatesKnowledgeBaseAuditEventsV1',
					'combinedKnowledgeBaseAuditEventsV1',
					'entitiesKnowledgeBaseAuditEventsV1',
					'queriesKnowledgeBaseAuditEventsV1',
				],
			},
		},
		default: false,
		description: 'Whether to include deleted events',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['knowledgeBaseAuditEvents'],
				operation: ['combinedKnowledgeBaseAuditEventsV1', 'queriesKnowledgeBaseAuditEventsV1'],
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
				resource: ['knowledgeBaseAuditEvents'],
				operation: ['combinedKnowledgeBaseAuditEventsV1', 'queriesKnowledgeBaseAuditEventsV1'],
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
				resource: ['knowledgeBaseAuditEvents'],
				operation: ['combinedKnowledgeBaseAuditEventsV1', 'queriesKnowledgeBaseAuditEventsV1'],
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
				resource: ['knowledgeBaseAuditEvents'],
				operation: ['combinedKnowledgeBaseAuditEventsV1', 'queriesKnowledgeBaseAuditEventsV1'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
