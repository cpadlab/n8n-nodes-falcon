import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const messageCenterOperations: INodeProperties[] = [
	createOperationField('messageCenter', [

			{ name: 'Aggregate Cases', value: 'aggregateCases', description: 'Retrieve aggregate case values', action: 'Aggregate cases' },
			{ name: 'Case Add Activity', value: 'caseAddActivity', description: 'Add activity comment to a case', action: 'Case add activity' },
			{ name: 'Case Add Attachment', value: 'caseAddAttachment', description: 'Upload attachment to a case', action: 'Case add attachment' },
			{ name: 'Case Download Attachment', value: 'caseDownloadAttachment', description: 'Retrieve attachment by ID', action: 'Case download attachment' },
			{ name: 'Create Case V2', value: 'createCaseV2', description: 'Create a new case', action: 'Create case V2' },
			{ name: 'Get Case Activity By IDs', value: 'getCaseActivityByIds', description: 'Retrieve activities for given IDs', action: 'Get case activity by IDs' },
			{ name: 'Get Case Entities By IDs', value: 'getCaseEntitiesByIDs', description: 'Retrieve message center cases', action: 'Get case entities by IDs' },
			{ name: 'Query Activity By Case ID', value: 'queryActivityByCaseID', description: 'Retrieve activity IDs for a case', action: 'Query activity by case ID' },
			{ name: 'Query Cases IDs By Filter', value: 'queryCasesIdsByFilter', description: 'Retrieve case IDs matching filter', action: 'Query cases IDs by filter' },
		
	], 'queryCasesIdsByFilter'),
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
	createBodyJsonField('messageCenter', ['aggregateCases',
					'caseAddActivity',
					'createCaseV2',
					'getCaseActivityByIds',
					'getCaseEntitiesByIDs',]),
	...createStandardPaginationFields('messageCenter', ['queryActivityByCaseID', 'queryCasesIdsByFilter']),
];
