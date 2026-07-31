import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'createMigrationV1' operation.
 */
async function handleCreateMigrationV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create a device migration job. */
	return await fc.hostMigration.createMigrationV1(parseJsonParam(c, i));
}

/**
 * Handles the 'getHostMigrationIDsV1' operation.
 */
async function handleGetHostMigrationIDsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query host migration IDs. */
	const id = getStringParam(c, i, 'id', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.hostMigration.getHostMigrationIDsV1(id, offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'getHostMigrationsV1' operation.
 */
async function handleGetHostMigrationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get host migration details. */
	return await fc.hostMigration.getHostMigrationsV1(parseJsonParam(c, i));
}

/**
 * Handles the 'getMigrationDestinationsV1' operation.
 */
async function handleGetMigrationDestinationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get destinations for a migration. */
	return await fc.hostMigration.getMigrationDestinationsV1(parseJsonParam(c, i));
}

/**
 * Handles the 'getMigrationIDsV1' operation.
 */
async function handleGetMigrationIDsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Query migration jobs. */
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	const filter = getStringParam(c, i, 'filter', '');
	return await fc.hostMigration.getMigrationIDsV1(offset || undefined, limit || undefined, sort || undefined, filter || undefined);
}

/**
 * Handles the 'getMigrationsV1' operation.
 */
async function handleGetMigrationsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get migration job details. */
	return await fc.hostMigration.getMigrationsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'hostMigrationAggregatesV1' operation.
 */
async function handleHostMigrationAggregatesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get host migration aggregates as specified via JSON. */
	const body = parseJsonParam(c, i);
	return await fc.hostMigration.hostMigrationAggregatesV1(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'hostMigrationsActionsV1' operation.
 */
async function handleHostMigrationsActionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Perform an action on host migrations. */
	const id = getStringParam(c, i, 'id', '');
	const actionName = getStringParam(c, i, 'actionNameHostMigrations', '') as any;
	const body = parseJsonParam(c, i);
	return await fc.hostMigration.hostMigrationsActionsV1(id, actionName, body);
}

/**
 * Handles the 'migrationAggregatesV1' operation.
 */
async function handleMigrationAggregatesV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get migration aggregates as specified via JSON. */
	const body = parseJsonParam(c, i);
	return await fc.hostMigration.migrationAggregatesV1(Array.isArray(body) ? body : [body]);
}

/**
 * Handles the 'migrationsActionsV1' operation.
 */
async function handleMigrationsActionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Perform an action on a migration job. */
	const actionName = getStringParam(c, i, 'actionNameMigrations', '') as any;
	const body = parseJsonParam(c, i);
	return await fc.hostMigration.migrationsActionsV1(actionName, body);
}

/**
 * Main execution handler for CrowdStrike Falcon Host Migration operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeHostMigration(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createMigrationV1': return await handleCreateMigrationV1(this, index, falconClient);
		case 'getHostMigrationIDsV1': return await handleGetHostMigrationIDsV1(this, index, falconClient);
		case 'getHostMigrationsV1': return await handleGetHostMigrationsV1(this, index, falconClient);
		case 'getMigrationDestinationsV1': return await handleGetMigrationDestinationsV1(this, index, falconClient);
		case 'getMigrationIDsV1': return await handleGetMigrationIDsV1(this, index, falconClient);
		case 'getMigrationsV1': return await handleGetMigrationsV1(this, index, falconClient);
		case 'hostMigrationAggregatesV1': return await handleHostMigrationAggregatesV1(this, index, falconClient);
		case 'hostMigrationsActionsV1': return await handleHostMigrationsActionsV1(this, index, falconClient);
		case 'migrationAggregatesV1': return await handleMigrationAggregatesV1(this, index, falconClient);
		case 'migrationsActionsV1': return await handleMigrationsActionsV1(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Host Migration.`);
	}
}
