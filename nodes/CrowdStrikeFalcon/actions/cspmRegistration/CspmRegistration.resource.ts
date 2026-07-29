import type { INodeProperties } from 'n8n-workflow';

export const cspmRegistrationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cspmRegistration'],
			},
		},
		options: [
			{ name: 'Azure Download Certificate', value: 'azureDownloadCertificate', description: 'Returns base64 encoded certificate for service principal', action: 'Azure download certificate' },
			{ name: 'Azure Refresh Certificate', value: 'azureRefreshCertificate', description: 'Refresh certificate for service principal', action: 'Azure refresh certificate' },
			{ name: 'Connect CSPM GCP Account', value: 'connectCSPMGCPAccount', description: 'Connect GCP account with existing service account', action: 'Connect CSPM GCP account' },
			{ name: 'Create CSPM AWS Account', value: 'createCSPMAwsAccount', description: 'Creates a new AWS account in CSPM', action: 'Create CSPM AWS account' },
			{ name: 'Create CSPM Azure Account', value: 'createCSPMAzureAccount', description: 'Creates a new Azure account in CSPM', action: 'Create CSPM Azure account' },
			{ name: 'Create CSPM Azure Management Group', value: 'createCSPMAzureManagementGroup', description: 'Creates a new Azure management group in CSPM', action: 'Create CSPM Azure management group' },
			{ name: 'Create CSPM GCP Account', value: 'createCSPMGCPAccount', description: 'Creates a new GCP account in CSPM', action: 'Create CSPM GCP account' },
			{ name: 'Delete CSPM AWS Account', value: 'deleteCSPMAwsAccount', description: 'Deletes an existing AWS account or organization', action: 'Delete CSPM AWS account' },
			{ name: 'Delete CSPM Azure Account', value: 'deleteCSPMAzureAccount', description: 'Deletes an Azure subscription from system', action: 'Delete CSPM Azure account' },
			{ name: 'Delete CSPM Azure Management Group', value: 'deleteCSPMAzureManagementGroup', description: 'Deletes Azure management groups from system', action: 'Delete CSPM Azure management group' },
			{ name: 'Delete CSPM GCP Account', value: 'deleteCSPMGCPAccount', description: 'Deletes a GCP account from system', action: 'Delete CSPM GCP account' },
			{ name: 'Get Behavior Detections', value: 'getBehaviorDetections', description: 'Get list of detected behaviors', action: 'Get behavior detections' },
			{ name: 'Get CSPM AWS Account', value: 'getCSPMAwsAccount', description: 'Returns status of AWS account', action: 'Get CSPM AWS account' },
			{ name: 'Get CSPM AWS Console Setup URLs', value: 'getCSPMAwsConsoleSetupURLs', description: 'Return URL for customer setup in AWS', action: 'Get CSPM AWS console setup URLs' },
			{ name: 'Get CSPM Azure Account', value: 'getCSPMAzureAccount', description: 'Return information about Azure account registration', action: 'Get CSPM Azure account' },
			{ name: 'Get CSPM Azure Management Group', value: 'getCSPMAzureManagementGroup', description: 'Return information about Azure management group registration', action: 'Get CSPM Azure management group' },
			{ name: 'Get CSPM Azure User Scripts Attachment', value: 'getCSPMAzureUserScriptsAttachment', description: 'Return Azure setup script attachment', action: 'Get CSPM Azure user scripts attachment' },
			{ name: 'Get CSPM GCP Account', value: 'getCSPMGCPAccount', description: 'Returns status of GCP account', action: 'Get CSPM GCP account' },
			{ name: 'Get CSPM GCP Service Accounts Ext', value: 'getCSPMGCPServiceAccountsExt', description: 'Returns service account ID and email', action: 'Get CSPM GCP service accounts ext' },
			{ name: 'Get CSPM GCP User Scripts Attachment', value: 'getCSPMGCPUserScriptsAttachment', description: 'Return GCP setup script attachment', action: 'Get CSPM GCP user scripts attachment' },
			{ name: 'Get CSPM GCP Validate Accounts Ext', value: 'getCSPMGCPValidateAccountsExt', description: 'Run synchronous health check for GCP', action: 'Get CSPM GCP validate accounts ext' },
			{ name: 'Get CSPM Policies Details', value: 'getCSPMPoliciesDetails', description: 'Returns detailed policies info by IDs', action: 'Get CSPM policies details' },
			{ name: 'Get CSPM Policy', value: 'getCSPMPolicy', description: 'Returns detailed policy info by ID', action: 'Get CSPM policy' },
			{ name: 'Get CSPM Policy Settings', value: 'getCSPMPolicySettings', description: 'Returns information about policy settings', action: 'Get CSPM policy settings' },
			{ name: 'Get CSPM Scan Schedule', value: 'getCSPMScanSchedule', description: 'Returns scan schedule configuration', action: 'Get CSPM scan schedule' },
			{ name: 'Get Cloud Event IDs (Deprecated)', value: 'getCloudEventIDs', description: 'Get list of related cloud event LogScale IDs', action: 'Get cloud event IDs' },
			{ name: 'Get Configuration Detection Entities', value: 'getConfigurationDetectionEntities', description: 'Get misconfigurations by IDs', action: 'Get configuration detection entities' },
			{ name: 'Get Configuration Detection IDs V2', value: 'getConfigurationDetectionIDsV2', description: 'Get list of active misconfiguration IDs V2', action: 'Get configuration detection IDs V2' },
			{ name: 'Get Configuration Detections (Deprecated)', value: 'getConfigurationDetections', description: 'Get list of active misconfigurations (deprecated)', action: 'Get configuration detections' },
			{ name: 'Patch CSPM AWS Account', value: 'patchCSPMAwsAccount', description: 'Patches an existing AWS account', action: 'Patch CSPM AWS account' },
			{ name: 'Update CSPM Azure Account', value: 'updateCSPMAzureAccount', description: 'Patches an existing Azure account', action: 'Update CSPM Azure account' },
			{ name: 'Update CSPM Azure Account Client ID', value: 'updateCSPMAzureAccountClientID', description: 'Update Azure service account client ID', action: 'Update CSPM Azure account client ID' },
			{ name: 'Update CSPM Azure Default Subscription ID', value: 'updateCSPMAzureTenantDefaultSubscriptionID', description: 'Update Azure default subscription ID', action: 'Update CSPM Azure tenant default subscription ID' },
			{ name: 'Update CSPM GCP Account', value: 'updateCSPMGCPAccount', description: 'Patches an existing GCP account', action: 'Update CSPM GCP account' },
			{ name: 'Update CSPM GCP Service Accounts Ext', value: 'updateCSPMGCPServiceAccountsExt', description: 'Patches GCP service account key', action: 'Update CSPM GCP service accounts ext' },
			{ name: 'Update CSPM Policy Settings', value: 'updateCSPMPolicySettings', description: 'Updates policy setting (severity/disable)', action: 'Update CSPM policy settings' },
			{ name: 'Update CSPM Scan Schedule', value: 'updateCSPMScanSchedule', description: 'Updates scan schedule configuration', action: 'Update CSPM scan schedule' },
			{ name: 'Validate CSPM GCP Service Account Ext', value: 'validateCSPMGCPServiceAccountExt', description: 'Validates credentials for GCP service account', action: 'Validate CSPM GCP service account ext' },
		],
		default: 'getConfigurationDetectionIDsV2',
	},
];

export const cspmRegistrationFields: INodeProperties[] = [
	{
		displayName: 'Tenant IDs',
		name: 'tenantIds',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cspmRegistration'],
				operation: ['azureDownloadCertificate', 'azureRefreshCertificate', 'deleteCSPMAzureAccount', 'deleteCSPMAzureManagementGroup', 'getCSPMAzureAccount', 'getCSPMAzureManagementGroup'],
			},
		},
		default: '',
		description: 'Comma-separated list of Azure Tenant IDs',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cspmRegistration'],
				operation: [
					'deleteCSPMAwsAccount',
					'deleteCSPMGCPAccount',
					'getCSPMAwsAccount',
					'getCSPMAwsConsoleSetupURLs',
					'getCSPMAzureAccount',
					'getCSPMGCPAccount',
					'getCSPMGCPUserScriptsAttachment',
					'getConfigurationDetectionEntities',
				],
			},
		},
		default: '',
		description: 'Comma-separated list of account IDs',
	},
	{
		displayName: 'Policy IDs',
		name: 'policyIds',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cspmRegistration'],
				operation: ['getCSPMPoliciesDetails'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of numeric policy IDs',
	},
	{
		displayName: 'Single Policy ID',
		name: 'policyIdNum',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['cspmRegistration'],
				operation: ['getCSPMPolicy'],
			},
		},
		default: 0,
		required: true,
		description: 'Numeric policy ID',
	},
	{
		displayName: 'ID',
		name: 'idSingle',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cspmRegistration'],
				operation: ['getCSPMGCPServiceAccountsExt', 'updateCSPMAzureAccountClientID'],
			},
		},
		default: '',
		description: 'Single string ID',
	},
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cspmRegistration'],
				operation: ['updateCSPMAzureTenantDefaultSubscriptionID'],
			},
		},
		default: '',
		required: true,
		description: 'Azure subscription ID',
	},
	{
		displayName: 'User UUID',
		name: 'xCSUSERUUID',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cspmRegistration'],
				operation: ['getCloudEventIDs'],
			},
		},
		default: '',
		required: true,
		description: 'User UUID for cloud event IDs',
	},
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cspmRegistration'],
				operation: ['getCloudEventIDs'],
			},
		},
		default: '',
		required: true,
		description: 'Event ID for cloud event IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['cspmRegistration'],
				operation: [
					'connectCSPMGCPAccount',
					'createCSPMAwsAccount',
					'createCSPMAzureAccount',
					'createCSPMAzureManagementGroup',
					'createCSPMGCPAccount',
					'getCSPMGCPValidateAccountsExt',
					'patchCSPMAwsAccount',
					'updateCSPMAzureAccount',
					'updateCSPMGCPAccount',
					'updateCSPMGCPServiceAccountsExt',
					'updateCSPMPolicySettings',
					'updateCSPMScanSchedule',
					'validateCSPMGCPServiceAccountExt',
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
				resource: ['cspmRegistration'],
				operation: ['getConfigurationDetectionIDsV2'],
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
				resource: ['cspmRegistration'],
				operation: [
					'getBehaviorDetections',
					'getCSPMAwsAccount',
					'getCSPMAzureAccount',
					'getCSPMAzureManagementGroup',
					'getCSPMGCPAccount',
					'getConfigurationDetectionIDsV2',
					'getConfigurationDetections',
				],
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
				resource: ['cspmRegistration'],
				operation: [
					'getCSPMAwsAccount',
					'getCSPMAzureAccount',
					'getCSPMAzureManagementGroup',
					'getCSPMGCPAccount',
					'getConfigurationDetectionIDsV2',
				],
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
				resource: ['cspmRegistration'],
				operation: ['getCSPMGCPAccount', 'getConfigurationDetectionIDsV2'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
