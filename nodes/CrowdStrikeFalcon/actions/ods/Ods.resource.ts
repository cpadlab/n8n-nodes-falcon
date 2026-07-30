import type { INodeProperties } from 'n8n-workflow';

export const odsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ods'],
			},
		},
		options: [
			{ name: 'Aggregate Query Scan Host Metadata', value: 'aggregateQueryScanHostMetadata', description: 'Get aggregates on ODS scan-hosts data', action: 'Aggregate query scan host metadata' },
			{ name: 'Aggregate Scans', value: 'aggregateScans', description: 'Get aggregates on ODS scan data', action: 'Aggregate scans' },
			{ name: 'Aggregate Scheduled Scans', value: 'aggregateScheduledScans', description: 'Get aggregates on ODS scheduled-scan data', action: 'Aggregate scheduled scans' },
			{ name: 'Cancel Scans', value: 'cancelScans', description: 'Cancel ODS scans for given scan IDs', action: 'Cancel scans' },
			{ name: 'Create Scan', value: 'createScan', description: 'Create ODS scan and start or schedule scan', action: 'Create scan' },
			{ name: 'Delete Scheduled Scans', value: 'deleteScheduledScans', description: 'Delete ODS scheduled-scans for given scheduled-scan IDs', action: 'Delete scheduled scans' },
			{ name: 'Get Malicious Files by IDs', value: 'getMaliciousFilesByIds', description: 'Get malicious files by IDs', action: 'Get malicious files by IDs' },
			{ name: 'Get Scan Host Metadata by IDs', value: 'getScanHostMetadataByIds', description: 'Get scan hosts by IDs', action: 'Get scan host metadata by IDs' },
			{ name: 'Get Scans by Scan IDs', value: 'getScansByScanIds', description: 'Get Scans by IDs', action: 'Get scans by scan IDs' },
			{ name: 'Get Scans by Scan IDs V2', value: 'getScansByScanIdsV2', description: 'Get Scans by IDs V2', action: 'Get scans by scan IDs V2' },
			{ name: 'Get Scheduled Scans by Scan IDs', value: 'getScheduledScansByScanIds', description: 'Get ScheduledScans by IDs', action: 'Get scheduled scans by scan IDs' },
			{ name: 'Query Malicious Files', value: 'queryMaliciousFiles', description: 'Query malicious files', action: 'Query malicious files' },
			{ name: 'Query Scan Host Metadata', value: 'queryScanHostMetadata', description: 'Query scan hosts', action: 'Query scan host metadata' },
			{ name: 'Query Scans', value: 'queryScans', description: 'Query Scans', action: 'Query scans' },
			{ name: 'Query Scheduled Scans', value: 'queryScheduledScans', description: 'Query ScheduledScans', action: 'Query scheduled scans' },
			{ name: 'Schedule Scan', value: 'scheduleScan', description: 'Create ODS scan and start or schedule scan for given scan request', action: 'Schedule scan' },
		],
		default: 'queryScans',
	},
];

export const odsFields: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ods'],
				operation: [
					'deleteScheduledScans',
					'getMaliciousFilesByIds',
					'getScanHostMetadataByIds',
					'getScansByScanIds',
					'getScansByScanIdsV2',
					'getScheduledScansByScanIds',
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
				resource: ['ods'],
				operation: [
					'aggregateQueryScanHostMetadata',
					'aggregateScans',
					'aggregateScheduledScans',
					'cancelScans',
					'createScan',
					'scheduleScan',
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
				resource: ['ods'],
				operation: [
					'deleteScheduledScans',
					'queryMaliciousFiles',
					'queryScanHostMetadata',
					'queryScans',
					'queryScheduledScans',
				],
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
				resource: ['ods'],
				operation: [
					'queryMaliciousFiles',
					'queryScanHostMetadata',
					'queryScans',
					'queryScheduledScans',
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
				resource: ['ods'],
				operation: [
					'queryMaliciousFiles',
					'queryScanHostMetadata',
					'queryScans',
					'queryScheduledScans',
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
				resource: ['ods'],
				operation: [
					'queryMaliciousFiles',
					'queryScanHostMetadata',
					'queryScans',
					'queryScheduledScans',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
