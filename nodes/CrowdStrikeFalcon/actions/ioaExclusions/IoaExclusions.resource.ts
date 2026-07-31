import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createFilterField, createIdsField, createLimitField, createOffsetField, createOperationField, createSortField } from '../common';

export const ioaExclusionsOperations: INodeProperties[] = [
	createOperationField('ioaExclusions', [

			{ name: 'Create IOA Exclusions V1', value: 'createIOAExclusionsV1', description: 'Create the IOA exclusions V1', action: 'Create IOA exclusions V1' },
			{ name: 'Delete IOA Exclusions V1', value: 'deleteIOAExclusionsV1', description: 'Delete the IOA exclusions by ID V1', action: 'Delete IOA exclusions V1' },
			{ name: 'Get IOA Exclusions V1', value: 'getIOAExclusionsV1', description: 'Get a set of IOA Exclusions by specifying their IDs V1', action: 'Get IOA exclusions V1' },
			{ name: 'Query IOA Exclusions V1', value: 'queryIOAExclusionsV1', description: 'Search for IOA exclusions V1', action: 'Query IOA exclusions V1' },
			{ name: 'Self Service Aggregates V2', value: 'ssIoaExclusionsAggregatesV2', description: 'Get Self Service IOA Exclusion aggregates as specified via JSON', action: 'Self service aggregates V2' },
			{ name: 'Self Service Create V2', value: 'ssIoaExclusionsCreateV2', description: 'Create new Self Service IOA Exclusions V2', action: 'Self service create V2' },
			{ name: 'Self Service Delete V2', value: 'ssIoaExclusionsDeleteV2', description: 'Delete Self Service IOA Exclusions rule by ID V2', action: 'Self service delete V2' },
			{ name: 'Self Service Get Reports V2', value: 'ssIoaExclusionsGetReportsV2', description: 'Create a report of Self Service IOA Exclusions', action: 'Self service get reports V2' },
			{ name: 'Self Service Get V2', value: 'ssIoaExclusionsGetV2', description: 'Get Self Service IOA Exclusions rules by ID V2', action: 'Self service get V2' },
			{ name: 'Self Service Matched Rule V2', value: 'ssIoaExclusionsMatchedRuleV2', description: 'Get Self Service IOA Exclusions rules for matched IFN/CLI', action: 'Self service matched rule V2' },
			{ name: 'Self Service New Rules V2', value: 'ssIoaExclusionsNewRulesV2', description: 'Get defaults for Self Service IOA Exclusions based on IFN/CLI', action: 'Self service new rules V2' },
			{ name: 'Self Service Search V2', value: 'ssIoaExclusionsSearchV2', description: 'Search for Self Service IOA Exclusions V2', action: 'Self service search V2' },
			{ name: 'Self Service Update V2', value: 'ssIoaExclusionsUpdateV2', description: 'Update Self Service IOA Exclusions rule by ID V2', action: 'Self service update V2' },
			{ name: 'Update IOA Exclusions V1', value: 'updateIOAExclusionsV1', description: 'Update the IOA exclusions V1', action: 'Update IOA exclusions V1' },
		
	], 'queryIOAExclusionsV1'),
];

export const ioaExclusionsFields: INodeProperties[] = [
	createIdsField('ioaExclusions', ['deleteIOAExclusionsV1',
					'getIOAExclusionsV1',
					'ssIoaExclusionsDeleteV2',
					'ssIoaExclusionsGetV2',]),
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ioaExclusions'],
				operation: ['deleteIOAExclusionsV1', 'ssIoaExclusionsDeleteV2'],
			},
		},
		default: '',
		description: 'Comment explaining deletion',
	},
	createBodyJsonField('ioaExclusions', ['createIOAExclusionsV1',
					'ssIoaExclusionsAggregatesV2',
					'ssIoaExclusionsCreateV2',
					'ssIoaExclusionsGetReportsV2',
					'ssIoaExclusionsMatchedRuleV2',
					'ssIoaExclusionsNewRulesV2',
					'ssIoaExclusionsUpdateV2',
					'updateIOAExclusionsV1',]),
	createFilterField('ioaExclusions', ['queryIOAExclusionsV1', 'ssIoaExclusionsSearchV2']),
	{
		displayName: 'IFN Regex',
		name: 'ifnRegex',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ioaExclusions'],
				operation: ['queryIOAExclusionsV1', 'ssIoaExclusionsAggregatesV2', 'ssIoaExclusionsSearchV2'],
			},
		},
		default: '',
		description: 'Image filename regex',
	},
	{
		displayName: 'CLI Regex',
		name: 'clRegex',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ioaExclusions'],
				operation: ['queryIOAExclusionsV1', 'ssIoaExclusionsAggregatesV2', 'ssIoaExclusionsSearchV2'],
			},
		},
		default: '',
		description: 'Command line regex',
	},
	{
		displayName: 'Parent IFN Regex',
		name: 'parentIfnRegex',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ioaExclusions'],
				operation: ['ssIoaExclusionsAggregatesV2', 'ssIoaExclusionsSearchV2'],
			},
		},
		default: '',
		description: 'Parent image filename regex',
	},
	{
		displayName: 'Parent CLI Regex',
		name: 'parentClRegex',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ioaExclusions'],
				operation: ['ssIoaExclusionsAggregatesV2', 'ssIoaExclusionsSearchV2'],
			},
		},
		default: '',
		description: 'Parent command line regex',
	},
	{
		displayName: 'Grandparent IFN Regex',
		name: 'grandparentIfnRegex',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ioaExclusions'],
				operation: ['ssIoaExclusionsAggregatesV2', 'ssIoaExclusionsSearchV2'],
			},
		},
		default: '',
		description: 'Grandparent image filename regex',
	},
	{
		displayName: 'Grandparent CLI Regex',
		name: 'grandparentClRegex',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ioaExclusions'],
				operation: ['ssIoaExclusionsAggregatesV2', 'ssIoaExclusionsSearchV2'],
			},
		},
		default: '',
		description: 'Grandparent command line regex',
	},
	createLimitField('ioaExclusions', ['queryIOAExclusionsV1', 'ssIoaExclusionsSearchV2']),
	createOffsetField('ioaExclusions', ['queryIOAExclusionsV1', 'ssIoaExclusionsSearchV2']),
	createSortField('ioaExclusions', ['queryIOAExclusionsV1', 'ssIoaExclusionsSearchV2']),
];
