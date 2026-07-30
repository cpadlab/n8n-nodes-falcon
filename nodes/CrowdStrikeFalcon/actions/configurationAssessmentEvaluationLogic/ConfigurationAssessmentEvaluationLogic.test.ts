import type { FalconClient } from 'crowdstrike-falcon';
import { executeConfigurationAssessmentEvaluationLogic } from './ConfigurationAssessmentEvaluationLogic.execution';

/**
 * Unit test suite for executeConfigurationAssessmentEvaluationLogic operations.
 */
describe('executeConfigurationAssessmentEvaluationLogic', () => {
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

		await expect(executeConfigurationAssessmentEvaluationLogic.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getEvaluationLogicMixin0' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getEvaluationLogicMixin0';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeConfigurationAssessmentEvaluationLogic.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
