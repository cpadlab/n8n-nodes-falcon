import type { INodeProperties } from 'n8n-workflow';

import { createOperationField } from '../common';

export const oauth2Operations: INodeProperties[] = [
	createOperationField('oauth2', [

			{ name: 'OAuth2 Access Token', value: 'oauth2AccessToken', description: 'Generate an OAuth2 access token', action: 'OAuth2 access token' },
			{ name: 'OAuth2 Revoke Token', value: 'oauth2RevokeToken', description: 'Revoke a previously issued OAuth2 access token', action: 'OAuth2 revoke token' },
		
	], 'oauth2AccessToken'),
];

export const oauth2Fields: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['oauth2'],
				operation: ['oauth2AccessToken', 'oauth2RevokeToken'],
			},
		},
		default: '',
		required: true,
		description: 'OAuth2 Client ID',
	},
	{
		displayName: 'Client Secret',
		name: 'clientSecret',
		type: 'string',
		typeOptions: {
			password: true,
		},
		displayOptions: {
			show: {
				resource: ['oauth2'],
				operation: ['oauth2AccessToken'],
			},
		},
		default: '',
		required: true,
		description: 'OAuth2 Client Secret',
	},
	{
		displayName: 'Member CID',
		name: 'memberCid',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['oauth2'],
				operation: ['oauth2AccessToken'],
			},
		},
		default: '',
		description: 'Child Customer ID for MSSP environments',
	},
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		typeOptions: {
			password: true,
		},
		displayOptions: {
			show: {
				resource: ['oauth2'],
				operation: ['oauth2RevokeToken'],
			},
		},
		default: '',
		required: true,
		description: 'Access token to revoke',
	},
];
