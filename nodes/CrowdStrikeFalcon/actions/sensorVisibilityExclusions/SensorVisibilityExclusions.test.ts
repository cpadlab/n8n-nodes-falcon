import { executeSensorVisibilityExclusions } from './SensorVisibilityExclusions.execution';

/**
 * Unit test suite for executeSensorVisibilityExclusions operations.
 */
describe('executeSensorVisibilityExclusions', () => {
	let mockFalconClient: any;

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

		await expect(executeSensorVisibilityExclusions.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createSVExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createSVExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorVisibilityExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteSensorVisibilityExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteSensorVisibilityExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorVisibilityExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorVisibilityExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorVisibilityExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorVisibilityExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'querySensorVisibilityExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'querySensorVisibilityExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorVisibilityExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateSensorVisibilityExclusionsV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateSensorVisibilityExclusionsV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorVisibilityExclusions.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
