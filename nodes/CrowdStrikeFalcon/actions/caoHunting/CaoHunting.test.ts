import type { FalconClient } from 'crowdstrike-falcon';
import { executeCaoHunting } from './CaoHunting.execution';

/**
 * Unit test suite for executeCaoHunting operations.
 */
describe('executeCaoHunting', () => {
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

		await expect(executeCaoHunting.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateHuntingGuides' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateHuntingGuides';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaoHunting.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateIntelligenceQueries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateIntelligenceQueries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaoHunting.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getArchiveExport' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getArchiveExport';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaoHunting.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getHuntingGuides' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getHuntingGuides';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaoHunting.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntelligenceQueries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntelligenceQueries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaoHunting.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'searchHuntingGuides' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'searchHuntingGuides';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaoHunting.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'searchIntelligenceQueries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'searchIntelligenceQueries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaoHunting.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
