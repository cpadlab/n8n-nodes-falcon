import { executeSensorDownload } from './SensorDownload.execution';

/**
 * Unit test suite for executeSensorDownload operations.
 */
describe('executeSensorDownload', () => {
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

		await expect(executeSensorDownload.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'downloadSensorInstallerById' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'downloadSensorInstallerById';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'downloadSensorInstallerByIdV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'downloadSensorInstallerByIdV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'downloadSensorInstallerByIdV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'downloadSensorInstallerByIdV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCombinedSensorInstallersByQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCombinedSensorInstallersByQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCombinedSensorInstallersByQueryV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCombinedSensorInstallersByQueryV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getCombinedSensorInstallersByQueryV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getCombinedSensorInstallersByQueryV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorInstallersByQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorInstallersByQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorInstallersByQueryV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorInstallersByQueryV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorInstallersByQueryV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorInstallersByQueryV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorInstallersCCIDByQuery' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorInstallersCCIDByQuery';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorInstallersEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorInstallersEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorInstallersEntitiesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorInstallersEntitiesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSensorInstallersEntitiesV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSensorInstallersEntitiesV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSensorDownload.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
