import type { FalconClient } from 'crowdstrike-falcon';
import { executeCustomIoa } from './CustomIoa.execution';

/**
 * Comprehensive unit test suite for executeCustomIoa operations.
 */
describe('executeCustomIoa', () => {
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

		await expect(executeCustomIoa.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});


	it.each([
		'createRule',
		'createRuleGroupMixin0',
		'deleteRuleGroupsMixin0',
		'deleteRules',
		'getPatterns',
		'getPlatformsMixin0',
		'getRuleGroupsMixin0',
		'getRuleTypes',
		'getRulesGet',
		'getRulesMixin0',
		'queryPatterns',
		'queryPlatformsMixin0',
		'queryRuleGroupsFull',
		'queryRuleGroupsMixin0',
		'queryRuleTypes',
		'queryRulesMixin0',
		'updateRuleGroupMixin0',
		'updateRules',
		'updateRulesV2',
		'validate'
	])("should execute '%s' operation with default parameters successfully", async (operation) => {
		const mockContext: any = {
			getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
				if (paramName === 'operation') return operation;
				return fallback !== undefined ? fallback : '';
			}),
		};

		const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
		expect(result).toEqual({ success: true });
	});

	it.each([
		'createRule',
		'createRuleGroupMixin0',
		'deleteRuleGroupsMixin0',
		'deleteRules',
		'getPatterns',
		'getPlatformsMixin0',
		'getRuleGroupsMixin0',
		'getRuleTypes',
		'getRulesGet',
		'getRulesMixin0',
		'queryPatterns',
		'queryPlatformsMixin0',
		'queryRuleGroupsFull',
		'queryRuleGroupsMixin0',
		'queryRuleTypes',
		'queryRulesMixin0',
		'updateRuleGroupMixin0',
		'updateRules',
		'updateRulesV2',
		'validate'
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

		const result = await executeCustomIoa.call(mockContext, 0, mockFalconClient);
		expect(result).toEqual({ success: true });
	});
});
