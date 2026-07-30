import type { INodeProperties } from 'n8n-workflow';

export const sampleUploadsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sampleUploads'],
			},
		},
		options: [
			{ name: 'Archive Get V1', value: 'archiveGetV1', description: 'Retrieves archive files from sample', action: 'Archive get V1' },
			{ name: 'Delete Sample V1', value: 'deleteSampleV1', description: 'Delete a sample by SHA256', action: 'Delete sample V1' },
			{ name: 'Delete Sample V2', value: 'deleteSampleV2', description: 'Delete a sample by SHA256 V2', action: 'Delete sample V2' },
			{ name: 'Download Sample V1', value: 'downloadSampleV1', description: 'Download a sample by SHA256', action: 'Download sample V1' },
			{ name: 'Get Sample V1', value: 'getSampleV1', description: 'Retrieve sample metadata by SHA256', action: 'Get sample V1' },
			{ name: 'Get Sample V2', value: 'getSampleV2', description: 'Retrieve sample metadata by SHA256 V2', action: 'Get sample V2' },
			{ name: 'Get Samples V1', value: 'getSamplesV1', description: 'Retrieve sample metadata by SHA256 list', action: 'Get samples V1' },
			{ name: 'Get Samples V2', value: 'getSamplesV2', description: 'Retrieve sample metadata by SHA256 list V2', action: 'Get samples V2' },
			{ name: 'Upload Sample V1', value: 'uploadSampleV1', description: 'Upload a sample file', action: 'Upload sample V1' },
			{ name: 'Upload Sample V2', value: 'uploadSampleV2', description: 'Upload a sample file V2', action: 'Upload sample V2' },
			{ name: 'Upload Sample V3', value: 'uploadSampleV3', description: 'Upload a sample file V3', action: 'Upload sample V3' },
		],
		default: 'getSamplesV2',
	},
];

export const sampleUploadsFields: INodeProperties[] = [
	{
		displayName: 'SHA256',
		name: 'sha256',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sampleUploads'],
				operation: [
					'archiveGetV1',
					'deleteSampleV1',
					'deleteSampleV2',
					'downloadSampleV1',
					'getSampleV1',
					'getSampleV2',
				],
			},
		},
		default: '',
		required: true,
		description: 'SHA256 hash of the sample',
	},
	{
		displayName: 'SHA256 List',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sampleUploads'],
				operation: ['getSamplesV1', 'getSamplesV2'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of SHA256 hashes',
	},
];
