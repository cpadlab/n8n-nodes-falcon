import { executeSensorUsageApi } from './SensorUsageApi.execution';

/**
 * Unit test suite for executeSensorUsageApi operations.
 */
describe('executeSensorUsageApi', () => {
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

		await expect(executeSensorUsageApi.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'getSensorUsageHourly' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorUsageHourly';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUsageApi.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorUsageWeekly' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorUsageWeekly';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorUsageApi.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
