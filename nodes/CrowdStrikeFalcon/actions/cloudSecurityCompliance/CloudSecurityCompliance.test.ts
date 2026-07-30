import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudSecurityCompliance } from './CloudSecurityCompliance.execution';

/**
 * Unit test suite for executeCloudSecurityCompliance operations.
 */
describe('executeCloudSecurityCompliance', () => {
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

		await expect(executeCloudSecurityCompliance.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'cloudComplianceFrameworkPostureSummaries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudComplianceFrameworkPostureSummaries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'cloudComplianceRulePostureSummaries' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudComplianceRulePostureSummaries';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityCompliance.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
