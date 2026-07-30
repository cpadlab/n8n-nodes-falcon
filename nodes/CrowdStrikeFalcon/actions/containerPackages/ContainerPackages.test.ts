import type { FalconClient } from 'crowdstrike-falcon';
import { executeContainerPackages } from './ContainerPackages.execution';

/**
 * Unit test suite for executeContainerPackages operations.
 */
describe('executeContainerPackages', () => {
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

		await expect(executeContainerPackages.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'readPackagesByFixableVulnCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readPackagesByFixableVulnCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerPackages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readPackagesByImageCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readPackagesByImageCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerPackages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readPackagesByVulnCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readPackagesByVulnCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerPackages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readPackagesCombined' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readPackagesCombined';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerPackages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readPackagesCombinedExport' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readPackagesCombinedExport';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerPackages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readPackagesCombinedV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readPackagesCombinedV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerPackages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readPackagesCountByZeroDay' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readPackagesCountByZeroDay';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerPackages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
