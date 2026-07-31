import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const certificateBasedExclusionsOperations: INodeProperties[] = [
	createOperationField('certificateBasedExclusions', [

			{ name: 'Create Certificate Based Exclusion', value: 'cbExclusionsCreateV1', description: 'Create new Certificate Based Exclusions', action: 'Create certificate based exclusion' },
			{ name: 'Delete Certificate Based Exclusions', value: 'cbExclusionsDeleteV1', description: 'Delete the exclusions by ID', action: 'Delete certificate based exclusions' },
			{ name: 'Get Certificate Based Exclusions', value: 'cbExclusionsGetV1', description: 'Find all exclusion IDs matching query with filter', action: 'Get certificate based exclusions' },
			{ name: 'Query Certificate Based Exclusions', value: 'cbExclusionsQueryV1', description: 'Search for cert-based exclusions', action: 'Query certificate based exclusions' },
			{ name: 'Update Certificate Based Exclusion', value: 'cbExclusionsUpdateV1', description: 'Updates existing Certificate Based Exclusions', action: 'Update certificate based exclusion' },
			{ name: 'Get Certificate Information', value: 'certificatesGetV1', description: 'Retrieves certificate signing information for a file', action: 'Get certificate information' },
		
	], 'cbExclusionsQueryV1'),
];

export const certificateBasedExclusionsFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                   IDs                                      */
	/* -------------------------------------------------------------------------- */
	createIdsField('certificateBasedExclusions', ['cbExclusionsDeleteV1', 'cbExclusionsGetV1', 'certificatesGetV1']),
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['certificateBasedExclusions'],
				operation: ['cbExclusionsDeleteV1'],
			},
		},
		default: '',
		description: 'Audit log comment for deletion',
	},

	/* -------------------------------------------------------------------------- */
	/*                                Body JSON                                   */
	/* -------------------------------------------------------------------------- */
	createBodyJsonField('certificateBasedExclusions', ['cbExclusionsCreateV1', 'cbExclusionsUpdateV1']),

	/* -------------------------------------------------------------------------- */
	/*                            Pagination & Filters                            */
	/* -------------------------------------------------------------------------- */
	...createStandardPaginationFields('certificateBasedExclusions', ['cbExclusionsQueryV1']),
];
