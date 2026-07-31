import type { INodeProperties } from 'n8n-workflow';

import { createLimitField, createOffsetField, createOperationField } from '../common';

export const threatgraphOperations: INodeProperties[] = [
	createOperationField('threatgraph', [

			{ name: 'Combined Edges Get', value: 'combinedEdgesGet', description: 'Retrieve edges for a given vertex ID', action: 'Combined edges get' },
			{ name: 'Combined Ran On Get', value: 'combinedRanOnGet', description: 'Look up instances of indicators seen on devices', action: 'Combined ran on get' },
			{ name: 'Combined Summary Get', value: 'combinedSummaryGet', description: 'Retrieve summary for a given vertex ID', action: 'Combined summary get' },
			{ name: 'Entities Vertices Get', value: 'entitiesVerticesGet', description: 'Retrieve metadata for a given vertex ID (Legacy)', action: 'Entities vertices get' },
			{ name: 'Entities Vertices Get V2', value: 'entitiesVerticesGetv2', description: 'Retrieve metadata for a given vertex ID V2', action: 'Entities vertices get V2' },
			{ name: 'Queries Edgetypes Get', value: 'queriesEdgetypesGet', description: 'Show all available edge types', action: 'Queries edgetypes get' },
		
	], 'queriesEdgetypesGet'),
];

export const threatgraphFields: INodeProperties[] = [
	{
		displayName: 'Vertex ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['threatgraph'],
				operation: ['combinedEdgesGet'],
			},
		},
		default: '',
		required: true,
		description: 'Vertex ID string',
	},
	{
		displayName: 'Vertex IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['threatgraph'],
				operation: ['combinedSummaryGet', 'entitiesVerticesGet', 'entitiesVerticesGetv2'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of vertex IDs',
	},
	{
		displayName: 'Indicator Value',
		name: 'value',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['threatgraph'],
				operation: ['combinedRanOnGet'],
			},
		},
		default: '',
		required: true,
		description: 'Indicator value string (hash, domain, IP)',
	},
	{
		displayName: 'Indicator Type',
		name: 'type',
		type: 'options',
		options: [
			{ name: 'Domain', value: 'domain' },
			{ name: 'IPv4', value: 'ipv4' },
			{ name: 'IPv6', value: 'ipv6' },
			{ name: 'MD5', value: 'md5' },
			{ name: 'SHA1', value: 'sha1' },
			{ name: 'SHA256', value: 'sha256' },
		],
		displayOptions: {
			show: {
				resource: ['threatgraph'],
				operation: ['combinedRanOnGet'],
			},
		},
		default: 'sha256',
		required: true,
		description: 'Type of indicator',
	},
	{
		displayName: 'Edge Type',
		name: 'edgeType',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['threatgraph'],
				operation: ['combinedEdgesGet'],
			},
		},
		default: 'parent_process',
		required: true,
		description: 'Target edge type string',
	},
	{
		displayName: 'Vertex Type',
		name: 'vertexType',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['threatgraph'],
				operation: ['combinedSummaryGet', 'entitiesVerticesGet', 'entitiesVerticesGetv2'],
			},
		},
		default: 'process',
		required: true,
		description: 'Target vertex type string',
	},
	{
		displayName: 'Direction',
		name: 'direction',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['threatgraph'],
				operation: ['combinedEdgesGet'],
			},
		},
		default: '',
		description: 'Edge direction string',
	},
	{
		displayName: 'Scope',
		name: 'scope',
		type: 'options',
		options: [
			{ name: 'Device', value: 'device' },
			{ name: 'Customer', value: 'customer' },
		],
		displayOptions: {
			show: {
				resource: ['threatgraph'],
				operation: ['combinedEdgesGet', 'combinedSummaryGet', 'entitiesVerticesGet', 'entitiesVerticesGetv2'],
			},
		},
		default: 'device',
		description: 'Query scope',
	},
	{
		displayName: 'Nano Timestamps',
		name: 'nano',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['threatgraph'],
				operation: ['combinedEdgesGet', 'combinedRanOnGet', 'combinedSummaryGet', 'entitiesVerticesGet', 'entitiesVerticesGetv2'],
			},
		},
		default: false,
		description: 'Whether to include nanosecond precision timestamps',
	},
	createLimitField('threatgraph', ['combinedEdgesGet', 'combinedRanOnGet']),
	createOffsetField('threatgraph', ['combinedEdgesGet', 'combinedRanOnGet']),
];
