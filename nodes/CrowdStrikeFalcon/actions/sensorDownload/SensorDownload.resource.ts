import type { INodeProperties } from 'n8n-workflow';

export const sensorDownloadOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sensorDownload'],
			},
		},
		options: [
			{ name: 'Download Sensor Installer By ID', value: 'downloadSensorInstallerById', description: 'Download sensor installer by SHA256 ID', action: 'Download sensor installer by ID' },
			{ name: 'Download Sensor Installer By ID V2', value: 'downloadSensorInstallerByIdV2', description: 'Download sensor installer by SHA256 ID V2', action: 'Download sensor installer by ID V2' },
			{ name: 'Download Sensor Installer By ID V3', value: 'downloadSensorInstallerByIdV3', description: 'Download sensor installer by SHA256 ID V3', action: 'Download sensor installer by ID V3' },
			{ name: 'Get Combined Sensor Installers By Query', value: 'getCombinedSensorInstallersByQuery', description: 'Get sensor installer details by query', action: 'Get combined sensor installers by query' },
			{ name: 'Get Combined Sensor Installers By Query V2', value: 'getCombinedSensorInstallersByQueryV2', description: 'Get sensor installer details by query V2', action: 'Get combined sensor installers by query V2' },
			{ name: 'Get Combined Sensor Installers By Query V3', value: 'getCombinedSensorInstallersByQueryV3', description: 'Get sensor installer details by query V3', action: 'Get combined sensor installers by query V3' },
			{ name: 'Get Sensor Installers By Query', value: 'getSensorInstallersByQuery', description: 'Get sensor installer IDs by query', action: 'Get sensor installers by query' },
			{ name: 'Get Sensor Installers By Query V2', value: 'getSensorInstallersByQueryV2', description: 'Get sensor installer IDs by query V2', action: 'Get sensor installers by query V2' },
			{ name: 'Get Sensor Installers By Query V3', value: 'getSensorInstallersByQueryV3', description: 'Get sensor installer IDs by query V3', action: 'Get sensor installers by query V3' },
			{ name: 'Get Sensor Installers CCID By Query', value: 'getSensorInstallersCCIDByQuery', description: 'Get CCID to use with sensor installers', action: 'Get sensor installers CCID by query' },
			{ name: 'Get Sensor Installers Entities', value: 'getSensorInstallersEntities', description: 'Get sensor installer details by SHA256 IDs', action: 'Get sensor installers entities' },
			{ name: 'Get Sensor Installers Entities V2', value: 'getSensorInstallersEntitiesV2', description: 'Get sensor installer details by SHA256 IDs V2', action: 'Get sensor installers entities V2' },
			{ name: 'Get Sensor Installers Entities V3', value: 'getSensorInstallersEntitiesV3', description: 'Get sensor installer details by SHA256 IDs V3', action: 'Get sensor installers entities V3' },
		],
		default: 'getSensorInstallersCCIDByQuery',
	},
];

export const sensorDownloadFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sensorDownload'],
				operation: [
					'downloadSensorInstallerById',
					'downloadSensorInstallerByIdV2',
					'downloadSensorInstallerByIdV3',
				],
			},
		},
		default: '',
		required: true,
		description: 'Sensor installer SHA256 ID',
	},
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sensorDownload'],
				operation: [
					'getSensorInstallersEntities',
					'getSensorInstallersEntitiesV2',
					'getSensorInstallersEntitiesV3',
				],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of SHA256 IDs',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['sensorDownload'],
				operation: [
					'getCombinedSensorInstallersByQuery',
					'getCombinedSensorInstallersByQueryV2',
					'getCombinedSensorInstallersByQueryV3',
					'getSensorInstallersByQuery',
					'getSensorInstallersByQueryV2',
					'getSensorInstallersByQueryV3',
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
				resource: ['sensorDownload'],
				operation: [
					'getCombinedSensorInstallersByQuery',
					'getCombinedSensorInstallersByQueryV2',
					'getCombinedSensorInstallersByQueryV3',
					'getSensorInstallersByQuery',
					'getSensorInstallersByQueryV2',
					'getSensorInstallersByQueryV3',
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
				resource: ['sensorDownload'],
				operation: [
					'getCombinedSensorInstallersByQuery',
					'getCombinedSensorInstallersByQueryV2',
					'getCombinedSensorInstallersByQueryV3',
					'getSensorInstallersByQuery',
					'getSensorInstallersByQueryV2',
					'getSensorInstallersByQueryV3',
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
				resource: ['sensorDownload'],
				operation: [
					'getCombinedSensorInstallersByQuery',
					'getCombinedSensorInstallersByQueryV2',
					'getCombinedSensorInstallersByQueryV3',
					'getSensorInstallersByQuery',
					'getSensorInstallersByQueryV2',
					'getSensorInstallersByQueryV3',
				],
			},
		},
		default: '',
		description: 'Sort criteria',
	},
];
