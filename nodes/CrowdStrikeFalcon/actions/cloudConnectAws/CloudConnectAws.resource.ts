import type { INodeProperties } from 'n8n-workflow';

export const cloudConnectAwsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cloudConnectAws'],
			},
		},
		options: [
			{ name: 'Create or Update AWS Settings', value: 'createOrUpdateAWSSettings', description: 'Create or update Global Settings applicable to all provisioned AWS accounts', action: 'Create or update AWS settings' },
			{ name: 'Delete AWS Accounts', value: 'deleteAWSAccounts', description: 'Delete a set of AWS Accounts by specifying their IDs', action: 'Delete AWS accounts' },
			{ name: 'Get AWS Accounts', value: 'getAWSAccounts', description: 'Retrieve a set of AWS Accounts by specifying their IDs', action: 'Get AWS accounts' },
			{ name: 'Get AWS Settings', value: 'getAWSSettings', description: 'Retrieve Global Settings applicable to all provisioned AWS accounts', action: 'Get AWS settings' },
			{ name: 'Provision AWS Accounts', value: 'provisionAWSAccounts', description: 'Provision AWS Accounts by specifying details', action: 'Provision AWS accounts' },
			{ name: 'Query AWS Accounts', value: 'queryAWSAccounts', description: 'Search for provisioned AWS Accounts', action: 'Query AWS accounts' },
			{ name: 'Query AWS Account IDs', value: 'queryAWSAccountsForIDs', description: 'Search for provisioned AWS Account IDs', action: 'Query AWS account IDs' },
			{ name: 'Update AWS Accounts', value: 'updateAWSAccounts', description: 'Update AWS Accounts by specifying account ID and details', action: 'Update AWS accounts' },
			{ name: 'Verify AWS Account Access', value: 'verifyAWSAccountAccess', description: 'Performs Access Verification check on specified AWS Account IDs', action: 'Verify AWS account access' },
		],
		default: 'queryAWSAccounts',
	},
];

export const cloudConnectAwsFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                   IDs                                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'AWS Account IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudConnectAws'],
				operation: ['deleteAWSAccounts', 'getAWSAccounts', 'verifyAWSAccountAccess'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of AWS Account IDs',
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
				resource: ['cloudConnectAws'],
				operation: ['createOrUpdateAWSSettings', 'provisionAWSAccounts', 'updateAWSAccounts'],
			},
		},
		default: '',
		required: true,
		description: 'JSON body payload for AWS connection operation',
	},
	{
		displayName: 'Mode',
		name: 'mode',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudConnectAws'],
				operation: ['provisionAWSAccounts'],
			},
		},
		default: 'cloudformation',
		description: 'Provisioning mode (e.g. cloudformation, manual)',
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
				resource: ['cloudConnectAws'],
				operation: ['queryAWSAccounts', 'queryAWSAccountsForIDs'],
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
				resource: ['cloudConnectAws'],
				operation: ['queryAWSAccounts', 'queryAWSAccountsForIDs'],
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
				resource: ['cloudConnectAws'],
				operation: ['queryAWSAccounts', 'queryAWSAccountsForIDs'],
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
				resource: ['cloudConnectAws'],
				operation: ['queryAWSAccounts', 'queryAWSAccountsForIDs'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
