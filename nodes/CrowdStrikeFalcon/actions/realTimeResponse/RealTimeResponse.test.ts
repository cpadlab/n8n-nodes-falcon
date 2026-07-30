import { executeRealTimeResponse } from './RealTimeResponse.execution';

/**
 * Unit test suite for executeRealTimeResponse operations.
 */
describe('executeRealTimeResponse', () => {
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

		await expect(executeRealTimeResponse.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'batchActiveResponderCmd' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'batchActiveResponderCmd';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'batchCmd' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'batchCmd';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'batchGetCmd' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'batchGetCmd';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'batchGetCmdStatus' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'batchGetCmdStatus';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'batchInitSessions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'batchInitSessions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'batchRefreshSessions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'batchRefreshSessions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRAggregateSessions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRAggregateSessions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRCheckActiveResponderCommandStatus' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRCheckActiveResponderCommandStatus';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRCheckCommandStatus' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRCheckCommandStatus';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRDeleteFile' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRDeleteFile';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRDeleteFileV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRDeleteFileV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRDeleteQueuedSession' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRDeleteQueuedSession';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRDeleteSession' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRDeleteSession';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRExecuteActiveResponderCommand' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRExecuteActiveResponderCommand';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRExecuteCommand' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRExecuteCommand';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRGetExtractedFileContents' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRGetExtractedFileContents';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRInitSession' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRInitSession';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRListAllSessions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRListAllSessions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRListFiles' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRListFiles';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRListFilesV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRListFilesV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRListQueuedSessions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRListQueuedSessions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRListSessions' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRListSessions';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'rTRPulseSession' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'rTRPulseSession';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeRealTimeResponse.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
