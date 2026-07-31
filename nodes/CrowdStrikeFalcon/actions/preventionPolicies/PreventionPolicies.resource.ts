import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const preventionPoliciesOperations: INodeProperties[] = [
	createOperationField('preventionPolicies', [

			{ name: 'Create Prevention Policies', value: 'createPreventionPolicies', description: 'Create Prevention Policies by specifying details about policy to create', action: 'Create prevention policies' },
			{ name: 'Delete Prevention Policies', value: 'deletePreventionPolicies', description: 'Delete a set of Prevention Policies by specifying their IDs', action: 'Delete prevention policies' },
			{ name: 'Get Prevention Policies', value: 'getPreventionPolicies', description: 'Retrieve a set of Prevention Policies by specifying their IDs', action: 'Get prevention policies' },
			{ name: 'Perform Prevention Policies Action', value: 'performPreventionPoliciesAction', description: 'Perform specified action on Prevention Policies', action: 'Perform prevention policies action' },
			{ name: 'Query Combined Prevention Policies', value: 'queryCombinedPreventionPolicies', description: 'Search for Prevention Policies in environment matching filter criteria', action: 'Query combined prevention policies' },
			{ name: 'Query Combined Prevention Policy Members', value: 'queryCombinedPreventionPolicyMembers', description: 'Search for members of a Prevention Policy returning host details', action: 'Query combined prevention policy members' },
			{ name: 'Query Prevention Policies', value: 'queryPreventionPolicies', description: 'Search for Prevention Policies returning IDs matching filter criteria', action: 'Query prevention policies' },
			{ name: 'Query Prevention Policy Members', value: 'queryPreventionPolicyMembers', description: 'Search for members of a Prevention Policy returning Agent IDs', action: 'Query prevention policy members' },
			{ name: 'Set Prevention Policies Precedence', value: 'setPreventionPoliciesPrecedence', description: 'Sets precedence of Prevention Policies based on order of IDs', action: 'Set prevention policies precedence' },
			{ name: 'Update Prevention Policies', value: 'updatePreventionPolicies', description: 'Update Prevention Policies by specifying ID and details to update', action: 'Update prevention policies' },
		
	], 'queryPreventionPolicies'),
];

export const preventionPoliciesFields: INodeProperties[] = [
	{
		displayName: 'Policy ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['preventionPolicies'],
				operation: ['queryCombinedPreventionPolicyMembers', 'queryPreventionPolicyMembers'],
			},
		},
		default: '',
		description: 'Prevention Policy ID',
	},
	{
		displayName: 'Policy IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['preventionPolicies'],
				operation: ['deletePreventionPolicies', 'getPreventionPolicies'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Prevention Policy IDs',
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
				resource: ['preventionPolicies'],
				operation: ['performPreventionPoliciesAction'],
			},
		},
		default: 'enable',
		required: true,
		description: 'Action to perform on policy',
	},
	createBodyJsonField('preventionPolicies', ['createPreventionPolicies',
					'performPreventionPoliciesAction',
					'setPreventionPoliciesPrecedence',
					'updatePreventionPolicies',]),
	...createStandardPaginationFields('preventionPolicies', ['queryCombinedPreventionPolicies',
					'queryCombinedPreventionPolicyMembers',
					'queryPreventionPolicies',
					'queryPreventionPolicyMembers',]),
];
