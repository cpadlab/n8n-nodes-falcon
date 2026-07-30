import type { FalconClient } from 'crowdstrike-falcon';
import { executeNetworkScanScanRuns } from './NetworkScanScanRuns.execution';

/**
 * Comprehensive unit test suite for executeNetworkScanScanRuns operations.
 */
describe('executeNetworkScanScanRuns', () => {
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

		await expect(executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateScanRuns' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateScanRuns';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateScanRuns' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateScanRuns';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createScanRuns' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createScanRuns';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createScanRuns' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createScanRuns';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getScanRuns' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getScanRuns';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getScanRuns' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getScanRuns';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryScanRuns' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryScanRuns';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryScanRuns' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryScanRuns';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateScanRuns' operation with default parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateScanRuns';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateScanRuns' operation with non-empty parameters successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateScanRuns';
					if (['ids', 'id', 'idsString', 'user_ids', 'cids', 'uuids', 'device_ids', 'composite_ids', 'event_ids', 'tags'].includes(paramName)) return 'id1, id2';
					if (['bodyJson', 'json', 'body', 'rawJson', 'payload', 'filter_builder', 'additionalFields', 'additionalFieldsJson', 'additional_fields', 'fields', 'options', 'config', 'params', 'metadata', 'updateFields'].includes(paramName)) return '{\"key\": \"value\"}';
					if (['filter', 'query', 'sort', 'q', 'search'].includes(paramName)) return 'test_query';
					if (['limit', 'offset', 'max_results'].includes(paramName)) return 10;
					if (typeof fallback === 'number') return fallback;
					if (typeof fallback === 'boolean') return true;
					return fallback !== undefined && fallback !== '' ? fallback : 'param_value';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
