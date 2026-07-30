import type { FalconClient } from 'crowdstrike-falcon';
import { executeContainerAlerts } from './ContainerAlerts.execution';

/**
 * Unit test suite for executeContainerAlerts operations.
 */
describe('executeContainerAlerts', () => {
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

		await expect(executeContainerAlerts.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'readContainerAlertsCount' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readContainerAlertsCount';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerAlerts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readContainerAlertsCountBySeverity' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readContainerAlertsCountBySeverity';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerAlerts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'searchAndReadContainerAlerts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'searchAndReadContainerAlerts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeContainerAlerts.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
