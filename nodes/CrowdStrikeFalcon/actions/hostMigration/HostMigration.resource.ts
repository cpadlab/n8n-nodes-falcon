import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const hostMigrationOperations: INodeProperties[] = [
	createOperationField('hostMigration', [

			{ name: 'Create Migration V1', value: 'createMigrationV1', description: 'Create a device migration job', action: 'Create migration v1' },
			{ name: 'Get Host Migration IDs V1', value: 'getHostMigrationIDsV1', description: 'Query host migration IDs', action: 'Get host migration ids v1' },
			{ name: 'Get Host Migrations V1', value: 'getHostMigrationsV1', description: 'Get host migration details', action: 'Get host migrations v1' },
			{ name: 'Get Migration Destinations V1', value: 'getMigrationDestinationsV1', description: 'Get destinations for a migration', action: 'Get migration destinations v1' },
			{ name: 'Get Migration IDs V1', value: 'getMigrationIDsV1', description: 'Query migration jobs', action: 'Get migration ids v1' },
			{ name: 'Get Migrations V1', value: 'getMigrationsV1', description: 'Get migration job details', action: 'Get migrations v1' },
			{ name: 'Host Migration Aggregates V1', value: 'hostMigrationAggregatesV1', description: 'Get host migration aggregates as specified via JSON', action: 'Host migration aggregates v1' },
			{ name: 'Host Migrations Actions V1', value: 'hostMigrationsActionsV1', description: 'Perform an action on host migrations', action: 'Host migrations actions v1' },
			{ name: 'Migration Aggregates V1', value: 'migrationAggregatesV1', description: 'Get migration aggregates as specified via JSON', action: 'Migration aggregates v1' },
			{ name: 'Migrations Actions V1', value: 'migrationsActionsV1', description: 'Perform an action on a migration job', action: 'Migrations actions v1' },
		
	], 'getMigrationIDsV1'),
];

export const hostMigrationFields: INodeProperties[] = [
	{
		displayName: 'Migration ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['hostMigration'],
				operation: ['getHostMigrationIDsV1', 'hostMigrationsActionsV1'],
			},
		},
		default: '',
		required: true,
		description: 'Unique migration ID',
	},
	createIdsField('hostMigration', ['getMigrationsV1']),
	{
		displayName: 'Host Migrations Action Name',
		name: 'actionNameHostMigrations',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['hostMigration'],
				operation: ['hostMigrationsActionsV1'],
			},
		},
		options: [
			{ name: 'Add Host Groups', value: 'add_host_groups' },
			{ name: 'Remove Host Groups', value: 'remove_host_groups' },
			{ name: 'Remove Hosts', value: 'remove_hosts' },
		],
		default: 'remove_hosts',
		description: 'Action to perform on host migrations',
	},
	{
		displayName: 'Migrations Action Name',
		name: 'actionNameMigrations',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['hostMigration'],
				operation: ['migrationsActionsV1'],
			},
		},
		options: [
			{ name: 'Cancel Migration', value: 'cancel_migration' },
			{ name: 'Delete Migration', value: 'delete_migration' },
			{ name: 'Rename Migration', value: 'rename_migration' },
			{ name: 'Start Migration', value: 'start_migration' },
		],
		default: 'start_migration',
		description: 'Action to perform on a migration job',
	},
	createBodyJsonField('hostMigration', ['createMigrationV1',
					'getHostMigrationsV1',
					'getMigrationDestinationsV1',
					'hostMigrationAggregatesV1',
					'hostMigrationsActionsV1',
					'migrationAggregatesV1',
					'migrationsActionsV1',]),
	...createStandardPaginationFields('hostMigration', ['getHostMigrationIDsV1', 'getMigrationIDsV1']),
];
