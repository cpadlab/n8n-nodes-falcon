import type { FalconClient } from 'crowdstrike-falcon';
import { executeCaseFiles } from './CaseFiles.execution';

/**
 * Unit test suite for executeCaseFiles operations.
 */
describe('executeCaseFiles', () => {
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

		await expect(executeCaseFiles.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'aggregatesFileDetailsPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'aggregatesFileDetailsPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'combinedFileDetailsGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'combinedFileDetailsGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesFileDetailsGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesFileDetailsGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesFileDetailsPatchV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesFileDetailsPatchV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesFilesBulkDownloadPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesFilesBulkDownloadPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesFilesDeleteV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesFilesDeleteV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesFilesDownloadGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesFilesDownloadGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesFilesDownloadPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesFilesDownloadPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesFilesUploadPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesFilesUploadPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesGetRtrFileMetadataPostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesGetRtrFileMetadataPostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRetrieveRtrFilePostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRetrieveRtrFilePostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'entitiesRetrieveRtrRecentFilePostV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'entitiesRetrieveRtrRecentFilePostV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'queriesFileDetailsGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'queriesFileDetailsGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeCaseFiles.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
