import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createOperationField } from '../common';

export const imageAssessmentPoliciesOperations: INodeProperties[] = [
	createOperationField('imageAssessmentPolicies', [

			{ name: 'Create Policies', value: 'createPolicies', description: 'Create Image Assessment policies', action: 'Create policies' },
			{ name: 'Create Policy Groups', value: 'createPolicyGroups', description: 'Create Image Assessment Policy Group entities', action: 'Create policy groups' },
			{ name: 'Delete Policy', value: 'deletePolicy', description: 'Delete Image Assessment Policy by policy UUID', action: 'Delete policy' },
			{ name: 'Delete Policy Group', value: 'deletePolicyGroup', description: 'Delete Image Assessment Policy Group entities', action: 'Delete policy group' },
			{ name: 'Read Policies', value: 'readPolicies', description: 'Get all Image Assessment policies', action: 'Read policies' },
			{ name: 'Read Policy Exclusions', value: 'readPolicyExclusions', description: 'Retrieve Image Assessment Policy Exclusion entities', action: 'Read policy exclusions' },
			{ name: 'Read Policy Groups', value: 'readPolicyGroups', description: 'Retrieve Image Assessment Policy Group entities', action: 'Read policy groups' },
			{ name: 'Update Policies', value: 'updatePolicies', description: 'Update Image Assessment Policy entities', action: 'Update policies' },
			{ name: 'Update Policy Exclusions', value: 'updatePolicyExclusions', description: 'Update Image Assessment Policy Exclusion entities', action: 'Update policy exclusions' },
			{ name: 'Update Policy Groups', value: 'updatePolicyGroups', description: 'Update Image Assessment Policy Group entities', action: 'Update policy groups' },
			{ name: 'Update Policy Precedence', value: 'updatePolicyPrecedence', description: 'Update Image Assessment Policy precedence', action: 'Update policy precedence' },
		
	], 'readPolicies'),
];

export const imageAssessmentPoliciesFields: INodeProperties[] = [
	{
		displayName: 'Policy / Group ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['imageAssessmentPolicies'],
				operation: ['deletePolicy', 'deletePolicyGroup', 'updatePolicies', 'updatePolicyGroups'],
			},
		},
		default: '',
		required: true,
		description: 'Unique policy or group UUID',
	},
	createBodyJsonField('imageAssessmentPolicies', ['createPolicies',
					'createPolicyGroups',
					'updatePolicies',
					'updatePolicyExclusions',
					'updatePolicyGroups',
					'updatePolicyPrecedence',]),
];
