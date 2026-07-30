import type { FalconClient } from 'crowdstrike-falcon';
import { executeIdentityEntities } from './IdentityEntities.execution';

/**
 * Comprehensive unit test suite for executeIdentityEntities operations.
 */
describe('executeIdentityEntities', () => {
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

		await expect(executeIdentityEntities.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getSensorAggregates' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorAggregates';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIdentityEntities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorAggregates' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorAggregates';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeIdentityEntities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorDetails' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorDetails';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIdentityEntities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorDetails' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorDetails';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeIdentityEntities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'querySensorsByFilter' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'querySensorsByFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIdentityEntities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'querySensorsByFilter' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'querySensorsByFilter';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeIdentityEntities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
