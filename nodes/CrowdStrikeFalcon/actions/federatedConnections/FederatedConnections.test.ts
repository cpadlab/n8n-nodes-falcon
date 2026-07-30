import type { FalconClient } from 'crowdstrike-falcon';
import { executeFederatedConnections } from './FederatedConnections.execution';

/**
 * Unit test suite for executeFederatedConnections operations.
 */
describe('executeFederatedConnections', () => {
	let mockFalconClient: FalconClient;

	beforeEach(() => {
		jest.clearAllMocks();
		mockFalconClient = new Proxy({}, {
			get: () => new Proxy({}, {
				get: () => jest.fn().mockResolvedValue({ success: true }),
			}),
		}) as any as FalconClient;
	});

	it('should throw an error for unsupported operation', async () => {
		const mockContext: any = {
			getNodeParameter: jest.fn().mockReturnValue('unsupportedOperation'),
		};

		await expect(executeFederatedConnections.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'deleteFederatedConnectionsConfig' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteFederatedConnectionsConfig';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFederatedConnections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'patchFederatedConnectionsConfig' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'patchFederatedConnectionsConfig';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFederatedConnections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postFederatedConnectionsConfig' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postFederatedConnectionsConfig';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFederatedConnections.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
