import type { INodeProperties } from 'n8n-workflow';

export const cloudSecurityAssetsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cloudSecurityAssets'],
			},
		},
		options: [
			{ name: 'Get Application Findings', value: 'cloudSecurityAssetsCombinedApplicationFindings', description: 'Get findings for an application resource with pagination', action: 'Get application findings' },
			{ name: 'Get Compliance by Account', value: 'cloudSecurityAssetsCombinedComplianceByAccount', description: 'Gets combined compliance data aggregated by account and region', action: 'Get compliance by account' },
			{ name: 'Get Assets by IDs', value: 'cloudSecurityAssetsEntitiesGet', description: 'Gets raw resources based on provided IDs', action: 'Get assets by IDs' },
			{ name: 'Get Assets by Body (POST)', value: 'cloudSecurityAssetsEntitiesPost', description: 'Gets raw resources based on IDs in request body', action: 'Get assets by body' },
			{ name: 'Query Assets', value: 'cloudSecurityAssetsQueries', description: 'Gets a list of resource IDs for given parameters', action: 'Query assets' },
		],
		default: 'cloudSecurityAssetsQueries',
	},
];

export const cloudSecurityAssetsFields: INodeProperties[] = [
	{
		displayName: 'Type',
		name: 'type',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudSecurityAssets'],
				operation: ['cloudSecurityAssetsCombinedApplicationFindings'],
			},
		},
		default: '',
		required: true,
		description: 'Asset type',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cloudSecurityAssets'],
				operation: ['cloudSecurityAssetsEntitiesGet'],
			},
		},
		default: '',
		description: 'Comma-separated list of asset IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['cloudSecurityAssets'],
				operation: ['cloudSecurityAssetsEntitiesPost'],
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
				resource: ['cloudSecurityAssets'],
				operation: ['cloudSecurityAssetsCombinedApplicationFindings', 'cloudSecurityAssetsCombinedComplianceByAccount', 'cloudSecurityAssetsQueries'],
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
				resource: ['cloudSecurityAssets'],
				operation: ['cloudSecurityAssetsCombinedApplicationFindings', 'cloudSecurityAssetsCombinedComplianceByAccount', 'cloudSecurityAssetsQueries'],
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
				resource: ['cloudSecurityAssets'],
				operation: ['cloudSecurityAssetsCombinedApplicationFindings', 'cloudSecurityAssetsCombinedComplianceByAccount', 'cloudSecurityAssetsQueries'],
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
				resource: ['cloudSecurityAssets'],
				operation: ['cloudSecurityAssetsCombinedApplicationFindings', 'cloudSecurityAssetsCombinedComplianceByAccount', 'cloudSecurityAssetsQueries'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
