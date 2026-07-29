import type { INodeProperties } from 'n8n-workflow';

export const customStorageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customStorage'],
			},
		},
		options: [
			{ name: 'Delete Object', value: 'delete', description: 'Delete specified object', action: 'Delete object' },
			{ name: 'Delete Versioned Object', value: 'deleteVersionedObject', description: 'Delete specified versioned object', action: 'Delete versioned object' },
			{ name: 'Describe Collection', value: 'describeCollection', description: 'Fetch metadata about an existing collection', action: 'Describe collection' },
			{ name: 'Describe Collections', value: 'describeCollections', description: 'Fetch metadata about multiple existing collections', action: 'Describe collections' },
			{ name: 'Get Object', value: 'get', description: 'Get bytes for specified object', action: 'Get object' },
			{ name: 'Get Schema', value: 'getSchema', description: 'Get bytes of specified schema', action: 'Get schema' },
			{ name: 'Get Schema Metadata', value: 'getSchemaMetadata', description: 'Get metadata for specified schema', action: 'Get schema metadata' },
			{ name: 'Get Versioned Object', value: 'getVersionedObject', description: 'Get bytes for specified versioned object', action: 'Get versioned object' },
			{ name: 'Get Versioned Object Metadata', value: 'getVersionedObjectMetadata', description: 'Get metadata for specified versioned object', action: 'Get versioned object metadata' },
			{ name: 'List Objects', value: 'list', description: 'List object keys in specified collection', action: 'List objects' },
			{ name: 'List Collections', value: 'listCollections', description: 'List available collection names', action: 'List collections' },
			{ name: 'List Objects by Version', value: 'listObjectsByVersion', description: 'List object keys by collection version', action: 'List objects by version' },
			{ name: 'List Schemas', value: 'listSchemas', description: 'Get list of schemas for requested collection', action: 'List schemas' },
			{ name: 'Get Object Metadata', value: 'metadata', description: 'Get metadata for specified object', action: 'Get object metadata' },
			{ name: 'Search Objects', value: 'search', description: 'Search for objects matching filter criteria', action: 'Search objects' },
			{ name: 'Search Objects by Version', value: 'searchObjectsByVersion', description: 'Search for versioned objects matching filter criteria', action: 'Search objects by version' },
		],
		default: 'listCollections',
	},
];

export const customStorageFields: INodeProperties[] = [
	{
		displayName: 'Collection Name',
		name: 'collectionName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customStorage'],
				operation: [
					'delete',
					'deleteVersionedObject',
					'describeCollection',
					'get',
					'getSchema',
					'getSchemaMetadata',
					'getVersionedObject',
					'getVersionedObjectMetadata',
					'list',
					'listObjectsByVersion',
					'listSchemas',
					'metadata',
					'search',
					'searchObjectsByVersion',
				],
			},
		},
		default: '',
		required: true,
		description: 'Name of the collection',
	},
	{
		displayName: 'Collection Version',
		name: 'collectionVersion',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customStorage'],
				operation: [
					'deleteVersionedObject',
					'getVersionedObject',
					'getVersionedObjectMetadata',
					'listObjectsByVersion',
					'searchObjectsByVersion',
				],
			},
		},
		default: '',
		required: true,
		description: 'Version of the collection',
	},
	{
		displayName: 'Schema Version',
		name: 'schemaVersion',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customStorage'],
				operation: ['getSchema', 'getSchemaMetadata'],
			},
		},
		default: '',
		required: true,
		description: 'Schema version',
	},
	{
		displayName: 'Object Key',
		name: 'objectKey',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customStorage'],
				operation: [
					'delete',
					'deleteVersionedObject',
					'get',
					'getVersionedObject',
					'getVersionedObjectMetadata',
					'metadata',
				],
			},
		},
		default: '',
		required: true,
		description: 'Key of the object',
	},
	{
		displayName: 'Collection Names',
		name: 'names',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customStorage'],
				operation: ['describeCollections'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of collection names',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['customStorage'],
				operation: ['search', 'searchObjectsByVersion'],
			},
		},
		default: '',
		required: true,
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
				resource: ['customStorage'],
				operation: ['list', 'listCollections', 'listObjectsByVersion', 'listSchemas', 'search', 'searchObjectsByVersion'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
];
