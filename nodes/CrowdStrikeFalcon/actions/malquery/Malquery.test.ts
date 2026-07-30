import type { FalconClient } from 'crowdstrike-falcon';
import { executeMalquery } from './Malquery.execution';

/**
 * Unit test suite for executeMalquery operations.
 */
describe('executeMalquery', () => {
	let mockFalconClient: FalconClient;

	beforeEach(() => {
		jest.clearAllMocks();
		mockFalconClient = new Proxy({}, {
			get: () => new Proxy({}, {
				get: () => jest.fn().mockResolvedValue({ success: true }),
			}),
		}) as unknown as FalconClient;
	});

	it('should throw an error for unsupported operation', async () => {
		const mockContext: any = {
			getNodeParameter: jest.fn().mockReturnValue('unsupportedOperation'),
		};

		await expect(executeMalquery.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getMalQueryDownloadV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryDownloadV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryEntitiesSamplesFetchV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryEntitiesSamplesFetchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryMetadataV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryMetadataV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryQuotasV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryQuotasV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMalQueryRequestV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMalQueryRequestV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMalQueryEntitiesSamplesMultidownloadV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMalQueryEntitiesSamplesMultidownloadV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMalQueryExactSearchV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMalQueryExactSearchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMalQueryFuzzySearchV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMalQueryFuzzySearchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postMalQueryHuntV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postMalQueryHuntV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMalquery.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
