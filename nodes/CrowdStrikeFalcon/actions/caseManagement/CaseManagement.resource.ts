import type { INodeProperties } from 'n8n-workflow';

export const caseManagementOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['caseManagement'],
			},
		},
		options: [
			{ name: 'Aggregates Access Tags', value: 'aggregatesAccessTagsPostV1', description: 'Get access tag aggregates', action: 'Get access tag aggregates' },
			{ name: 'Aggregates Notification Groups V1 (Deprecated)', value: 'aggregatesNotificationGroupsPostV1', description: 'Get notification groups aggregations (deprecated)', action: 'Get notification groups aggregations v1' },
			{ name: 'Aggregates Notification Groups V2', value: 'aggregatesNotificationGroupsPostV2', description: 'Get notification groups aggregations V2', action: 'Get notification groups aggregations v2' },
			{ name: 'Aggregates SLAs', value: 'aggregatesSlasPostV1', description: 'Get SLA aggregations', action: 'Get SLA aggregations' },
			{ name: 'Aggregates Templates', value: 'aggregatesTemplatesPostV1', description: 'Get templates aggregations', action: 'Get templates aggregations' },
			{ name: 'Get Fields by ID', value: 'entitiesFieldsGetV1', description: 'Get fields by ID', action: 'Get fields by ID' },
			{ name: 'Delete Notification Groups V1 (Deprecated)', value: 'entitiesNotificationGroupsDeleteV1', description: 'Delete notification groups by ID (deprecated)', action: 'Delete notification groups v1' },
			{ name: 'Delete Notification Groups V2', value: 'entitiesNotificationGroupsDeleteV2', description: 'Delete notification groups by ID V2', action: 'Delete notification groups v2' },
			{ name: 'Get Notification Groups V1 (Deprecated)', value: 'entitiesNotificationGroupsGetV1', description: 'Get notification groups by ID (deprecated)', action: 'Get notification groups v1' },
			{ name: 'Get Notification Groups V2', value: 'entitiesNotificationGroupsGetV2', description: 'Get notification groups by ID V2', action: 'Get notification groups v2' },
			{ name: 'Update Notification Group V1 (Deprecated)', value: 'entitiesNotificationGroupsPatchV1', description: 'Update notification group (deprecated)', action: 'Update notification group v1' },
			{ name: 'Update Notification Group V2', value: 'entitiesNotificationGroupsPatchV2', description: 'Update notification group V2', action: 'Update notification group v2' },
			{ name: 'Create Notification Group V1 (Deprecated)', value: 'entitiesNotificationGroupsPostV1', description: 'Create notification group (deprecated)', action: 'Create notification group v1' },
			{ name: 'Create Notification Group V2', value: 'entitiesNotificationGroupsPostV2', description: 'Create notification group V2', action: 'Create notification group v2' },
			{ name: 'Delete SLAs', value: 'entitiesSlasDeleteV1', description: 'Delete SLAs', action: 'Delete SLAs' },
			{ name: 'Get SLAs by ID', value: 'entitiesSlasGetV1', description: 'Get SLAs by ID', action: 'Get SLAs by ID' },
			{ name: 'Update SLA', value: 'entitiesSlasPatchV1', description: 'Update SLA', action: 'Update SLA' },
			{ name: 'Create SLA', value: 'entitiesSlasPostV1', description: 'Create SLA', action: 'Create SLA' },
			{ name: 'Get Template Snapshots', value: 'entitiesTemplateSnapshotsGetV1', description: 'Get template snapshots', action: 'Get template snapshots' },
			{ name: 'Delete Templates', value: 'entitiesTemplatesDeleteV1', description: 'Delete templates', action: 'Delete templates' },
			{ name: 'Export Templates', value: 'entitiesTemplatesExportGetV1', description: 'Export templates to files in a zip archive', action: 'Export templates' },
			{ name: 'Get Templates by ID', value: 'entitiesTemplatesGetV1', description: 'Get templates by ID', action: 'Get templates by ID' },
			{ name: 'Import Template', value: 'entitiesTemplatesImportPostV1', description: 'Import a template from a file', action: 'Import template' },
			{ name: 'Update Template', value: 'entitiesTemplatesPatchV1', description: 'Update template', action: 'Update template' },
			{ name: 'Create Template', value: 'entitiesTemplatesPostV1', description: 'Create template', action: 'Create template' },
			{ name: 'Query Access Tags', value: 'queriesAccessTagsGetV1', description: 'Query access tags', action: 'Query access tags' },
			{ name: 'Query Fields', value: 'queriesFieldsGetV1', description: 'Query fields', action: 'Query fields' },
			{ name: 'Query Notification Groups V1 (Deprecated)', value: 'queriesNotificationGroupsGetV1', description: 'Query notification groups (deprecated)', action: 'Query notification groups v1' },
			{ name: 'Query Notification Groups V2', value: 'queriesNotificationGroupsGetV2', description: 'Query notification groups V2', action: 'Query notification groups v2' },
			{ name: 'Query SLAs', value: 'queriesSlasGetV1', description: 'Query SLAs', action: 'Query SLAs' },
			{ name: 'Query Template Snapshots', value: 'queriesTemplateSnapshotsGetV1', description: 'Query template snapshots', action: 'Query template snapshots' },
			{ name: 'Query Templates', value: 'queriesTemplatesGetV1', description: 'Query templates', action: 'Query templates' },
		],
		default: 'queriesTemplatesGetV1',
	},
];

export const caseManagementFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                   IDs                                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caseManagement'],
				operation: [
					'entitiesFieldsGetV1',
					'entitiesNotificationGroupsDeleteV1',
					'entitiesNotificationGroupsDeleteV2',
					'entitiesNotificationGroupsGetV1',
					'entitiesNotificationGroupsGetV2',
					'entitiesSlasDeleteV1',
					'entitiesSlasGetV1',
					'entitiesTemplatesDeleteV1',
					'entitiesTemplatesGetV1',
					'entitiesTemplatesExportGetV1',
					'entitiesTemplateSnapshotsGetV1',
				],
			},
		},
		default: '',
		description: 'Comma-separated list of IDs',
	},

	/* -------------------------------------------------------------------------- */
	/*                                Body JSON                                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['caseManagement'],
				operation: [
					'aggregatesAccessTagsPostV1',
					'aggregatesNotificationGroupsPostV1',
					'aggregatesNotificationGroupsPostV2',
					'aggregatesSlasPostV1',
					'aggregatesTemplatesPostV1',
					'entitiesNotificationGroupsPatchV1',
					'entitiesNotificationGroupsPatchV2',
					'entitiesNotificationGroupsPostV1',
					'entitiesNotificationGroupsPostV2',
					'entitiesSlasPatchV1',
					'entitiesSlasPostV1',
					'entitiesTemplatesImportPostV1',
					'entitiesTemplatesPatchV1',
					'entitiesTemplatesPostV1',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON body payload for request',
	},

	/* -------------------------------------------------------------------------- */
	/*                             Pagination & Filters                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caseManagement'],
				operation: [
					'entitiesTemplatesExportGetV1',
					'queriesAccessTagsGetV1',
					'queriesFieldsGetV1',
					'queriesNotificationGroupsGetV1',
					'queriesNotificationGroupsGetV2',
					'queriesSlasGetV1',
					'queriesTemplateSnapshotsGetV1',
					'queriesTemplatesGetV1',
				],
			},
		},
		default: '',
		description: 'FQL filter string',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caseManagement'],
				operation: [
					'queriesAccessTagsGetV1',
					'queriesNotificationGroupsGetV1',
					'queriesNotificationGroupsGetV2',
					'queriesSlasGetV1',
					'queriesTemplatesGetV1',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
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
				resource: ['caseManagement'],
				operation: [
					'queriesAccessTagsGetV1',
					'queriesFieldsGetV1',
					'queriesNotificationGroupsGetV1',
					'queriesNotificationGroupsGetV2',
					'queriesSlasGetV1',
					'queriesTemplateSnapshotsGetV1',
					'queriesTemplatesGetV1',
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
				resource: ['caseManagement'],
				operation: [
					'queriesFieldsGetV1',
					'queriesNotificationGroupsGetV1',
					'queriesNotificationGroupsGetV2',
					'queriesSlasGetV1',
					'queriesTemplateSnapshotsGetV1',
					'queriesTemplatesGetV1',
				],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},
];
