import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const cloudPoliciesOperations: INodeProperties[] = [
	createOperationField('cloudPolicies', [

			{ name: 'Clone Compliance Framework', value: 'cloneComplianceFramework', description: 'Clone an existing compliance framework', action: 'Clone compliance framework' },
			{ name: 'Create Compliance Control', value: 'createComplianceControl', description: 'Create a new custom compliance control', action: 'Create compliance control' },
			{ name: 'Create Compliance Framework', value: 'createComplianceFramework', description: 'Create a new custom compliance framework', action: 'Create compliance framework' },
			{ name: 'Create Rule', value: 'createRuleMixin0', description: 'Create a new rule', action: 'Create rule' },
			{ name: 'Create Rule Override', value: 'createRuleOverride', description: 'Create a new rule override', action: 'Create rule override' },
			{ name: 'Create Suppression Rule', value: 'createSuppressionRule', description: 'Create a new suppression rule', action: 'Create suppression rule' },
			{ name: 'Delete Compliance Controls', value: 'deleteComplianceControl', description: 'Delete custom compliance controls', action: 'Delete compliance controls' },
			{ name: 'Delete Compliance Framework', value: 'deleteComplianceFramework', description: 'Delete a custom compliance framework', action: 'Delete compliance framework' },
			{ name: 'Delete Rule', value: 'deleteRuleMixin0', description: 'Delete a rule', action: 'Delete rule' },
			{ name: 'Delete Rule Override', value: 'deleteRuleOverride', description: 'Delete a rule override', action: 'Delete rule override' },
			{ name: 'Delete Suppression Rules', value: 'deleteSuppressionRules', description: 'Delete Suppression Rules by ID', action: 'Delete suppression rules' },
			{ name: 'Get Compliance Controls', value: 'getComplianceControls', description: 'Get compliance controls by ID', action: 'Get compliance controls' },
			{ name: 'Get Compliance Frameworks', value: 'getComplianceFrameworks', description: 'Get compliance frameworks by ID', action: 'Get compliance frameworks' },
			{ name: 'Get Enriched Asset', value: 'getEnrichedAsset', description: 'Gets enriched assets combining primary and related resources', action: 'Get enriched asset' },
			{ name: 'Get Evaluation Result', value: 'getEvaluationResult', description: 'Gets evaluation results based on rule', action: 'Get evaluation result' },
			{ name: 'Get Rule', value: 'getRule', description: 'Get a rule by ID', action: 'Get rule' },
			{ name: 'Get Rule Input Schema', value: 'getRuleInputSchema', description: 'Get rule input schema for given resource type', action: 'Get rule input schema' },
			{ name: 'Get Rule Override', value: 'getRuleOverride', description: 'Get a rule override', action: 'Get rule override' },
			{ name: 'Get Suppression Rules', value: 'getSuppressionRules', description: 'Get Suppression Rules by ID', action: 'Get suppression rules' },
			{ name: 'Query Compliance Controls', value: 'queryComplianceControls', description: 'Query for compliance controls', action: 'Query compliance controls' },
			{ name: 'Query Compliance Frameworks', value: 'queryComplianceFrameworks', description: 'Query for compliance frameworks', action: 'Query compliance frameworks' },
			{ name: 'Query Rule', value: 'queryRule', description: 'Query for rules', action: 'Query rules' },
			{ name: 'Query Suppression Rules', value: 'querySuppressionRules', description: 'Query suppression rules', action: 'Query suppression rules' },
			{ name: 'Rename Section Compliance Framework', value: 'renameSectionComplianceFramework', description: 'Rename a section in a custom framework', action: 'Rename section compliance framework' },
			{ name: 'Replace Control Rules', value: 'replaceControlRules', description: 'Assign rules to a compliance control', action: 'Replace control rules' },
			{ name: 'Update Compliance Control', value: 'updateComplianceControl', description: 'Update a custom compliance control', action: 'Update compliance control' },
			{ name: 'Update Compliance Framework', value: 'updateComplianceFramework', description: 'Update a custom compliance framework', action: 'Update compliance framework' },
			{ name: 'Update Rule', value: 'updateRule', description: 'Update a rule', action: 'Update rule' },
			{ name: 'Update Rule Override', value: 'updateRuleOverride', description: 'Update a rule override', action: 'Update rule override' },
			{ name: 'Update Suppression Rule', value: 'updateSuppressionRule', description: 'Update a suppression rule', action: 'Update suppression rule' },
		
	], 'queryRule'),
];

export const cloudPoliciesFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                   IDs                                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'ID',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudPolicies'],
				operation: [
					'cloneComplianceFramework',
					'deleteComplianceFramework',
					'renameSectionComplianceFramework',
					'replaceControlRules',
					'updateComplianceControl',
					'updateComplianceFramework',
				],
			},
		},
		default: '',
		required: true,
		description: 'Single ID parameter',
	},
	{
		displayName: 'IDs',
		name: 'idsArray',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudPolicies'],
				operation: [
					'deleteComplianceControl',
					'deleteRuleMixin0',
					'deleteRuleOverride',
					'deleteSuppressionRules',
					'getComplianceControls',
					'getComplianceFrameworks',
					'getEnrichedAsset',
					'getEvaluationResult',
					'getRule',
					'getRuleOverride',
					'getSuppressionRules',
				],
			},
		},
		default: '',
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Section Name',
		name: 'sectionName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudPolicies'],
				operation: ['renameSectionComplianceFramework'],
			},
		},
		default: '',
		required: true,
		description: 'Section name to rename',
	},

	/* -------------------------------------------------------------------------- */
	/*                            Rule Schema Parameters                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudPolicies'],
				operation: ['getEnrichedAsset', 'getRuleInputSchema'],
			},
		},
		default: '',
		description: 'Domain string',
	},
	{
		displayName: 'Subdomain',
		name: 'subdomain',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudPolicies'],
				operation: ['getEnrichedAsset', 'getRuleInputSchema'],
			},
		},
		default: '',
		description: 'Subdomain string',
	},
	{
		displayName: 'Resource Type',
		name: 'resourceType',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudPolicies'],
				operation: ['getEnrichedAsset', 'getEvaluationResult', 'getRuleInputSchema'],
			},
		},
		default: '',
		description: 'Resource type string',
	},

	/* -------------------------------------------------------------------------- */
	/*                                Body JSON                                   */
	/* -------------------------------------------------------------------------- */
	createBodyJsonField('cloudPolicies', ['createComplianceControl',
					'createComplianceFramework',
					'createRuleMixin0',
					'createRuleOverride',
					'createSuppressionRule',
					'getEvaluationResult',
					'renameSectionComplianceFramework',
					'replaceControlRules',
					'updateComplianceControl',
					'updateComplianceFramework',
					'updateRule',
					'updateRuleOverride',
					'updateSuppressionRule',]),

	/* -------------------------------------------------------------------------- */
	/*                            Pagination & Filters                            */
	/* -------------------------------------------------------------------------- */
	...createStandardPaginationFields('cloudPolicies', ['queryComplianceControls', 'queryComplianceFrameworks', 'queryRule', 'querySuppressionRules']),
];
