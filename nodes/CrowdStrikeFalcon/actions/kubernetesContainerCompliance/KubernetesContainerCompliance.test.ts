import type { FalconClient } from 'crowdstrike-falcon';
import { executeKubernetesContainerCompliance } from './KubernetesContainerCompliance.execution';

/**
 * Unit test suite for executeKubernetesContainerCompliance operations.
 */
describe('executeKubernetesContainerCompliance', () => {
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

		await expect(executeKubernetesContainerCompliance.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateAssessmentsGroupedByClustersV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateAssessmentsGroupedByClustersV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesContainerCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateAssessmentsGroupedByRulesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateAssessmentsGroupedByRulesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesContainerCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateComplianceByAssetType' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateComplianceByAssetType';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesContainerCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateComplianceByClusterType' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateComplianceByClusterType';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesContainerCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateComplianceByFramework' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateComplianceByFramework';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesContainerCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateFailedRulesByClustersV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateFailedRulesByClustersV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesContainerCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateTopFailedImages' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateTopFailedImages';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesContainerCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedImagesFindings' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedImagesFindings';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesContainerCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedNodesFindings' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedNodesFindings';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesContainerCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRulesMetadataByID' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRulesMetadataByID';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeKubernetesContainerCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
