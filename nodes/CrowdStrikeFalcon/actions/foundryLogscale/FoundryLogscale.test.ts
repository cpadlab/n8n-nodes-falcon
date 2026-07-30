import type { FalconClient } from 'crowdstrike-falcon';
import { executeFoundryLogscale } from './FoundryLogscale.execution';

/**
 * Unit test suite for executeFoundryLogscale operations.
 */
describe('executeFoundryLogscale', () => {
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

		await expect(executeFoundryLogscale.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createSavedSearchesDynamicExecuteAltV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createSavedSearchesDynamicExecuteAltV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createSavedSearchesExecuteAltV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createSavedSearchesExecuteAltV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createSavedSearchesIngestAltV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createSavedSearchesIngestAltV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'downloadResults' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'downloadResults';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'execute' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'execute';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeDynamic' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeDynamic';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSavedSearchesExecuteAltV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSavedSearchesExecuteAltV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSavedSearchesJobResultsDownloadAltV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSavedSearchesJobResultsDownloadAltV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSearchResults' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSearchResults';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'ingestData' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'ingestData';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'ingestDataAsyncV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'ingestDataAsyncV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listRepos' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listRepos';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'listViews' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'listViews';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'populate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'populate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFoundryLogscale.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
