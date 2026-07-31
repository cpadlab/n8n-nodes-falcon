import type { INodeProperties } from 'n8n-workflow';

import { createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const sensorDownloadOperations: INodeProperties[] = [
	createOperationField('sensorDownload', [

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
		
	], 'getSensorInstallersCCIDByQuery'),
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
	createIdsField('sensorDownload', ['getSensorInstallersEntities',
					'getSensorInstallersEntitiesV2',
					'getSensorInstallersEntitiesV3',]),
	...createStandardPaginationFields('sensorDownload', ['getCombinedSensorInstallersByQuery',
					'getCombinedSensorInstallersByQueryV2',
					'getCombinedSensorInstallersByQueryV3',
					'getSensorInstallersByQuery',
					'getSensorInstallersByQueryV2',
					'getSensorInstallersByQueryV3',]),
];
