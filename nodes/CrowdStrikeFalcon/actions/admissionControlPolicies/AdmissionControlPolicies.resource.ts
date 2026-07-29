import type { INodeProperties } from 'n8n-workflow';

export const admissionControlPoliciesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['admissionControlPolicies'],
			},
		},
		options: [
			{
				name: 'Query Policies',
				value: 'admissionControlQueryPolicies',
				description: 'Search admission control policies',
				action: 'Admission Control Policy: Query policies',
			},
			{
				name: 'Get Policies by IDs',
				value: 'admissionControlGetPolicies',
				description: 'Get admission control policies by IDs',
				action: 'Admission Control Policy: Get policies by IDs',
			},
			{
				name: 'Create Policy',
				value: 'admissionControlCreatePolicy',
				description: 'Create an admission control policy',
				action: 'Admission Control Policy: Create policy',
			},
			{
				name: 'Update Policy',
				value: 'admissionControlUpdatePolicy',
				description: 'Update an admission control policy',
				action: 'Admission Control Policy: Update policy',
			},
			{
				name: 'Delete Policies',
				value: 'admissionControlDeletePolicies',
				description: 'Delete one or more admission control policies',
				action: 'Admission Control Policy: Delete policies',
			},
			{
				name: 'Update Policy Precedence',
				value: 'admissionControlUpdatePolicyPrecedence',
				description: 'Update admission control policy precedence',
				action: 'Admission Control Policy: Update policy precedence',
			},
			{
				name: 'Add Host Groups',
				value: 'admissionControlAddHostGroups',
				description: 'Add host groups to an admission control policy',
				action: 'Admission Control Policy: Add host groups',
			},
			{
				name: 'Remove Host Groups',
				value: 'admissionControlRemoveHostGroups',
				description: 'Remove host groups from an admission control policy',
				action: 'Admission Control Policy: Remove host groups',
			},
			{
				name: 'Create Rule Groups',
				value: 'admissionControlCreateRuleGroups',
				description: 'Create rule groups in an admission control policy',
				action: 'Admission Control Policy: Create rule groups',
			},
			{
				name: 'Update Rule Group',
				value: 'admissionControlUpdateRuleGroups',
				description: 'Update a rule group in an admission control policy',
				action: 'Admission Control Policy: Update rule group',
			},
			{
				name: 'Delete Rule Groups',
				value: 'admissionControlDeleteRuleGroups',
				description: 'Delete rule groups from an admission control policy',
				action: 'Admission Control Policy: Delete rule groups',
			},
			{
				name: 'Set Rule Group Precedence',
				value: 'admissionControlSetRuleGroupPrecedence',
				description: 'Change precedence of rule groups within a policy',
				action: 'Admission Control Policy: Set rule group precedence',
			},
			{
				name: 'Replace Rule Group Selectors',
				value: 'admissionControlReplaceRuleGroupSelectors',
				description: 'Replace labels/namespaces of a rule group',
				action: 'Admission Control Policy: Replace rule group selectors',
			},
			{
				name: 'Add Rule Group Custom Rule',
				value: 'admissionControlAddRuleGroupCustomRule',
				description: 'Add custom Rego rules to a rule group',
				action: 'Admission Control Policy: Add rule group custom rule',
			},
			{
				name: 'Remove Rule Group Custom Rule',
				value: 'admissionControlRemoveRuleGroupCustomRule',
				description: 'Delete custom Rego rules from all rule groups',
				action: 'Admission Control Policy: Remove rule group custom rule',
			},
		],
		default: 'admissionControlQueryPolicies',
	},
];

export const admissionControlPoliciesFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                        admissionControlQueryPolicies                       */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['admissionControlPolicies'],
				operation: ['admissionControlQueryPolicies'],
			},
		},
		default: '',
		description: 'FQL filter string to refine results',
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
				resource: ['admissionControlPolicies'],
				operation: ['admissionControlQueryPolicies'],
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
				resource: ['admissionControlPolicies'],
				operation: ['admissionControlQueryPolicies'],
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
				resource: ['admissionControlPolicies'],
				operation: ['admissionControlQueryPolicies'],
			},
		},
		default: '',
		description: 'Sort criteria for returned policy IDs',
	},

	/* -------------------------------------------------------------------------- */
	/*             admissionControlGetPolicies / DeletePolicies                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Policy IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['admissionControlPolicies'],
				operation: ['admissionControlGetPolicies', 'admissionControlDeletePolicies'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of policy IDs',
	},

	/* -------------------------------------------------------------------------- */
	/*                         admissionControlUpdatePolicy                       */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Policy ID',
		name: 'policyId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['admissionControlPolicies'],
				operation: [
					'admissionControlUpdatePolicy',
					'admissionControlDeleteRuleGroups',
					'admissionControlRemoveHostGroups',
					'admissionControlRemoveRuleGroupCustomRule',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the policy to target',
	},
	{
		displayName: 'Policy Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['admissionControlPolicies'],
				operation: [
					'admissionControlCreatePolicy',
					'admissionControlUpdatePolicy',
					'admissionControlAddHostGroups',
					'admissionControlAddRuleGroupCustomRule',
					'admissionControlCreateRuleGroups',
					'admissionControlReplaceRuleGroupSelectors',
					'admissionControlSetRuleGroupPrecedence',
					'admissionControlUpdatePolicyPrecedence',
					'admissionControlUpdateRuleGroups',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON object payload for the request body',
	},

	/* -------------------------------------------------------------------------- */
	/*                     admissionControlDeleteRuleGroups                       */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Rule Group IDs',
		name: 'ruleGroupIds',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['admissionControlPolicies'],
				operation: ['admissionControlDeleteRuleGroups'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of rule group IDs to delete',
	},

	/* -------------------------------------------------------------------------- */
	/*                     admissionControlRemoveHostGroups                       */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Host Group IDs',
		name: 'hostGroupIds',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['admissionControlPolicies'],
				operation: ['admissionControlRemoveHostGroups'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of host group IDs to remove',
	},

	/* -------------------------------------------------------------------------- */
	/*               admissionControlRemoveRuleGroupCustomRule                    */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Custom Rule IDs',
		name: 'customRuleIds',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['admissionControlPolicies'],
				operation: ['admissionControlRemoveRuleGroupCustomRule'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of custom rule IDs to remove',
	},
];
