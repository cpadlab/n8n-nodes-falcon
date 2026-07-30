import type { INodeProperties } from 'n8n-workflow';

export const realTimeResponseAdminOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['realTimeResponseAdmin'],
			},
		},
		options: [
			{ name: 'Batch Admin Cmd', value: 'batchAdminCmd', description: 'Batch executes RTR admin command across hosts', action: 'Batch admin cmd' },
			{ name: 'RTR Check Admin Command Status', value: 'rTRCheckAdminCommandStatus', description: 'Get status of executed RTR admin command on host', action: 'RTR check admin command status' },
			{ name: 'RTR Create Put Files', value: 'rTRCreatePutFiles', description: 'Upload a new put-file for RTR put command', action: 'RTR create put files' },
			{ name: 'RTR Create Put Files V2', value: 'rTRCreatePutFilesV2', description: 'Upload a new put-file for RTR put command V2', action: 'RTR create put files V2' },
			{ name: 'RTR Create Scripts', value: 'rTRCreateScripts', description: 'Upload a new custom-script for RTR runscript command', action: 'RTR create scripts' },
			{ name: 'RTR Create Scripts V2', value: 'rTRCreateScriptsV2', description: 'Upload a new custom-script for RTR runscript command V2', action: 'RTR create scripts V2' },
			{ name: 'RTR Delete Put Files', value: 'rTRDeletePutFiles', description: 'Delete put-file based on ID', action: 'RTR delete put files' },
			{ name: 'RTR Delete Scripts', value: 'rTRDeleteScripts', description: 'Delete custom-script based on ID', action: 'RTR delete scripts' },
			{ name: 'RTR Execute Admin Command', value: 'rTRExecuteAdminCommand', description: 'Execute RTR admin command on single host', action: 'RTR execute admin command' },
			{ name: 'RTR Get Falcon Scripts', value: 'rTRGetFalconScripts', description: 'Get Falcon scripts with metadata and content', action: 'RTR get Falcon scripts' },
			{ name: 'RTR Get Put File Contents', value: 'rTRGetPutFileContents', description: 'Get RTR put file contents for given file ID', action: 'RTR get put file contents' },
			{ name: 'RTR Get Put Files', value: 'rTRGetPutFiles', description: 'Get put-files based on IDs', action: 'RTR get put files' },
			{ name: 'RTR Get Put Files V2', value: 'rTRGetPutFilesV2', description: 'Get put-files based on IDs V2', action: 'RTR get put files V2' },
			{ name: 'RTR Get Scripts', value: 'rTRGetScripts', description: 'Get custom-scripts based on IDs', action: 'RTR get scripts' },
			{ name: 'RTR Get Scripts V2', value: 'rTRGetScriptsV2', description: 'Get custom-scripts based on IDs V2', action: 'RTR get scripts V2' },
			{ name: 'RTR List Falcon Scripts', value: 'rTRListFalconScripts', description: 'Get list of Falcon script IDs available to user', action: 'RTR list Falcon scripts' },
			{ name: 'RTR List Put Files', value: 'rTRListPutFiles', description: 'Get list of put-file IDs available for put command', action: 'RTR list put files' },
			{ name: 'RTR List Scripts', value: 'rTRListScripts', description: 'Get list of custom-script IDs available for runscript command', action: 'RTR list scripts' },
			{ name: 'RTR Update Scripts', value: 'rTRUpdateScripts', description: 'Upload a new script to replace existing one', action: 'RTR update scripts' },
			{ name: 'RTR Update Scripts V2', value: 'rTRUpdateScriptsV2', description: 'Upload a new script to replace existing one V2', action: 'RTR update scripts V2' },
		],
		default: 'rTRListScripts',
	},
];

export const realTimeResponseAdminFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponseAdmin'],
				operation: [
					'rTRDeletePutFiles',
					'rTRDeleteScripts',
					'rTRGetPutFileContents',
					'rTRUpdateScripts',
					'rTRUpdateScriptsV2',
				],
			},
		},
		default: '',
		required: true,
		description: 'Target ID',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponseAdmin'],
				operation: [
					'rTRGetFalconScripts',
					'rTRGetPutFiles',
					'rTRGetPutFilesV2',
					'rTRGetScripts',
					'rTRGetScriptsV2',
				],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of IDs',
	},
	{
		displayName: 'Cloud Request ID',
		name: 'cloudRequestId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['realTimeResponseAdmin'],
				operation: ['rTRCheckAdminCommandStatus'],
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
				resource: ['realTimeResponseAdmin'],
				operation: ['rTRCheckAdminCommandStatus'],
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
				resource: ['realTimeResponseAdmin'],
				operation: ['batchAdminCmd', 'rTRExecuteAdminCommand'],
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
				resource: ['realTimeResponseAdmin'],
				operation: ['rTRListFalconScripts', 'rTRListPutFiles', 'rTRListScripts'],
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
				resource: ['realTimeResponseAdmin'],
				operation: ['rTRListFalconScripts', 'rTRListPutFiles', 'rTRListScripts'],
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
				resource: ['realTimeResponseAdmin'],
				operation: ['rTRListFalconScripts', 'rTRListPutFiles', 'rTRListScripts'],
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
				resource: ['realTimeResponseAdmin'],
				operation: ['rTRListFalconScripts', 'rTRListPutFiles', 'rTRListScripts'],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
