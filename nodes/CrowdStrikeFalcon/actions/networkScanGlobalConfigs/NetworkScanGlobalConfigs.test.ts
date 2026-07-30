import type { FalconClient } from 'crowdstrike-falcon';
import { executeNetworkScanGlobalConfigs } from './NetworkScanGlobalConfigs.execution';

/**
 * Unit test suite for executeNetworkScanGlobalConfigs operations.
 */
describe('executeNetworkScanGlobalConfigs', () => {
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

		await expect(executeNetworkScanGlobalConfigs.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getGlobalConfigs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getGlobalConfigs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanGlobalConfigs.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateGlobalConfigs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateGlobalConfigs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeNetworkScanGlobalConfigs.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
