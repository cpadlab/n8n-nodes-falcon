import type { INodeProperties } from 'n8n-workflow';

export const correlationRulesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['correlationRules'],
			},
		},
		options: [
			{ name: 'Aggregates Rule Versions Post V1', value: 'aggregatesRuleVersionsPostV1', description: 'Get rules aggregates via json', action: 'Aggregates rule versions post v1' },
			{ name: 'Combined Rules Get V1', value: 'combinedRulesGetV1', description: 'Find all rules matching query and filter', action: 'Combined rules get v1' },
			{ name: 'Combined Rules Get V2', value: 'combinedRulesGetV2', description: 'Find all rules matching query and filter V2', action: 'Combined rules get v2' },
			{ name: 'Entities Latest Rules Get V1', value: 'entitiesLatestRulesGetV1', description: 'Retrieve latest rule versions by rule IDs', action: 'Entities latest rules get v1' },
			{ name: 'Entities Rule Versions Delete V1', value: 'entitiesRuleVersionsDeleteV1', description: 'Delete rule versions by IDs', action: 'Entities rule versions delete v1' },
			{ name: 'Entities Rule Versions Export Post V1', value: 'entitiesRuleVersionsExportPostV1', description: 'Export rule versions', action: 'Entities rule versions export post v1' },
			{ name: 'Entities Rule Versions Import Post V1', value: 'entitiesRuleVersionsImportPostV1', description: 'Import rule versions', action: 'Entities rule versions import post v1' },
			{ name: 'Entities Rule Versions Publish Patch V1', value: 'entitiesRuleVersionsPublishPatchV1', description: 'Publish existing rule version', action: 'Entities rule versions publish patch v1' },
			{ name: 'Entities Rules Delete V1', value: 'entitiesRulesDeleteV1', description: 'Delete rules by IDs', action: 'Entities rules delete v1' },
			{ name: 'Entities Rules Get V1', value: 'entitiesRulesGetV1', description: 'Retrieve rules by IDs', action: 'Entities rules get v1' },
			{ name: 'Entities Rules Get V2', value: 'entitiesRulesGetV2', description: 'Retrieve rule versions by IDs', action: 'Entities rules get v2' },
			{ name: 'Entities Rules Patch V1', value: 'entitiesRulesPatchV1', description: 'Update rules', action: 'Entities rules patch v1' },
			{ name: 'Entities Rules Post V1', value: 'entitiesRulesPostV1', description: 'Create rule', action: 'Entities rules post v1' },
			{ name: 'Entities Templates Get V1', value: 'entitiesTemplatesGetV1Mixin0', description: 'Retrieve rule templates by IDs', action: 'Entities templates get v1' },
			{ name: 'Entities Templates Rules Post V1', value: 'entitiesTemplatesRulesPostV1', description: 'Create rule from template', action: 'Entities templates rules post v1' },
			{ name: 'Queries Rules Get V1', value: 'queriesRulesGetV1', description: 'Find all rule IDs matching query and filter', action: 'Queries rules get v1' },
			{ name: 'Queries Rules Get V2', value: 'queriesRulesGetV2', description: 'Find all rule version IDs matching query and filter', action: 'Queries rules get v2' },
			{ name: 'Queries Templates Get V1', value: 'queriesTemplatesGetV1Mixin0', description: 'Search rule template IDs matching filter', action: 'Queries templates get v1' },
		],
		default: 'combinedRulesGetV1',
	},
];

export const correlationRulesFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['correlationRules'],
				operation: [
					'aggregatesRuleVersionsPostV1',
					'entitiesRuleVersionsDeleteV1',
					'entitiesRulesDeleteV1',
					'entitiesRulesGetV1',
					'entitiesRulesGetV2',
					'entitiesTemplatesGetV1Mixin0',
				],
			},
		},
		default: '',
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Rule IDs',
		name: 'ruleIds',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['correlationRules'],
				operation: ['entitiesLatestRulesGetV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of rule IDs',
	},
	{
		displayName: 'Search Query (q)',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['correlationRules'],
				operation: ['combinedRulesGetV1', 'combinedRulesGetV2', 'queriesRulesGetV1', 'queriesRulesGetV2'],
			},
		},
		default: '',
		description: 'Free text search query',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['correlationRules'],
				operation: [
					'aggregatesRuleVersionsPostV1',
					'entitiesRuleVersionsExportPostV1',
					'entitiesRuleVersionsPublishPatchV1',
					'entitiesRulesPatchV1',
					'entitiesRulesPostV1',
					'entitiesTemplatesRulesPostV1',
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
				resource: ['correlationRules'],
				operation: [
					'aggregatesRuleVersionsPostV1',
					'combinedRulesGetV1',
					'combinedRulesGetV2',
					'queriesRulesGetV1',
					'queriesRulesGetV2',
					'queriesTemplatesGetV1Mixin0',
				],
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
				resource: ['correlationRules'],
				operation: [
					'combinedRulesGetV1',
					'combinedRulesGetV2',
					'queriesRulesGetV1',
					'queriesRulesGetV2',
					'queriesTemplatesGetV1Mixin0',
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
				resource: ['correlationRules'],
				operation: [
					'combinedRulesGetV1',
					'combinedRulesGetV2',
					'queriesRulesGetV1',
					'queriesRulesGetV2',
					'queriesTemplatesGetV1Mixin0',
				],
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
				resource: ['correlationRules'],
				operation: [
					'combinedRulesGetV1',
					'combinedRulesGetV2',
					'queriesRulesGetV1',
					'queriesRulesGetV2',
					'queriesTemplatesGetV1Mixin0',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
