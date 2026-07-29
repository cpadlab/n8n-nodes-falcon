import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';
import { executeAccessScopes } from './accessScopes/AccessScopes.execution';
import { executeAdmissionControlPolicies } from './admissionControlPolicies/AdmissionControlPolicies.execution';
import { executeAgentInvocation } from './agentInvocation/AgentInvocation.execution';
import { executeAlerts } from './alerts/Alerts.execution';
import { executeApiClients } from './apiClients/ApiClients.execution';
import { executeApiIntegrations } from './apiIntegrations/ApiIntegrations.execution';
import { executeCases } from './cases/Cases.execution';

export async function router( this: IExecuteFunctions, index: number, falconClient: FalconClient ): Promise<any> {

	const resource = this.getNodeParameter('resource', index) as string;

	switch (resource) {
		case 'accessScopes':
			return await executeAccessScopes.call(this, index, falconClient);
		case 'admissionControlPolicies':
			return await executeAdmissionControlPolicies.call(this, index, falconClient);
		case 'agentInvocation':
			return await executeAgentInvocation.call(this, index, falconClient);
		case 'alerts':
			return await executeAlerts.call(this, index, falconClient);
		case 'apiClients':
			return await executeApiClients.call(this, index, falconClient);
		case 'apiIntegrations':
			return await executeApiIntegrations.call(this, index, falconClient);
		case 'cases':
			return await executeCases.call(this, index, falconClient);
		default:
			throw new Error(`Resource ${resource} is not supported.`);
	}

}