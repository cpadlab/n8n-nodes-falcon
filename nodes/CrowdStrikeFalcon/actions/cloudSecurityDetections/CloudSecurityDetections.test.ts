import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudSecurityDetections } from './CloudSecurityDetections.execution';

/**
 * Unit test suite for executeCloudSecurityDetections operations.
 */
describe('executeCloudSecurityDetections', () => {
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

		await expect(executeCloudSecurityDetections.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'cspmEvaluationsCombinedIomByRule' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cspmEvaluationsCombinedIomByRule';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityDetections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cspmEvaluationsIomEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cspmEvaluationsIomEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityDetections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cspmEvaluationsIomEntitiesPost' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cspmEvaluationsIomEntitiesPost';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityDetections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cspmEvaluationsIomQueries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cspmEvaluationsIomQueries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityDetections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
