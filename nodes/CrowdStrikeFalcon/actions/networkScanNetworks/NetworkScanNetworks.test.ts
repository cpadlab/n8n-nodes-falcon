import type { FalconClient } from 'crowdstrike-falcon';
import { executeNetworkScanNetworks } from './NetworkScanNetworks.execution';

/**
 * Unit test suite for executeNetworkScanNetworks operations.
 */
describe('executeNetworkScanNetworks', () => {
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

		await expect(executeNetworkScanNetworks.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateNetworks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateNetworks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanNetworks.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createNetworks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createNetworks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanNetworks.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteNetworks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteNetworks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanNetworks.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getNetworks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getNetworks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanNetworks.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryNetworks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryNetworks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanNetworks.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateNetworks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateNetworks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanNetworks.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
