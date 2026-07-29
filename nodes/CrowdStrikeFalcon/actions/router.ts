import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';
import { executeCases } from './cases/Cases.execution';

export async function router( this: IExecuteFunctions, index: number, falconClient: FalconClient ): Promise<any> {

	const resource = this.getNodeParameter('resource', index) as string;

	switch (resource) {
		case 'cases':
			return await executeCases.call(this, index, falconClient);
		default:
			throw new Error(`Resource ${resource} is not supported.`);
	}
    
}