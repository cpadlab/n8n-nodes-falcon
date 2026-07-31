import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createFilterField, createIdsField, createLimitField, createOffsetField, createOperationField, createSortField } from '../common';

export const customIoaOperations: INodeProperties[] = [
	createOperationField('customIoa', [

			{ name: 'Create Rule', value: 'createRule', description: 'Create a rule within a rule group', action: 'Create rule' },
			{ name: 'Create Rule Group', value: 'createRuleGroupMixin0', description: 'Create a rule group for a platform', action: 'Create rule group' },
			{ name: 'Delete Rule Groups', value: 'deleteRuleGroupsMixin0', description: 'Delete rule groups by ID', action: 'Delete rule groups' },
			{ name: 'Delete Rules', value: 'deleteRules', description: 'Delete rules from a rule group by ID', action: 'Delete rules' },
			{ name: 'Get Patterns', value: 'getPatterns', description: 'Get pattern severities by ID', action: 'Get patterns' },
			{ name: 'Get Platforms', value: 'getPlatformsMixin0', description: 'Get platforms by ID', action: 'Get platforms' },
			{ name: 'Get Rule Groups', value: 'getRuleGroupsMixin0', description: 'Get rule groups by ID', action: 'Get rule groups' },
			{ name: 'Get Rule Types', value: 'getRuleTypes', description: 'Get rule types by ID', action: 'Get rule types' },
			{ name: 'Get Rules (POST)', value: 'getRulesGet', description: 'Get rules by ID via request body', action: 'Get rules post' },
			{ name: 'Get Rules (GET)', value: 'getRulesMixin0', description: 'Get rules by ID list', action: 'Get rules get' },
			{ name: 'Query Patterns', value: 'queryPatterns', description: 'Get all pattern severity IDs', action: 'Query patterns' },
			{ name: 'Query Platforms', value: 'queryPlatformsMixin0', description: 'Get all platform IDs', action: 'Query platforms' },
			{ name: 'Query Rule Groups Full', value: 'queryRuleGroupsFull', description: 'Find all rule groups matching query with filter', action: 'Query rule groups full' },
			{ name: 'Query Rule Groups', value: 'queryRuleGroupsMixin0', description: 'Finds all rule group IDs matching query', action: 'Query rule groups' },
			{ name: 'Query Rule Types', value: 'queryRuleTypes', description: 'Get all rule type IDs', action: 'Query rule types' },
			{ name: 'Query Rules', value: 'queryRulesMixin0', description: 'Finds all rule IDs matching query', action: 'Query rules' },
			{ name: 'Update Rule Group', value: 'updateRuleGroupMixin0', description: 'Update a rule group', action: 'Update rule group' },
			{ name: 'Update Rules', value: 'updateRules', description: 'Update rules within a rule group', action: 'Update rules' },
			{ name: 'Update Rules V2', value: 'updateRulesV2', description: 'Update subset of rules within a rule group V2', action: 'Update rules v2' },
			{ name: 'Validate', value: 'validate', description: 'Validates field values and test string matches', action: 'Validate' },
		
	], 'queryRuleGroupsFull'),
];

export const customIoaFields: INodeProperties[] = [
	{
		displayName: 'Rule Group ID',
		name: 'ruleGroupId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customIoa'],
				operation: ['deleteRules'],
			},
		},
		default: '',
		required: true,
		description: 'Rule Group ID containing the rules to delete',
	},
	createIdsField('customIoa', ['deleteRuleGroupsMixin0',
					'deleteRules',
					'getPatterns',
					'getPlatformsMixin0',
					'getRuleGroupsMixin0',
					'getRuleTypes',
					'getRulesMixin0',]),
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customIoa'],
				operation: ['deleteRuleGroupsMixin0', 'deleteRules'],
			},
		},
		default: '',
		description: 'Reason or comment for deletion',
	},
	createBodyJsonField('customIoa', ['createRule',
					'createRuleGroupMixin0',
					'getRulesGet',
					'updateRuleGroupMixin0',
					'updateRules',
					'updateRulesV2',
					'validate',]),
	createFilterField('customIoa', ['queryRuleGroupsFull', 'queryRuleGroupsMixin0', 'queryRulesMixin0']),
	{
		displayName: 'Search Query (q)',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customIoa'],
				operation: ['queryRuleGroupsFull', 'queryRuleGroupsMixin0', 'queryRulesMixin0'],
			},
		},
		default: '',
		description: 'Search string',
	},
	createLimitField('customIoa', ['queryPatterns', 'queryPlatformsMixin0', 'queryRuleGroupsFull', 'queryRuleGroupsMixin0', 'queryRuleTypes', 'queryRulesMixin0']),
	createOffsetField('customIoa', ['queryPatterns', 'queryPlatformsMixin0', 'queryRuleGroupsFull', 'queryRuleGroupsMixin0', 'queryRuleTypes', 'queryRulesMixin0']),
	createSortField('customIoa', ['queryRuleGroupsFull', 'queryRuleGroupsMixin0', 'queryRulesMixin0']),
];
