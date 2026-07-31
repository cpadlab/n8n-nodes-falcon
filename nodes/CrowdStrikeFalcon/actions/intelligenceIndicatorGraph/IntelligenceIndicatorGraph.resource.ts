import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const intelligenceIndicatorGraphOperations: INodeProperties[] = [
	createOperationField('intelligenceIndicatorGraph', [

			{ name: 'Lookup Indicators', value: 'lookupIndicators', description: 'Look up intelligence data for multiple indicators', action: 'Lookup indicators' },
			{ name: 'Search Indicators', value: 'searchIndicators', description: 'Search indicators based on FQL filter or request body', action: 'Search indicators' },
		
	], 'searchIndicators'),
];

export const intelligenceIndicatorGraphFields: INodeProperties[] = [
	createBodyJsonField('intelligenceIndicatorGraph', ['lookupIndicators', 'searchIndicators']),
	...createStandardPaginationFields('intelligenceIndicatorGraph', ['searchIndicators']),
];
