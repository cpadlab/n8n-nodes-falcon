import type { INodeProperties } from 'n8n-workflow';

export const messageCenterOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['messageCenter'],
			},
		},
		options: [
			{ name: 'Aggregate Cases', value: 'aggregateCases', description: 'Retrieve aggregate case values', action: 'Aggregate cases' },
			{ name: 'Case Add Activity', value: 'caseAddActivity', description: 'Add activity comment to a case', action: 'Case add activity' },
			{ name: 'Case Add Attachment', value: 'caseAddAttachment', description: 'Upload attachment to a case', action: 'Case add attachment' },
			{ name: 'Case Download Attachment', value: 'caseDownloadAttachment', description: 'Retrieve attachment by ID', action: 'Case download attachment' },
			{ name: 'Create Case V2', value: 'createCaseV2', description: 'Create a new case', action: 'Create case V2' },
			{ name: 'Get Case Activity By IDs', value: 'getCaseActivityByIds', description: 'Retrieve activities for given IDs', action: 'Get case activity by IDs' },
			{ name: 'Get Case Entities By IDs', value: 'getCaseEntitiesByIDs', description: 'Retrieve message center cases', action: 'Get case entities by IDs' },
			{ name: 'Query Activity By Case ID', value: 'queryActivityByCaseID', description: 'Retrieve activity IDs for a case', action: 'Query activity by case ID' },
			{ name: 'Query Cases IDs By Filter', value: 'queryCasesIdsByFilter', description: 'Retrieve case IDs matching filter', action: 'Query cases IDs by filter' },
		],
		default: 'queryCasesIdsByFilter',
	},
];

export const messageCenterFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['messageCenter'],
				operation: ['caseDownloadAttachment'],
			},
		},
		default: '',
		required: true,
		description: 'Attachment ID',
	},
	{
		displayName: 'Case ID',
		name: 'caseId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['messageCenter'],
				operation: ['caseAddAttachment', 'queryActivityByCaseID'],
			},
		},
		default: '',
		required: true,
		description: 'Case ID string',
	},
	{
		displayName: 'User UUID',
		name: 'userUuid',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['messageCenter'],
				operation: ['caseAddAttachment'],
			},
		},
		default: '',
		required: true,
		description: 'User UUID string',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['messageCenter'],
				operation: [
					'aggregateCases',
					'caseAddActivity',
					'createCaseV2',
					'getCaseActivityByIds',
					'getCaseEntitiesByIDs',
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
				resource: ['messageCenter'],
				operation: ['queryActivityByCaseID', 'queryCasesIdsByFilter'],
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
				resource: ['messageCenter'],
				operation: ['queryActivityByCaseID', 'queryCasesIdsByFilter'],
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
				resource: ['messageCenter'],
				operation: ['queryActivityByCaseID', 'queryCasesIdsByFilter'],
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
				resource: ['messageCenter'],
				operation: ['queryActivityByCaseID', 'queryCasesIdsByFilter'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
