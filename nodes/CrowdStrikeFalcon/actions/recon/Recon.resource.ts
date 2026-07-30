import type { INodeProperties } from 'n8n-workflow';

export const reconOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['recon'],
			},
		},
		options: [
			{ name: 'Aggregate Notifications Exposed Data Records V1', value: 'aggregateNotificationsExposedDataRecordsV1', description: 'Get notification exposed data record aggregates', action: 'Aggregate notifications exposed data records V1' },
			{ name: 'Aggregate Notifications V1', value: 'aggregateNotificationsV1', description: 'Get notification aggregates', action: 'Aggregate notifications V1' },
			{ name: 'Create Actions V1', value: 'createActionsV1', description: 'Create actions for a monitoring rule', action: 'Create actions V1' },
			{ name: 'Create Export Jobs V1', value: 'createExportJobsV1', description: 'Launch asynchronous export job', action: 'Create export jobs V1' },
			{ name: 'Create Rules V1', value: 'createRulesV1', description: 'Create monitoring rules', action: 'Create rules V1' },
			{ name: 'Delete Action V1', value: 'deleteActionV1', description: 'Delete an action from a monitoring rule based on ID', action: 'Delete action V1' },
			{ name: 'Delete Export Jobs V1', value: 'deleteExportJobsV1', description: 'Delete export jobs based on IDs', action: 'Delete export jobs V1' },
			{ name: 'Delete Notifications V1', value: 'deleteNotificationsV1', description: 'Delete notifications based on IDs', action: 'Delete notifications V1' },
			{ name: 'Delete Rules V1', value: 'deleteRulesV1', description: 'Delete monitoring rules', action: 'Delete rules V1' },
			{ name: 'Get Actions V1', value: 'getActionsV1', description: 'Get actions based on their IDs', action: 'Get actions V1' },
			{ name: 'Get Export Jobs V1', value: 'getExportJobsV1', description: 'Get status of export jobs based on IDs', action: 'Get export jobs V1' },
			{ name: 'Get File Content for Export Jobs V1', value: 'getFileContentForExportJobsV1', description: 'Download file associated with job ID', action: 'Get file content for export jobs V1' },
			{ name: 'Get Notifications Detailed Translated V1', value: 'getNotificationsDetailedTranslatedV1', description: 'Get detailed translated notifications based on IDs', action: 'Get notifications detailed translated V1' },
			{ name: 'Get Notifications Detailed V1', value: 'getNotificationsDetailedV1', description: 'Get detailed notifications based on IDs', action: 'Get notifications detailed V1' },
			{ name: 'Get Notifications Exposed Data Records V1', value: 'getNotificationsExposedDataRecordsV1', description: 'Get notifications exposed data records based on IDs', action: 'Get notifications exposed data records V1' },
			{ name: 'Get Notifications Translated V1', value: 'getNotificationsTranslatedV1', description: 'Get translated notifications based on IDs', action: 'Get notifications translated V1' },
			{ name: 'Get Notifications V1', value: 'getNotificationsV1', description: 'Get notifications based on IDs', action: 'Get notifications V1' },
			{ name: 'Get Rules V1', value: 'getRulesV1', description: 'Get monitoring rules based on IDs', action: 'Get rules V1' },
			{ name: 'Preview Rule V1', value: 'previewRuleV1', description: 'Preview rules notification count and distribution', action: 'Preview rule V1' },
			{ name: 'Query Actions V1', value: 'queryActionsV1', description: 'Query actions based on provided criteria', action: 'Query actions V1' },
			{ name: 'Query Notifications Exposed Data Records V1', value: 'queryNotificationsExposedDataRecordsV1', description: 'Query notifications exposed data records based on criteria', action: 'Query notifications exposed data records V1' },
			{ name: 'Query Notifications V1', value: 'queryNotificationsV1', description: 'Query notifications based on provided criteria', action: 'Query notifications V1' },
			{ name: 'Query Rules V1', value: 'queryRulesV1', description: 'Query monitoring rules based on provided criteria', action: 'Query rules V1' },
			{ name: 'Update Action V1', value: 'updateActionV1', description: 'Update an action for a monitoring rule', action: 'Update action V1' },
			{ name: 'Update Notifications V1', value: 'updateNotificationsV1', description: 'Update notification status or assignee', action: 'Update notifications V1' },
			{ name: 'Update Rules V1', value: 'updateRulesV1', description: 'Update monitoring rules', action: 'Update rules V1' },
		],
		default: 'queryRulesV1',
	},
];

export const reconFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['recon'],
				operation: ['deleteActionV1', 'getFileContentForExportJobsV1'],
			},
		},
		default: '',
		required: true,
		description: 'Target ID',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['recon'],
				operation: [
					'deleteExportJobsV1',
					'deleteNotificationsV1',
					'deleteRulesV1',
					'getActionsV1',
					'getExportJobsV1',
					'getNotificationsDetailedTranslatedV1',
					'getNotificationsDetailedV1',
					'getNotificationsExposedDataRecordsV1',
					'getNotificationsTranslatedV1',
					'getNotificationsV1',
					'getRulesV1',
				],
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
				resource: ['recon'],
				operation: [
					'aggregateNotificationsExposedDataRecordsV1',
					'aggregateNotificationsV1',
					'createActionsV1',
					'createExportJobsV1',
					'createRulesV1',
					'previewRuleV1',
					'updateActionV1',
					'updateNotificationsV1',
					'updateRulesV1',
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
				resource: ['recon'],
				operation: [
					'queryActionsV1',
					'queryNotificationsExposedDataRecordsV1',
					'queryNotificationsV1',
					'queryRulesV1',
				],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['recon'],
				operation: [
					'queryActionsV1',
					'queryNotificationsExposedDataRecordsV1',
					'queryNotificationsV1',
					'queryRulesV1',
				],
			},
		},
		default: '',
		description: 'Search query string',
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
				resource: ['recon'],
				operation: [
					'queryActionsV1',
					'queryNotificationsExposedDataRecordsV1',
					'queryNotificationsV1',
					'queryRulesV1',
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
				resource: ['recon'],
				operation: [
					'queryActionsV1',
					'queryNotificationsExposedDataRecordsV1',
					'queryNotificationsV1',
					'queryRulesV1',
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
				resource: ['recon'],
				operation: [
					'queryActionsV1',
					'queryNotificationsExposedDataRecordsV1',
					'queryNotificationsV1',
					'queryRulesV1',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
