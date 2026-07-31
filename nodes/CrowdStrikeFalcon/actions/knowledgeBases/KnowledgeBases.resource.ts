import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const knowledgeBasesOperations: INodeProperties[] = [
	createOperationField('knowledgeBases', [

			{ name: 'Aggregates Knowledge Bases V1', value: 'aggregatesKnowledgeBasesV1', description: 'Aggregate knowledge bases based on MSA criteria', action: 'Aggregates knowledge bases V1' },
			{ name: 'Combined Knowledge Bases V1', value: 'combinedKnowledgeBasesV1', description: 'Search for knowledge bases returning full entity details', action: 'Combined knowledge bases V1' },
			{ name: 'Entities Knowledge Bases Create V1', value: 'entitiesKnowledgeBasesCreateV1', description: 'Create a knowledge base', action: 'Entities knowledge bases create V1' },
			{ name: 'Entities Knowledge Bases Update V1', value: 'entitiesKnowledgeBasesUpdateV1', description: 'Update an existing knowledge base', action: 'Entities knowledge bases update V1' },
			{ name: 'Entities Knowledge Bases V1', value: 'entitiesKnowledgeBasesV1', description: 'Retrieve knowledge base entities for provided IDs', action: 'Entities knowledge bases V1' },
			{ name: 'Queries Knowledge Bases V1', value: 'queriesKnowledgeBasesV1', description: 'Query knowledge bases based on provided filters', action: 'Queries knowledge bases V1' },
		
	], 'queriesKnowledgeBasesV1'),
];

export const knowledgeBasesFields: INodeProperties[] = [
	{
		displayName: 'Knowledge Base IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['knowledgeBases'],
				operation: ['entitiesKnowledgeBasesV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Knowledge Base IDs',
	},
	createBodyJsonField('knowledgeBases', ['aggregatesKnowledgeBasesV1',
					'entitiesKnowledgeBasesCreateV1',
					'entitiesKnowledgeBasesUpdateV1',]),
	{
		displayName: 'Include Deleted',
		name: 'includeDeleted',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['knowledgeBases'],
				operation: [
					'aggregatesKnowledgeBasesV1',
					'combinedKnowledgeBasesV1',
					'entitiesKnowledgeBasesV1',
					'queriesKnowledgeBasesV1',
				],
			},
		},
		default: false,
		description: 'Whether to include deleted knowledge bases',
	},
	...createStandardPaginationFields('knowledgeBases', ['combinedKnowledgeBasesV1', 'queriesKnowledgeBasesV1']),
];
