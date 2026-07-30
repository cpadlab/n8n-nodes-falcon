import type { FalconClient } from 'crowdstrike-falcon';
import { executeAgentInvocation } from './AgentInvocation.execution';

/**
 * Unit test suite for executeAgentInvocation operations.
 */
describe('executeAgentInvocation', () => {
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

		await expect(executeAgentInvocation.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getAgentInvocationV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAgentInvocationV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAgentInvocation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'invokePublishedAgentExternalV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'invokePublishedAgentExternalV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeAgentInvocation.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
