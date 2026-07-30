import type { FalconClient } from 'crowdstrike-falcon';
import { executeHosts } from './Hosts.execution';

/**
 * Unit test suite for executeHosts operations.
 */
describe('executeHosts', () => {
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

		await expect(executeHosts.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'combinedDevicesByFilter' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedDevicesByFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedHiddenDevicesByFilter' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedHiddenDevicesByFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'devicesActionsDeleteV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'devicesActionsDeleteV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesPerformAction' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesPerformAction';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDeviceDetailsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDeviceDetailsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getOnlineStateV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getOnlineStateV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'performActionV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'performActionV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postDeviceDetailsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postDeviceDetailsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryDeviceLoginHistory' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryDeviceLoginHistory';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryDeviceLoginHistoryV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryDeviceLoginHistoryV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryDevicesByFilter' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryDevicesByFilter';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryDevicesByFilterScroll' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryDevicesByFilterScroll';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryGetNetworkAddressHistoryV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryGetNetworkAddressHistoryV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryHiddenDevices' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryHiddenDevices';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateDeviceTags' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateDeviceTags';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeHosts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
