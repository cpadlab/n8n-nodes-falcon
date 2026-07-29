import type { INodeProperties } from 'n8n-workflow';

export const exposureManagementOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['exposureManagement'],
			},
		},
		options: [
			{ name: 'Aggregate External Assets', value: 'aggregateExternalAssets', description: 'Returns external assets aggregates', action: 'Aggregate external assets' },
			{ name: 'Blob Download External Assets', value: 'blobDownloadExternalAssets', description: 'Download the entire contents of the blob', action: 'Blob download external assets' },
			{ name: 'Blob Preview External Assets', value: 'blobPreviewExternalAssets', description: 'Download a preview of the blob', action: 'Blob preview external assets' },
			{ name: 'Combined Ecosystem Subsidiaries', value: 'combinedEcosystemSubsidiaries', description: 'Retrieves a list of ecosystem subsidiaries with details', action: 'Combined ecosystem subsidiaries' },
			{ name: 'Delete External Assets', value: 'deleteExternalAssets', description: 'Delete multiple external assets', action: 'Delete external assets' },
			{ name: 'Get Ecosystem Subsidiaries', value: 'getEcosystemSubsidiaries', description: 'Retrieves detailed information about ecosystem subsidiaries by ID', action: 'Get ecosystem subsidiaries' },
			{ name: 'Get External Assets', value: 'getExternalAssets', description: 'Get details on external assets by providing IDs', action: 'Get external assets' },
			{ name: 'Patch External Assets', value: 'patchExternalAssets', description: 'Update the details of external assets', action: 'Patch external assets' },
			{ name: 'Post External Assets Inventory V1', value: 'postExternalAssetsInventoryV1', description: 'Add external assets for external asset scanning', action: 'Post external assets inventory v1' },
			{ name: 'Query Ecosystem Subsidiaries', value: 'queryEcosystemSubsidiaries', description: 'Retrieves a list of IDs for ecosystem subsidiaries', action: 'Query ecosystem subsidiaries' },
			{ name: 'Query External Assets', value: 'queryExternalAssets', description: 'Get a list of external asset IDs matching filter', action: 'Query external assets' },
			{ name: 'Query External Assets V2', value: 'queryExternalAssetsV2', description: 'Get a list of external asset IDs matching filter V2', action: 'Query external assets v2' },
		],
		default: 'queryExternalAssets',
	},
];

export const exposureManagementFields: INodeProperties[] = [
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['exposureManagement'],
				operation: ['blobDownloadExternalAssets', 'blobPreviewExternalAssets'],
			},
		},
		default: '',
		required: true,
		description: 'Asset ID',
	},
	{
		displayName: 'Hash',
		name: 'hash',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['exposureManagement'],
				operation: ['blobDownloadExternalAssets', 'blobPreviewExternalAssets'],
			},
		},
		default: '',
		required: true,
		description: 'Blob hash string',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['exposureManagement'],
				operation: ['deleteExternalAssets', 'getEcosystemSubsidiaries', 'getExternalAssets'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['exposureManagement'],
				operation: [
					'aggregateExternalAssets',
					'deleteExternalAssets',
					'patchExternalAssets',
					'postExternalAssetsInventoryV1',
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
				resource: ['exposureManagement'],
				operation: [
					'combinedEcosystemSubsidiaries',
					'queryEcosystemSubsidiaries',
					'queryExternalAssets',
					'queryExternalAssetsV2',
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
				resource: ['exposureManagement'],
				operation: [
					'combinedEcosystemSubsidiaries',
					'queryEcosystemSubsidiaries',
					'queryExternalAssets',
					'queryExternalAssetsV2',
				],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['exposureManagement'],
				operation: ['combinedEcosystemSubsidiaries', 'queryEcosystemSubsidiaries', 'queryExternalAssets'],
			},
		},
		default: '',
		description: 'Starting index or token for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['exposureManagement'],
				operation: [
					'combinedEcosystemSubsidiaries',
					'queryEcosystemSubsidiaries',
					'queryExternalAssets',
					'queryExternalAssetsV2',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
	{
		displayName: 'Version ID',
		name: 'versionId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['exposureManagement'],
				operation: ['combinedEcosystemSubsidiaries', 'getEcosystemSubsidiaries', 'queryEcosystemSubsidiaries'],
			},
		},
		default: '',
		description: 'Version identifier',
	},
];
