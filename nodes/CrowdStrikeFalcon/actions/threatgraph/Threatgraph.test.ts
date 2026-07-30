import type { FalconClient } from 'crowdstrike-falcon';
import { executeThreatgraph } from './Threatgraph.execution';

/**
 * Unit test suite for executeThreatgraph operations.
 */
describe('executeThreatgraph', () => {
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

		await expect(executeThreatgraph.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'combinedEdgesGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedEdgesGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeThreatgraph.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedRanOnGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedRanOnGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeThreatgraph.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedSummaryGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedSummaryGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeThreatgraph.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesVerticesGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesVerticesGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeThreatgraph.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesVerticesGetv2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesVerticesGetv2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeThreatgraph.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesEdgetypesGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesEdgetypesGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeThreatgraph.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
