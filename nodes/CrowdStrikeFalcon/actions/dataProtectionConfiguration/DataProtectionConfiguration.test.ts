import type { FalconClient } from 'crowdstrike-falcon';
import { executeDataProtectionConfiguration } from './DataProtectionConfiguration.execution';

/**
 * Comprehensive unit test suite for executeDataProtectionConfiguration operations.
 */
describe('executeDataProtectionConfiguration', () => {
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

		await expect(executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});


	it.each([
		'entitiesClassificationDeleteV2',
		'entitiesClassificationGetV2',
		'entitiesClassificationPatchV2',
		'entitiesClassificationPostV2',
		'entitiesCloudApplicationCreate',
		'entitiesCloudApplicationDelete',
		'entitiesCloudApplicationGet',
		'entitiesCloudApplicationPatch',
		'entitiesContentPatternCreate',
		'entitiesContentPatternDelete',
		'entitiesContentPatternGet',
		'entitiesContentPatternPatch',
		'entitiesEnterpriseAccountCreate',
		'entitiesEnterpriseAccountDelete',
		'entitiesEnterpriseAccountGet',
		'entitiesEnterpriseAccountPatch',
		'entitiesFileTypeGet',
		'entitiesLocalApplicationCreate',
		'entitiesLocalApplicationDelete',
		'entitiesLocalApplicationGet',
		'entitiesLocalApplicationGroupCreate',
		'entitiesLocalApplicationGroupDelete',
		'entitiesLocalApplicationGroupGet',
		'entitiesLocalApplicationGroupPatch',
		'entitiesLocalApplicationPatch',
		'entitiesPolicyDeleteV2',
		'entitiesPolicyGetV2',
		'entitiesPolicyPatchV2',
		'entitiesPolicyPostV2',
		'entitiesPolicyPrecedencePostV1',
		'entitiesSensitivityLabelCreateV2',
		'entitiesSensitivityLabelDeleteV2',
		'entitiesSensitivityLabelGetV2',
		'entitiesWebLocationCreateV2',
		'entitiesWebLocationDeleteV2',
		'entitiesWebLocationGetV2',
		'entitiesWebLocationPatchV2',
		'queriesClassificationGetV2',
		'queriesCloudApplicationGetV2',
		'queriesContentPatternGetV2',
		'queriesEnterpriseAccountGetV2',
		'queriesFileTypeGetV2',
		'queriesLocalApplicationGet',
		'queriesLocalApplicationGroupGet',
		'queriesPolicyGetV2',
		'queriesSensitivityLabelGetV2',
		'queriesWebLocationGetV2'
	])("should execute '%s' operation with default parameters successfully", async (operation) => {
		const mockContext: any = {
			getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
				if (paramName === 'operation') return operation;
				return fallback !== undefined ? fallback : '';
			}),
		};

		const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
		expect(result).toEqual({ success: true });
	});

	it.each([
		'entitiesClassificationDeleteV2',
		'entitiesClassificationGetV2',
		'entitiesClassificationPatchV2',
		'entitiesClassificationPostV2',
		'entitiesCloudApplicationCreate',
		'entitiesCloudApplicationDelete',
		'entitiesCloudApplicationGet',
		'entitiesCloudApplicationPatch',
		'entitiesContentPatternCreate',
		'entitiesContentPatternDelete',
		'entitiesContentPatternGet',
		'entitiesContentPatternPatch',
		'entitiesEnterpriseAccountCreate',
		'entitiesEnterpriseAccountDelete',
		'entitiesEnterpriseAccountGet',
		'entitiesEnterpriseAccountPatch',
		'entitiesFileTypeGet',
		'entitiesLocalApplicationCreate',
		'entitiesLocalApplicationDelete',
		'entitiesLocalApplicationGet',
		'entitiesLocalApplicationGroupCreate',
		'entitiesLocalApplicationGroupDelete',
		'entitiesLocalApplicationGroupGet',
		'entitiesLocalApplicationGroupPatch',
		'entitiesLocalApplicationPatch',
		'entitiesPolicyDeleteV2',
		'entitiesPolicyGetV2',
		'entitiesPolicyPatchV2',
		'entitiesPolicyPostV2',
		'entitiesPolicyPrecedencePostV1',
		'entitiesSensitivityLabelCreateV2',
		'entitiesSensitivityLabelDeleteV2',
		'entitiesSensitivityLabelGetV2',
		'entitiesWebLocationCreateV2',
		'entitiesWebLocationDeleteV2',
		'entitiesWebLocationGetV2',
		'entitiesWebLocationPatchV2',
		'queriesClassificationGetV2',
		'queriesCloudApplicationGetV2',
		'queriesContentPatternGetV2',
		'queriesEnterpriseAccountGetV2',
		'queriesFileTypeGetV2',
		'queriesLocalApplicationGet',
		'queriesLocalApplicationGroupGet',
		'queriesPolicyGetV2',
		'queriesSensitivityLabelGetV2',
		'queriesWebLocationGetV2'
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

		const result = await executeDataProtectionConfiguration.call(mockContext, 0, mockFalconClient);
		expect(result).toEqual({ success: true });
	});
});
