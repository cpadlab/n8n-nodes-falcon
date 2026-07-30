import type { INodeProperties } from 'n8n-workflow';

export const serverlessVulnerabilitiesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['serverlessVulnerabilities'],
			},
		},
		options: [
			{ name: 'Get Combined Vulnerabilities SARIF', value: 'getCombinedVulnerabilitiesSARIF', description: 'Retrieve all lambda vulnerabilities matching query in SARIF format', action: 'Get combined vulnerabilities SARIF' },
		],
		default: 'getCombinedVulnerabilitiesSARIF',
	},
];

export const serverlessVulnerabilitiesFields: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['serverlessVulnerabilities'],
				operation: ['getCombinedVulnerabilitiesSARIF'],
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
				resource: ['serverlessVulnerabilities'],
				operation: ['getCombinedVulnerabilitiesSARIF'],
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
				resource: ['serverlessVulnerabilities'],
				operation: ['getCombinedVulnerabilitiesSARIF'],
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
				resource: ['serverlessVulnerabilities'],
				operation: ['getCombinedVulnerabilitiesSARIF'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
