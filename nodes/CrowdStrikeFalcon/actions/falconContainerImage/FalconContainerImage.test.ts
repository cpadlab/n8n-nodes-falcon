import type { FalconClient } from 'crowdstrike-falcon';
import { executeFalconContainerImage } from './FalconContainerImage.execution';

/**
 * Unit test suite for executeFalconContainerImage operations.
 */
describe('executeFalconContainerImage', () => {
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

		await expect(executeFalconContainerImage.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'createRegistryEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'createRegistryEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteRegistryEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteRegistryEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'downloadExportFile' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'downloadExportFile';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getReportByReference' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getReportByReference';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getReportByScanID' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getReportByScanID';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'headImageScanInventory' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'headImageScanInventory';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'launchExportJob' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'launchExportJob';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'policyChecks' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'policyChecks';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'postImageScanInventory' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'postImageScanInventory';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryExportJobs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryExportJobs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readExportJobs' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readExportJobs';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readRegistryEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readRegistryEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'readRegistryEntitiesByUUID' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'readRegistryEntitiesByUUID';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'updateRegistryEntities' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'updateRegistryEntities';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconContainerImage.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
