import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/** Handles readCombinedDetections */
async function handleReadCombinedDetections(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads combined detections. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const sort = c.getNodeParameter('sort', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerDetections.readCombinedDetections(filter || undefined, sort || undefined, limit || undefined, offset || undefined);
}

/** Handles readDetections */
async function handleReadDetections(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads detections. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerDetections.readDetections(filter || undefined, limit || undefined, offset || undefined);
}

/** Handles readDetectionsCount */
async function handleReadDetectionsCount(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads detections count. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerDetections.readDetectionsCount(filter || undefined);
}

/** Handles readDetectionsCountBySeverity */
async function handleReadDetectionsCountBySeverity(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads detections count by severity. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerDetections.readDetectionsCountBySeverity(filter || undefined);
}

/** Handles readDetectionsCountByType */
async function handleReadDetectionsCountByType(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Reads detections count by type. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	return await fc.containerDetections.readDetectionsCountByType(filter || undefined);
}

/** Handles searchDetections */
async function handleSearchDetections(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
	/* Searches detections. */
	const filter = c.getNodeParameter('filter', i, '') as string;
	const limit = c.getNodeParameter('limit', i, 100) as number;
	const offset = c.getNodeParameter('offset', i, 0) as number;
	return await fc.containerDetections.searchDetections(filter || undefined, limit || undefined, offset || undefined);
}

/** Main execution handler for Container Detections operations. */
export async function executeContainerDetections(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'readCombinedDetections': return await handleReadCombinedDetections(this, index, falconClient);
		case 'readDetections': return await handleReadDetections(this, index, falconClient);
		case 'readDetectionsCount': return await handleReadDetectionsCount(this, index, falconClient);
		case 'readDetectionsCountBySeverity': return await handleReadDetectionsCountBySeverity(this, index, falconClient);
		case 'readDetectionsCountByType': return await handleReadDetectionsCountByType(this, index, falconClient);
		case 'searchDetections': return await handleSearchDetections(this, index, falconClient);
		default:
			throw new Error(`Operation ${operation} is not supported for Container Detections.`);
	}
}
