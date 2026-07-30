import type { FalconClient } from 'crowdstrike-falcon';
import { executeCloudSecurityRegistrationCombined } from './CloudSecurityRegistrationCombined.execution';

/**
 * Unit test suite for executeCloudSecurityRegistrationCombined operations.
 */
describe('executeCloudSecurityRegistrationCombined', () => {
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

		await expect(executeCloudSecurityRegistrationCombined.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'cloudRegistrationCrossProviderGetAccountAggregates' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'cloudRegistrationCrossProviderGetAccountAggregates';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCloudSecurityRegistrationCombined.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
