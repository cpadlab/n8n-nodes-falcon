import type { FalconClient } from 'crowdstrike-falcon';
import { executeNetworkScanScans } from './NetworkScanScans.execution';

/**
 * Unit test suite for executeNetworkScanScans operations.
 */
describe('executeNetworkScanScans', () => {
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

		await expect(executeNetworkScanScans.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateScansMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateScansMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScans.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createScans' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createScans';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScans.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteScans' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteScans';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScans.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getScans' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getScans';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScans.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryScansMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryScansMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScans.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateScans' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateScans';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanScans.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
