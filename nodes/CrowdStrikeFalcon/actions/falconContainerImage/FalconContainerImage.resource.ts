import type { INodeProperties } from 'n8n-workflow';

export const falconContainerImageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['falconContainerImage'],
			},
		},
		options: [
			{ name: 'Create Registry Entities', value: 'createRegistryEntities', description: 'Create a registry entity using the provided details', action: 'Create registry entities' },
			{ name: 'Delete Registry Entities', value: 'deleteRegistryEntities', description: 'Delete registry entity identified by entity UUID', action: 'Delete registry entities' },
			{ name: 'Download Export File', value: 'downloadExportFile', description: 'Download an export file', action: 'Download export file' },
			{ name: 'Get Report by Reference', value: 'getReportByReference', description: 'Get image assessment scan report by image reference (v2)', action: 'Get report by reference' },
			{ name: 'Get Report by Scan ID', value: 'getReportByScanID', description: 'Get image assessment scan report by scan UUID (v2)', action: 'Get report by scan id' },
			{ name: 'Head Image Scan Inventory', value: 'headImageScanInventory', description: 'Get headers for POST request for image scan inventory', action: 'Head image scan inventory' },
			{ name: 'Launch Export Job', value: 'launchExportJob', description: 'Launch an export job of a Container Security resource', action: 'Launch export job' },
			{ name: 'Policy Checks', value: 'policyChecks', description: 'Check image prevention policies', action: 'Policy checks' },
			{ name: 'Post Image Scan Inventory', value: 'postImageScanInventory', description: 'Post image scan inventory', action: 'Post image scan inventory' },
			{ name: 'Query Export Jobs', value: 'queryExportJobs', description: 'Query export jobs entities', action: 'Query export jobs' },
			{ name: 'Read Export Jobs', value: 'readExportJobs', description: 'Read export jobs entities', action: 'Read export jobs' },
			{ name: 'Read Registry Entities', value: 'readRegistryEntities', description: 'Retrieves a list of registry entities identified by customer ID', action: 'Read registry entities' },
			{ name: 'Read Registry Entities by UUID', value: 'readRegistryEntitiesByUUID', description: 'Retrieves a list of registry entities by provided UUIDs', action: 'Read registry entities by uuid' },
			{ name: 'Update Registry Entities', value: 'updateRegistryEntities', description: 'Update registry entity identified by entity UUID', action: 'Update registry entities' },
		],
		default: 'readRegistryEntities',
	},
];

export const falconContainerImageFields: INodeProperties[] = [
	{
		displayName: 'ID / UUID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconContainerImage'],
				operation: [
					'deleteRegistryEntities',
					'downloadExportFile',
					'getReportByScanID',
					'readRegistryEntitiesByUUID',
					'updateRegistryEntities',
				],
			},
		},
		default: '',
		required: true,
		description: 'Unique identifier or UUID string',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconContainerImage'],
				operation: ['readExportJobs'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of export job IDs',
	},
	{
		displayName: 'Repository',
		name: 'repository',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconContainerImage'],
				operation: ['policyChecks'],
			},
		},
		default: '',
		required: true,
		description: 'Container image repository name',
	},
	{
		displayName: 'Tag',
		name: 'tag',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconContainerImage'],
				operation: ['policyChecks'],
			},
		},
		default: '',
		required: true,
		description: 'Container image tag',
	},
	{
		displayName: 'Registry',
		name: 'registry',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconContainerImage'],
				operation: ['getReportByReference', 'policyChecks'],
			},
		},
		default: '',
		description: 'Container registry domain',
	},
	{
		displayName: 'Architecture',
		name: 'architecture',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconContainerImage'],
				operation: ['getReportByReference', 'policyChecks'],
			},
		},
		default: '',
		description: 'Target image architecture',
	},
	{
		displayName: 'Report Format',
		name: 'reportFormat',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconContainerImage'],
				operation: ['getReportByReference', 'getReportByScanID'],
			},
		},
		default: '',
		description: 'Format of report',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['falconContainerImage'],
				operation: [
					'createRegistryEntities',
					'launchExportJob',
					'postImageScanInventory',
					'updateRegistryEntities',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['falconContainerImage'],
				operation: ['queryExportJobs'],
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
			maxValue: 5000,
		},
		displayOptions: {
			show: {
				resource: ['falconContainerImage'],
				operation: ['readRegistryEntities'],
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
				resource: ['falconContainerImage'],
				operation: ['readRegistryEntities'],
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
				resource: ['falconContainerImage'],
				operation: ['readRegistryEntities'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
