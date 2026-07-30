import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudGoogleCloudRegistration } from './CloudGoogleCloudRegistration.execution';

/**
 * Unit test suite for executeCloudGoogleCloudRegistration operations.
 */
describe('executeCloudGoogleCloudRegistration', () => {
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

		await expect(executeCloudGoogleCloudRegistration.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'cloudRegistrationGcpCreateRegistration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationGcpCreateRegistration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudGoogleCloudRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationGcpDeleteRegistration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationGcpDeleteRegistration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudGoogleCloudRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationGcpGetEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationGcpGetEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudGoogleCloudRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationGcpGetRegistration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationGcpGetRegistration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudGoogleCloudRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationGcpPostTerraformScript' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationGcpPostTerraformScript';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudGoogleCloudRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationGcpPutRegistration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationGcpPutRegistration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudGoogleCloudRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationGcpTriggerHealthCheck' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationGcpTriggerHealthCheck';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudGoogleCloudRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationGcpUpdateRegistration' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationGcpUpdateRegistration';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudGoogleCloudRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
