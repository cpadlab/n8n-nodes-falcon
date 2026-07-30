import type { FalconClient } from 'crowdstrike-falcon';
import { executeDeviceContent } from './DeviceContent.execution';

/**
 * Unit test suite for executeDeviceContent operations.
 */
describe('executeDeviceContent', () => {
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

		await expect(executeDeviceContent.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'entitiesStatesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesStatesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceContent.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesStatesV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesStatesV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeDeviceContent.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
