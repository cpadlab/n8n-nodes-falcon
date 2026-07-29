import type { INodeProperties } from 'n8n-workflow';

export const alertsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['alerts'],
			},
		},
		options: [
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
		],
		default: 'queryV2',
	},
];

export const alertsFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                  queryV2                                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['queryV2', 'getQueriesAlertsV1'],
			},
		},
		default: '',
		description: 'FQL filter string (e.g., status:"new")',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['queryV2', 'getQueriesAlertsV1'],
			},
		},
		default: 100,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		typeOptions: {
			minValue: 0,
		},
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['queryV2', 'getQueriesAlertsV1'],
			},
		},
		default: 0,
		description: 'Starting index for pagination',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: ['queryV2', 'getQueriesAlertsV1'],
			},
		},
		default: '',
		description: 'Sort criteria (e.g., created_timestamp.desc)',
	},
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
	{
		displayName: 'Body (JSON)',
		name: 'bodyJson',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['alerts'],
				operation: [
					'updateV3',
					'postCombinedAlertsV1',
					'getAggregateV2',
					'patchEntitiesAlertsV2',
					'postAggregatesAlertsV1',
					'postEntitiesAlertsV1',
				],
			},
		},
		default: '',
		required: true,
		description: 'JSON object or array payload for the request body',
	},
];
