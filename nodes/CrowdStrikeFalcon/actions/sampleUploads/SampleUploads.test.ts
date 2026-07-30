import type { FalconClient } from 'crowdstrike-falcon';
import { executeSampleUploads } from './SampleUploads.execution';

/**
 * Unit test suite for executeSampleUploads operations.
 */
describe('executeSampleUploads', () => {
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

		await expect(executeSampleUploads.call(mockContext, 0, mockFalconClient)).rejects.toThrow(
			'Operation unsupportedOperation is not supported',
		);
	});

		it("should execute 'archiveDeleteV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'archiveDeleteV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSampleUploads.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'archiveGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'archiveGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSampleUploads.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'archiveListV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'archiveListV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSampleUploads.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'archiveUploadV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'archiveUploadV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSampleUploads.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'archiveUploadV2' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'archiveUploadV2';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSampleUploads.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'deleteSampleV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'deleteSampleV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSampleUploads.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extractionCreateV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extractionCreateV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSampleUploads.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extractionGetV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extractionGetV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSampleUploads.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'extractionListV1' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'extractionListV1';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSampleUploads.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'getSampleV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'getSampleV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSampleUploads.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});

		it("should execute 'uploadSampleV3' operation successfully", async () => {
			const mockContext: any = {
				getNodeParameter: jest.fn((paramName: string, index: number, fallback?: any) => {
					if (paramName === 'operation') return 'uploadSampleV3';
					return fallback !== undefined ? fallback : '';
				}),
			};

			const result = await executeSampleUploads.call(mockContext, 0, mockFalconClient);
			expect(result).toEqual({ success: true });
		});
});
