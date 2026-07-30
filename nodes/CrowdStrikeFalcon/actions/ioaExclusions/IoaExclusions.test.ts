import type { FalconClient } from 'crowdstrike-falcon';
import { executeIoaExclusions } from './IoaExclusions.execution';

/**
 * Unit test suite for executeIoaExclusions operations.
 */
describe('executeIoaExclusions', () => {
	let mockFalconClient: any;

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

		await expect(executeIoaExclusions.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createIOAExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createIOAExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteIOAExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteIOAExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIOAExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIOAExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryIOAExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryIOAExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'ssIoaExclusionsAggregatesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'ssIoaExclusionsAggregatesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'ssIoaExclusionsCreateV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'ssIoaExclusionsCreateV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'ssIoaExclusionsDeleteV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'ssIoaExclusionsDeleteV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'ssIoaExclusionsGetReportsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'ssIoaExclusionsGetReportsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'ssIoaExclusionsGetV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'ssIoaExclusionsGetV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'ssIoaExclusionsMatchedRuleV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'ssIoaExclusionsMatchedRuleV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'ssIoaExclusionsNewRulesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'ssIoaExclusionsNewRulesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'ssIoaExclusionsSearchV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'ssIoaExclusionsSearchV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'ssIoaExclusionsUpdateV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'ssIoaExclusionsUpdateV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateIOAExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateIOAExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeIoaExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
