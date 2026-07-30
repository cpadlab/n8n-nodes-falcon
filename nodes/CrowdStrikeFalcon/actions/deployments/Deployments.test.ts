import type { FalconClient } from 'crowdstrike-falcon';
import { executeDeployments } from './Deployments.execution';

/**
 * Unit test suite for executeDeployments operations.
 */
describe('executeDeployments', () => {
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

		await expect(executeDeployments.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getDeploymentsExternalV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDeploymentsExternalV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeployments.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
