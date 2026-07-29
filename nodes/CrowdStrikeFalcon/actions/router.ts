import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';
import { executeAccessScopes } from './accessScopes/AccessScopes.execution';
import { executeAdmissionControlPolicies } from './admissionControlPolicies/AdmissionControlPolicies.execution';
import { executeCases } from './cases/Cases.execution';

export async function router( this: IExecuteFunctions, index: number, falconClient: FalconClient ): Promise<any> {

	const resource = this.getNodeParameter('resource', index) as string;

	switch (resource) {
		case 'accessScopes':
			return await executeAccessScopes.call(this, index, falconClient);
		case 'admissionControlPolicies':
			return await executeAdmissionControlPolicies.call(this, index, falconClient);
		case 'cases':
			return await executeCases.call(this, index, falconClient);
		default:
			throw new Error(`Resource ${resource} is not supported.`);
	}

}