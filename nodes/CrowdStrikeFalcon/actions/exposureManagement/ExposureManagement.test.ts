import type { FalconClient } from 'crowdstrike-falcon';
import { executeExposureManagement } from './ExposureManagement.execution';

/**
 * Unit test suite for executeExposureManagement operations.
 */
describe('executeExposureManagement', () => {
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

		await expect(executeExposureManagement.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateExternalAssets' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateExternalAssets';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeExposureManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'blobDownloadExternalAssets' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'blobDownloadExternalAssets';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeExposureManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'blobPreviewExternalAssets' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'blobPreviewExternalAssets';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeExposureManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedEcosystemSubsidiaries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedEcosystemSubsidiaries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeExposureManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteExternalAssets' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteExternalAssets';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeExposureManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getEcosystemSubsidiaries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getEcosystemSubsidiaries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeExposureManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getExternalAssets' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getExternalAssets';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeExposureManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'patchExternalAssets' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'patchExternalAssets';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeExposureManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postExternalAssetsInventoryV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postExternalAssetsInventoryV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeExposureManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryEcosystemSubsidiaries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryEcosystemSubsidiaries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeExposureManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryExternalAssets' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryExternalAssets';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeExposureManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryExternalAssetsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryExternalAssetsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeExposureManagement.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
