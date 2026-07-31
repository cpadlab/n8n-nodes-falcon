import type { INodeProperties } from 'n8n-workflow';

import { createOperationField, createStandardPaginationFields } from '../common';

export const casesOperations: INodeProperties[] = [
	createOperationField('cases', [

			{
				name: 'Get Cases Query',
				value: 'queriesCasesGetV1',
				description: 'Retrieves all Case IDs matching a query filter',
				action: 'Get cases query',
			},
			{
				name: 'Get Cases by IDs',
				value: 'entitiesCasesPostV2',
				description: 'Retrieves full details for given Case IDs',
				action: 'Get cases by IDs',
			},
			{
				name: 'Create Case',
				value: 'entitiesCasesPutV2',
				description: 'Creates a new Case',
				action: 'Create a case',
			},
			{
				name: 'Update Case',
				value: 'entitiesCasesPatchV2',
				description: 'Updates specified fields on a Case',
				action: 'Update a case',
			},
			{
				name: 'Add Alert Evidence',
				value: 'entitiesAlertEvidencePostV1',
				description: 'Adds alert evidence to a specified Case',
				action: 'Add alert evidence',
			},
			{
				name: 'Add Event Evidence',
				value: 'entitiesEventEvidencePostV1',
				description: 'Adds event evidence to a specified Case',
				action: 'Add event evidence',
			},
			{
				name: 'Add Tags',
				value: 'entitiesCaseTagsPostV1',
				description: 'Adds tags to a specified Case',
				action: 'Add tags',
			},
			{
				name: 'Remove Tags',
				value: 'entitiesCaseTagsDeleteV1',
				description: 'Removes specified tags from a Case',
				action: 'Remove tags',
			},
			{
				name: 'Merge Cases',
				value: 'entitiesMergePostV1',
				description: 'Merges a source case into a destination case',
				action: 'Merge cases',
			},
		
	], 'queriesCasesGetV1'),
];

export const casesFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                               queriesCasesGetV1                            */
	/* -------------------------------------------------------------------------- */
	...createStandardPaginationFields('cases', ['queriesCasesGetV1']),
	{
		displayName: 'Search Query (Q)',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['queriesCasesGetV1'],
			},
		},
		default: '',
		description: 'Free-text search terms',
	},

	/* -------------------------------------------------------------------------- */
	/*                               entitiesCasesPostV2                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Case IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesCasesPostV2'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of Case IDs to retrieve',
	},

	/* -------------------------------------------------------------------------- */
	/*                               entitiesCasesPutV2                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesCasesPutV2'],
			},
		},
		default: '',
		required: true,
		description: 'Title of the new Case',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesCasesPutV2'],
			},
		},
		default: '',
		description: 'Detailed description of the Case',
	},
	{
		displayName: 'Priority',
		name: 'priority',
		type: 'options',
		options: [
			{ name: 'Low (10)', value: 10 },
			{ name: 'Medium (20)', value: 20 },
			{ name: 'High (30)', value: 30 },
			{ name: 'Critical (40)', value: 40 },
		],
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesCasesPutV2'],
			},
		},
		default: 20,
		description: 'Priority level for the Case',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesCasesPutV2'],
			},
		},
		default: 'open',
		description: 'Status of the Case (e.g., open, in_progress, closed)',
	},
	{
		displayName: 'Additional Fields (JSON)',
		name: 'additionalFieldsJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesCasesPutV2'],
			},
		},
		default: '',
		description: 'JSON string containing additional custom fields for case creation',
	},

	/* -------------------------------------------------------------------------- */
	/*                              entitiesCasesPatchV2                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Case ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: [
					'entitiesCasesPatchV2',
					'entitiesAlertEvidencePostV1',
					'entitiesEventEvidencePostV1',
					'entitiesCaseTagsPostV1',
					'entitiesCaseTagsDeleteV1',
				],
			},
		},
		default: '',
		required: true,
		description: 'ID of the Case to operate on',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesCasesPatchV2'],
			},
		},
		options: [
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Updated title of the Case',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Updated description of the Case',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{ name: 'Low (10)', value: 10 },
					{ name: 'Medium (20)', value: 20 },
					{ name: 'High (30)', value: 30 },
					{ name: 'Critical (40)', value: 40 },
				],
				default: 20,
				description: 'Updated priority level',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Updated status (e.g., open, in_progress, closed)',
			},
			{
				displayName: 'User ID',
				name: 'user_id',
				type: 'string',
				default: '',
				description: 'Assigned user ID',
			},
			{
				displayName: 'Group ID',
				name: 'group_id',
				type: 'string',
				default: '',
				description: 'Assigned group ID',
			},
		],
	},
	{
		displayName: 'Additional Fields (JSON)',
		name: 'additionalFieldsJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesCasesPatchV2'],
			},
		},
		default: '',
		description: 'JSON string containing additional custom fields for case update',
	},

	/* -------------------------------------------------------------------------- */
	/*                        entitiesAlertEvidencePostV1                         */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Alert Composite IDs',
		name: 'composite_ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesAlertEvidencePostV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of alert composite IDs to add as evidence',
	},

	/* -------------------------------------------------------------------------- */
	/*                        entitiesEventEvidencePostV1                         */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Event IDs',
		name: 'event_ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesEventEvidencePostV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of event IDs to add as evidence',
	},

	/* -------------------------------------------------------------------------- */
	/*                     entitiesCaseTagsPostV1 / DeleteV1                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Tags',
		name: 'tags',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesCaseTagsPostV1', 'entitiesCaseTagsDeleteV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of tags to add or remove',
	},

	/* -------------------------------------------------------------------------- */
	/*                            entitiesMergePostV1                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Source Case ID',
		name: 'source_id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesMergePostV1'],
			},
		},
		default: '',
		required: true,
		description: 'ID of the source Case to merge from',
	},
	{
		displayName: 'Destination Case ID',
		name: 'destination_id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['cases'],
				operation: ['entitiesMergePostV1'],
			},
		},
		default: '',
		required: true,
		description: 'ID of the destination Case to merge into',
	},
];