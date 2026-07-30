import type { FalconClient } from 'crowdstrike-falcon';
import { executeApiIntegrations } from './ApiIntegrations.execution';

/**
 * Unit test suite for executeApiIntegrations operations.
 */
describe('executeApiIntegrations', () => {
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

		await expect(executeApiIntegrations.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'executeCommand' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeCommand';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeApiIntegrations.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'executeCommandProxy' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'executeCommandProxy';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeApiIntegrations.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCombinedPluginConfigs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCombinedPluginConfigs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeApiIntegrations.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
