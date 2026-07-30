import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'names'): string[] {
	const str = context.getNodeParameter(paramName, index, '') as string;
	return str.split(',').map((name) => name.trim()).filter(Boolean);
}

/**
 * Handles the 'delete' operation.
 */
async function handleDelete(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes an object in custom storage. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const objectKey = c.getNodeParameter('objectKey', i) as string;
	return await fc.customStorage._delete(collectionName, objectKey);
}

/**
 * Handles the 'deleteVersionedObject' operation.
 */
async function handleDeleteVersionedObject(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes a versioned object. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const collectionVersion = c.getNodeParameter('collectionVersion', i) as string;
	const objectKey = c.getNodeParameter('objectKey', i) as string;
	return await fc.customStorage.deleteVersionedObject(collectionName, collectionVersion, objectKey);
}

/**
 * Handles the 'describeCollection' operation.
 */
async function handleDescribeCollection(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Describes a collection. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	return await fc.customStorage.describeCollection(collectionName);
}

/**
 * Handles the 'describeCollections' operation.
 */
async function handleDescribeCollections(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Describes multiple collections. */
	return await fc.customStorage.describeCollections(parseArrayParam(c, i, 'names'));
}

/**
 * Handles the 'get' operation.
 */
async function handleGet(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets object bytes. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const objectKey = c.getNodeParameter('objectKey', i) as string;
	return await fc.customStorage.get(collectionName, objectKey);
}

/**
 * Handles the 'getSchema' operation.
 */
async function handleGetSchema(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets schema bytes. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const schemaVersion = c.getNodeParameter('schemaVersion', i) as string;
	return await fc.customStorage.getSchema(collectionName, schemaVersion);
}

/**
 * Handles the 'getSchemaMetadata' operation.
 */
async function handleGetSchemaMetadata(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets schema metadata. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const schemaVersion = c.getNodeParameter('schemaVersion', i) as string;
	return await fc.customStorage.getSchemaMetadata(collectionName, schemaVersion);
}

/**
 * Handles the 'getVersionedObject' operation.
 */
async function handleGetVersionedObject(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets versioned object bytes. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const collectionVersion = c.getNodeParameter('collectionVersion', i) as string;
	const objectKey = c.getNodeParameter('objectKey', i) as string;
	return await fc.customStorage.getVersionedObject(collectionName, collectionVersion, objectKey);
}

/**
 * Handles the 'getVersionedObjectMetadata' operation.
 */
async function handleGetVersionedObjectMetadata(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets versioned object metadata. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const collectionVersion = c.getNodeParameter('collectionVersion', i) as string;
	const objectKey = c.getNodeParameter('objectKey', i) as string;
	return await fc.customStorage.getVersionedObjectMetadata(collectionName, collectionVersion, objectKey);
}

/**
 * Handles the 'list' operation.
 */
async function handleList(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Lists object keys. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customStorage.list(collectionName, undefined, limit || undefined);
}

/**
 * Handles the 'listCollections' operation.
 */
async function handleListCollections(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Lists collection names. */
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customStorage.listCollections(undefined, limit || undefined);
}

/**
 * Handles the 'listObjectsByVersion' operation.
 */
async function handleListObjectsByVersion(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Lists objects by version. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const collectionVersion = c.getNodeParameter('collectionVersion', i) as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customStorage.listObjectsByVersion(collectionName, collectionVersion, undefined, limit || undefined);
}

/**
 * Handles the 'listSchemas' operation.
 */
async function handleListSchemas(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Lists schemas for collection. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customStorage.listSchemas(collectionName, undefined, limit || undefined);
}

/**
 * Handles the 'metadata' operation.
 */
async function handleMetadata(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Gets metadata for object. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const objectKey = c.getNodeParameter('objectKey', i) as string;
	return await fc.customStorage.metadata(collectionName, objectKey);
}

/**
 * Handles the 'search' operation.
 */
async function handleSearch(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches objects matching filter. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const filter = c.getNodeParameter('filter', i) as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customStorage.search(collectionName, filter, limit || undefined);
}

/**
 * Handles the 'searchObjectsByVersion' operation.
 */
async function handleSearchObjectsByVersion(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches versioned objects matching filter. */
	const collectionName = c.getNodeParameter('collectionName', i) as string;
	const collectionVersion = c.getNodeParameter('collectionVersion', i) as string;
	const filter = c.getNodeParameter('filter', i) as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	return await fc.customStorage.searchObjectsByVersion(collectionName, collectionVersion, filter, limit || undefined);
}

/** Main execution handler for Custom Storage operations. */
export async function executeCustomStorage(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'delete': return await handleDelete(this, index, falconClient);
		case 'deleteVersionedObject': return await handleDeleteVersionedObject(this, index, falconClient);
		case 'describeCollection': return await handleDescribeCollection(this, index, falconClient);
		case 'describeCollections': return await handleDescribeCollections(this, index, falconClient);
		case 'get': return await handleGet(this, index, falconClient);
		case 'getSchema': return await handleGetSchema(this, index, falconClient);
		case 'getSchemaMetadata': return await handleGetSchemaMetadata(this, index, falconClient);
		case 'getVersionedObject': return await handleGetVersionedObject(this, index, falconClient);
		case 'getVersionedObjectMetadata': return await handleGetVersionedObjectMetadata(this, index, falconClient);
		case 'list': return await handleList(this, index, falconClient);
		case 'listCollections': return await handleListCollections(this, index, falconClient);
		case 'listObjectsByVersion': return await handleListObjectsByVersion(this, index, falconClient);
		case 'listSchemas': return await handleListSchemas(this, index, falconClient);
		case 'metadata': return await handleMetadata(this, index, falconClient);
		case 'search': return await handleSearch(this, index, falconClient);
		case 'searchObjectsByVersion': return await handleSearchObjectsByVersion(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Custom Storage.`);
	}
}
