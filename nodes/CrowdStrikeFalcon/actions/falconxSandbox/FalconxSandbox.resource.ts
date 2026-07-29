import type { INodeProperties } from 'n8n-workflow';

export const falconxSandboxOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
			},
		},
		options: [
			{ name: 'Delete Report', value: 'deleteReport', description: 'Delete report based on report ID', action: 'Delete report' },
			{ name: 'Delete Sample V2', value: 'deleteSampleV2', description: 'Removes a sample including file, meta and submissions', action: 'Delete sample v2' },
			{ name: 'Get Artifacts', value: 'getArtifacts', description: 'Download IOC packs, PCAP files, memory dumps, and artifacts', action: 'Get artifacts' },
			{ name: 'Get Memory Dump', value: 'getMemoryDump', description: 'Get memory dump content as binary', action: 'Get memory dump' },
			{ name: 'Get Memory Dump Extracted Strings', value: 'getMemoryDumpExtractedStrings', description: 'Get extracted strings from a memory dump', action: 'Get memory dump extracted strings' },
			{ name: 'Get Memory Dump Hex Dump', value: 'getMemoryDumpHexDump', description: 'Get hex view of a memory dump', action: 'Get memory dump hex dump' },
			{ name: 'Get Reports', value: 'getReports', description: 'Get a full sandbox report', action: 'Get reports' },
			{ name: 'Get Sample V2', value: 'getSampleV2', description: 'Retrieves the file associated with the given ID (SHA256)', action: 'Get sample v2' },
			{ name: 'Get Submissions', value: 'getSubmissions', description: 'Check the status of a sandbox analysis', action: 'Get submissions' },
			{ name: 'Get Summary Reports', value: 'getSummaryReports', description: 'Get a short summary version of a sandbox report', action: 'Get summary reports' },
			{ name: 'Query Reports', value: 'queryReports', description: 'Find sandbox reports by FQL filter and paging', action: 'Query reports' },
			{ name: 'Query Sample V1', value: 'querySampleV1', description: 'Retrieves a list with sha256 of accessible samples', action: 'Query sample v1' },
			{ name: 'Query Submissions', value: 'querySubmissions', description: 'Find submission IDs by FQL filter and paging', action: 'Query submissions' },
			{ name: 'Submit', value: 'submit', description: 'Submit an uploaded file or URL for sandbox analysis', action: 'Submit' },
			{ name: 'Upload Sample V2', value: 'uploadSampleV2', description: 'Upload a file for sandbox analysis', action: 'Upload sample v2' },
		],
		default: 'queryReports',
	},
];

export const falconxSandboxFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
				operation: [
					'deleteReport',
					'deleteSampleV2',
					'getArtifacts',
					'getMemoryDump',
					'getMemoryDumpExtractedStrings',
					'getMemoryDumpHexDump',
					'getSampleV2',
				],
			},
		},
		default: '',
		required: true,
		description: 'Unique identifier or SHA256 string',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
				operation: ['getReports', 'getSubmissions', 'getSummaryReports'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
				operation: ['getArtifacts', 'getMemoryDump', 'getMemoryDumpExtractedStrings', 'getMemoryDumpHexDump'],
			},
		},
		default: '',
		description: 'Optional name string',
	},
	{
		displayName: 'Password Protected',
		name: 'passwordProtected',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
				operation: ['getSampleV2'],
			},
		},
		default: false,
		description: 'Whether the sample file is password protected',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
				operation: ['querySampleV1', 'submit'],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
	{
		displayName: 'AID',
		name: 'aid',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
				operation: ['submit'],
			},
		},
		default: '',
		description: 'Agent ID',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
				operation: ['uploadSampleV2'],
			},
		},
		default: '',
		required: true,
		description: 'Name of the sample file',
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
				operation: ['uploadSampleV2'],
			},
		},
		default: '',
		description: 'Upload comment',
	},
	{
		displayName: 'Is Confidential',
		name: 'isConfidential',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
				operation: ['uploadSampleV2'],
			},
		},
		default: false,
		description: 'Whether the sample is confidential',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
				operation: ['queryReports', 'querySubmissions'],
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
				resource: ['falconxSandbox'],
				operation: ['queryReports', 'querySubmissions'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
				operation: ['queryReports', 'querySubmissions'],
			},
		},
		default: '',
		description: 'Starting index or pagination token',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconxSandbox'],
				operation: ['queryReports', 'querySubmissions'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
