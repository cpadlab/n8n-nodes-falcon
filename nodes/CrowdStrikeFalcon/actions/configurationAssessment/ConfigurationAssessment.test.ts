import type { FalconClient } from 'crowdstrike-falcon';
import { executeConfigurationAssessment } from './ConfigurationAssessment.execution';

/**
 * Unit test suite for executeConfigurationAssessment operations.
 */
describe('executeConfigurationAssessment', () => {
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

		await expect(executeConfigurationAssessment.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getCombinedAssessmentsQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCombinedAssessmentsQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeConfigurationAssessment.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getRuleDetails' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getRuleDetails';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeConfigurationAssessment.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
