import type { INodeProperties } from 'n8n-workflow';

export const saasSecurityOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['saasSecurity'],
			},
		},
		options: [
			{ name: 'Dismiss Affected Entity V3', value: 'dismissAffectedEntityV3', description: 'Perform dismiss to an affected entity in a security check', action: 'Dismiss affected entity V3' },
			{ name: 'Dismiss Security Check V3', value: 'dismissSecurityCheckV3', description: 'Perform dismiss to a security check by ID', action: 'Dismiss security check V3' },
			{ name: 'Get Activity Monitor V3', value: 'getActivityMonitorV3', description: 'Get a list of all events in monitor', action: 'Get activity monitor V3' },
			{ name: 'Get Alerts V3', value: 'getAlertsV3', description: 'Get data on specific alert or list of all alerts', action: 'Get alerts V3' },
			{ name: 'Get App Inventory', value: 'getAppInventory', description: 'Get a list of all apps in Applications inventory', action: 'Get app inventory' },
			{ name: 'Get App Inventory Users', value: 'getAppInventoryUsers', description: 'Get users associated with an app from Applications inventory', action: 'Get app inventory users' },
			{ name: 'Get Asset Inventory V3', value: 'getAssetInventoryV3', description: 'Get a list of all assets in Data inventory', action: 'Get asset inventory V3' },
			{ name: 'Get Device Inventory V3', value: 'getDeviceInventoryV3', description: 'Get a list of all devices', action: 'Get device inventory V3' },
			{ name: 'Get Integrations V3', value: 'getIntegrationsV3', description: 'Get a list of connected integrations in your account', action: 'Get integrations V3' },
			{ name: 'Get Metrics V3', value: 'getMetricsV3', description: 'Get metrics on security checks', action: 'Get metrics V3' },
			{ name: 'Get Security Check Affected V3', value: 'getSecurityCheckAffectedV3', description: 'Get a list of affected entities', action: 'Get security check affected V3' },
			{ name: 'Get Security Check Compliance V3', value: 'getSecurityCheckComplianceV3', description: 'Get a list of compliance standards attached to a check', action: 'Get security check compliance V3' },
			{ name: 'Get Security Checks V3', value: 'getSecurityChecksV3', description: 'Get specific security check by ID or list all security checks', action: 'Get security checks V3' },
			{ name: 'Get Supported SaaS V3', value: 'getSupportedSaasV3', description: 'Get a list of supported integrations', action: 'Get supported SaaS V3' },
			{ name: 'Get System Logs V3', value: 'getSystemLogsV3', description: 'Get a list of all system logs', action: 'Get system logs V3' },
			{ name: 'Get System Users V3', value: 'getSystemUsersV3', description: 'Get a list of system users', action: 'Get system users V3' },
			{ name: 'Get User Inventory V3', value: 'getUserInventoryV3', description: 'Get a list of all users', action: 'Get user inventory V3' },
			{ name: 'Integration Builder End Transaction V3', value: 'integrationBuilderEndTransactionV3', description: 'Make close transaction call after uploading data', action: 'Integration builder end transaction V3' },
			{ name: 'Integration Builder Get Status V3', value: 'integrationBuilderGetStatusV3', description: 'Get transaction status for custom integration', action: 'Integration builder get status V3' },
			{ name: 'Integration Builder Reset V3', value: 'integrationBuilderResetV3', description: 'Make a reset call to custom integration', action: 'Integration builder reset V3' },
			{ name: 'Integration Builder Upload V3', value: 'integrationBuilderUploadV3', description: 'Send data to specific source in custom integration', action: 'Integration builder upload V3' },
		],
		default: 'getSecurityChecksV3',
	},
];

export const saasSecurityFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['saasSecurity'],
				operation: [
					'dismissAffectedEntityV3',
					'dismissSecurityCheckV3',
					'getSecurityCheckAffectedV3',
					'getSecurityCheckComplianceV3',
					'integrationBuilderEndTransactionV3',
					'integrationBuilderGetStatusV3',
					'integrationBuilderResetV3',
					'integrationBuilderUploadV3',
				],
			},
		},
		default: '',
		required: true,
		description: 'Target ID',
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['saasSecurity'],
				operation: ['getAppInventoryUsers'],
			},
		},
		default: '',
		required: true,
		description: 'App Inventory item ID',
	},
	{
		displayName: 'Source ID',
		name: 'sourceId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['saasSecurity'],
				operation: ['integrationBuilderUploadV3'],
			},
		},
		default: '',
		required: true,
		description: 'Custom integration source ID',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['saasSecurity'],
				operation: [
					'dismissAffectedEntityV3',
					'dismissSecurityCheckV3',
					'integrationBuilderUploadV3',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON request payload',
	},
	{
		displayName: 'Integration ID',
		name: 'integrationId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['saasSecurity'],
				operation: [
					'getActivityMonitorV3',
					'getAlertsV3',
					'getAppInventory',
					'getAssetInventoryV3',
					'getDeviceInventoryV3',
					'getMetricsV3',
					'getSecurityChecksV3',
					'getUserInventoryV3',
				],
			},
		},
		default: '',
		description: 'Integration ID filter',
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
				resource: ['saasSecurity'],
				operation: [
					'getActivityMonitorV3',
					'getAlertsV3',
					'getAppInventory',
					'getAssetInventoryV3',
					'getDeviceInventoryV3',
					'getMetricsV3',
					'getSecurityCheckAffectedV3',
					'getSecurityChecksV3',
					'getSystemLogsV3',
					'getUserInventoryV3',
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
				resource: ['saasSecurity'],
				operation: [
					'getAlertsV3',
					'getAppInventory',
					'getAssetInventoryV3',
					'getDeviceInventoryV3',
					'getMetricsV3',
					'getSecurityCheckAffectedV3',
					'getSecurityChecksV3',
					'getSystemLogsV3',
					'getUserInventoryV3',
				],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},
];
