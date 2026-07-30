import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudSnapshots } from './CloudSnapshots.execution';

/**
 * Unit test suite for executeCloudSnapshots operations.
 */
describe('executeCloudSnapshots', () => {
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

		await expect(executeCloudSnapshots.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createDeploymentEntity' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createDeploymentEntity';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSnapshots.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCredentialsMixin0Mixin60' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCredentialsMixin0Mixin60';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSnapshots.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getScanReport' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getScanReport';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSnapshots.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readDeploymentsCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readDeploymentsCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSnapshots.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readDeploymentsEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readDeploymentsEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSnapshots.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'register' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'register';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSnapshots.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
