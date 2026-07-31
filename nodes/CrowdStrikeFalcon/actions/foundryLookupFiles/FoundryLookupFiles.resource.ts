import type { INodeProperties } from 'n8n-workflow';

import { createOperationField } from '../common';

export const foundryLookupFilesOperations: INodeProperties[] = [
	createOperationField('foundryLookupFiles', [

			{ name: 'Create File V1', value: 'createFileV1', description: 'Creates a lookup file within a foundry app', action: 'Create file v1' },
			{ name: 'Update File V1', value: 'updateFileV1', description: 'Updates a lookup file within a Foundry app', action: 'Update file v1' },
		
	], 'createFileV1'),
];

export const foundryLookupFilesFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['foundryLookupFiles'],
				operation: ['createFileV1', 'updateFileV1'],
			},
		},
		default: '',
		required: true,
		description: 'Lookup file ID',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['foundryLookupFiles'],
				operation: ['createFileV1'],
			},
		},
		default: '',
		required: true,
		description: 'Name of the lookup file',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['foundryLookupFiles'],
				operation: ['createFileV1', 'updateFileV1'],
			},
		},
		default: '',
		description: 'Lookup file description',
	},
	{
		displayName: 'Repo',
		name: 'repo',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['foundryLookupFiles'],
				operation: ['createFileV1'],
			},
		},
		default: '',
		description: 'Repository name',
	},
];
