import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const cloudSecurityAssetsOperations: INodeProperties[] = [
	createOperationField('cloudSecurityAssets', [

			{ name: 'Get Application Findings', value: 'cloudSecurityAssetsCombinedApplicationFindings', description: 'Get findings for an application resource with pagination', action: 'Get application findings' },
			{ name: 'Get Compliance by Account', value: 'cloudSecurityAssetsCombinedComplianceByAccount', description: 'Gets combined compliance data aggregated by account and region', action: 'Get compliance by account' },
			{ name: 'Get Assets by IDs', value: 'cloudSecurityAssetsEntitiesGet', description: 'Gets raw resources based on provided IDs', action: 'Get assets by IDs' },
			{ name: 'Get Assets by Body (POST)', value: 'cloudSecurityAssetsEntitiesPost', description: 'Gets raw resources based on IDs in request body', action: 'Get assets by body' },
			{ name: 'Query Assets', value: 'cloudSecurityAssetsQueries', description: 'Gets a list of resource IDs for given parameters', action: 'Query assets' },
		
	], 'cloudSecurityAssetsQueries'),
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
	createIdsField('cloudSecurityAssets', ['cloudSecurityAssetsEntitiesGet']),
	createBodyJsonField('cloudSecurityAssets', ['cloudSecurityAssetsEntitiesPost']),
	...createStandardPaginationFields('cloudSecurityAssets', ['cloudSecurityAssetsCombinedApplicationFindings', 'cloudSecurityAssetsCombinedComplianceByAccount', 'cloudSecurityAssetsQueries']),
];
