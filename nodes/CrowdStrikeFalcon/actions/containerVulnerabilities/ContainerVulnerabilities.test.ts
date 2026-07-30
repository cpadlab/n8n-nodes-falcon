import type { FalconClient } from 'crowdstrike-falcon';
import { executeContainerVulnerabilities } from './ContainerVulnerabilities.execution';

/**
 * Unit test suite for executeContainerVulnerabilities operations.
 */
describe('executeContainerVulnerabilities', () => {
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

		await expect(executeContainerVulnerabilities.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'readCombinedVulnerabilities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readCombinedVulnerabilities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readCombinedVulnerabilitiesDetails' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readCombinedVulnerabilitiesDetails';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readCombinedVulnerabilitiesInfo' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readCombinedVulnerabilitiesInfo';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readVulnerabilitiesByImageCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readVulnerabilitiesByImageCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readVulnerabilitiesPublicationDate' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readVulnerabilitiesPublicationDate';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readVulnerabilityCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readVulnerabilityCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readVulnerabilityCountByActivelyExploited' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readVulnerabilityCountByActivelyExploited';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readVulnerabilityCountByCPSRating' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readVulnerabilityCountByCPSRating';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readVulnerabilityCountByCVSSScore' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readVulnerabilityCountByCVSSScore';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readVulnerabilityCountBySeverity' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readVulnerabilityCountBySeverity';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerVulnerabilities.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
