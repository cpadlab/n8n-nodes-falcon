import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudAwsRegistration } from './CloudAwsRegistration.execution';

/**
 * Unit test suite for executeCloudAwsRegistration operations.
 */
describe('executeCloudAwsRegistration', () => {
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

		await expect(executeCloudAwsRegistration.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'cloudRegistrationAwsCreateAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAwsCreateAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAwsRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAwsDeleteAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAwsDeleteAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAwsRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAwsGetAccounts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAwsGetAccounts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAwsRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAwsQueryAccounts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAwsQueryAccounts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAwsRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAwsTriggerHealthCheck' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAwsTriggerHealthCheck';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAwsRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAwsUpdateAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAwsUpdateAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAwsRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudRegistrationAwsValidateAccounts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationAwsValidateAccounts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudAwsRegistration.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
