import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const knowledgeBaseAuditEventsOperations: INodeProperties[] = [
	createOperationField('knowledgeBaseAuditEvents', [

			{ name: 'Aggregates Knowledge Base Audit Events V1', value: 'aggregatesKnowledgeBaseAuditEventsV1', description: 'Aggregate knowledge base audit events based on MSA criteria', action: 'Aggregates knowledge base audit events V1' },
			{ name: 'Combined Knowledge Base Audit Events V1', value: 'combinedKnowledgeBaseAuditEventsV1', description: 'Get knowledge base audit events with full details and pagination', action: 'Combined knowledge base audit events V1' },
			{ name: 'Entities Knowledge Base Audit Events V1', value: 'entitiesKnowledgeBaseAuditEventsV1', description: 'Retrieve knowledge base audit event entities by their IDs', action: 'Entities knowledge base audit events V1' },
			{ name: 'Queries Knowledge Base Audit Events V1', value: 'queriesKnowledgeBaseAuditEventsV1', description: 'Query knowledge base audit event IDs with pagination and filtering', action: 'Queries knowledge base audit events V1' },
		
	], 'queriesKnowledgeBaseAuditEventsV1'),
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
	createIdsField('knowledgeBaseAuditEvents', ['entitiesKnowledgeBaseAuditEventsV1']),
	createBodyJsonField('knowledgeBaseAuditEvents', ['aggregatesKnowledgeBaseAuditEventsV1']),
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
	...createStandardPaginationFields('knowledgeBaseAuditEvents', ['combinedKnowledgeBaseAuditEventsV1', 'queriesKnowledgeBaseAuditEventsV1']),
];
