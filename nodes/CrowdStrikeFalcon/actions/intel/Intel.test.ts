import type { FalconClient } from 'crowdstrike-falcon';
import { executeIntel } from './Intel.execution';

/**
 * Comprehensive unit test suite for executeIntel operations.
 */
describe('executeIntel', () => {
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

		await expect(executeIntel.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});


	it.each([
		'caoIncidentsAggregatesV1',
		'caoIncidentsEntitiesV1',
		'caoIncidentsQueriesV1',
		'getIntelActorEntities',
		'getIntelIndicatorEntities',
		'getIntelReportEntities',
		'getIntelReportPDF',
		'getIntelRuleEntities',
		'getIntelRuleFile',
		'getLatestIntelRuleFile',
		'getMalwareEntities',
		'getMalwareMitreReport',
		'getMitreReport',
		'getVulnerabilities',
		'postMitreAttacks',
		'queryIntelActorEntities',
		'queryIntelActorIds',
		'queryIntelIndicatorEntities',
		'queryIntelIndicatorIds',
		'queryIntelReportEntities',
		'queryIntelReportIds',
		'queryIntelRuleIds',
		'queryMalware',
		'queryMalwareEntities',
		'queryMitreAttacks',
		'queryMitreAttacksForMalware',
		'queryVulnerabilities'
	])("should execute '%s' operation with default parameters successfully", async (operation) => {
		const mockContext: any = {
			getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
				if (paramName === 'operation') return operation;
				return fallback !== undefined ? fallback : '';
			}),
		};

		const result = await executeIntel.call(mockContext, 0, mockFalconClient);
		expect(result).toEqual({ success: true });
	});

	it.each([
		'caoIncidentsAggregatesV1',
		'caoIncidentsEntitiesV1',
		'caoIncidentsQueriesV1',
		'getIntelActorEntities',
		'getIntelIndicatorEntities',
		'getIntelReportEntities',
		'getIntelReportPDF',
		'getIntelRuleEntities',
		'getIntelRuleFile',
		'getLatestIntelRuleFile',
		'getMalwareEntities',
		'getMalwareMitreReport',
		'getMitreReport',
		'getVulnerabilities',
		'postMitreAttacks',
		'queryIntelActorEntities',
		'queryIntelActorIds',
		'queryIntelIndicatorEntities',
		'queryIntelIndicatorIds',
		'queryIntelReportEntities',
		'queryIntelReportIds',
		'queryIntelRuleIds',
		'queryMalware',
		'queryMalwareEntities',
		'queryMitreAttacks',
		'queryMitreAttacksForMalware',
		'queryVulnerabilities'
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

		const result = await executeIntel.call(mockContext, 0, mockFalconClient);
		expect(result).toEqual({ success: true });
	});
});
