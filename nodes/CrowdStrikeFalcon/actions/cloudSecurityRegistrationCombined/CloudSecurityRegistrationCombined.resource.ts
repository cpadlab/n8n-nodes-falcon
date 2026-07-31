import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField } from '../common';

export const cloudSecurityRegistrationCombinedOperations: INodeProperties[] = [
	createOperationField('cloudSecurityRegistrationCombined', [

			{ name: 'Get Account Aggregates', value: 'cloudRegistrationCrossProviderGetAccountAggregates', description: 'Returns cross-provider account aggregates by status', action: 'Get account aggregates' },
		
	], 'cloudRegistrationCrossProviderGetAccountAggregates'),
];

export const cloudSecurityRegistrationCombinedFields: INodeProperties[] = [
	createBodyJsonField('cloudSecurityRegistrationCombined', ['cloudRegistrationCrossProviderGetAccountAggregates']),
];
