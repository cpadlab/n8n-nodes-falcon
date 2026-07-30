import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudOciRegistration } from './CloudOciRegistration.execution';

/**
 * Unit test suite for executeCloudOciRegistration operations.
 */
describe('executeCloudOciRegistration', () => {
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

		await expect(executeCloudOciRegistration.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'cloudSecurityRegistrationOciCreateAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityRegistrationOciCreateAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudOciRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudSecurityRegistrationOciDeleteAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityRegistrationOciDeleteAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudOciRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudSecurityRegistrationOciDownloadScript' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityRegistrationOciDownloadScript';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudOciRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudSecurityRegistrationOciGetAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityRegistrationOciGetAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudOciRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudSecurityRegistrationOciRotateKey' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityRegistrationOciRotateKey';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudOciRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudSecurityRegistrationOciUpdateAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityRegistrationOciUpdateAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudOciRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudSecurityRegistrationOciValidateTenancy' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityRegistrationOciValidateTenancy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudOciRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
