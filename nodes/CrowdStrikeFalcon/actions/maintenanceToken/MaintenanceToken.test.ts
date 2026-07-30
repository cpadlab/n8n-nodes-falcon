import type { FalconClient } from 'crowdstrike-falcon';
import { executeMaintenanceToken } from './MaintenanceToken.execution';

/**
 * Unit test suite for executeMaintenanceToken operations.
 */
describe('executeMaintenanceToken', () => {
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

		await expect(executeMaintenanceToken.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'incrementUninstallToken' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'incrementUninstallToken';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeMaintenanceToken.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
