import { executeScanningOrchestrator } from './ScanningOrchestrator.execution';

/**
 * Unit test suite for executeScanningOrchestrator operations.
 */
describe('executeScanningOrchestrator', () => {
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

		await expect(executeScanningOrchestrator.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createSchedules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createSchedules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeScanningOrchestrator.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteSchedules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteSchedules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeScanningOrchestrator.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCombinedSchedules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCombinedSchedules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeScanningOrchestrator.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSchedules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSchedules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeScanningOrchestrator.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getServiceTypes' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getServiceTypes';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeScanningOrchestrator.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'searchSchedules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'searchSchedules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeScanningOrchestrator.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'triggerScanBySchedule' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'triggerScanBySchedule';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeScanningOrchestrator.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateSchedules' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateSchedules';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeScanningOrchestrator.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
