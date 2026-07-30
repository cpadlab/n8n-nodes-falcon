import type { FalconClient } from 'crowdstrike-falcon';
import { executeContainerImages } from './ContainerImages.execution';

/**
 * Unit test suite for executeContainerImages operations.
 */
describe('executeContainerImages', () => {
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

		await expect(executeContainerImages.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregateImageAssessmentHistory' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateImageAssessmentHistory';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateImageCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateImageCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateImageCountByBaseOS' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateImageCountByBaseOS';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'aggregateImageCountByState' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregateImageCountByState';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedBaseImages' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedBaseImages';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedImageByVulnerabilityCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedImageByVulnerabilityCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedImageDetail' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedImageDetail';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedImageIssuesSummary' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedImageIssuesSummary';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedImageVulnerabilitySummary' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedImageVulnerabilitySummary';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'createBaseImagesEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createBaseImagesEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteBaseImages' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteBaseImages';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCombinedImages' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCombinedImages';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readCombinedImagesExport' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readCombinedImagesExport';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerImages.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
