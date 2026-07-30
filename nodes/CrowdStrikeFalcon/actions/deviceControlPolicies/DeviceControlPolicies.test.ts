import type { FalconClient } from 'crowdstrike-falcon';
import { executeDeviceControlPolicies } from './DeviceControlPolicies.execution';

/**
 * Unit test suite for executeDeviceControlPolicies operations.
 */
describe('executeDeviceControlPolicies', () => {
	let mockFalconClient: FalconClient;

	beforeEach(() => {
		jest.clearAllMocks();
		mockFalconClient = new Proxy({}, {
			get: () => new Proxy({}, {
				get: () => jest.fn().mockResolvedValue({ success: true }),
			}),
		}) as unknown as FalconClient;
	});

	it('should throw an error for unsupported operation', async () => {
		const mockContext: any = {
			getNodeParameter: jest.fn().mockReturnValue('unsupportedOperation'),
		};

		await expect(executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createDeviceControlPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createDeviceControlPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteDeviceControlPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteDeviceControlPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDefaultDeviceControlPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDefaultDeviceControlPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDeviceControlPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDeviceControlPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'performDeviceControlPoliciesAction' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'performDeviceControlPoliciesAction';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedDeviceControlPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedDeviceControlPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryCombinedDeviceControlPolicyMembers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryCombinedDeviceControlPolicyMembers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryDeviceControlPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryDeviceControlPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryDeviceControlPolicyMembers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryDeviceControlPolicyMembers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'setDeviceControlPoliciesPrecedence' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'setDeviceControlPoliciesPrecedence';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateDefaultDeviceControlPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateDefaultDeviceControlPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateDeviceControlPolicies' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateDeviceControlPolicies';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlPolicies.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
