import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudSecurityAssets } from './CloudSecurityAssets.execution';

/**
 * Unit test suite for executeCloudSecurityAssets operations.
 */
describe('executeCloudSecurityAssets', () => {
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

		await expect(executeCloudSecurityAssets.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'cloudSecurityAssetsCombinedApplicationFindings' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityAssetsCombinedApplicationFindings';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityAssets.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudSecurityAssetsCombinedComplianceByAccount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityAssetsCombinedComplianceByAccount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityAssets.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudSecurityAssetsEntitiesGet' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityAssetsEntitiesGet';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityAssets.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudSecurityAssetsEntitiesPost' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityAssetsEntitiesPost';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityAssets.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudSecurityAssetsQueries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityAssetsQueries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityAssets.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
