import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const firewallPoliciesOperations: INodeProperties[] = [
	createOperationField('firewallPolicies', [

			{ name: 'Create Firewall Policies', value: 'createFirewallPolicies', description: 'Create Firewall Policies by specifying details about the policy to create', action: 'Create firewall policies' },
			{ name: 'Delete Firewall Policies', value: 'deleteFirewallPolicies', description: 'Delete a set of Firewall Policies by specifying their IDs', action: 'Delete firewall policies' },
			{ name: 'Get Firewall Policies', value: 'getFirewallPolicies', description: 'Retrieve a set of Firewall Policies by specifying their IDs', action: 'Get firewall policies' },
			{ name: 'Perform Firewall Policies Action', value: 'performFirewallPoliciesAction', description: 'Perform the specified action on the Firewall Policies specified in request', action: 'Perform firewall policies action' },
			{ name: 'Query Combined Firewall Policies', value: 'queryCombinedFirewallPolicies', description: 'Search for Firewall Policies in environment returning matching policies', action: 'Query combined firewall policies' },
			{ name: 'Query Combined Firewall Policy Members', value: 'queryCombinedFirewallPolicyMembers', description: 'Search for members of Firewall Policy returning matching host details', action: 'Query combined firewall policy members' },
			{ name: 'Query Firewall Policies', value: 'queryFirewallPolicies', description: 'Search for Firewall Policies in environment returning matching policy IDs', action: 'Query firewall policies' },
			{ name: 'Query Firewall Policy Members', value: 'queryFirewallPolicyMembers', description: 'Search for members of Firewall Policy returning Agent IDs', action: 'Query firewall policy members' },
			{ name: 'Set Firewall Policies Precedence', value: 'setFirewallPoliciesPrecedence', description: 'Sets precedence of Firewall Policies based on order of IDs', action: 'Set firewall policies precedence' },
			{ name: 'Update Firewall Policies', value: 'updateFirewallPolicies', description: 'Update Firewall Policies by specifying policy ID and details', action: 'Update firewall policies' },
		
	], 'queryFirewallPolicies'),
];

export const firewallPoliciesFields: INodeProperties[] = [
	{
		displayName: 'Policy ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['firewallPolicies'],
				operation: ['queryCombinedFirewallPolicyMembers', 'queryFirewallPolicyMembers'],
			},
		},
		default: '',
		description: 'Unique firewall policy ID',
	},
	createIdsField('firewallPolicies', ['deleteFirewallPolicies', 'getFirewallPolicies']),
	{
		displayName: 'Action Name',
		name: 'actionName',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['firewallPolicies'],
				operation: ['performFirewallPoliciesAction'],
			},
		},
		options: [
			{ name: 'Add Host Group', value: 'add-host-group' },
			{ name: 'Add Rule Group', value: 'add-rule-group' },
			{ name: 'Disable', value: 'disable' },
			{ name: 'Enable', value: 'enable' },
			{ name: 'Remove Host Group', value: 'remove-host-group' },
			{ name: 'Remove Rule Group', value: 'remove-rule-group' },
		],
		default: 'enable',
		required: true,
		description: 'Action to perform on the specified firewall policies',
	},
	{
		displayName: 'Clone ID',
		name: 'cloneId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['firewallPolicies'],
				operation: ['createFirewallPolicies'],
			},
		},
		default: '',
		description: 'ID of policy to clone from',
	},
	createBodyJsonField('firewallPolicies', ['createFirewallPolicies',
					'performFirewallPoliciesAction',
					'setFirewallPoliciesPrecedence',
					'updateFirewallPolicies',]),
	...createStandardPaginationFields('firewallPolicies', ['queryCombinedFirewallPolicies',
					'queryCombinedFirewallPolicyMembers',
					'queryFirewallPolicies',
					'queryFirewallPolicyMembers',]),
];
