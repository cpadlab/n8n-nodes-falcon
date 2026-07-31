import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

import { parseJsonParam } from '../common';

/**
 * Handles the 'cbExclusionsCreateV1' operation.
 */
async function handleCbExclusionsCreateV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Creates new Certificate Based Exclusions. */
	return await fc.certificateBasedExclusions.cbExclusionsCreateV1(parseJsonParam(c, i));
}

/**
 * Handles the 'cbExclusionsDeleteV1' operation.
 */
async function handleCbExclusionsDeleteV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Deletes exclusions by ID. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);
	const comment = c.getNodeParameter('comment', i, '') as string;

	return await fc.certificateBasedExclusions.cbExclusionsDeleteV1(ids, comment || undefined);
}

/**
 * Handles the 'cbExclusionsGetV1' operation.
 */
async function handleCbExclusionsGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves exclusion details by ID. */
	const idsString = c.getNodeParameter('ids', i, '') as string;
	const ids = idsString.split(',').map((id) => id.trim()).filter(Boolean);

	return await fc.certificateBasedExclusions.cbExclusionsGetV1(ids);
}

/**
 * Handles the 'cbExclusionsQueryV1' operation.
 */
async function handleCbExclusionsQueryV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches for cert-based exclusions matching criteria. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const sort = c.getNodeParameter('sort', i, '') as any;

	return await fc.certificateBasedExclusions.cbExclusionsQueryV1(filter || undefined, offset || undefined, limit || undefined, sort || undefined);
}

/**
 * Handles the 'cbExclusionsUpdateV1' operation.
 */
async function handleCbExclusionsUpdateV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Updates existing Certificate Based Exclusions. */
	return await fc.certificateBasedExclusions.cbExclusionsUpdateV1(parseJsonParam(c, i));
}

/**
 * Handles the 'certificatesGetV1' operation.
 */
async function handleCertificatesGetV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Retrieves certificate signing information for a file ID. */
	const ids = c.getNodeParameter('ids', i) as string;
	return await fc.certificateBasedExclusions.certificatesGetV1(ids);
}

/** Main execution handler for Certificate Based Exclusions. */
export async function executeCertificateBasedExclusions(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'cbExclusionsCreateV1': return await handleCbExclusionsCreateV1(this, index, falconClient);
		case 'cbExclusionsDeleteV1': return await handleCbExclusionsDeleteV1(this, index, falconClient);
		case 'cbExclusionsGetV1': return await handleCbExclusionsGetV1(this, index, falconClient);
		case 'cbExclusionsQueryV1': return await handleCbExclusionsQueryV1(this, index, falconClient);
		case 'cbExclusionsUpdateV1': return await handleCbExclusionsUpdateV1(this, index, falconClient);
		case 'certificatesGetV1': return await handleCertificatesGetV1(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Certificate Based Exclusions.`);
	}
}
