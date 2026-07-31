import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const cloudSecurityOperations: INodeProperties[] = [
	createOperationField('cloudSecurity', [

			{ name: 'Combined Cloud Risks', value: 'combinedCloudRisks', description: 'Gets cloud risks with full details based on filters and sort criteria', action: 'Get combined cloud risks' },
			{ name: 'Create Cloud Group', value: 'createCloudGroupExternal', description: 'Create a Cloud Group', action: 'Create cloud group' },
			{ name: 'Delete Cloud Groups', value: 'deleteCloudGroupsExternal', description: 'Delete Cloud Groups in batch', action: 'Delete cloud groups' },
			{ name: 'List Cloud Group IDs', value: 'listCloudGroupIDsExternal', description: 'Query Cloud Groups and returns IDs', action: 'List cloud group IDs' },
			{ name: 'List Cloud Groups by ID', value: 'listCloudGroupsByIDExternal', description: 'List Cloud Groups By ID', action: 'List cloud groups by ID' },
			{ name: 'List Cloud Groups', value: 'listCloudGroupsExternal', description: 'Query Cloud Groups and returns entities', action: 'List cloud groups' },
			{ name: 'Update Cloud Group', value: 'updateCloudGroupExternal', description: 'Update Cloud Group', action: 'Update cloud group' },
		
	], 'combinedCloudRisks'),
];

export const cloudSecurityFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                   IDs                                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Group IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudSecurity'],
				operation: ['deleteCloudGroupsExternal', 'listCloudGroupsByIDExternal'],
			},
		},
		default: '',
		description: 'Comma-separated list of Cloud Group IDs',
	},

	/* -------------------------------------------------------------------------- */
	/*                                Body JSON                                   */
	/* -------------------------------------------------------------------------- */
	createBodyJsonField('cloudSecurity', ['createCloudGroupExternal', 'updateCloudGroupExternal']),

	/* -------------------------------------------------------------------------- */
	/*                            Pagination & Filters                            */
	/* -------------------------------------------------------------------------- */
	...createStandardPaginationFields('cloudSecurity', ['combinedCloudRisks', 'listCloudGroupIDsExternal', 'listCloudGroupsExternal']),
];
