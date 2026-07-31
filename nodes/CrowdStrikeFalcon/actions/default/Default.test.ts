import type { FalconClient } from 'crowdstrike-falcon';
import { executeDefault } from './Default.execution';

/**
 * Comprehensive unit test suite for executeDefault operations.
 */
describe('executeDefault', () => {
	let mockFalconClient: FalconClient;

	beforeEach(() => {
		jest.clearAllMocks();
		mockFalconClient = new Proxy({}, {
			get: () => new Proxy({}, {
				get: () => jest.fn().mockResolvedValue({ success: true }),
			}),
		}) as any as FalconClient;
	});

	it('should throw an error for unsupported operation', async () => {
		const mockContext: any = {
			getNodeParameter: jest.fn().mockReturnValue('unsupportedOperation'),
		};

		await expect(executeDefault.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});


	it.each([
		'combinedQueryInstalledPatches',
		'deleteCollectionsV1',
		'deleteConfigsV1',
		'falconCompleteDashboardsQueriesDetectsV1Get',
		'falconCompleteDashboardsQueriesIncidentsV1Get',
		'getCollectionCountsByV1',
		'getCollectionsV1',
		'getCollectorsV1',
		'getCombinedCollectionsV1',
		'getCombinedCollectorsV1',
		'getCombinedConfigsV1',
		'getCombinedTemplatesV1',
		'getConfigDownloadV1',
		'getConfigsV1',
		'getTemplatesV1',
		'postCollectionsV1',
		'postCollectorsV1',
		'postConfigsV1',
		'postDeployV1',
		'putCollectionsV1',
		'putConfigsV1',
		'searchCollectionsV1',
		'searchCollectorsV1',
		'searchConfigsV1',
		'searchTemplatesV1',
		'v1HostConfigsPost',
		'v1StatusGet',
		'validateCollectionV1',
		'validateConfigV1'
	])("should execute '%s' operation with default parameters successfully", async (operation) => {
		const mockContext: any = {
			getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
				if (paramName === 'operation') return operation;
				return fallback !== undefined ? fallback : '';
			}),
		};

		const result = await executeDefault.call(mockContext, 0, mockFalconClient);
		expect(result).toEqual({ success: true });
	});

	it.each([
		'combinedQueryInstalledPatches',
		'deleteCollectionsV1',
		'deleteConfigsV1',
		'falconCompleteDashboardsQueriesDetectsV1Get',
		'falconCompleteDashboardsQueriesIncidentsV1Get',
		'getCollectionCountsByV1',
		'getCollectionsV1',
		'getCollectorsV1',
		'getCombinedCollectionsV1',
		'getCombinedCollectorsV1',
		'getCombinedConfigsV1',
		'getCombinedTemplatesV1',
		'getConfigDownloadV1',
		'getConfigsV1',
		'getTemplatesV1',
		'postCollectionsV1',
		'postCollectorsV1',
		'postConfigsV1',
		'postDeployV1',
		'putCollectionsV1',
		'putConfigsV1',
		'searchCollectionsV1',
		'searchCollectorsV1',
		'searchConfigsV1',
		'searchTemplatesV1',
		'v1HostConfigsPost',
		'v1StatusGet',
		'validateCollectionV1',
		'validateConfigV1'
	])("should execute '%s' operation with non-empty parameters successfully", async (operation) => {
		const mockContext: any = {
			getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
				if (paramName === 'operation') return operation;
				if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
				if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
				if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
				if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
				if (typeof fallback === 'number') return fallback;
				if (typeof fallback === 'boolean') return true;
				return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
			}),
		};

		const result = await executeDefault.call(mockContext, 0, mockFalconClient);
		expect(result).toEqual({ success: true });
	});
});
