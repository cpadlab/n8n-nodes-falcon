import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Handles the 'queriesCasesGetV1' operation to query Case IDs based on filters.
 */
async function handleQueriesCasesGetV1(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Retrieves Case IDs that match the provided filter and pagination criteria.
	 */
	const filter = context.getNodeParameter('filter', index, '') as string;
	const limit = context.getNodeParameter('limit', index, 100) as number;
	const offset = context.getNodeParameter('offset', index, 0) as number;
	const sort = context.getNodeParameter('sort', index, '') as string;
	const q = context.getNodeParameter('q', index, '') as string;

	return await falconClient.cases.queriesCasesGetV1(
		limit || undefined,
		offset || undefined,
		sort || undefined,
		filter || undefined,
		q || undefined,
	);
}

/**
 * Handles the 'entitiesCasesPostV2' operation to retrieve Cases by IDs.
 */
async function handleEntitiesCasesPostV2(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Fetches detailed Case records using a list of specified Case IDs.
	 */
	const idsString = context.getNodeParameter('ids', index) as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await falconClient.cases.entitiesCasesPostV2({
		ids,
	});
}

/**
 * Handles the 'entitiesCasesPutV2' operation to create a new Case.
 */
async function handleEntitiesCasesPutV2(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Creates a new Case entity with specified attributes and optional custom fields.
	 */
	const title = context.getNodeParameter('title', index) as string;
	const description = context.getNodeParameter('description', index, '') as string;
	const priority = context.getNodeParameter('priority', index, 20) as number;
	const status = context.getNodeParameter('status', index, 'open') as string;
	const additionalFieldsJson = context.getNodeParameter('additionalFieldsJson', index, '') as string;

	let body: Record<string, any> = {
		name: title,
	};

	if (description) body.description = description;
	if (priority) body.priority = priority;
	if (status) body.status = status;

	if (additionalFieldsJson) {
		try {
			const parsed = typeof additionalFieldsJson === 'string' ? JSON.parse(additionalFieldsJson) : additionalFieldsJson;
			body = { ...body, ...parsed };
		} catch (e) {
			throw new NodeOperationError(context.getNode(), `Invalid JSON in Additional Fields: ${(e as Error).message}`);
		}
	}

	return await falconClient.cases.entitiesCasesPutV2(body as any);
}

/**
 * Handles the 'entitiesCasesPatchV2' operation to update an existing Case.
 */
async function handleEntitiesCasesPatchV2(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Updates existing Case fields and applies additional custom JSON parameters.
	 */
	const id = context.getNodeParameter('id', index) as string;
	const updateFields = context.getNodeParameter('updateFields', index, {}) as Record<string, any>;
	const additionalFieldsJson = context.getNodeParameter('additionalFieldsJson', index, '') as string;

	let body: Record<string, any> = { id };
	if (updateFields.title) body.name = updateFields.title;
	if (updateFields.description) body.description = updateFields.description;
	if (updateFields.priority) body.priority = updateFields.priority;
	if (updateFields.status) body.status = updateFields.status;
	if (updateFields.user_id) body.user_id = updateFields.user_id;
	if (updateFields.group_id) body.group_id = updateFields.group_id;

	if (additionalFieldsJson) {
		try {
			const parsed = typeof additionalFieldsJson === 'string' ? JSON.parse(additionalFieldsJson) : additionalFieldsJson;
			body = { ...body, ...parsed };
		} catch (e) {
			throw new NodeOperationError(context.getNode(), `Invalid JSON in Additional Fields: ${(e as Error).message}`);
		}
	}

	return await falconClient.cases.entitiesCasesPatchV2(body as any);
}

/**
 * Handles the 'entitiesAlertEvidencePostV1' operation to add alert evidence.
 */
async function handleEntitiesAlertEvidencePostV1(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Associates a list of alert composite IDs as evidence to a specified Case.
	 */
	const id = context.getNodeParameter('id', index) as string;
	const compositeIdsString = context.getNodeParameter('composite_ids', index) as string;
	const composite_ids = compositeIdsString.split(',').map((idItem) => idItem.trim()).filter(Boolean);

	return await falconClient.cases.entitiesAlertEvidencePostV1({
		id,
		composite_ids,
	} as any);
}

/**
 * Handles the 'entitiesEventEvidencePostV1' operation to add event evidence.
 */
async function handleEntitiesEventEvidencePostV1(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Associates a list of event IDs as evidence to a specified Case.
	 */
	const id = context.getNodeParameter('id', index) as string;
	const eventIdsString = context.getNodeParameter('event_ids', index) as string;
	const event_ids = eventIdsString.split(',').map((idItem) => idItem.trim()).filter(Boolean);

	return await falconClient.cases.entitiesEventEvidencePostV1({
		id,
		event_ids,
	} as any);
}

/**
 * Handles the 'entitiesCaseTagsPostV1' operation to add tags to a Case.
 */
async function handleEntitiesCaseTagsPostV1(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Adds a collection of tags to an existing Case entity.
	 */
	const id = context.getNodeParameter('id', index) as string;
	const tagsString = context.getNodeParameter('tags', index) as string;
	const tags = tagsString.split(',').map((t) => t.trim()).filter(Boolean);

	return await falconClient.cases.entitiesCaseTagsPostV1({
		id,
		tags,
	} as any);
}

/**
 * Handles the 'entitiesCaseTagsDeleteV1' operation to remove tags from a Case.
 */
async function handleEntitiesCaseTagsDeleteV1(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Removes specified tags from a target Case entity.
	 */
	const id = context.getNodeParameter('id', index) as string;
	const tagsString = context.getNodeParameter('tags', index) as string;
	const tag = tagsString.split(',').map((t) => t.trim()).filter(Boolean);

	return await falconClient.cases.entitiesCaseTagsDeleteV1(id, tag);
}

/**
 * Handles the 'entitiesMergePostV1' operation to merge two Cases.
 */
async function handleEntitiesMergePostV1(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Merges a source Case into a destination Case entity.
	 */
	const source_id = context.getNodeParameter('source_id', index) as string;
	const destination_id = context.getNodeParameter('destination_id', index) as string;

	return await falconClient.cases.entitiesMergePostV1({
		source_id,
		destination_id,
	} as any);
}

/*
 * Main execution handler for CrowdStrike Falcon Cases operations.
 * Routes execution to specialized internal functions based on the operation parameter.
 */
export async function executeCases(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {

	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'queriesCasesGetV1':
			return await handleQueriesCasesGetV1(this, index, falconClient);
		case 'entitiesCasesPostV2':
			return await handleEntitiesCasesPostV2(this, index, falconClient);
		case 'entitiesCasesPutV2':
			return await handleEntitiesCasesPutV2(this, index, falconClient);
		case 'entitiesCasesPatchV2':
			return await handleEntitiesCasesPatchV2(this, index, falconClient);
		case 'entitiesAlertEvidencePostV1':
			return await handleEntitiesAlertEvidencePostV1(this, index, falconClient);
		case 'entitiesEventEvidencePostV1':
			return await handleEntitiesEventEvidencePostV1(this, index, falconClient);
		case 'entitiesCaseTagsPostV1':
			return await handleEntitiesCaseTagsPostV1(this, index, falconClient);
		case 'entitiesCaseTagsDeleteV1':
			return await handleEntitiesCaseTagsDeleteV1(this, index, falconClient);
		case 'entitiesMergePostV1':
			return await handleEntitiesMergePostV1(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Cases.`);
	}
	
}