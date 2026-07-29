import type { INodeProperties } from 'n8n-workflow';

export const cloudGoogleCloudRegistrationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cloudGoogleCloudRegistration'],
			},
		},
		options: [
			{ name: 'Create Registration', value: 'cloudRegistrationGcpCreateRegistration', description: 'Create a Google Cloud Registration', action: 'Create GCP registration' },
			{ name: 'Delete Registration', value: 'cloudRegistrationGcpDeleteRegistration', description: 'Deletes a Google Cloud Registration by ID', action: 'Delete GCP registration' },
			{ name: 'Get Entities', value: 'cloudRegistrationGcpGetEntities', description: 'Retrieve all GCP entities (orgs, folders, projects)', action: 'Get GCP entities' },
			{ name: 'Get Registration', value: 'cloudRegistrationGcpGetRegistration', description: 'Retrieve a Google Cloud Registration by ID', action: 'Get GCP registration' },
			{ name: 'Post Terraform Script', value: 'cloudRegistrationGcpPostTerraformScript', description: 'Generate Google Cloud Terraform deployment scripts', action: 'Generate GCP terraform script' },
			{ name: 'Put Registration', value: 'cloudRegistrationGcpPutRegistration', description: 'Creates or updates a Google Cloud Registration', action: 'Put GCP registration' },
			{ name: 'Trigger Health Check', value: 'cloudRegistrationGcpTriggerHealthCheck', description: 'Trigger health check scan for GCP registrations', action: 'Trigger GCP health check' },
			{ name: 'Update Registration', value: 'cloudRegistrationGcpUpdateRegistration', description: 'Update a Google Cloud Registration', action: 'Update GCP registration' },
		],
		default: 'cloudRegistrationGcpGetEntities',
	},
];

export const cloudGoogleCloudRegistrationFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                   IDs                                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Registration ID',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudGoogleCloudRegistration'],
				operation: ['cloudRegistrationGcpDeleteRegistration', 'cloudRegistrationGcpGetRegistration', 'cloudRegistrationGcpUpdateRegistration'],
			},
		},
		default: '',
		required: true,
		description: 'Google Cloud Registration ID',
	},
	{
		displayName: 'Registration IDs',
		name: 'idsArray',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudGoogleCloudRegistration'],
				operation: ['cloudRegistrationGcpGetEntities', 'cloudRegistrationGcpTriggerHealthCheck'],
			},
		},
		default: '',
		description: 'Comma-separated list of GCP entity or registration IDs',
	},

	/* -------------------------------------------------------------------------- */
	/*                                Body JSON                                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['cloudGoogleCloudRegistration'],
				operation: ['cloudRegistrationGcpCreateRegistration', 'cloudRegistrationGcpPostTerraformScript', 'cloudRegistrationGcpPutRegistration', 'cloudRegistrationGcpUpdateRegistration'],
			},
		},
		default: '',
		required: true,
		description: 'JSON body payload for GCP registration operation',
	},

	/* -------------------------------------------------------------------------- */
	/*                            Pagination & Filters                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudGoogleCloudRegistration'],
				operation: ['cloudRegistrationGcpGetEntities'],
			},
		},
		default: '',
		description: 'FQL filter string (e.g. entity_type:\'project\')',
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
				resource: ['cloudGoogleCloudRegistration'],
				operation: ['cloudRegistrationGcpGetEntities'],
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
				resource: ['cloudGoogleCloudRegistration'],
				operation: ['cloudRegistrationGcpGetEntities'],
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
				resource: ['cloudGoogleCloudRegistration'],
				operation: ['cloudRegistrationGcpGetEntities'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
