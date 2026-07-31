import type { INodeProperties } from 'n8n-workflow';

import { createBodyJsonField, createIdsField, createOperationField, createStandardPaginationFields } from '../common';

export const cloudSnapshotsOperations: INodeProperties[] = [
	createOperationField('cloudSnapshots', [

			{ name: 'Create Deployment Entity', value: 'createDeploymentEntity', description: 'Launch a snapshot scan for a given cloud asset', action: 'Create deployment entity' },
			{ name: 'Get Credentials', value: 'getCredentialsMixin0Mixin60', description: 'Gets registry credentials', action: 'Get credentials' },
			{ name: 'Get Scan Report', value: 'getScanReport', description: 'Retrieve the scan report for an instance', action: 'Get scan report' },
			{ name: 'Read Deployments Combined', value: 'readDeploymentsCombined', description: 'Retrieve snapshot jobs matching search criteria', action: 'Read deployments combined' },
			{ name: 'Read Deployments Entities', value: 'readDeploymentsEntities', description: 'Retrieve snapshot jobs identified by provided IDs', action: 'Read deployments entities' },
			{ name: 'Register Cloud Account', value: 'register', description: 'Register customer cloud account for snapshot scanning', action: 'Register cloud account' },
		
	], 'readDeploymentsCombined'),
];

export const cloudSnapshotsFields: INodeProperties[] = [
	createIdsField('cloudSnapshots', ['getScanReport', 'readDeploymentsEntities']),
	createBodyJsonField('cloudSnapshots', ['createDeploymentEntity', 'register']),
	...createStandardPaginationFields('cloudSnapshots', ['readDeploymentsCombined']),
];
