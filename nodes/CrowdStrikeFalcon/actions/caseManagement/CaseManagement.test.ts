import type { FalconClient } from 'crowdstrike-falcon';
import { executeCaseManagement } from './CaseManagement.execution';

/**
 * Comprehensive unit test suite for executeCaseManagement operations.
 */
describe('executeCaseManagement', () => {
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

		await expect(executeCaseManagement.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});


	it.each([
		'aggregatesAccessTagsPostV1',
		'aggregatesNotificationGroupsPostV1',
		'aggregatesNotificationGroupsPostV2',
		'aggregatesSlasPostV1',
		'aggregatesTemplatesPostV1',
		'entitiesFieldsGetV1',
		'entitiesNotificationGroupsDeleteV1',
		'entitiesNotificationGroupsDeleteV2',
		'entitiesNotificationGroupsGetV1',
		'entitiesNotificationGroupsGetV2',
		'entitiesNotificationGroupsPatchV1',
		'entitiesNotificationGroupsPatchV2',
		'entitiesNotificationGroupsPostV1',
		'entitiesNotificationGroupsPostV2',
		'entitiesSlasDeleteV1',
		'entitiesSlasGetV1',
		'entitiesSlasPatchV1',
		'entitiesSlasPostV1',
		'entitiesTemplateSnapshotsGetV1',
		'entitiesTemplatesDeleteV1',
		'entitiesTemplatesExportGetV1',
		'entitiesTemplatesGetV1',
		'entitiesTemplatesImportPostV1',
		'entitiesTemplatesPatchV1',
		'entitiesTemplatesPostV1',
		'queriesAccessTagsGetV1',
		'queriesFieldsGetV1',
		'queriesNotificationGroupsGetV1',
		'queriesNotificationGroupsGetV2',
		'queriesSlasGetV1',
		'queriesTemplateSnapshotsGetV1',
		'queriesTemplatesGetV1'
	])("should execute '%s' operation with default parameters successfully", async (operation) => {
		const mockContext: any = {
			getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
				if (paramName === 'operation') return operation;
				return fallback !== undefined ? fallback : '';
			}),
		};

		const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
		expect(result).toEqual({ success: true });
	});

	it.each([
		'aggregatesAccessTagsPostV1',
		'aggregatesNotificationGroupsPostV1',
		'aggregatesNotificationGroupsPostV2',
		'aggregatesSlasPostV1',
		'aggregatesTemplatesPostV1',
		'entitiesFieldsGetV1',
		'entitiesNotificationGroupsDeleteV1',
		'entitiesNotificationGroupsDeleteV2',
		'entitiesNotificationGroupsGetV1',
		'entitiesNotificationGroupsGetV2',
		'entitiesNotificationGroupsPatchV1',
		'entitiesNotificationGroupsPatchV2',
		'entitiesNotificationGroupsPostV1',
		'entitiesNotificationGroupsPostV2',
		'entitiesSlasDeleteV1',
		'entitiesSlasGetV1',
		'entitiesSlasPatchV1',
		'entitiesSlasPostV1',
		'entitiesTemplateSnapshotsGetV1',
		'entitiesTemplatesDeleteV1',
		'entitiesTemplatesExportGetV1',
		'entitiesTemplatesGetV1',
		'entitiesTemplatesImportPostV1',
		'entitiesTemplatesPatchV1',
		'entitiesTemplatesPostV1',
		'queriesAccessTagsGetV1',
		'queriesFieldsGetV1',
		'queriesNotificationGroupsGetV1',
		'queriesNotificationGroupsGetV2',
		'queriesSlasGetV1',
		'queriesTemplateSnapshotsGetV1',
		'queriesTemplatesGetV1'
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

		const result = await executeCaseManagement.call(mockContext, 0, mockFalconClient);
		expect(result).toEqual({ success: true });
	});
});
