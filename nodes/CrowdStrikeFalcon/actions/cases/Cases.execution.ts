import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

export async function executeCases( this: IExecuteFunctions, index: number, falconClient: FalconClient ): Promise<any> {
	
    const operation = this.getNodeParameter('operation', index) as string;
	let responseData: any;

	switch (operation) {
        
		case 'queriesCasesGetV1': {
			const filter = this.getNodeParameter('filter', index, '') as string;
			const limit = this.getNodeParameter('limit', index, 100) as number;
			responseData = await falconClient.cases.queriesCasesGetV1(
				limit,
				undefined, // offset
				undefined, // sort
				filter ? filter : undefined,
				undefined, // q
			);
			break;
		}

		case 'entitiesCasesPostV2': {
			const idsString = this.getNodeParameter('ids', index) as string;
			const ids = idsString.split(',').map((id) => id.trim());
			responseData = await falconClient.cases.entitiesCasesPostV2({
				ids,
			});
			break;
		}

		default:
			throw new Error(`Operation ${operation} is not supported for Cases.`);

	}

	return responseData;

}