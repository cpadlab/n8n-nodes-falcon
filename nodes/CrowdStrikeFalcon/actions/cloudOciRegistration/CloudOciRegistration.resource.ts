import type { INodeProperties } from 'n8n-workflow';

export const cloudOciRegistrationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cloudOciRegistration'],
			},
		},
		options: [
			{ name: 'Create Account', value: 'cloudSecurityRegistrationOciCreateAccount', description: 'Create OCI tenancy account in CSPM', action: 'Create OCI account' },
			{ name: 'Delete Account', value: 'cloudSecurityRegistrationOciDeleteAccount', description: 'Delete an existing OCI tenancy in CSPM', action: 'Delete OCI account' },
			{ name: 'Download Script', value: 'cloudSecurityRegistrationOciDownloadScript', description: 'Retrieve script to create resources in tenancy OCID', action: 'Download OCI script' },
			{ name: 'Get Account', value: 'cloudSecurityRegistrationOciGetAccount', description: 'Retrieve a list of OCI tenancies', action: 'Get OCI account' },
			{ name: 'Rotate Key', value: 'cloudSecurityRegistrationOciRotateKey', description: 'Refresh key for the OCI Tenancy', action: 'Rotate OCI key' },
			{ name: 'Update Account', value: 'cloudSecurityRegistrationOciUpdateAccount', description: 'Patch an existing OCI account in our system', action: 'Update OCI account' },
			{ name: 'Validate Tenancy', value: 'cloudSecurityRegistrationOciValidateTenancy', description: 'Validate OCI account in CSPM for a provided CID', action: 'Validate OCI tenancy' },
		],
		default: 'cloudSecurityRegistrationOciGetAccount',
	},
];

export const cloudOciRegistrationFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                   IDs                                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Tenancy IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudOciRegistration'],
				operation: ['cloudSecurityRegistrationOciDeleteAccount'],
			},
		},
		default: '',
		description: 'Comma-separated list of OCI tenancy IDs',
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
				resource: ['cloudOciRegistration'],
				operation: [
					'cloudSecurityRegistrationOciCreateAccount',
					'cloudSecurityRegistrationOciDownloadScript',
					'cloudSecurityRegistrationOciRotateKey',
					'cloudSecurityRegistrationOciUpdateAccount',
					'cloudSecurityRegistrationOciValidateTenancy',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON body payload for OCI registration operation',
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
				resource: ['cloudOciRegistration'],
				operation: ['cloudSecurityRegistrationOciGetAccount'],
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
				resource: ['cloudOciRegistration'],
				operation: ['cloudSecurityRegistrationOciGetAccount'],
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
				resource: ['cloudOciRegistration'],
				operation: ['cloudSecurityRegistrationOciGetAccount'],
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
				resource: ['cloudOciRegistration'],
				operation: ['cloudSecurityRegistrationOciGetAccount'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
