import type { INodeProperties } from 'n8n-workflow';

export const executionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['execution'],
			},
		},
		options: [
			{ name: 'Read Request Body', value: 'readRequestBody', description: 'Retrieve a large request body spilled into object storage', action: 'Read request body' },
		],
		default: 'readRequestBody',
	},
];

export const executionFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['execution'],
				operation: ['readRequestBody'],
			},
		},
		default: '',
		required: true,
		description: 'Unique execution identifier',
	},
	{
		displayName: 'Function Name (fn)',
		name: 'fn',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['execution'],
				operation: ['readRequestBody'],
			},
		},
		default: '',
		required: true,
		description: 'Name of the function',
	},
	{
		displayName: 'File Name',
		name: 'filename',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['execution'],
				operation: ['readRequestBody'],
			},
		},
		default: '',
		required: true,
		description: 'Name of the spilled payload file',
	},
	{
		displayName: 'SHA256',
		name: 'sha256',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['execution'],
				operation: ['readRequestBody'],
			},
		},
		default: '',
		required: true,
		description: 'SHA256 hash of the payload file',
	},
];
