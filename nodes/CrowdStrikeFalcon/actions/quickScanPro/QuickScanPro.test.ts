import type { FalconClient } from 'crowdstrike-falcon';
import { executeQuickScanPro } from './QuickScanPro.execution';

/**
 * Unit test suite for executeQuickScanPro operations.
 */
describe('executeQuickScanPro', () => {
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

		await expect(executeQuickScanPro.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'deleteFile' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteFile';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuickScanPro.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteScanResult' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteScanResult';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuickScanPro.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getScanResult' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getScanResult';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuickScanPro.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'launchScan' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'launchScan';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuickScanPro.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryScanResults' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryScanResults';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuickScanPro.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'uploadFileQuickScanPro' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'uploadFileQuickScanPro';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeQuickScanPro.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
