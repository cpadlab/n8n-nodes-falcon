import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createLimitField, createOffsetField, createOperationField } from '../common';

export const cloudAwsRegistrationOperations: INodeProperties[] = [
	createOperationField('cloudAwsRegistration', [

			{ name: 'Create Account Registration', value: 'cloudRegistrationAwsCreateAccount', description: 'Creates a new account in our system for a customer', action: 'Create AWS account registration' },
			{ name: 'Delete Account Registration', value: 'cloudRegistrationAwsDeleteAccount', description: 'Deletes an existing AWS account or organization in our system', action: 'Delete AWS account registration' },
			{ name: 'Get Account Registrations', value: 'cloudRegistrationAwsGetAccounts', description: 'Retrieve existing AWS accounts by account IDs or organization IDs', action: 'Get AWS account registrations' },
			{ name: 'Query Account Registrations', value: 'cloudRegistrationAwsQueryAccounts', description: 'Retrieve existing AWS accounts by account IDs', action: 'Query AWS account registrations' },
			{ name: 'Trigger Health Check', value: 'cloudRegistrationAwsTriggerHealthCheck', description: 'Trigger health check scan for AWS accounts', action: 'Trigger AWS health check' },
			{ name: 'Update Account Registration', value: 'cloudRegistrationAwsUpdateAccount', description: 'Patches an existing account in our system for a customer', action: 'Update AWS account registration' },
			{ name: 'Validate Accounts', value: 'cloudRegistrationAwsValidateAccounts', description: 'Validates AWS account registration status', action: 'Validate AWS accounts' },
		
	], 'cloudRegistrationAwsQueryAccounts'),
];

export const cloudAwsRegistrationFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                   IDs                                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Account IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudAwsRegistration'],
				operation: ['cloudRegistrationAwsDeleteAccount', 'cloudRegistrationAwsGetAccounts', 'cloudRegistrationAwsTriggerHealthCheck'],
			},
		},
		default: '',
		description: 'Comma-separated list of AWS account IDs',
	},
	{
		displayName: 'Organization IDs',
		name: 'organizationIds',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudAwsRegistration'],
				operation: ['cloudRegistrationAwsDeleteAccount', 'cloudRegistrationAwsGetAccounts', 'cloudRegistrationAwsQueryAccounts', 'cloudRegistrationAwsTriggerHealthCheck'],
			},
		},
		default: '',
		description: 'Comma-separated list of organization IDs',
	},

	/* -------------------------------------------------------------------------- */
	/*                               Validation Fields                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudAwsRegistration'],
				operation: ['cloudRegistrationAwsValidateAccounts'],
			},
		},
		default: '',
		description: 'AWS Account ID to validate',
	},
	{
		displayName: 'IAM Role ARN',
		name: 'iamRoleArn',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudAwsRegistration'],
				operation: ['cloudRegistrationAwsValidateAccounts'],
			},
		},
		default: '',
		description: 'AWS IAM Role ARN',
	},
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudAwsRegistration'],
				operation: ['cloudRegistrationAwsValidateAccounts'],
			},
		},
		default: '',
		description: 'AWS Organization ID',
	},

	/* -------------------------------------------------------------------------- */
	/*                                Body JSON                                   */
	/* -------------------------------------------------------------------------- */
	createBodyJsonField('cloudAwsRegistration', ['cloudRegistrationAwsCreateAccount', 'cloudRegistrationAwsUpdateAccount']),

	/* -------------------------------------------------------------------------- */
	/*                            Query Parameters                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Products',
		name: 'products',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudAwsRegistration'],
				operation: ['cloudRegistrationAwsQueryAccounts'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of products (e.g. cspm)',
	},
	{
		displayName: 'Features',
		name: 'features',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudAwsRegistration'],
				operation: ['cloudRegistrationAwsQueryAccounts'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of features',
	},
	createLimitField('cloudAwsRegistration', ['cloudRegistrationAwsQueryAccounts']),
	createOffsetField('cloudAwsRegistration', ['cloudRegistrationAwsQueryAccounts']),
];
