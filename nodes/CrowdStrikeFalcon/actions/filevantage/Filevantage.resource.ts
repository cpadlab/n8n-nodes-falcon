import type { INodeProperties } from 'n8n-workflow';

export const filevantageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['filevantage'],
			},
		},
		options: [
			{ name: 'Create Policies', value: 'createPolicies', description: 'Creates a new policy of the specified type', action: 'Create policies' },
			{ name: 'Create Rule Groups', value: 'createRuleGroups', description: 'Creates a new rule group of the specified type', action: 'Create rule groups' },
			{ name: 'Create Rules', value: 'createRules', description: 'Creates a new rule configuration within the specified rule group', action: 'Create rules' },
			{ name: 'Create Scheduled Exclusions', value: 'createScheduledExclusions', description: 'Creates a new scheduled exclusion configuration for policy', action: 'Create scheduled exclusions' },
			{ name: 'Delete Policies', value: 'deletePolicies', description: 'Deletes 1 or more policies', action: 'Delete policies' },
			{ name: 'Delete Rule Groups', value: 'deleteRuleGroups', description: 'Deletes 1 or more rule groups', action: 'Delete rule groups' },
			{ name: 'Delete Rules', value: 'deleteRules', description: 'Deletes 1 or more rules from specified rule group', action: 'Delete rules' },
			{ name: 'Delete Scheduled Exclusions', value: 'deleteScheduledExclusions', description: 'Deletes 1 or more scheduled exclusions from policy', action: 'Delete scheduled exclusions' },
			{ name: 'Get Actions', value: 'getActionsMixin0', description: 'Retrieves processing results for 1 or more actions', action: 'Get actions' },
			{ name: 'Get Changes', value: 'getChanges', description: 'Retrieve information on changes', action: 'Get changes' },
			{ name: 'Get Contents', value: 'getContents', description: 'Retrieves content captured for change ID', action: 'Get contents' },
			{ name: 'Get Policies', value: 'getPolicies', description: 'Retrieves configuration for 1 or more policies', action: 'Get policies' },
			{ name: 'Get Rule Groups', value: 'getRuleGroups', description: 'Retrieves rule group details for 1 or more rule groups', action: 'Get rule groups' },
			{ name: 'Get Rules', value: 'getRules', description: 'Retrieves configuration for 1 or more rules', action: 'Get rules' },
			{ name: 'Get Scheduled Exclusions', value: 'getScheduledExclusions', description: 'Retrieves configuration of scheduled exclusions', action: 'Get scheduled exclusions' },
			{ name: 'High Volume Query Changes', value: 'highVolumeQueryChanges', description: 'Returns 1 or more change IDs with high volume pagination', action: 'High volume query changes' },
			{ name: 'Query Actions', value: 'queryActionsMixin0', description: 'Returns one or more action IDs matching filter', action: 'Query actions' },
			{ name: 'Query Changes', value: 'queryChanges', description: 'Returns 1 or more change IDs matching filter', action: 'Query changes' },
			{ name: 'Query Policies', value: 'queryPolicies', description: 'Retrieve IDs of policies assigned the provided type', action: 'Query policies' },
			{ name: 'Query Rule Groups', value: 'queryRuleGroups', description: 'Retrieve IDs of rule groups of provided type', action: 'Query rule groups' },
			{ name: 'Query Scheduled Exclusions', value: 'queryScheduledExclusions', description: 'Retrieve IDs of scheduled exclusions in policy', action: 'Query scheduled exclusions' },
			{ name: 'Signal Changes External', value: 'signalChangesExternal', description: 'Initiates workflows for provided change IDs', action: 'Signal changes external' },
			{ name: 'Start Actions', value: 'startActions', description: 'Initiates specified action on provided change IDs', action: 'Start actions' },
			{ name: 'Update Policies', value: 'updatePolicies', description: 'Updates general information of provided policy', action: 'Update policies' },
			{ name: 'Update Policy Host Groups', value: 'updatePolicyHostGroups', description: 'Manage host groups assigned to a policy', action: 'Update policy host groups' },
			{ name: 'Update Policy Precedence', value: 'updatePolicyPrecedence', description: 'Updates policy precedence for policies of a type', action: 'Update policy precedence' },
			{ name: 'Update Policy Rule Groups', value: 'updatePolicyRuleGroups', description: 'Manage rule groups assigned to a policy', action: 'Update policy rule groups' },
			{ name: 'Update Rule Group Precedence', value: 'updateRuleGroupPrecedence', description: 'Updates rule precedence for rules in rule group', action: 'Update rule group precedence' },
			{ name: 'Update Rule Groups', value: 'updateRuleGroups', description: 'Updates name and description of rule group', action: 'Update rule groups' },
			{ name: 'Update Rules', value: 'updateRules', description: 'Updates rule configuration within specified rule group', action: 'Update rules' },
			{ name: 'Update Scheduled Exclusions', value: 'updateScheduledExclusions', description: 'Updates scheduled exclusion configuration', action: 'Update scheduled exclusions' },
		],
		default: 'queryChanges',
	},
];

export const filevantageFields: INodeProperties[] = [
	{
		displayName: 'Change ID / Content ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['filevantage'],
				operation: ['getContents'],
			},
		},
		default: '',
		required: true,
		description: 'Unique change or content ID',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['filevantage'],
				operation: [
					'deletePolicies',
					'deleteRuleGroups',
					'deleteRules',
					'deleteScheduledExclusions',
					'getActionsMixin0',
					'getChanges',
					'getPolicies',
					'getRuleGroups',
					'getRules',
					'getScheduledExclusions',
					'updatePolicyHostGroups',
					'updatePolicyPrecedence',
					'updatePolicyRuleGroups',
					'updateRuleGroupPrecedence',
				],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Rule Group ID',
		name: 'ruleGroupId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['filevantage'],
				operation: ['deleteRules', 'getRules', 'updateRuleGroupPrecedence'],
			},
		},
		default: '',
		required: true,
		description: 'Target rule group ID',
	},
	{
		displayName: 'Policy ID',
		name: 'policyId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['filevantage'],
				operation: [
					'deleteScheduledExclusions',
					'getScheduledExclusions',
					'queryScheduledExclusions',
					'updatePolicyHostGroups',
					'updatePolicyRuleGroups',
				],
			},
		},
		default: '',
		required: true,
		description: 'Target policy ID',
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['filevantage'],
				operation: ['queryPolicies', 'queryRuleGroups', 'updatePolicyPrecedence'],
			},
		},
		default: '',
		required: true,
		description: 'Policy or Rule Group type string',
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['filevantage'],
				operation: ['updatePolicyHostGroups', 'updatePolicyRuleGroups'],
			},
		},
		default: '',
		required: true,
		description: 'Action name (e.g. add, remove)',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['filevantage'],
				operation: [
					'createPolicies',
					'createRuleGroups',
					'createRules',
					'createScheduledExclusions',
					'signalChangesExternal',
					'startActions',
					'updatePolicies',
					'updateRuleGroups',
					'updateRules',
					'updateScheduledExclusions',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['filevantage'],
				operation: ['highVolumeQueryChanges', 'queryActionsMixin0', 'queryChanges'],
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
				resource: ['filevantage'],
				operation: [
					'highVolumeQueryChanges',
					'queryActionsMixin0',
					'queryChanges',
					'queryPolicies',
					'queryRuleGroups',
				],
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
				resource: ['filevantage'],
				operation: ['queryActionsMixin0', 'queryChanges', 'queryPolicies', 'queryRuleGroups'],
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
				resource: ['filevantage'],
				operation: [
					'highVolumeQueryChanges',
					'queryActionsMixin0',
					'queryChanges',
					'queryPolicies',
					'queryRuleGroups',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
