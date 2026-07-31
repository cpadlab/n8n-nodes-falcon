import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const cloudOciRegistrationOperations: INodeProperties[] = [
	createOperationField('cloudOciRegistration', [

			{ name: 'Create Account', value: 'cloudSecurityRegistrationOciCreateAccount', description: 'Create OCI tenancy account in CSPM', action: 'Create OCI account' },
			{ name: 'Delete Account', value: 'cloudSecurityRegistrationOciDeleteAccount', description: 'Delete an existing OCI tenancy in CSPM', action: 'Delete OCI account' },
			{ name: 'Download Script', value: 'cloudSecurityRegistrationOciDownloadScript', description: 'Retrieve script to create resources in tenancy OCID', action: 'Download OCI script' },
			{ name: 'Get Account', value: 'cloudSecurityRegistrationOciGetAccount', description: 'Retrieve a list of OCI tenancies', action: 'Get OCI account' },
			{ name: 'Rotate Key', value: 'cloudSecurityRegistrationOciRotateKey', description: 'Refresh key for the OCI Tenancy', action: 'Rotate OCI key' },
			{ name: 'Update Account', value: 'cloudSecurityRegistrationOciUpdateAccount', description: 'Patch an existing OCI account in our system', action: 'Update OCI account' },
			{ name: 'Validate Tenancy', value: 'cloudSecurityRegistrationOciValidateTenancy', description: 'Validate OCI account in CSPM for a provided CID', action: 'Validate OCI tenancy' },
		
	], 'cloudSecurityRegistrationOciGetAccount'),
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
	createBodyJsonField('cloudOciRegistration', ['cloudSecurityRegistrationOciCreateAccount',
					'cloudSecurityRegistrationOciDownloadScript',
					'cloudSecurityRegistrationOciRotateKey',
					'cloudSecurityRegistrationOciUpdateAccount',
					'cloudSecurityRegistrationOciValidateTenancy',]),

	/* -------------------------------------------------------------------------- */
	/*                            Pagination & Filters                            */
	/* -------------------------------------------------------------------------- */
	...createStandardPaginationFields('cloudOciRegistration', ['cloudSecurityRegistrationOciGetAccount']),
];
