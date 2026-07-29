import type { INodeProperties } from 'n8n-workflow';

export const cloudAzureRegistrationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cloudAzureRegistration'],
			},
		},
		options: [
			{ name: 'Create Registration', value: 'cloudRegistrationAzureCreateRegistration', description: 'Create an Azure registration for a tenant', action: 'Create Azure registration' },
			{ name: 'Create Suppressions', value: 'cloudRegistrationAzureCreateSuppressions', description: 'Create new issue suppression rules', action: 'Create Azure suppressions' },
			{ name: 'Delete Legacy Subscription', value: 'cloudRegistrationAzureDeleteLegacySubscription', description: 'Delete existing legacy Azure subscriptions', action: 'Delete Azure legacy subscription' },
			{ name: 'Delete Registration', value: 'cloudRegistrationAzureDeleteRegistration', description: 'Deletes existing Azure registrations', action: 'Delete Azure registration' },
			{ name: 'Delete Suppressions', value: 'cloudRegistrationAzureDeleteSuppressions', description: 'Remove/revoke suppression rules', action: 'Delete Azure suppressions' },
			{ name: 'Download Script', value: 'cloudRegistrationAzureDownloadScript', description: 'Retrieve script to create resources', action: 'Download Azure provision script' },
			{ name: 'Get Issue Suppression Values by Field', value: 'cloudRegistrationAzureGetIssueSuppressionValuesByField', description: 'Retrieve distinct values for issue suppression fields', action: 'Get Azure issue suppression values' },
			{ name: 'Get Issue Values by Field', value: 'cloudRegistrationAzureGetIssueValuesByField', description: 'Retrieve distinct values for issue fields', action: 'Get Azure issue values' },
			{ name: 'Get Issues', value: 'cloudRegistrationAzureGetIssues', description: 'Retrieve issues for Azure registrations', action: 'Get Azure issues' },
			{ name: 'Get Registration', value: 'cloudRegistrationAzureGetRegistration', description: 'Retrieve existing Azure registration for a tenant', action: 'Get Azure registration' },
			{ name: 'Get Script', value: 'cloudRegistrationAzureGetScript', description: 'Download Azure deployment script (Terraform or Bicep)', action: 'Get Azure deployment script' },
			{ name: 'Get Script Versions', value: 'cloudRegistrationAzureGetScriptVersions', description: 'Retrieve available script versions', action: 'Get Azure script versions' },
			{ name: 'Get Suppressions', value: 'cloudRegistrationAzureGetSuppressions', description: 'Retrieve existing suppression rules', action: 'Get Azure suppressions' },
			{ name: 'Trigger Health Check', value: 'cloudRegistrationAzureTriggerHealthCheck', description: 'Trigger health check scan for Azure registrations', action: 'Trigger Azure health check' },
			{ name: 'Update Registration', value: 'cloudRegistrationAzureUpdateRegistration', description: 'Update an existing Azure registration for a tenant', action: 'Update Azure registration' },
			{ name: 'Update Suppressions', value: 'cloudRegistrationAzureUpdateSuppressions', description: 'Update existing suppression rules', action: 'Update Azure suppressions' },
			{ name: 'Validate Registration', value: 'cloudRegistrationAzureValidateRegistration', description: 'Validate Azure registration status', action: 'Validate Azure registration' },
		],
		default: 'cloudRegistrationAzureGetRegistration',
	},
];

export const cloudAzureRegistrationFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                               Tenant & Reg IDs                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Tenant ID',
		name: 'tenantId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudAzureRegistration'],
				operation: ['cloudRegistrationAzureGetRegistration', 'cloudRegistrationAzureGetScript', 'cloudRegistrationAzureValidateRegistration'],
			},
		},
		default: '',
		description: 'Azure Tenant ID',
	},
	{
		displayName: 'Tenant IDs',
		name: 'tenantIds',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudAzureRegistration'],
				operation: ['cloudRegistrationAzureDeleteRegistration', 'cloudRegistrationAzureTriggerHealthCheck'],
			},
		},
		default: '',
		description: 'Comma-separated list of Azure Tenant IDs',
	},
	{
		displayName: 'Registration ID',
		name: 'registrationId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudAzureRegistration'],
				operation: [
					'cloudRegistrationAzureGetIssueSuppressionValuesByField',
					'cloudRegistrationAzureGetIssueValuesByField',
					'cloudRegistrationAzureGetIssues',
					'cloudRegistrationAzureGetRegistration',
					'cloudRegistrationAzureGetSuppressions',
				],
			},
		},
		default: '',
		description: 'Azure Registration ID',
	},
	{
		displayName: 'Field',
		name: 'field',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudAzureRegistration'],
				operation: ['cloudRegistrationAzureGetIssueSuppressionValuesByField', 'cloudRegistrationAzureGetIssueValuesByField'],
			},
		},
		default: '',
		required: true,
		description: 'Field name to query distinct values for',
	},
	{
		displayName: 'Deployment Method',
		name: 'deploymentMethod',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudAzureRegistration'],
				operation: ['cloudRegistrationAzureGetScriptVersions'],
			},
		},
		default: '',
		required: true,
		description: 'Deployment method (e.g. terraform, bicep)',
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
				resource: ['cloudAzureRegistration'],
				operation: [
					'cloudRegistrationAzureCreateRegistration',
					'cloudRegistrationAzureCreateSuppressions',
					'cloudRegistrationAzureDeleteLegacySubscription',
					'cloudRegistrationAzureDeleteSuppressions',
					'cloudRegistrationAzureDownloadScript',
					'cloudRegistrationAzureUpdateRegistration',
					'cloudRegistrationAzureUpdateSuppressions',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON body payload for Azure registration operation',
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
				resource: ['cloudAzureRegistration'],
				operation: ['cloudRegistrationAzureGetIssueValuesByField', 'cloudRegistrationAzureGetIssues', 'cloudRegistrationAzureGetSuppressions'],
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
				resource: ['cloudAzureRegistration'],
				operation: ['cloudRegistrationAzureGetIssues', 'cloudRegistrationAzureGetScriptVersions', 'cloudRegistrationAzureGetSuppressions'],
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
				resource: ['cloudAzureRegistration'],
				operation: ['cloudRegistrationAzureGetIssues', 'cloudRegistrationAzureGetScriptVersions', 'cloudRegistrationAzureGetSuppressions'],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},
];
