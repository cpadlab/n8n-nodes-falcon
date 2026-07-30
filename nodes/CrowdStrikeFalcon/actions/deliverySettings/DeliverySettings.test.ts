import type { FalconClient } from 'crowdstrike-falcon';
import { executeDeliverySettings } from './DeliverySettings.execution';

/**
 * Unit test suite for executeDeliverySettings operations.
 */
describe('executeDeliverySettings', () => {
	let mockFalconClient: FalconClient;

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

		await expect(executeDeliverySettings.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getDeliverySettings' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDeliverySettings';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeliverySettings.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postDeliverySettings' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postDeliverySettings';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeliverySettings.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
