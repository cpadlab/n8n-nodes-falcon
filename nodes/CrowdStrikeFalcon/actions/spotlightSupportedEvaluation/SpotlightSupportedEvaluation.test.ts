import { executeSpotlightSupportedEvaluation } from './SpotlightSupportedEvaluation.execution';

/**
 * Unit test suite for executeSpotlightSupportedEvaluation operations.
 */
describe('executeSpotlightSupportedEvaluation', () => {
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

		await expect(executeSpotlightSupportedEvaluation.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'combinedSupportedEvaluationExt' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedSupportedEvaluationExt';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSpotlightSupportedEvaluation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
