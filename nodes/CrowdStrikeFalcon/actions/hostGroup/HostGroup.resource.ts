import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const hostGroupOperations: INodeProperties[] = [
	createOperationField('hostGroup', [

			{ name: 'Create Host Groups', value: 'createHostGroups', description: 'Create Host Groups by specifying details about the group to create', action: 'Create host groups' },
			{ name: 'Delete Host Groups', value: 'deleteHostGroups', description: 'Delete a set of Host Groups by specifying their IDs', action: 'Delete host groups' },
			{ name: 'Get Host Groups', value: 'getHostGroups', description: 'Retrieve a set of Host Groups by specifying their IDs', action: 'Get host groups' },
			{ name: 'Perform Group Action', value: 'performGroupAction', description: 'Perform specified action on specified Host Groups', action: 'Perform group action' },
			{ name: 'Query Combined Group Members', value: 'queryCombinedGroupMembers', description: 'Search for members of a Host Group returning host details', action: 'Query combined group members' },
			{ name: 'Query Combined Host Groups', value: 'queryCombinedHostGroups', description: 'Search for Host Groups returning matching Host Groups', action: 'Query combined host groups' },
			{ name: 'Query Group Members', value: 'queryGroupMembers', description: 'Search for members of a Host Group returning Agent IDs', action: 'Query group members' },
			{ name: 'Query Host Groups', value: 'queryHostGroups', description: 'Search for Host Groups returning Host Group IDs', action: 'Query host groups' },
			{ name: 'Update Host Groups', value: 'updateHostGroups', description: 'Update Host Groups by specifying ID and details', action: 'Update host groups' },
		
	], 'queryHostGroups'),
];

export const hostGroupFields: INodeProperties[] = [
	{
		displayName: 'Host Group ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['hostGroup'],
				operation: ['queryCombinedGroupMembers', 'queryGroupMembers'],
			},
		},
		default: '',
		description: 'Unique host group ID',
	},
	createIdsField('hostGroup', ['deleteHostGroups', 'getHostGroups']),
	{
		displayName: 'Action Name',
		name: 'actionName',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['hostGroup'],
				operation: ['performGroupAction'],
			},
		},
		options: [
			{ name: 'Add Hosts', value: 'add-hosts' },
			{ name: 'Remove Hosts', value: 'remove-hosts' },
		],
		default: 'add-hosts',
		required: true,
		description: 'Action to perform on host groups',
	},
	{
		displayName: 'Disable Hostname Check',
		name: 'disableHostnameCheck',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['hostGroup'],
				operation: ['performGroupAction'],
			},
		},
		default: false,
		description: 'Whether to disable hostname checking',
	},
	createBodyJsonField('hostGroup', ['createHostGroups', 'performGroupAction', 'updateHostGroups']),
	...createStandardPaginationFields('hostGroup', ['queryCombinedGroupMembers',
					'queryCombinedHostGroups',
					'queryGroupMembers',
					'queryHostGroups',]),
];
