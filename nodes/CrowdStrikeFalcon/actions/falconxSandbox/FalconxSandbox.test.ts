import type { FalconClient } from 'crowdstrike-falcon';
import { executeFalconxSandbox } from './FalconxSandbox.execution';

/**
 * Unit test suite for executeFalconxSandbox operations.
 */
describe('executeFalconxSandbox', () => {
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

		await expect(executeFalconxSandbox.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'deleteReport' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteReport';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteSampleV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteSampleV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getArtifacts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getArtifacts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMemoryDump' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMemoryDump';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMemoryDumpExtractedStrings' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMemoryDumpExtractedStrings';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getMemoryDumpHexDump' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getMemoryDumpHexDump';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getReports' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getReports';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSampleV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSampleV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSubmissions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSubmissions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSummaryReports' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSummaryReports';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queryReports' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queryReports';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'querySampleV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'querySampleV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'querySubmissions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'querySubmissions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'submit' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'submit';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'uploadSampleV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'uploadSampleV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeFalconxSandbox.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
