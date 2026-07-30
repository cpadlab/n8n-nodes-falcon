import { executeRealTimeResponseAdmin } from './RealTimeResponseAdmin.execution';

/**
 * Unit test suite for executeRealTimeResponseAdmin operations.
 */
describe('executeRealTimeResponseAdmin', () => {
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

		await expect(executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'batchAdminCmd' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'batchAdminCmd';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRCheckAdminCommandStatus' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRCheckAdminCommandStatus';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRCreatePutFiles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRCreatePutFiles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRCreatePutFilesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRCreatePutFilesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRCreateScripts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRCreateScripts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRCreateScriptsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRCreateScriptsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRDeletePutFiles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRDeletePutFiles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRDeleteScripts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRDeleteScripts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRExecuteAdminCommand' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRExecuteAdminCommand';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRGetFalconScripts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRGetFalconScripts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRGetPutFileContents' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRGetPutFileContents';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRGetPutFiles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRGetPutFiles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRGetPutFilesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRGetPutFilesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRGetScripts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRGetScripts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRGetScriptsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRGetScriptsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRListFalconScripts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRListFalconScripts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRListPutFiles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRListPutFiles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRListScripts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRListScripts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRUpdateScripts' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRUpdateScripts';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRUpdateScriptsV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRUpdateScriptsV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponseAdmin.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
