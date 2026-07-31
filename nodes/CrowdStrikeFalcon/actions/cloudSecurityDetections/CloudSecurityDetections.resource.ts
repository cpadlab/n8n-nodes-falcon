import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const cloudSecurityDetectionsOperations: INodeProperties[] = [
	createOperationField('cloudSecurityDetections', [

			{ name: 'Get Combined IOM by Rule', value: 'cspmEvaluationsCombinedIomByRule', description: 'Returns IOMs grouped by rule', action: 'Get combined IOM by rule' },
			{ name: 'Get IOM Entities by IDs', value: 'cspmEvaluationsIomEntities', description: 'Gets IOMs based on provided IDs', action: 'Get IOM entities by IDs' },
			{ name: 'Get IOM Entities by Body (POST)', value: 'cspmEvaluationsIomEntitiesPost', description: 'Gets IOMs based on IDs in request body', action: 'Get IOM entities by body' },
			{ name: 'Query IOM IDs', value: 'cspmEvaluationsIomQueries', description: 'Gets a list of IOM IDs for given parameters', action: 'Query IOM IDs' },
		
	], 'cspmEvaluationsIomQueries'),
];

export const cloudSecurityDetectionsFields: INodeProperties[] = [
	createIdsField('cloudSecurityDetections', ['cspmEvaluationsIomEntities']),
	createBodyJsonField('cloudSecurityDetections', ['cspmEvaluationsIomEntitiesPost']),
	...createStandardPaginationFields('cloudSecurityDetections', ['cspmEvaluationsCombinedIomByRule', 'cspmEvaluationsIomQueries']),
];
