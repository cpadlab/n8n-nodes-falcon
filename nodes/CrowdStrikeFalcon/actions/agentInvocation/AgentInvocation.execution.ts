import { NodeOperationError } from 'n8n-workflow';
import type { FalconClient } from 'crowdstrike-falcon';
import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Handles the 'getAgentInvocationV3' operation to retrieve invocation messages.
 */
async function handleGetAgentInvocationV3(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Retrieves the list of messages resulted from a specific agent invocation ID.
	 */
	const id = context.getNodeParameter('id', index) as string;

	return await falconClient.agentInvocation.getAgentInvocationV3(id);
}

/**
 * Handles the 'invokePublishedAgentExternalV1' operation to run a published agent.
 */
async function handleInvokePublishedAgentExternalV1(
	context: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {
	/*
	 * Invokes a published agent using the specified input payload JSON body.
	 */
	const rawJson = context.getNodeParameter('bodyJson', index, '') as string;
	let body: Record<string, any> = {};

	if (rawJson) {
		try {
			body = typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
		} catch (e) {
			throw new NodeOperationError(context.getNode(), `Invalid JSON in Body Payload: ${(e as Error).message}`);
		}
	}

	return await falconClient.agentInvocation.invokePublishedAgentExternalV1(body as any);
}

/**
 * Main execution handler for CrowdStrike Falcon Agent Invocation operations.
 * Routes execution to specialized internal functions for low Cognitive Complexity.
 */
export async function executeAgentInvocation(
	this: IExecuteFunctions,
	index: number,
	falconClient: FalconClient,
): Promise<any> {

	const operation = this.getNodeParameter('operation', index) as string;

	switch (operation) {
		case 'getAgentInvocationV3':
			return await handleGetAgentInvocationV3(this, index, falconClient);
		case 'invokePublishedAgentExternalV1':
			return await handleInvokePublishedAgentExternalV1(this, index, falconClient);
		default:
			throw new NodeOperationError((typeof this?.getNode === 'function' ? this.getNode() : (this as any)?.getNode ? (this as any).getNode() : ({} as any)), `Operation ${operation} is not supported for Agent Invocation.`);
	}
	
}
