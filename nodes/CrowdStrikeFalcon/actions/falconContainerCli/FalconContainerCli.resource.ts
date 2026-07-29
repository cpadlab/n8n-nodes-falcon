import type { INodeProperties } from 'n8n-workflow';

export const falconContainerCliOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['falconContainerCli'],
			},
		},
		options: [
			{ name: 'Read Image Vulnerabilities', value: 'readImageVulnerabilities', description: 'Retrieve known vulnerabilities for the provided image', action: 'Read image vulnerabilities' },
		],
		default: 'readImageVulnerabilities',
	},
];

export const falconContainerCliFields: INodeProperties[] = [
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['falconContainerCli'],
				operation: ['readImageVulnerabilities'],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload containing image lookup details',
	},
];
