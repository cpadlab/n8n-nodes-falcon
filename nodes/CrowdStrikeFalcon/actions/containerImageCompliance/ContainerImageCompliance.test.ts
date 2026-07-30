import type { FalconClient } from 'crowdstrike-falcon';
import { executeContainerImageCompliance } from './ContainerImageCompliance.execution';

/**
 * Unit test suite for executeContainerImageCompliance operations.
 */
describe('executeContainerImageCompliance', () => {
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

		await expect(executeContainerImageCompliance.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'extAggregateClusterAssessments' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extAggregateClusterAssessments';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImageCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extAggregateFailedContainersByRulesPath' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extAggregateFailedContainersByRulesPath';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImageCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extAggregateFailedContainersCountBySeverity' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extAggregateFailedContainersCountBySeverity';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImageCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extAggregateFailedImagesByRulesPath' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extAggregateFailedImagesByRulesPath';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImageCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extAggregateFailedImagesCountBySeverity' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extAggregateFailedImagesCountBySeverity';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImageCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extAggregateFailedRulesByClusters' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extAggregateFailedRulesByClusters';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImageCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extAggregateFailedRulesByImages' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extAggregateFailedRulesByImages';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImageCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extAggregateFailedRulesCountBySeverity' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extAggregateFailedRulesCountBySeverity';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImageCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extAggregateImageAssessments' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extAggregateImageAssessments';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImageCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extAggregateRulesAssessments' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extAggregateRulesAssessments';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImageCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extAggregateRulesByStatus' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extAggregateRulesByStatus';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImageCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
