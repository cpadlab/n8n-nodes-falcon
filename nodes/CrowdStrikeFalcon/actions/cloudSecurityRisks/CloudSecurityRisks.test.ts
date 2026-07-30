import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudSecurityRisks } from './CloudSecurityRisks.execution';

/**
 * Unit test suite for executeCloudSecurityRisks operations.
 */
describe('executeCloudSecurityRisks', () => {
	let mockFalconClient: any;

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

		await expect(executeCloudSecurityRisks.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'cloudSecurityTimelineRisksEnriched' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudSecurityTimelineRisksEnriched';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityRisks.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
