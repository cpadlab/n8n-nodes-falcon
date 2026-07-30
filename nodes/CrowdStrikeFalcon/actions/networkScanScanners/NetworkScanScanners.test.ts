import type { FalconClient } from 'crowdstrike-falcon';
import { executeNetworkScanScanners } from './NetworkScanScanners.execution';

/**
 * Unit test suite for executeNetworkScanScanners operations.
 */
describe('executeNetworkScanScanners', () => {
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

		await expect(executeNetworkScanScanners.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateScanners' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateScanners';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanners.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getScanners' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getScanners';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanners.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryScanners' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryScanners';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanners.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateScanners' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateScanners';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScanners.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
