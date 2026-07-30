import type { FalconClient } from 'crowdstrike-falcon';
import { executeSaasSecurity } from './SaasSecurity.execution';

/**
 * Unit test suite for executeSaasSecurity operations.
 */
describe('executeSaasSecurity', () => {
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

		await expect(executeSaasSecurity.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'dismissAffectedEntityV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'dismissAffectedEntityV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'dismissSecurityCheckV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'dismissSecurityCheckV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getActivityMonitorV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getActivityMonitorV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAlertsV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAlertsV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAppInventory' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAppInventory';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAppInventoryUsers' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAppInventoryUsers';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getAssetInventoryV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getAssetInventoryV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getDeviceInventoryV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getDeviceInventoryV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getIntegrationsV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getIntegrationsV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMetricsV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMetricsV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSecurityCheckAffectedV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSecurityCheckAffectedV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSecurityCheckComplianceV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSecurityCheckComplianceV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSecurityChecksV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSecurityChecksV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSupportedSaasV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSupportedSaasV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSystemLogsV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSystemLogsV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSystemUsersV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSystemUsersV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getUserInventoryV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getUserInventoryV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'integrationBuilderEndTransactionV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'integrationBuilderEndTransactionV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'integrationBuilderGetStatusV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'integrationBuilderGetStatusV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'integrationBuilderResetV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'integrationBuilderResetV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'integrationBuilderUploadV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'integrationBuilderUploadV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSaasSecurity.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
