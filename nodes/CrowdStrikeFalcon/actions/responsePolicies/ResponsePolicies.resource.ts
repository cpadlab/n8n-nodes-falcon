import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const responsePoliciesOperations: INodeProperties[] = [
	createOperationField('responsePolicies', [

			{ name: 'Create RT Response Policies', value: 'createRTResponsePolicies', description: 'Create Response Policies by specifying details about policy to create', action: 'Create RT response policies' },
			{ name: 'Delete RT Response Policies', value: 'deleteRTResponsePolicies', description: 'Delete a set of Response Policies by specifying their IDs', action: 'Delete RT response policies' },
			{ name: 'Get RT Response Policies', value: 'getRTResponsePolicies', description: 'Retrieve a set of Response Policies by specifying their IDs', action: 'Get RT response policies' },
			{ name: 'Perform RT Response Policies Action', value: 'performRTResponsePoliciesAction', description: 'Perform specified action on Response Policies', action: 'Perform RT response policies action' },
			{ name: 'Query Combined RT Response Policies', value: 'queryCombinedRTResponsePolicies', description: 'Search for Response Policies in environment matching filter criteria', action: 'Query combined RT response policies' },
			{ name: 'Query Combined RT Response Policy Members', value: 'queryCombinedRTResponsePolicyMembers', description: 'Search for members of a Response policy returning host details', action: 'Query combined RT response policy members' },
			{ name: 'Query RT Response Policies', value: 'queryRTResponsePolicies', description: 'Search for Response Policies returning IDs matching filter criteria', action: 'Query RT response policies' },
			{ name: 'Query RT Response Policy Members', value: 'queryRTResponsePolicyMembers', description: 'Search for members of a Response policy returning Agent IDs', action: 'Query RT response policy members' },
			{ name: 'Set RT Response Policies Precedence', value: 'setRTResponsePoliciesPrecedence', description: 'Sets precedence of Response Policies based on order of IDs', action: 'Set RT response policies precedence' },
			{ name: 'Update RT Response Policies', value: 'updateRTResponsePolicies', description: 'Update Response Policies by specifying ID and details to update', action: 'Update RT response policies' },
		
	], 'queryRTResponsePolicies'),
];

export const responsePoliciesFields: INodeProperties[] = [
	{
		displayName: 'Policy ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['responsePolicies'],
				operation: ['queryCombinedRTResponsePolicyMembers', 'queryRTResponsePolicyMembers'],
			},
		},
		default: '',
		description: 'Response Policy ID',
	},
	{
		displayName: 'Policy IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['responsePolicies'],
				operation: ['deleteRTResponsePolicies', 'getRTResponsePolicies'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Response Policy IDs',
	},
	{
		displayName: 'Action Name',
		name: 'actionName',
		type: 'options',
		options: [
			{ name: 'Add Host Group', value: 'add-host-group' },
			{ name: 'Add Rule Group', value: 'add-rule-group' },
			{ name: 'Disable', value: 'disable' },
			{ name: 'Enable', value: 'enable' },
			{ name: 'Remove Host Group', value: 'remove-host-group' },
			{ name: 'Remove Rule Group', value: 'remove-rule-group' },
		],
		displayOptions: {
			show: {
				resource: ['responsePolicies'],
				operation: ['performRTResponsePoliciesAction'],
			},
		},
		default: 'enable',
		required: true,
		description: 'Action to perform on response policy',
	},
	createBodyJsonField('responsePolicies', ['createRTResponsePolicies',
					'performRTResponsePoliciesAction',
					'setRTResponsePoliciesPrecedence',
					'updateRTResponsePolicies',]),
	...createStandardPaginationFields('responsePolicies', ['queryCombinedRTResponsePolicies',
					'queryCombinedRTResponsePolicyMembers',
					'queryRTResponsePolicies',
					'queryRTResponsePolicyMembers',]),
];
