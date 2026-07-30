import type { INodeProperties } from 'n8n-workflow';

export const realTimeResponseOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['realTimeResponse'],
			},
		},
		options: [
			{ name: 'Batch Active Responder Cmd', value: 'batchActiveResponderCmd', description: 'Batch executes RTR active-responder command across hosts', action: 'Batch active responder cmd' },
			{ name: 'Batch Cmd', value: 'batchCmd', description: 'Batch executes RTR read-only command across hosts', action: 'Batch cmd' },
			{ name: 'Batch Get Cmd', value: 'batchGetCmd', description: 'Batch executes get command across hosts to retrieve files', action: 'Batch get cmd' },
			{ name: 'Batch Get Cmd Status', value: 'batchGetCmdStatus', description: 'Retrieves status of specified batch get command', action: 'Batch get cmd status' },
			{ name: 'Batch Init Sessions', value: 'batchInitSessions', description: 'Batch initialize a RTR session on multiple hosts', action: 'Batch init sessions' },
			{ name: 'Batch Refresh Sessions', value: 'batchRefreshSessions', description: 'Batch refresh a RTR session on multiple hosts', action: 'Batch refresh sessions' },
			{ name: 'RTR Aggregate Sessions', value: 'rTRAggregateSessions', description: 'Get aggregates on session data', action: 'RTR aggregate sessions' },
			{ name: 'RTR Check Active Responder Command Status', value: 'rTRCheckActiveResponderCommandStatus', description: 'Get status of executed active-responder command on single host', action: 'RTR check active responder command status' },
			{ name: 'RTR Check Command Status', value: 'rTRCheckCommandStatus', description: 'Get status of executed command on single host', action: 'RTR check command status' },
			{ name: 'RTR Delete File', value: 'rTRDeleteFile', description: 'Delete a RTR session file', action: 'RTR delete file' },
			{ name: 'RTR Delete File V2', value: 'rTRDeleteFileV2', description: 'Delete a RTR session file V2', action: 'RTR delete file V2' },
			{ name: 'RTR Delete Queued Session', value: 'rTRDeleteQueuedSession', description: 'Delete a queued session command', action: 'RTR delete queued session' },
			{ name: 'RTR Delete Session', value: 'rTRDeleteSession', description: 'Delete a session', action: 'RTR delete session' },
			{ name: 'RTR Execute Active Responder Command', value: 'rTRExecuteActiveResponderCommand', description: 'Execute an active responder command on single host', action: 'RTR execute active responder command' },
			{ name: 'RTR Execute Command', value: 'rTRExecuteCommand', description: 'Execute a command on single host', action: 'RTR execute command' },
			{ name: 'RTR Get Extracted File Contents', value: 'rTRGetExtractedFileContents', description: 'Get RTR extracted file contents for session and SHA256', action: 'RTR get extracted file contents' },
			{ name: 'RTR Init Session', value: 'rTRInitSession', description: 'Initialize a new session with RTR cloud', action: 'RTR init session' },
			{ name: 'RTR List All Sessions', value: 'rTRListAllSessions', description: 'Get a list of session IDs', action: 'RTR list all sessions' },
			{ name: 'RTR List Files', value: 'rTRListFiles', description: 'Get a list of files for specified RTR session', action: 'RTR list files' },
			{ name: 'RTR List Files V2', value: 'rTRListFilesV2', description: 'Get a list of files for specified RTR session V2', action: 'RTR list files V2' },
			{ name: 'RTR List Queued Sessions', value: 'rTRListQueuedSessions', description: 'Get queued session metadata by session ID', action: 'RTR list queued sessions' },
			{ name: 'RTR List Sessions', value: 'rTRListSessions', description: 'Get session metadata by session ID', action: 'RTR list sessions' },
			{ name: 'RTR Pulse Session', value: 'rTRPulseSession', description: 'Refresh a session timeout on a single host', action: 'RTR pulse session' },
		],
		default: 'rTRListAllSessions',
	},
];

export const realTimeResponseFields: INodeProperties[] = [
	{
		displayName: 'Session ID',
		name: 'sessionId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponse'],
				operation: [
					'rTRDeleteFile',
					'rTRDeleteFileV2',
					'rTRDeleteQueuedSession',
					'rTRDeleteSession',
					'rTRGetExtractedFileContents',
					'rTRListFiles',
					'rTRListFilesV2',
				],
			},
		},
		default: '',
		required: true,
		description: 'Target RTR Session ID',
	},
	{
		displayName: 'File ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponse'],
				operation: ['rTRDeleteFile', 'rTRDeleteFileV2'],
			},
		},
		default: '',
		required: true,
		description: 'Target File ID',
	},
	{
		displayName: 'SHA256',
		name: 'sha256',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponse'],
				operation: ['rTRGetExtractedFileContents'],
			},
		},
		default: '',
		required: true,
		description: 'SHA256 hash of extracted file',
	},
	{
		displayName: 'Batch Get Command Request ID',
		name: 'batchGetCmdReqId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponse'],
				operation: ['batchGetCmdStatus'],
			},
		},
		default: '',
		required: true,
		description: 'Batch get command request ID',
	},
	{
		displayName: 'Cloud Request ID',
		name: 'cloudRequestId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponse'],
				operation: [
					'rTRCheckActiveResponderCommandStatus',
					'rTRCheckCommandStatus',
					'rTRDeleteQueuedSession',
				],
			},
		},
		default: '',
		required: true,
		description: 'Cloud Request ID',
	},
	{
		displayName: 'Sequence ID',
		name: 'sequenceId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['realTimeResponse'],
				operation: ['rTRCheckActiveResponderCommandStatus', 'rTRCheckCommandStatus'],
			},
		},
		default: 0,
		required: true,
		description: 'Sequence ID',
	},
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['realTimeResponse'],
				operation: [
					'batchActiveResponderCmd',
					'batchCmd',
					'batchGetCmd',
					'batchInitSessions',
					'batchRefreshSessions',
					'rTRAggregateSessions',
					'rTRExecuteActiveResponderCommand',
					'rTRExecuteCommand',
					'rTRInitSession',
					'rTRListQueuedSessions',
					'rTRListSessions',
					'rTRPulseSession',
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
				resource: ['realTimeResponse'],
				operation: ['rTRListAllSessions'],
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
				resource: ['realTimeResponse'],
				operation: ['rTRListAllSessions'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponse'],
				operation: ['rTRListAllSessions'],
			},
		},
		default: '',
		description: 'Starting index for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponse'],
				operation: ['rTRListAllSessions'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
