import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { getStringParam, parseArrayParam, parseJsonParam } from '../common';

/**
 * Handles the 'createMLExclusionsV1' operation.
 */
async function handleCreateMLExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create the ML exclusions. */
	return await fc.mlExclusions.createMLExclusionsV1(parseJsonParam(c, i));
}

/**
 * Handles the 'deleteMLExclusionsV1' operation.
 */
async function handleDeleteMLExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete the ML exclusions by id. */
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.mlExclusions.deleteMLExclusionsV1(parseArrayParam(c, i, 'ids'), comment || undefined);
}

/**
 * Handles the 'exclusionsAggregatesV2' operation.
 */
async function handleExclusionsAggregatesV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get exclusion aggregates as specified via json in request body. */
	return await fc.mlExclusions.exclusionsAggregatesV2(parseJsonParam(c, i));
}

/**
 * Handles the 'exclusionsCreateV2' operation.
 */
async function handleExclusionsCreateV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create the exclusions, with ancestor fields. */
	return await fc.mlExclusions.exclusionsCreateV2(parseJsonParam(c, i));
}

/**
 * Handles the 'exclusionsDeleteV2' operation.
 */
async function handleExclusionsDeleteV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Delete the exclusions by id, with ancestor fields. */
	const comment = getStringParam(c, i, 'comment', '');
	return await fc.mlExclusions.exclusionsDeleteV2(parseArrayParam(c, i, 'ids'), comment || undefined);
}

/**
 * Handles the 'exclusionsGetAllV2' operation.
 */
async function handleExclusionsGetAllV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get all exclusions. */
	return await fc.mlExclusions.exclusionsGetAllV2();
}

/**
 * Handles the 'exclusionsGetReportsV2' operation.
 */
async function handleExclusionsGetReportsV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Create a report of ML exclusions scoped by the given filters. */
	return await fc.mlExclusions.exclusionsGetReportsV2(parseJsonParam(c, i));
}

/**
 * Handles the 'exclusionsGetV2' operation.
 */
async function handleExclusionsGetV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get the exclusions by id, with ancestor fields. */
	return await fc.mlExclusions.exclusionsGetV2(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'exclusionsPerformActionV2' operation.
 */
async function handleExclusionsPerformActionV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Actions used to manipulate the content of exclusions, with ancestor fields. */
	const actionName = getStringParam(c, i, 'actionName', 'add_item') as any;
	return await fc.mlExclusions.exclusionsPerformActionV2(actionName, parseJsonParam(c, i));
}

/**
 * Handles the 'exclusionsSdmfQueryV1' operation.
 */
async function handleExclusionsSdmfQueryV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Executes an SDMF data frame query against exclusion entities. */
	return await fc.mlExclusions.exclusionsSdmfQueryV1(parseJsonParam(c, i));
}

/**
 * Handles the 'exclusionsSearchV2' operation.
 */
async function handleExclusionsSearchV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for exclusions, with ancestor fields. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.mlExclusions.exclusionsSearchV2(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'exclusionsUpdateV2' operation.
 */
async function handleExclusionsUpdateV2(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update the exclusions by id, with ancestor fields. */
	return await fc.mlExclusions.exclusionsUpdateV2(parseJsonParam(c, i));
}

/**
 * Handles the 'getMLExclusionsV1' operation.
 */
async function handleGetMLExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Get a set of ML Exclusions by specifying their IDs. */
	return await fc.mlExclusions.getMLExclusionsV1(parseArrayParam(c, i, 'ids'));
}

/**
 * Handles the 'queryMLExclusionsV1' operation.
 */
async function handleQueryMLExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Search for ML exclusions. */
	const filter = getStringParam(c, i, 'filter', '');
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = getStringParam(c, i, 'sort', '') as any;
	return await fc.mlExclusions.queryMLExclusionsV1(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'updateMLExclusionsV1' operation.
 */
async function handleUpdateMLExclusionsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Update the ML exclusions. */
	return await fc.mlExclusions.updateMLExclusionsV1(parseJsonParam(c, i));
}

/**
 * Main execution handler for CrowdStrike Falcon ML Exclusions operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeMlExclusions(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'createMLExclusionsV1': return await handleCreateMLExclusionsV1(this, index, falconClient);
		case 'deleteMLExclusionsV1': return await handleDeleteMLExclusionsV1(this, index, falconClient);
		case 'exclusionsAggregatesV2': return await handleExclusionsAggregatesV2(this, index, falconClient);
		case 'exclusionsCreateV2': return await handleExclusionsCreateV2(this, index, falconClient);
		case 'exclusionsDeleteV2': return await handleExclusionsDeleteV2(this, index, falconClient);
		case 'exclusionsGetAllV2': return await handleExclusionsGetAllV2(this, index, falconClient);
		case 'exclusionsGetReportsV2': return await handleExclusionsGetReportsV2(this, index, falconClient);
		case 'exclusionsGetV2': return await handleExclusionsGetV2(this, index, falconClient);
		case 'exclusionsPerformActionV2': return await handleExclusionsPerformActionV2(this, index, falconClient);
		case 'exclusionsSdmfQueryV1': return await handleExclusionsSdmfQueryV1(this, index, falconClient);
		case 'exclusionsSearchV2': return await handleExclusionsSearchV2(this, index, falconClient);
		case 'exclusionsUpdateV2': return await handleExclusionsUpdateV2(this, index, falconClient);
		case 'getMLExclusionsV1': return await handleGetMLExclusionsV1(this, index, falconClient);
		case 'queryMLExclusionsV1': return await handleQueryMLExclusionsV1(this, index, falconClient);
		case 'updateMLExclusionsV1': return await handleUpdateMLExclusionsV1(this, index, falconClient);
		default:
			throw new NodeOperationError(c.getNode(), `Operation ${operation} is not supported for ML Exclusions.`);
	}
}
