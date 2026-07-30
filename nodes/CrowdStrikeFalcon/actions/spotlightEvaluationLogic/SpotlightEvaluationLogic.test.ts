import { executeSpotlightEvaluationLogic } from './SpotlightEvaluationLogic.execution';

/**
 * Unit test suite for executeSpotlightEvaluationLogic operations.
 */
describe('executeSpotlightEvaluationLogic', () => {
	let mockFalconClient: any;

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

		await expect(executeSpotlightEvaluationLogic.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'combinedQueryEvaluationLogic' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedQueryEvaluationLogic';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSpotlightEvaluationLogic.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getEvaluationLogic' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getEvaluationLogic';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSpotlightEvaluationLogic.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryEvaluationLogic' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryEvaluationLogic';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSpotlightEvaluationLogic.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
