import type { FalconClient } from 'crowdstrike-falcon';
import { executeZeroTrustAssessment } from './ZeroTrustAssessment.execution';

/**
 * Unit test suite for executeZeroTrustAssessment operations.
 */
describe('executeZeroTrustAssessment', () => {
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

		await expect(executeZeroTrustAssessment.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getAssessmentV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAssessmentV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeZeroTrustAssessment.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAssessmentsByScoreV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAssessmentsByScoreV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeZeroTrustAssessment.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAuditV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAuditV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeZeroTrustAssessment.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
