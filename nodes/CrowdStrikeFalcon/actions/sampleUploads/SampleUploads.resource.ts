import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createLimitField, createOffsetField, createOperationField } from '../common';

export const sampleUploadsOperations: INodeProperties[] = [
	createOperationField('sampleUploads', [

			{ name: 'Archive Delete V1', value: 'archiveDeleteV1', description: 'Delete an archive that was uploaded previously', action: 'Archive delete V1' },
			{ name: 'Archive Get V1', value: 'archiveGetV1', description: 'Retrieves archive upload operation status', action: 'Archive get V1' },
			{ name: 'Archive List V1', value: 'archiveListV1', description: 'Retrieves archive files in chunks', action: 'Archive list V1' },
			{ name: 'Archive Upload V1', value: 'archiveUploadV1', description: 'Uploads an archive and extracts files list', action: 'Archive upload V1' },
			{ name: 'Archive Upload V2', value: 'archiveUploadV2', description: 'Uploads an archive and extracts files list V2', action: 'Archive upload V2' },
			{ name: 'Delete Sample V3', value: 'deleteSampleV3', description: 'Removes sample including file, meta and submissions', action: 'Delete sample V3' },
			{ name: 'Extraction Create V1', value: 'extractionCreateV1', description: 'Extracts files from uploaded archive', action: 'Extraction create V1' },
			{ name: 'Extraction Get V1', value: 'extractionGetV1', description: 'Retrieves files extraction operation status', action: 'Extraction get V1' },
			{ name: 'Extraction List V1', value: 'extractionListV1', description: 'Retrieves files extractions in chunks', action: 'Extraction list V1' },
			{ name: 'Get Sample V3', value: 'getSampleV3', description: 'Retrieves file associated with given ID SHA256', action: 'Get sample V3' },
			{ name: 'Upload Sample V3', value: 'uploadSampleV3', description: 'Upload a file for further cloud analysis', action: 'Upload sample V3' },
		
	], 'getSampleV3'),
];

export const sampleUploadsFields: INodeProperties[] = [
	{
		displayName: 'ID / SHA256',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sampleUploads'],
				operation: [
					'archiveDeleteV1',
					'archiveGetV1',
					'archiveListV1',
					'deleteSampleV3',
					'extractionGetV1',
					'extractionListV1',
					'getSampleV3',
				],
			},
		},
		default: '',
		required: true,
		description: 'Target ID or SHA256',
	},
	createBodyJsonField('sampleUploads', ['extractionCreateV1']),
	createLimitField('sampleUploads', ['archiveListV1', 'extractionListV1']),
	createOffsetField('sampleUploads', ['archiveListV1', 'extractionListV1']),
];
