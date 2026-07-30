import type { INodeProperties } from 'n8n-workflow';

export const knowledgeBaseFilesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['knowledgeBaseFiles'],
			},
		},
		options: [
			{ name: 'Entities Knowledge Base Files Create V1', value: 'entitiesKnowledgeBaseFilesCreateV1', description: 'Upload a file to a knowledge base', action: 'Entities knowledge base files create V1' },
			{ name: 'Entities Knowledge Base Files Delete V1', value: 'entitiesKnowledgeBaseFilesDeleteV1', description: 'Delete document from knowledge base', action: 'Entities knowledge base files delete V1' },
			{ name: 'Entities Knowledge Base Files Download V1', value: 'entitiesKnowledgeBaseFilesDownloadV1', description: 'Download knowledge base file entities for provided ID', action: 'Entities knowledge base files download V1' },
			{ name: 'Entities Knowledge Base Files Update V1', value: 'entitiesKnowledgeBaseFilesUpdateV1', description: 'Update an existing file in a knowledge base', action: 'Entities knowledge base files update V1' },
			{ name: 'Entities Knowledge Base Files V1', value: 'entitiesKnowledgeBaseFilesV1', description: 'Retrieve knowledge base file entities for provided IDs', action: 'Entities knowledge base files V1' },
			{ name: 'Queries Knowledge Base Files V1', value: 'queriesKnowledgeBaseFilesV1', description: 'Query knowledge base files based on provided filters', action: 'Queries knowledge base files V1' },
		],
		default: 'queriesKnowledgeBaseFilesV1',
	},
];

export const knowledgeBaseFilesFields: INodeProperties[] = [
	{
		displayName: 'Knowledge Base ID',
		name: 'knowledgeBaseId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['knowledgeBaseFiles'],
				operation: [
					'entitiesKnowledgeBaseFilesCreateV1',
					'entitiesKnowledgeBaseFilesDeleteV1',
					'entitiesKnowledgeBaseFilesDownloadV1',
					'entitiesKnowledgeBaseFilesV1',
					'queriesKnowledgeBaseFilesV1',
				],
			},
		},
		default: '',
		required: true,
		description: 'Target Knowledge Base ID',
	},
	{
		displayName: 'File ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['knowledgeBaseFiles'],
				operation: [
					'entitiesKnowledgeBaseFilesDeleteV1',
					'entitiesKnowledgeBaseFilesDownloadV1',
					'entitiesKnowledgeBaseFilesUpdateV1',
				],
			},
		},
		default: '',
		required: true,
		description: 'Unique file ID',
	},
	{
		displayName: 'File IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['knowledgeBaseFiles'],
				operation: ['entitiesKnowledgeBaseFilesV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of file IDs',
	},
	{
		displayName: 'File Description',
		name: 'fileDescription',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['knowledgeBaseFiles'],
				operation: ['entitiesKnowledgeBaseFilesCreateV1', 'entitiesKnowledgeBaseFilesUpdateV1'],
			},
		},
		default: '',
		description: 'Description of the file',
	},
	{
		displayName: 'Include Deleted',
		name: 'includeDeleted',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['knowledgeBaseFiles'],
				operation: ['entitiesKnowledgeBaseFilesV1', 'queriesKnowledgeBaseFilesV1'],
			},
		},
		default: false,
		description: 'Whether to include deleted files',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['knowledgeBaseFiles'],
				operation: ['queriesKnowledgeBaseFilesV1'],
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
				resource: ['knowledgeBaseFiles'],
				operation: ['queriesKnowledgeBaseFilesV1'],
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
				resource: ['knowledgeBaseFiles'],
				operation: ['queriesKnowledgeBaseFilesV1'],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},
];
