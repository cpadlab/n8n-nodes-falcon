import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const containerImagesOperations: INodeProperties[] = [
	createOperationField('containerImages', [

			{ name: 'Aggregate Image Assessment History', value: 'aggregateImageAssessmentHistory', description: 'Image assessment history', action: 'Aggregate image assessment history' },
			{ name: 'Aggregate Image Count', value: 'aggregateImageCount', description: 'Aggregate count of images', action: 'Aggregate image count' },
			{ name: 'Aggregate Image Count by Base OS', value: 'aggregateImageCountByBaseOS', description: 'Aggregate count of images grouped by Base OS', action: 'Aggregate image count by base OS' },
			{ name: 'Aggregate Image Count by State', value: 'aggregateImageCountByState', description: 'Aggregate count of images grouped by state', action: 'Aggregate image count by state' },
			{ name: 'Combined Base Images', value: 'combinedBaseImages', description: 'Retrieves a list of base images for filter', action: 'Combined base images' },
			{ name: 'Combined Image by Vulnerability Count', value: 'combinedImageByVulnerabilityCount', description: 'Retrieve top x images with most vulnerabilities', action: 'Combined image by vulnerability count' },
			{ name: 'Combined Image Detail', value: 'combinedImageDetail', description: 'Retrieve image entities by filter criteria', action: 'Combined image detail' },
			{ name: 'Combined Image Issues Summary', value: 'combinedImageIssuesSummary', description: 'Retrieve image issues summary', action: 'Combined image issues summary' },
			{ name: 'Combined Image Vulnerability Summary', value: 'combinedImageVulnerabilitySummary', description: 'Aggregates information about vulnerabilities for an image', action: 'Combined image vulnerability summary' },
			{ name: 'Create Base Images Entities', value: 'createBaseImagesEntities', description: 'Creates base images using provided details', action: 'Create base images entities' },
			{ name: 'Delete Base Images', value: 'deleteBaseImages', description: 'Delete base images by UUID', action: 'Delete base images' },
			{ name: 'Get Combined Images', value: 'getCombinedImages', description: 'Get image assessment results with FQL filter', action: 'Get combined images' },
			{ name: 'Read Combined Images Export', value: 'readCombinedImagesExport', description: 'Retrieves paginated list of images for export', action: 'Read combined images export' },
		
	], 'getCombinedImages'),
];

export const containerImagesFields: INodeProperties[] = [
	{
		displayName: 'CID',
		name: 'cid',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['containerImages'],
				operation: ['combinedImageIssuesSummary', 'combinedImageVulnerabilitySummary'],
			},
		},
		default: '',
		required: true,
		description: 'Customer ID',
	},
	{
		displayName: 'Registry',
		name: 'registry',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['containerImages'],
				operation: ['combinedImageIssuesSummary', 'combinedImageVulnerabilitySummary'],
			},
		},
		default: '',
		required: true,
		description: 'Container registry',
	},
	{
		displayName: 'Repository',
		name: 'repository',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['containerImages'],
				operation: ['combinedImageIssuesSummary', 'combinedImageVulnerabilitySummary'],
			},
		},
		default: '',
		required: true,
		description: 'Container repository',
	},
	{
		displayName: 'Tag',
		name: 'tag',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['containerImages'],
				operation: ['combinedImageIssuesSummary', 'combinedImageVulnerabilitySummary'],
			},
		},
		default: '',
		required: true,
		description: 'Image tag',
	},
	{
		displayName: 'Base Image IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['containerImages'],
				operation: ['deleteBaseImages'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of base image UUIDs',
	},
	createBodyJsonField('containerImages', ['createBaseImagesEntities']),
	...createStandardPaginationFields('containerImages', ['aggregateImageAssessmentHistory',
					'aggregateImageCount',
					'aggregateImageCountByBaseOS',
					'aggregateImageCountByState',
					'combinedBaseImages',
					'combinedImageByVulnerabilityCount',
					'combinedImageDetail',
					'getCombinedImages',
					'readCombinedImagesExport',]),
];
