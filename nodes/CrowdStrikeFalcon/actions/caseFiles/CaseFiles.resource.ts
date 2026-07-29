import type { INodeProperties } from 'n8n-workflow';

export const caseFilesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['caseFiles'],
			},
		},
		options: [
			{ name: 'Aggregates File Details', value: 'aggregatesFileDetailsPostV1', description: 'Get file details aggregates as specified via JSON', action: 'Get file details aggregates' },
			{ name: 'Combined File Details', value: 'combinedFileDetailsGetV1', description: 'Query file details', action: 'Query file details' },
			{ name: 'Get File Details by ID', value: 'entitiesFileDetailsGetV1', description: 'Get file details by ID', action: 'Get file details by ID' },
			{ name: 'Update File Details', value: 'entitiesFileDetailsPatchV1', description: 'Update file details', action: 'Update file details' },
			{ name: 'Bulk Download Files', value: 'entitiesFilesBulkDownloadPostV1', description: 'Download multiple existing files from case as a ZIP', action: 'Bulk download case files' },
			{ name: 'Delete File Details by ID', value: 'entitiesFilesDeleteV1', description: 'Delete file details by ID', action: 'Delete file details by ID' },
			{ name: 'Download File', value: 'entitiesFilesDownloadGetV1', description: 'Download existing file from case', action: 'Download case file' },
			{ name: 'Download Files (Deprecated)', value: 'entitiesFilesDownloadPostV1', description: 'Download existing files from case (deprecated)', action: 'Download case files' },
			{ name: 'Upload File for Case', value: 'entitiesFilesUploadPostV1', description: 'Upload file for case', action: 'Upload file for case' },
			{ name: 'Get RTR File Metadata', value: 'entitiesGetRtrFileMetadataPostV1', description: 'Gets metadata for a file via RTR without retrieving it', action: 'Get RTR file metadata' },
			{ name: 'Retrieve RTR File', value: 'entitiesRetrieveRtrFilePostV1', description: 'Retrieves a file from host using RTR and adds it to a case', action: 'Retrieve RTR file' },
			{ name: 'Retrieve Recent RTR File', value: 'entitiesRetrieveRtrRecentFilePostV1', description: 'Retrieves a recently fetched RTR file and adds it to a case', action: 'Retrieve recent RTR file' },
			{ name: 'Query File Details IDs', value: 'queriesFileDetailsGetV1', description: 'Query for IDs of file details', action: 'Query file details IDs' },
		],
		default: 'combinedFileDetailsGetV1',
	},
];

export const caseFilesFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                   IDs                                      */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caseFiles'],
				operation: ['aggregatesFileDetailsPostV1', 'entitiesFileDetailsGetV1', 'entitiesFilesDeleteV1'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caseFiles'],
				operation: ['entitiesFilesDownloadGetV1'],
			},
		},
		default: '',
		required: true,
		description: 'File ID to download',
	},

	/* -------------------------------------------------------------------------- */
	/*                                 Case ID                                    */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Case ID',
		name: 'caseId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caseFiles'],
				operation: ['entitiesFilesUploadPostV1'],
			},
		},
		default: '',
		required: true,
		description: 'Case ID to attach uploaded file to',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caseFiles'],
				operation: ['entitiesFilesUploadPostV1'],
			},
		},
		default: '',
		description: 'File description',
	},

	/* -------------------------------------------------------------------------- */
	/*                                 Body JSON                                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['caseFiles'],
				operation: [
					'aggregatesFileDetailsPostV1',
					'entitiesFileDetailsPatchV1',
					'entitiesFilesBulkDownloadPostV1',
					'entitiesFilesDownloadPostV1',
					'entitiesGetRtrFileMetadataPostV1',
					'entitiesRetrieveRtrFilePostV1',
					'entitiesRetrieveRtrRecentFilePostV1',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON body payload',
	},

	/* -------------------------------------------------------------------------- */
	/*                            Pagination & Filters                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['caseFiles'],
				operation: ['aggregatesFileDetailsPostV1', 'combinedFileDetailsGetV1', 'queriesFileDetailsGetV1'],
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
				resource: ['caseFiles'],
				operation: ['combinedFileDetailsGetV1', 'queriesFileDetailsGetV1'],
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
				resource: ['caseFiles'],
				operation: ['combinedFileDetailsGetV1', 'queriesFileDetailsGetV1'],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},
];
