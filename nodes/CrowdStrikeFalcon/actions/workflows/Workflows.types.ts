export interface IWorkflowsGenericParams {
	id?: string;
	ids?: string[];
	actionName?: string;
	name?: string;
	key?: string;
	depth?: number;
	batchSize?: number;
	sourceEventUrl?: string;
	validateOnly?: boolean;
	sanitize?: boolean;
	includeMocks?: boolean;
	version?: number;
	skipArtifactResolution?: boolean;
	executionCid?: string[];
	definitionId?: string | string[];
	skipFields?: string[];
	filter?: string;
	sort?: string;
	offset?: string;
	limit?: number;
	body?: Record<string, any> | Array<any>;
}
