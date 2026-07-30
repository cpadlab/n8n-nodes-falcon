import type { INodeProperties } from 'n8n-workflow';

export const kubernetesContainerComplianceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['kubernetesContainerCompliance'],
			},
		},
		options: [
			{ name: 'Aggregate Assessments Grouped by Clusters V2', value: 'aggregateAssessmentsGroupedByClustersV2', description: 'Returns cluster details along with aggregated assessment results organized by cluster', action: 'Aggregate assessments grouped by clusters V2' },
			{ name: 'Aggregate Assessments Grouped by Rules V2', value: 'aggregateAssessmentsGroupedByRulesV2', description: 'Returns rule details along with aggregated assessment results organized by compliance rule', action: 'Aggregate assessments grouped by rules V2' },
			{ name: 'Aggregate Compliance by Asset Type', value: 'aggregateComplianceByAssetType', description: 'Provides aggregated compliance assessment metrics organized by asset type', action: 'Aggregate compliance by asset type' },
			{ name: 'Aggregate Compliance by Cluster Type', value: 'aggregateComplianceByClusterType', description: 'Provides aggregated compliance assessment metrics organized by cluster type', action: 'Aggregate compliance by cluster type' },
			{ name: 'Aggregate Compliance by Framework', value: 'aggregateComplianceByFramework', description: 'Provides aggregated compliance assessment metrics organized by framework', action: 'Aggregate compliance by framework' },
			{ name: 'Aggregate Failed Rules by Clusters V3', value: 'aggregateFailedRulesByClustersV3', description: 'Retrieves the most non-compliant clusters ranked by failed compliance rules', action: 'Aggregate failed rules by clusters V3' },
			{ name: 'Aggregate Top Failed Images', value: 'aggregateTopFailedImages', description: 'Retrieves the most non-compliant container images ranked by failed assessments', action: 'Aggregate top failed images' },
			{ name: 'Combined Images Findings', value: 'combinedImagesFindings', description: 'Returns detailed compliance assessment results for container images', action: 'Combined images findings' },
			{ name: 'Combined Nodes Findings', value: 'combinedNodesFindings', description: 'Returns detailed compliance assessment results for kubernetes nodes', action: 'Combined nodes findings' },
			{ name: 'Get Rules Metadata by ID', value: 'getRulesMetadataByID', description: 'Retrieve detailed compliance rule information by specifying rule identifiers', action: 'Get rules metadata by ID' },
		],
		default: 'combinedImagesFindings',
	},
];

export const kubernetesContainerComplianceFields: INodeProperties[] = [
	{
		displayName: 'Rule IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kubernetesContainerCompliance'],
				operation: ['getRulesMetadataByID'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of compliance rule IDs',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kubernetesContainerCompliance'],
				operation: [
					'aggregateAssessmentsGroupedByClustersV2',
					'aggregateAssessmentsGroupedByRulesV2',
					'aggregateComplianceByAssetType',
					'aggregateComplianceByClusterType',
					'aggregateComplianceByFramework',
					'aggregateFailedRulesByClustersV3',
					'aggregateTopFailedImages',
					'combinedImagesFindings',
					'combinedNodesFindings',
				],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
	{
		displayName: 'After',
		name: 'after',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kubernetesContainerCompliance'],
				operation: ['combinedImagesFindings', 'combinedNodesFindings'],
			},
		},
		default: '',
		description: 'Pagination token for next page',
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
				resource: ['kubernetesContainerCompliance'],
				operation: [
					'aggregateAssessmentsGroupedByClustersV2',
					'aggregateAssessmentsGroupedByRulesV2',
					'aggregateFailedRulesByClustersV3',
					'aggregateTopFailedImages',
					'combinedImagesFindings',
					'combinedNodesFindings',
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
				resource: ['kubernetesContainerCompliance'],
				operation: [
					'aggregateAssessmentsGroupedByClustersV2',
					'aggregateAssessmentsGroupedByRulesV2',
				],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},
];
