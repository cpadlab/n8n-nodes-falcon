import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createLimitField, createOffsetField, createOperationField, createSortField } from '../common';

export const d4cRegistrationOperations: INodeProperties[] = [
	createOperationField('d4cRegistration', [

			{ name: 'Connect D4C GCP Account', value: 'connectD4CGCPAccount', description: 'Creates GCP account or connects existing service account', action: 'Connect D4C GCP account' },
			{ name: 'Create D4C AWS Account', value: 'createD4CAwsAccount', description: 'Creates AWS account in D4C', action: 'Create D4C AWS account' },
			{ name: 'Create D4C GCP Account', value: 'createD4CGcpAccount', description: 'Creates GCP account in D4C', action: 'Create D4C GCP account' },
			{ name: 'Create Discover Cloud Azure Account', value: 'createDiscoverCloudAzureAccount', description: 'Creates Azure account in Discover Cloud', action: 'Create discover cloud Azure account' },
			{ name: 'Delete D4C AWS Account', value: 'deleteD4CAwsAccount', description: 'Deletes AWS account or organization in D4C', action: 'Delete D4C AWS account' },
			{ name: 'Delete D4C GCP Account', value: 'deleteD4CGCPAccount', description: 'Deletes GCP account in D4C', action: 'Delete D4C GCP account' },
			{ name: 'Get D4C AWS Account Scripts Attachment', value: 'getD4CAWSAccountScriptsAttachment', description: 'Return AWS setup script attachment', action: 'Get D4C AWS account scripts attachment' },
			{ name: 'Get D4C AWS Account', value: 'getD4CAwsAccount', description: 'Returns status of AWS account in D4C', action: 'Get D4C AWS account' },
			{ name: 'Get D4C AWS Console Setup URLs', value: 'getD4CAwsConsoleSetupURLs', description: 'Return setup URL for AWS', action: 'Get D4C AWS console setup URLs' },
			{ name: 'Get D4C GCP Service Accounts Ext', value: 'getD4CGCPServiceAccountsExt', description: 'Returns service account ID and client email', action: 'Get D4C GCP service accounts ext' },
			{ name: 'Get D4C GCP User Scripts Attachment', value: 'getD4CGCPUserScriptsAttachment', description: 'Return GCP setup script attachment', action: 'Get D4C GCP user scripts attachment' },
			{ name: 'Get D4C GCP Account', value: 'getD4CGcpAccount', description: 'Returns status of GCP account in D4C', action: 'Get D4C GCP account' },
			{ name: 'Get D4C GCP User Scripts', value: 'getD4CGcpUserScripts', description: 'Return GCP setup script', action: 'Get D4C GCP user scripts' },
			{ name: 'Get Discover Cloud Azure Account', value: 'getDiscoverCloudAzureAccount', description: 'Return information about Azure account registration', action: 'Get discover cloud Azure account' },
			{ name: 'Get Discover Cloud Azure Tenant IDs', value: 'getDiscoverCloudAzureTenantIDs', description: 'Return available tenant IDs for Azure', action: 'Get discover cloud Azure tenant IDs' },
			{ name: 'Get Discover Cloud Azure User Scripts', value: 'getDiscoverCloudAzureUserScripts', description: 'Return Azure setup script', action: 'Get discover cloud Azure user scripts' },
			{ name: 'Get Discover Cloud Azure User Scripts Attachment', value: 'getDiscoverCloudAzureUserScriptsAttachment', description: 'Return Azure setup script attachment', action: 'Get discover cloud Azure user scripts attachment' },
			{ name: 'Get Horizon D4C Scripts', value: 'getHorizonD4CScripts', description: 'Returns static install scripts for Horizon', action: 'Get horizon D4C scripts' },
			{ name: 'Update D4C GCP Service Accounts Ext', value: 'updateD4CGCPServiceAccountsExt', description: 'Patches service account key for GCP', action: 'Update D4C GCP service accounts ext' },
			{ name: 'Update Discover Cloud Azure Account Client ID', value: 'updateDiscoverCloudAzureAccountClientID', description: 'Update Azure service account client ID', action: 'Update discover cloud Azure account client ID' },
		
	], 'getD4CAwsAccount'),
];

export const d4cRegistrationFields: INodeProperties[] = [
	{
		displayName: 'Tenant IDs',
		name: 'tenantIds',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['d4cRegistration'],
				operation: ['getDiscoverCloudAzureAccount', 'getDiscoverCloudAzureUserScriptsAttachment'],
			},
		},
		default: '',
		description: 'Comma-separated list of Azure tenant IDs',
	},
	createIdsField('d4cRegistration', ['deleteD4CAwsAccount',
					'deleteD4CGCPAccount',
					'getD4CAWSAccountScriptsAttachment',
					'getD4CAwsAccount',
					'getD4CGCPUserScriptsAttachment',
					'getD4CGcpAccount',
					'getDiscoverCloudAzureAccount',]),
	{
		displayName: 'ID',
		name: 'idSingle',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['d4cRegistration'],
				operation: ['getD4CGCPServiceAccountsExt', 'updateDiscoverCloudAzureAccountClientID'],
			},
		},
		default: '',
		description: 'Single ID string',
	},
	createBodyJsonField('d4cRegistration', ['connectD4CGCPAccount',
					'createD4CAwsAccount',
					'createD4CGcpAccount',
					'createDiscoverCloudAzureAccount',
					'updateD4CGCPServiceAccountsExt',]),
	createLimitField('d4cRegistration', ['getD4CAwsAccount', 'getD4CGcpAccount', 'getDiscoverCloudAzureAccount']),
	createOffsetField('d4cRegistration', ['getD4CAwsAccount', 'getD4CGcpAccount', 'getDiscoverCloudAzureAccount']),
	createSortField('d4cRegistration', ['getD4CGcpAccount']),
];
