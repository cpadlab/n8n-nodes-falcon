import type { FalconClient } from 'crowdstrike-falcon';
import { executeDeviceControlWithBluetooth } from './DeviceControlWithBluetooth.execution';

/**
 * Unit test suite for executeDeviceControlWithBluetooth operations.
 */
describe('executeDeviceControlWithBluetooth', () => {
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

		await expect(executeDeviceControlWithBluetooth.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getDefaultDeviceControlSettings' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDefaultDeviceControlSettings';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlWithBluetooth.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDeviceControlPoliciesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDeviceControlPoliciesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlWithBluetooth.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'patchDeviceControlPoliciesClassesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'patchDeviceControlPoliciesClassesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlWithBluetooth.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'patchDeviceControlPoliciesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'patchDeviceControlPoliciesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlWithBluetooth.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postDeviceControlPoliciesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postDeviceControlPoliciesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlWithBluetooth.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateDefaultDeviceControlSettings' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateDefaultDeviceControlSettings';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceControlWithBluetooth.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
