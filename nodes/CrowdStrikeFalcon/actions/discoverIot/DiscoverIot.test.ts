import type { FalconClient } from 'crowdstrike-falcon';
import { executeDiscoverIot } from './DiscoverIot.execution';

/**
 * Unit test suite for executeDiscoverIot operations.
 */
describe('executeDiscoverIot', () => {
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

		await expect(executeDiscoverIot.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getIotHosts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIotHosts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDiscoverIot.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryIotHosts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryIotHosts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDiscoverIot.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryIotHostsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryIotHostsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDiscoverIot.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
