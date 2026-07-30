import type { FalconClient } from 'crowdstrike-falcon';
import { executeNetworkScanZones } from './NetworkScanZones.execution';

/**
 * Unit test suite for executeNetworkScanZones operations.
 */
describe('executeNetworkScanZones', () => {
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

		await expect(executeNetworkScanZones.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateZones' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateZones';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanZones.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedZones' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedZones';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanZones.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createZones' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createZones';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanZones.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteZones' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteZones';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanZones.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getZones' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getZones';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanZones.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryZones' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryZones';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanZones.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateZones' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateZones';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanZones.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
