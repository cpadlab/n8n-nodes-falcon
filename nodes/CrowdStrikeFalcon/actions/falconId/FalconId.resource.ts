import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const falconIdOperations: INodeProperties[] = [
	createOperationField('falconId', [

			{ name: 'Delete Third Party Passkey Registry', value: 'deleteThirdPartyPasskeyRegistry', description: 'Deletes third party passkey registries', action: 'Delete third party passkey registry' },
			{ name: 'Get Third Party Passkey Registry', value: 'getThirdPartyPasskeyRegistry', description: 'Fetches third party passkey registries', action: 'Get third party passkey registry' },
			{ name: 'Query Third Party Passkey Registry', value: 'queryThirdPartyPasskeyRegistry', description: 'Query third party passkey registries', action: 'Query third party passkey registry' },
			{ name: 'Update Third Party Passkey Registry', value: 'updateThirdPartyPasskeyRegistry', description: 'Updates third party passkey registries', action: 'Update third party passkey registry' },
		
	], 'queryThirdPartyPasskeyRegistry'),
];

export const falconIdFields: INodeProperties[] = [
	createIdsField('falconId', ['deleteThirdPartyPasskeyRegistry', 'getThirdPartyPasskeyRegistry']),
	createBodyJsonField('falconId', ['updateThirdPartyPasskeyRegistry']),
	...createStandardPaginationFields('falconId', ['queryThirdPartyPasskeyRegistry']),
];
