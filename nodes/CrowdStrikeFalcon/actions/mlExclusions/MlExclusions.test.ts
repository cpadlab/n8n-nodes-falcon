import type { FalconClient } from 'crowdstrike-falcon';
import { executeMlExclusions } from './MlExclusions.execution';

/**
 * Unit test suite for executeMlExclusions operations.
 */
describe('executeMlExclusions', () => {
	let mockFalconClient: FalconClient;

	beforeEach(() => {
		jest.clearAllMocks();
		mockFalconClient = new Proxy({}, {
			get: () => new Proxy({}, {
				get: () => jest.fn().mockResolvedValue({ success: true }),
			}),
		});
	});

	it('should throw an error for unsupported operation', async () => {
		const mockContext: any = {
			getNodeParameter: jest.fn().mockReturnValue('unsupportedOperation'),
		};

		await expect(executeMlExclusions.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createMLExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createMLExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteMLExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteMLExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'exclusionsAggregatesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'exclusionsAggregatesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'exclusionsCreateV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'exclusionsCreateV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'exclusionsDeleteV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'exclusionsDeleteV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'exclusionsGetAllV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'exclusionsGetAllV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'exclusionsGetReportsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'exclusionsGetReportsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'exclusionsGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'exclusionsGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'exclusionsPerformActionV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'exclusionsPerformActionV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'exclusionsSdmfQueryV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'exclusionsSdmfQueryV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'exclusionsSearchV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'exclusionsSearchV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'exclusionsUpdateV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'exclusionsUpdateV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMLExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMLExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryMLExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryMLExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateMLExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateMLExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMlExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
