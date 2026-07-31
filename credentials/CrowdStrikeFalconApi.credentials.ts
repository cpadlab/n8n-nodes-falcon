import type { ICredentialTestRequest, ICredentialType, INodeProperties, Icon } from 'n8n-workflow';

export class CrowdStrikeFalconApi implements ICredentialType {
	name = 'crowdStrikeFalconApi';
	displayName = 'CrowdStrike Falcon API';
	icon: Icon = 'file:falcon.svg';
	documentationUrl = 'https://developer.crowdstrike.com/sdks/typescript/';
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.cloud === "us-1" ? "https://api.crowdstrike.com" : $credentials.cloud === "us-2" ? "https://api.us-2.crowdstrike.com" : $credentials.cloud === "us-gov-1" ? "https://api.laggar.gcw.crowdstrike.com" : "https://api.eu-1.crowdstrike.com"}}',
			url: '/sensors/queries/installers/ccid/v1',
		},
	};
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