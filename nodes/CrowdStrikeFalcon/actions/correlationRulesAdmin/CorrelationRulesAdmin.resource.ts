import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField } from '../common';

export const correlationRulesAdminOperations: INodeProperties[] = [
	createOperationField('correlationRulesAdmin', [

			{ name: 'Update Rule Ownership V1', value: 'entitiesRulesOwnershipPutV1', description: 'Change the owner of an existing Correlation Rule', action: 'Update rule ownership v1' },
			{ name: 'Update Rule Ownership V2 (Bulk)', value: 'entitiesRulesOwnershipPutV2', description: 'Bulk change the owner of existing Correlation Rules', action: 'Update rule ownership v2' },
		
	], 'entitiesRulesOwnershipPutV1'),
];

export const correlationRulesAdminFields: INodeProperties[] = [
	createBodyJsonField('correlationRulesAdmin', ['entitiesRulesOwnershipPutV1', 'entitiesRulesOwnershipPutV2']),
];
