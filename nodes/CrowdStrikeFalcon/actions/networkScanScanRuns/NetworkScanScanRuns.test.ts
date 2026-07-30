import type { FalconClient } from 'crowdstrike-falcon';
import { executeNetworkScanScanRuns } from './NetworkScanScanRuns.execution';

/**
 * Unit test suite for executeNetworkScanScanRuns operations.
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

		it("should execute 'aggregateScanRuns' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateScanRuns';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createScanRuns' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createScanRuns';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getScanRuns' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getScanRuns';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryScanRuns' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryScanRuns';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateScanRuns' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateScanRuns';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanRuns.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
