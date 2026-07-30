import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class CrowdStrikeFalconApi implements ICredentialType {
	name = 'crowdStrikeFalconApi';
	displayName = 'CrowdStrike Falcon API';
	documentationUrl = 'https://developer.crowdstrike.com/sdks/typescript/';
	properties: INodeProperties[] = [
		{
			displayName: 'Cloud Region',
			name: 'cloud',
			type: 'options',
			options: [
				{ name: 'US-1', value: 'us-1' },
				{ name: 'US-2', value: 'us-2' },
				{ name: 'EU-1', value: 'eu-1' },
				{ name: 'US-GOV-1', value: 'us-gov-1' },
			],
			default: 'eu-1',
			required: true,
			description: 'The CrowdStrike cloud environment/region to connect to',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
			description: 'API Client ID generated in Falcon Console under API Scopes',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'API Client Secret associated with the Client ID',
		},
		{
			displayName: 'Member CID',
			name: 'memberCid',
			type: 'string',
			default: '',
			required: false,
			description: 'Optional Member CID for MSSP targeting if your key pair has access to multiple CIDs',
		},
	];
}