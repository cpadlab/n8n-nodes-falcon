import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField, createStandardPaginationFields } from '../common';

export const alertsOperations: INodeProperties[] = [
	createOperationField('alerts', [

			{
				name: 'Query Alerts (V2)',
				value: 'queryV2',
				description: 'Retrieves all Alert IDs matching a given query',
				action: 'Query alerts v2',
			},
			{
				name: 'Get Alerts by Composite IDs (V2)',
				value: 'getV2',
				description: 'Retrieves all Alerts given their composite IDs',
				action: 'Get alerts by composite IDs v2',
			},
			{
				name: 'Update Alerts (V3)',
				value: 'updateV3',
				description: 'Perform actions on Alerts identified by composite IDs',
				action: 'Update alerts v3',
			},
			{
				name: 'Get Combined Alerts Stream (V1)',
				value: 'postCombinedAlertsV1',
				description: 'Retrieves all Alerts matching a FQL filter using pagination token',
				action: 'Get combined alerts stream v1',
			},
			{
				name: 'Get Alert Aggregates (V2)',
				value: 'getAggregateV2',
				description: 'Retrieves aggregate values for Alerts across CIDs',
				action: 'Get alert aggregates v2',
			},
			{
				name: 'Query Alerts (V1 - Deprecated)',
				value: 'getQueriesAlertsV1',
				description: 'Retrieves all Alert IDs matching a given query (V1 deprecated)',
				action: 'Query alerts v1',
			},
			{
				name: 'Patch Alert Entities (V2 - Deprecated)',
				value: 'patchEntitiesAlertsV2',
				description: 'Perform actions on Alerts identified by composite IDs (V2 deprecated)',
				action: 'Patch alert entities v2',
			},
			{
				name: 'Post Alert Aggregates (V1 - Deprecated)',
				value: 'postAggregatesAlertsV1',
				description: 'Retrieves aggregate values for Alerts (V1 deprecated)',
				action: 'Post alert aggregates v1',
			},
			{
				name: 'Get Alert Entities (V1 - Deprecated)',
				value: 'postEntitiesAlertsV1',
				description: 'Retrieves all Alerts given their IDs (V1 deprecated)',
				action: 'Get alert entities v1',
			},
		
	], 'queryV2'),
];

export const alertsFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                  queryV2                                   */
	/* -------------------------------------------------------------------------- */
	...createStandardPaginationFields('alerts', ['queryV2', 'getQueriesAlertsV1']),
	{
		displayName: 'Search Query (Q)',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['queryV2', 'getQueriesAlertsV1'],
			},
		},
		default: '',
		description: 'Free-text search terms',
	},
	{
		displayName: 'Include Hidden',
		name: 'includeHidden',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['queryV2', 'getV2', 'updateV3', 'getAggregateV2'],
			},
		},
		default: false,
		description: 'Whether to include hidden alerts in results',
	},

	/* -------------------------------------------------------------------------- */
	/*                                   getV2                                    */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Composite IDs',
		name: 'compositeIds',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['getV2'],
			},
		},
		default: '',
		required: true,
		description: 'Comma-separated list of alert composite IDs',
	},

	/* -------------------------------------------------------------------------- */
	/*                        updateV3 & Body Payload Fields                      */
	/* -------------------------------------------------------------------------- */
	createBodyJsonField('alerts', ['updateV3',
					'postCombinedAlertsV1',
					'getAggregateV2',
					'patchEntitiesAlertsV2',
					'postAggregatesAlertsV1',
					'postEntitiesAlertsV1',]),
];
